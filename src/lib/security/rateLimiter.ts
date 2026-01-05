import fs from 'fs';
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
const FILE_STORE_PATH = process.env.RATE_FILE_PATH?.trim();

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
    return path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
}

export async function checkRateLimit(ip: string): Promise<{ allowed: boolean; remaining: number }> {
    const now = Date.now();

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
