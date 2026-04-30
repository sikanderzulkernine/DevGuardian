import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FAQ } from '@/components/faq';
import { GlobalContact } from '@/components/global-contact';

export const metadata: Metadata = {
    title: 'Privacy Policy | DevGuardian',
    description: 'DevGuardian Privacy Policy. Learn how we collect, use, and protect your information.',
    alternates: {
        canonical: '/privacy-policy',
    },
};

const privacyFaqs = [
    {
        question: "What personal data do you collect?",
        answer: "We collect information you voluntarily provide (name, email, company, message) and basic technical data (IP address, browser type) to ensure site reliability."
    },
    {
        question: "Do you use cookies?",
        answer: "We use only essential cookies necessary for the website to function securely. We do not use advertising cookies or cross-site tracking."
    },
    {
        question: "Do you sell my data?",
        answer: "No. We never sell your personal data. We only share it with trusted service providers (like our hosting platform) necessary to operate our business."
    },
    {
        question: "How long do you keep my data?",
        answer: "We generally retain inquiries for 12–24 months. If you become a client, we keep records as required by our contract and legal obligations."
    },
    {
        question: "Can I delete my data?",
        answer: "Yes. You can request to access, correct, or delete your personal data by emailing us at team@devguardian.site."
    }
];

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Header />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-2">
                            Effective Date: December 12, 2025
                        </p>
                        <p className="text-zinc-500 text-sm">
                            Last Updated: December 25, 2025
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-12 text-zinc-300 leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
                            <p>
                                At DevGuardian, we believe privacy should be simple. This policy describes how we handle your information when you visit our website. By using our site, you agree to the practices described here.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Contact Data:</strong> When you use our contact form, we collect your name, email address, company name (optional), and your message.</li>
                                <li><strong>System Logs:</strong> Like most websites, our servers automatically record basic technical information such as your IP address, browser type, device information, and timestamps. We use this strictly for security and reliability purposes.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Cookies & Tracking</h2>
                            <p>
                                We use Google Analytics via Google Tag Manager to understand site usage and improve performance. This may set cookies and collect usage data such as pages visited, device type, and approximate location.
                            </p>
                            <p className="mt-2">
                                We may run A/B tests via Google Tag Manager to improve content and conversion rates.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>We do <strong>not</strong> use advertising cookies for targeted ads.</li>
                                <li>We do <strong>not</strong> sell your personal data.</li>
                                <li>You can control cookies in your browser or use the Google Analytics opt-out add-on.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Data</h2>
                            <p>
                                We use your information responsibly to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Respond to your inquiries and provide requested services.</li>
                                <li>Maintain the security and reliability of our website.</li>
                                <li>Prevent abuse and technical issues.</li>
                                <li>Comply with legal obligations.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Data Sharing</h2>
                            <p>
                                <strong>We do not sell your personal data.</strong> We may share data with trusted third-party service providers (such as hosting and email infrastructure) solely for the purpose of operating our business. These providers are bound by confidentiality agreements and are prohibited from using your data for any other purpose.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Data Retention</h2>
                            <p>
                                We retain general inquiries for 12–24 months, after which they are deleted unless we are legally required to keep them or if they relate to an active client contract.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">International Transfers</h2>
                            <p>
                                DevGuardian operates globally. Your data may be processed in countries where our service providers maintain servers. By using our website, you acknowledge that your information may be transferred across borders, subject to appropriate safeguards.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
                            <p>
                                You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us at <a href="mailto:team@devguardian.site" className="text-blue-400 hover:underline">team@devguardian.site</a>. We will respond to verified requests within 30 days.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
                            <p>
                                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected such data, we will take steps to delete it immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
                            <p>
                                We may update this policy periodically. Any changes will be posted on this page with an updated "Effective Date." We encourage you to review this policy regularly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please email us at <a href="mailto:team@devguardian.site" className="text-blue-400 hover:underline">team@devguardian.site</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <FAQ items={privacyFaqs} title="Privacy FAQ" description="Common questions about our data practices" />

            <GlobalContact variant="solid" />

            <Footer />
        </div>
    );
}
