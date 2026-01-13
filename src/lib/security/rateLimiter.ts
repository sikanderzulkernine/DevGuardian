import fs from 'fs';
import os from 'os';
import path from 'path';

// We will use a simple Map with periodic cleanup to avoid memory leaks.

interface RateLimitEntry {
    tokens: number;
    lastRefill: number;
}

// Configuration
const DEFAULT_MAX_TOKENS = 5;
const DEFAULT_WINDOW_MS = 3600000;
const MAX_TOKENS = Math.max(Number.parseInt(process.env.RATE_LIMIT_MAX || '', 10) || DEFAULT_MAX_TOKENS, 1); // Max burst
const WINDOW_MS = Number.parseInt(process.env.RATE_LIMIT_WINDOW_MS || '', 10) || DEFAULT_WINDOW_MS;
const REFILL_RATE_MS = WINDOW_MS / MAX_TOKENS; // Refill 1 token every (window / max tokens)
const CLEANUP_INTERVAL_MS = WINDOW_MS;
const IS_NETLIFY = process.env.NETLIFY === 'true';
const DEFAULT_FILE_STORE_PATH = IS_NETLIFY
    ? path.join(os.tmpdir(), 'contact-rate-limit.json')
    : undefined;
const FILE_STORE_PATH = process.env.RATE_FILE_PATH?.trim() || DEFAULT_FILE_STORE_PATH;
const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL?.trim();
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
const RATE_LIMIT_REDIS_PREFIX = process.env.RATE_LIMIT_REDIS_PREFIX?.trim() || 'rate_limit';
const REDIS_TTL_SECONDS = Math.max(1, Math.ceil(WINDOW_MS / 1000) * 2);
const UPSTASH_TOKEN_BUCKET_SCRIPT = [
    "local key = KEYS[1]",
    "local now = tonumber(ARGV[1])",
    "local maxTokens = tonumber(ARGV[2])",
    "local refillRateMs = tonumber(ARGV[3])",
    "local ttl = tonumber(ARGV[4])",
    "if not refillRateMs or refillRateMs <= 0 then refillRateMs = 1 end",
    "local data = redis.call('GET', key)",
    "local tokens = maxTokens",
    "local lastRefill = now",
    "if data then",
    "  local ok, decoded = pcall(cjson.decode, data)",
    "  if ok and decoded then",
    "    local decodedTokens = tonumber(decoded['tokens'])",
    "    local decodedLast = tonumber(decoded['lastRefill'])",
    "    if decodedTokens then tokens = decodedTokens end",
    "    if decodedLast then lastRefill = decodedLast end",
    "  end",
    "end",
    "local timePassed = now - lastRefill",
    "if timePassed < 0 then timePassed = 0 end",
    "local tokensToAdd = math.floor(timePassed / refillRateMs)",
    "if tokensToAdd > 0 then",
    "  tokens = math.min(maxTokens, tokens + tokensToAdd)",
    "  lastRefill = now",
    "end",
    "local allowed = 0",
    "if tokens >= 1 then",
    "  tokens = tokens - 1",
    "  allowed = 1",
    "end",
    "local newData = cjson.encode({tokens=tokens,lastRefill=lastRefill})",
    "redis.call('SET', key, newData, 'EX', ttl)",
    "return {allowed, tokens}",
].join(";");

// In-Memory Store (Single Instance in Serverless/Node)
const store = new Map<string, RateLimitEntry>();

// Periodic Cleanup (Self-healing memory)
setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of store.entries()) {
        if (now - entry.lastRefill > CLEANUP_INTERVAL_MS) {
            store.delete(ip);
        }
    }
}, CLEANUP_INTERVAL_MS); // Run every hour

function applyTokenBucket(entry: RateLimitEntry, now: number) {
    const timePassed = now - entry.lastRefill;
    const tokensToAdd = Math.floor(timePassed / REFILL_RATE_MS);

    if (tokensToAdd > 0) {
        entry.tokens = Math.min(MAX_TOKENS, entry.tokens + tokensToAdd);
        entry.lastRefill = now;
    }

    if (entry.tokens >= 1) {
        entry.tokens -= 1;
        return { allowed: true, remaining: entry.tokens, entry };
    }

    return { allowed: false, remaining: 0, entry };
}

function resolveFilePath(filePath: string) {
    if (path.isAbsolute(filePath)) {
        return filePath;
    }
    const baseDir = IS_NETLIFY ? os.tmpdir() : process.cwd();
    return path.join(baseDir, filePath);
}

async function upstashCommand<T>(command: string, ...args: Array<string | number>) {
    if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
        return null;
    }

    const url = `${UPSTASH_REDIS_REST_URL.replace(/\/$/, '')}/${[
        command,
        ...args,
    ]
        .map((arg) => encodeURIComponent(String(arg)))
        .join('/')}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
        },
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error(`Upstash request failed: ${response.status}`);
    }

    const data = (await response.json()) as { result?: T };
    return data?.result ?? null;
}

async function checkUpstashRateLimit(key: string, now: number) {
    const result = await upstashCommand<Array<number | string>>(
        'eval',
        UPSTASH_TOKEN_BUCKET_SCRIPT,
        1,
        key,
        now,
        MAX_TOKENS,
        REFILL_RATE_MS,
        REDIS_TTL_SECONDS
    );

    if (!Array.isArray(result) || result.length < 2) {
        return null;
    }

    const allowed = Number(result[0]) === 1;
    const remaining = Math.max(0, Number(result[1]) || 0);
    return { allowed, remaining };
}

export async function checkRateLimit(ip: string): Promise<{ allowed: boolean; remaining: number }> {
    const now = Date.now();

    if (UPSTASH_REDIS_REST_URL && UPSTASH_REDIS_REST_TOKEN) {
        try {
            const key = `${RATE_LIMIT_REDIS_PREFIX}:${ip}`;
            const result = await checkUpstashRateLimit(key, now);
            if (result) {
                return result;
            }
        } catch (error) {
            // Fall back to file or memory store on Upstash errors
        }
    }

    if (FILE_STORE_PATH) {
        const filePath = resolveFilePath(FILE_STORE_PATH);
        try {
            let data: Record<string, RateLimitEntry> = {};
            try {
                const raw = fs.readFileSync(filePath, 'utf8');
                data = JSON.parse(raw) || {};
            } catch (readError) {
                data = {};
            }

            for (const [storedIp, entry] of Object.entries(data)) {
                if (now - entry.lastRefill > CLEANUP_INTERVAL_MS) {
                    delete data[storedIp];
                }
            }

            const entry = data[ip] || { tokens: MAX_TOKENS, lastRefill: now };
            const result = applyTokenBucket(entry, now);
            data[ip] = result.entry;

            fs.mkdirSync(path.dirname(filePath), { recursive: true });
            fs.writeFileSync(filePath, JSON.stringify(data));

            return { allowed: result.allowed, remaining: result.remaining };
        } catch (error) {
            // Fall back to memory store if file access fails
        }
    }

    let entry = store.get(ip);
    if (!entry) {
        entry = { tokens: MAX_TOKENS, lastRefill: now };
        store.set(ip, entry);
    }

    const result = applyTokenBucket(entry, now);
    store.set(ip, result.entry);
    return { allowed: result.allowed, remaining: result.remaining };
}
