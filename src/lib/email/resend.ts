import { Resend } from 'resend';
import { logSecurityEvent } from '@/utils/logging';

// Initialize Resend with key from env
const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_FROM = process.env.EMAIL_FROM || 'DevGuardian <team@devguardian.site>';
const CONTACT_TO = process.env.CONTACT_TO || 'team@devguardian.site';

interface EmailParams {
    name: string;
    email: string;
    message: string;
    company?: string;
}

export async function sendConfirmation({ name, email }: Pick<EmailParams, 'name' | 'email'>) {
    try {
        const { error } = await resend.emails.send({
            from: EMAIL_FROM,
            to: email,
            subject: 'Your message has been received',
            text: `Hello ${name},\n\nWe have received your message and will review it. We will contact you if additional information is needed.\n\nRegards,\nDevGuardian`,
            // Optional: Add HTML version if needed
        });

        if (error) {
            logSecurityEvent('resend_confirmation_failed', { error: error.message });
            console.error('Resend confirmation error:', error);
            // Don't throw, just log. We don't want to fail the user experience if their confirmation doesn't go through but the notification did.
        } else {
            logSecurityEvent('resend_confirmation_sent', {});
        }
    } catch (err) {
        logSecurityEvent('resend_confirmation_exception', { error: String(err) });
    }
}

export async function sendNotification({ name, email, message, company }: EmailParams) {
    try {
        const { error } = await resend.emails.send({
            from: EMAIL_FROM,
            to: CONTACT_TO,
            // Security: Sanitize subject to prevent Header Injection (CRLF)
            subject: `New Contact: ${name.replace(/[\r\n]/g, '')} from ${company?.replace(/[\r\n]/g, '') || 'Unknown Company'}`,
            text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`,
        });

        if (error) {
            logSecurityEvent('resend_notification_failed', { error: error.message });
            throw new Error('Failed to send internal notification');
        } else {
            logSecurityEvent('resend_notification_sent', {});
        }
    } catch (err) {
        logSecurityEvent('resend_notification_exception', { error: String(err) });
        throw err; // Re-throw to alert the API route
    }
}
