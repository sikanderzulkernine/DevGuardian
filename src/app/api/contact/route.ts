import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/security/rateLimiter';
import { contactSchema } from '@/lib/validators/contactSchema';
import { sendNotification, sendConfirmation } from '@/lib/email/resend';
import { logSecurityEvent } from '@/utils/logging';

export const dynamic = 'force-dynamic'; // Ensure no caching

export async function POST(req: NextRequest) {
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip =
        req.headers.get('x-nf-client-connection-ip') ||
        req.headers.get('cf-connecting-ip') ||
        req.headers.get('x-real-ip') ||
        (forwardedFor ? forwardedFor.split(',')[0].trim() : null) ||
        'unknown';

    // 1. Rate Limit
    const { allowed, remaining } = await checkRateLimit(ip);
    if (!allowed) {
        logSecurityEvent('rate_limit_blocked', { count: 'max' });
        return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            { status: 429 }
        );
    }

    try {
        const body = await req.json();

        // 2. Zod Validation (includes Timestamp check)
        const validation = contactSchema.safeParse(body);
        if (!validation.success) {
            logSecurityEvent('validation_failed', { errors: validation.error.flatten() });
            return NextResponse.json(
                { error: 'Invalid form data', details: validation.error.flatten() },
                { status: 400 }
            );
        }

        const data = validation.data;

        // 3. Honeypot Check (Silent Failure)
        if (data.hp_field) {
            logSecurityEvent('honeypot_triggered', {});
            // Return success to confuse the bot
            return NextResponse.json({ success: true });
        }

        // 4. Turnstile Verification (Server-Side)
        const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: new URLSearchParams({
                secret: process.env.TURNSTILE_SECRET_KEY || '',
                response: data.token,
                remoteip: ip, // Optional but good for security
            }),
        });

        const turnstileData = await turnstileRes.json();
        if (!turnstileData.success) {
            logSecurityEvent('turnstile_verification_failed', { codes: turnstileData['error-codes'] });
            return NextResponse.json(
                { error: 'Captcha verification failed. Please try again.' },
                { status: 400 }
            );
        }

        // 5. Send Emails
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
