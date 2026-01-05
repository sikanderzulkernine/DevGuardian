import { z } from 'zod';

export const contactSchema = z.object({
    fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    company: z.string().optional(),
    message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
    // Security fields
    token: z.string().min(1, { message: 'Captcha verification failed' }),
    hp_field: z.string().optional(), // Honeypot: Checked manually in API for silent failure
    ts: z.number().refine((val) => {
        const now = Date.now();
        // Enforce minimum time to fill form (e.g., 2 seconds) to stop fast bots
        // And maximum validity (e.g., 1 hour)
        return now - val > 2000 && now - val < 3600000;
    }, { message: 'Form submission too fast or session expired' }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
