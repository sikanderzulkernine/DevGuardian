import React from 'react';
import { ContactForm } from '@/components/contact-form';

interface GlobalContactProps {
    variant?: 'default' | 'solid';
}

export function GlobalContact({ variant = 'default' }: GlobalContactProps) {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="reveal-up mb-16 text-center">
                    <h2 className="fluid-h2 font-bold mb-4 relative z-10">Request a Consultation</h2>
                    <p className="fluid-lead text-foreground/80 max-w-2xl mx-auto text-glow-dark">
                        Use the form below to connect with our team.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl" data-reveal="fade-up" data-reveal-delay="short">
                    <ContactForm
                        title="Contact Us"
                        subtitle="Send us a message and our team will get back to you within 24 hours."
                        variant={variant}
                    />
                </div>
            </div>
        </section>
    );
}
