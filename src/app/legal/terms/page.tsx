import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import LegalLayout from '@/components/legal-layout';

export const metadata: Metadata = {
    title: 'Terms of Service | DevGuardian',
    description: 'Understand the terms and conditions of using DevGuardian services and website.',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-black text-white relative">
            <Header />
            <main className="pt-20">
                <LegalLayout>
                    <h1>Terms of Service</h1>
                    <p className="lead text-xl text-zinc-300">Last Updated: December 2025</p>

                    <h2>1. Agreement to Terms</h2>
                    <p>
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and DevGuardian.
                    </p>

                    <h2>2. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise indicated, the Site and our Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site are owned or controlled by us.
                    </p>

                    <h2>3. User Representations</h2>
                    <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information.</p>
                </LegalLayout>
            </main>
            <Footer />
        </div>
    );
}
