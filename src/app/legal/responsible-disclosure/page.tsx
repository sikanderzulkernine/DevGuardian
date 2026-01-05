import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import LegalLayout from '@/components/legal-layout';

export const metadata: Metadata = {
    title: 'Responsible Disclosure Policy | DevGuardian',
    description: 'Guidelines for security researchers to report vulnerabilities to DevGuardian.',
};

export default function DisclosurePage() {
    return (
        <div className="min-h-screen bg-black text-white relative">
            <Header />
            <main className="pt-20">
                <LegalLayout>
                    <h1>Responsible Disclosure Policy</h1>
                    <p className="lead text-xl text-zinc-300">Security is our priority.</p>

                    <p>
                        We take the security of our systems seriously. We value the security community and we appreciate your help in identifying vulnerabilities.
                    </p>

                    <h2>Reporting</h2>
                    <p>
                        If you believe you have found a security vulnerability in one of our products or platforms, please report it to us as quickly as possible.
                    </p>
                    <p>Please email detailed findings to: <strong>security@devguardian.site</strong></p>

                    <h2>Guidelines</h2>
                    <ul>
                        <li>Do not take advantage of the vulnerability or problem you have discovered.</li>
                        <li>Do not reveal the problem to others until it has been resolved.</li>
                        <li>Do not use attacks on physical security, social engineering, distributed denial of service, spam or applications of third parties.</li>
                    </ul>
                </LegalLayout>
            </main>
            <Footer />
        </div>
    );
}
