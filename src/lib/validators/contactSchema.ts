import { z } from 'zod';

export const contactSchema = z.object({
    fullName: z.string().trim().min(2, { message: 'Full name must be at least 2 characters' }).max(120),
    email: z.string().trim().email({ message: 'Please enter a valid email address' }).max(254),
    company: z.string().trim().max(160).optional(),
    message: z.string().trim().min(10, { message: 'Message must be at least 10 characters' }).max(5000),
    // Security fields
    token: z.string().min(1, { message: 'Captcha verification failed' }).max(4096),
    hp_field: z.string().max(200).optional(), // Honeypot: Checked manually in API for silent failure
    ts: z.number().refine((val) => {
        const now = Date.now();
        // Enforce minimum time to fill form (e.g., 2 seconds) to stop fast bots
        // And maximum validity (e.g., 1 hour)
        return now - val > 2000 && now - val < 3600000;
    }, { message: 'Form submission too fast or session expired' }),
});
