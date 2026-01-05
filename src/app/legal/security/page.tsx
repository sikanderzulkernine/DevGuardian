import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import LegalLayout from '@/components/legal-layout';

export const metadata: Metadata = {
    title: 'Security Policy | DevGuardian',
    description: 'Our commitment to data protection, encryption, and industry-standard security practices.',
};

export default function SecurityPolicyPage() {
    return (
        <div className="min-h-screen bg-black text-white relative">
            <Header />
            <main className="pt-20">
                <LegalLayout>
                    <h1>Security Policy</h1>
                    <p className="lead text-xl text-zinc-300">How we protect your data and our infrastructure.</p>

                    <h2>Infrastructure Security</h2>
                    <p>
                        We use industry-leading cloud providers (AWS, Vercel) with SOC2 compliance. Our infrastructure is defined as code and audited regularly.
                    </p>

                    <h2>Data Encryption</h2>
                    <p>
                        All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption standards.
                    </p>

                    <h2>Access Control</h2>
                    <p>
                        We practice the principle of least privilege. Access to production data is strictly limited to authorized personnel.
                    </p>
                </LegalLayout>
            </main>
            <Footer />
        </div>
    );
}
