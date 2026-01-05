import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import LegalLayout from '@/components/legal-layout';

export const metadata: Metadata = {
    title: 'Privacy Policy | DevGuardian',
    description: 'How DevGuardian collects, uses, and protects your data. We are committed to transparency and GDPR compliance.',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-black text-white relative">
            <Header />
            <main className="pt-20">
                <LegalLayout>
                    <h1>Privacy Policy</h1>
                    <p className="lead text-xl text-zinc-300">Last Updated: December 2025</p>

                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to DevGuardian ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy.
                        This Privacy Policy explains how we collect, use, and share your data when you visit our website devguardian.site or use our services.
                    </p>

                    <h2>2. Information We Collect</h2>
                    <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services.</p>
                    <ul>
                        <li>Names</li>
                        <li>Email Addresses</li>
                        <li>Company Names</li>
                        <li>Project Details provided in contact forms</li>
                    </ul>

                    <h2>3. How We Use Your Information</h2>
                    <p>We use the information we collect or receive:</p>
                    <ul>
                        <li>To facilitate account creation and logon process.</li>
                        <li>To send you marketing and promotional communications (with your consent).</li>
                        <li>To fulfill and manage your orders and service requests.</li>
                    </ul>

                    <h2>4. Data Security</h2>
                    <p>
                        We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.
                    </p>

                    <h2>5. Contact Us</h2>
                    <p>
                        If you have questions or comments about this policy, you may email us at privacy@devguardian.site.
                    </p>
                </LegalLayout>
            </main>
            <Footer />
        </div>
    );
}
