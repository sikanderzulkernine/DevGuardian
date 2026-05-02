import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/security/rateLimiter';
import { contactSchema } from '@/lib/validators/contactSchema';
import { sendNotification, sendConfirmation } from '@/lib/email/resend';
import { logSecurityEvent } from '@/utils/logging';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
const MAX_BODY_BYTES = 32 * 1024;

type TurnstileVerifyResponse = {
    success: boolean;
    'error-codes'?: string[];
    challenge_ts?: string;
    hostname?: string;
};

export async function POST(req: NextRequest) {
    const contentLength = Number(req.headers.get('content-length') || 0);
    if (contentLength > MAX_BODY_BYTES) {
        return NextResponse.json(
            { error: 'Request body is too large.' },
            { status: 413 }
        );
    }

    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip =
        req.headers.get('x-real-ip') ||
        (forwardedFor ? forwardedFor.split(',')[0].trim() : null) ||
        'unknown';

    // 1. Rate Limit
    const { allowed } = await checkRateLimit(ip);
    if (!allowed) {
        logSecurityEvent('rate_limit_blocked', { count: 'max' });
        return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            { status: 429 }
        );
    }

    try {
        let body: unknown;
        let rawBody: string;
        try {
            rawBody = await req.text();
        } catch {
            return NextResponse.json(
                { error: 'Invalid request body.' },
                { status: 400 }
            );
        }

        if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
            return NextResponse.json(
                { error: 'Request body is too large.' },
                { status: 413 }
            );
        }

        try {
            body = JSON.parse(rawBody);
        } catch {
            return NextResponse.json(
                { error: 'Invalid JSON payload.' },
                { status: 400 }
            );
        }

        const validation = contactSchema.safeParse(body);
        if (!validation.success) {
            logSecurityEvent('validation_failed', { errors: validation.error.flatten() });
            return NextResponse.json(
                { error: 'Invalid form data' },
                { status: 400 }
            );
        }

        const data = validation.data;

        if (data.hp_field) {
            logSecurityEvent('honeypot_triggered', {});
            return NextResponse.json({ success: true });
        }

        const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
        if (!turnstileSecret) {
            logSecurityEvent('turnstile_missing_secret', {});
            return NextResponse.json(
                { error: 'Captcha verification is not configured.' },
                { status: 503 }
            );
        }

        const turnstileBody = new URLSearchParams({
            secret: turnstileSecret,
            response: data.token,
        });

        if (ip !== 'unknown') {
            turnstileBody.set('remoteip', ip);
        }

        const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: turnstileBody,
            cache: 'no-store',
        });

        if (!turnstileRes.ok) {
            logSecurityEvent('turnstile_request_failed', { status: turnstileRes.status });
            return NextResponse.json(
                { error: 'Captcha verification failed. Please try again.' },
                { status: 400 }
            );
        }

        const turnstileData = (await turnstileRes.json()) as TurnstileVerifyResponse;
        if (turnstileData.success !== true) {
            logSecurityEvent('turnstile_verification_failed', { codes: turnstileData['error-codes'] });
            return NextResponse.json(
                { error: 'Captcha verification failed. Please try again.' },
                { status: 400 }
            );
        }

        const emailData = { ...data, name: data.fullName };
        await Promise.all([
            sendNotification(emailData),
            sendConfirmation(emailData)
        ]);

        logSecurityEvent('message_sent', {});

        return NextResponse.json({ success: true });

    } catch (error) {
        logSecurityEvent('internal_server_error', { error: String(error) });
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
