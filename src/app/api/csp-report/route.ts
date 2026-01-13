import { NextResponse } from 'next/server';

function sanitizeUri(value: unknown) {
    if (typeof value !== 'string') {
        return undefined;
    }

    if (value === 'inline' || value === 'eval') {
        return value;
    }

    try {
        const url = new URL(value);
        return `${url.origin}${url.pathname}`;
    } catch (error) {
        return value.slice(0, 200);
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const report = body?.['csp-report'] ?? body?.report ?? body;

        const safeReport = {
            blockedUri: sanitizeUri(report?.['blocked-uri']),
            effectiveDirective: report?.['effective-directive'] ?? report?.['violated-directive'],
            documentUri: sanitizeUri(report?.['document-uri']),
            referrer: sanitizeUri(report?.referrer),
            disposition: report?.disposition,
            statusCode: report?.['status-code'],
        };

        console.info('csp_report', safeReport);
    } catch (error) {
        // Ignore malformed reports to keep response fast and safe.
    }

    return new NextResponse(null, { status: 204 });
}
