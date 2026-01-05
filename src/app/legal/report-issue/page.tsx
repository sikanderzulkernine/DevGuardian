import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import LegalLayout from '@/components/legal-layout';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Report a Security Issue | DevGuardian',
    description: 'Submit a vulnerability report securely to the DevGuardian security team.',
};

export default function ReportIssuePage() {
    return (
        <div className="min-h-screen bg-black text-white relative">
            <Header />
            <main className="pt-20">
                <LegalLayout>
                    <h1>Report a Security Issue</h1>
                    <p className="lead text-xl text-zinc-300">Found a bug? Let us know.</p>

                    <p>
                        Please use PGP encryption when sending sensitive vulnerability details.
                    </p>

                    <div className="bg-zinc-900 p-6 rounded-lg border border-white/10 my-8">
                        <h3 className="text-lg font-semibold text-white mb-2">Security Team Contact</h3>
                        <code className="block bg-black p-4 rounded text-green-400 mb-4">security@devguardian.site</code>
                        <p className="text-sm text-zinc-400">PGP Key ID: 0x4A...</p>
                    </div>

                    <p>
                        We acknowledge receipt of all reports within 24 hours.
                    </p>
                </LegalLayout>
            </main>
            <Footer />
        </div>
    );
}
