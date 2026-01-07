import fs from 'fs';
import path from 'path';
import os from 'os';

const IS_NETLIFY = process.env.NETLIFY === 'true';
const DEFAULT_LOG_PATH = path.join(os.tmpdir(), 'contact-security.log');

function resolveFilePath(filePath: string) {
    if (path.isAbsolute(filePath)) {
        return filePath;
    }
    const baseDir = IS_NETLIFY ? os.tmpdir() : process.cwd();
    return path.join(baseDir, filePath);
}

const LOG_PATH = resolveFilePath(process.env.LOG_PATH || DEFAULT_LOG_PATH);

export function logSecurityEvent(event: string, meta: Record<string, any> = {}) {
    try {
        const timestamp = new Date().toISOString();
        // Ensure absolutely NO PII is passed in meta. 
        // We strictly filter known PII keys just in case, but caller should be careful.
        const safeMeta = Object.fromEntries(
            Object.entries(meta).filter(([key]) =>
                !['email', 'name', 'message', 'phone', 'ip'].includes(key.toLowerCase())
            )
        );

        const logEntry = JSON.stringify({
            ts: timestamp,
            event,
            ...safeMeta
        }) + '\n';

        // Append to file (create if not exists)
        // Synchronous append is used for simplicity in this context to ensure write before lambda potentially freezes,
        // though async is better for high throughput. For a contact form, sync is negligible.
        let wroteToFile = false;
        try {
            fs.appendFileSync(LOG_PATH, logEntry);
            wroteToFile = true;
        } catch (err) {
            // Fallback: if configured path fails, try local temp
            if (LOG_PATH !== DEFAULT_LOG_PATH) {
                try {
                    fs.appendFileSync(DEFAULT_LOG_PATH, logEntry);
                    wroteToFile = true;
                } catch (fallbackError) {
                    // Ignore and fall back to console
                }
            }
        }

        if (!wroteToFile) {
            console.info('security_event', logEntry.trim());
        }
    } catch (error) {
        // Fail silently - logging should not break the app
        console.error('Logging failed:', error);
    }
}
