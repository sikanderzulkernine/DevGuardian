'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/contact-form';

interface GlobalContactProps {
    variant?: 'default' | 'solid';
}

export function GlobalContact({ variant = 'default' }: GlobalContactProps) {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="fluid-h2 font-bold mb-4 relative z-10">Request a Consultation</h2>
                    <p className="fluid-lead text-foreground/80 max-w-2xl mx-auto text-glow-dark">
                        Use the form below to connect with our team.
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
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
