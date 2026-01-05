import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FAQ } from '@/components/faq';
import { GlobalContact } from '@/components/global-contact';

export const metadata: Metadata = {
    title: 'Terms of Service | DevGuardian',
    description: 'DevGuardian Terms of Service. Please read these terms carefully before using our services.',
};

const termsFaqs = [
    {
        question: "Do these terms cover paid projects?",
        answer: "These terms primarily cover the use of our website. Paid projects (such as security audits or development) are governed by a specific Statement of Work (SOW) or Master Services Agreement (MSA) which takes precedence."
    },
    {
        question: "What are my responsibilities as a client?",
        answer: "Clients must have legal authorization for any systems they ask us to test. For AI projects, clients are responsible for human review of automated outputs."
    },
    {
        question: "How do payments work?",
        answer: "Payment schedules are defined in your specific proposal. Generally, deposits are required to reserve resources and are non-refundable once work commences."
    },
    {
        question: "Who owns the code?",
        answer: "Upon full payment, you own the final deliverables. DevGuardian retains ownership of our pre-existing tools, libraries, and methodologies used to create them."
    },
    {
        question: "How do you handle disputes?",
        answer: "We aim to resolve all disputes amicably through good-faith negotiation before resorting to formal legal proceedings."
    }
];

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Header />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                            Terms of Service
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
                            <h2 className="text-2xl font-semibold text-white mb-4">Introduction & Scope</h2>
                            <p>
                                Welcome to DevGuardian. These Terms of Service ("Terms") govern your access to and use of our website.
                            </p>
                            <p className="mt-4">
                                <strong>Please Note:</strong> Our paid professional services (such as penetration testing, software development, and AI integration) are governed by separate written agreements, such as a Proposal, Statement of Work (SOW), or Master Services Agreement (MSA). In the event of a conflict between these Terms and a specific written agreement, the written agreement shall control.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Acceptable Use</h2>
                            <p>
                                By accessing our website, you agree to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Use our site only for lawful purposes.</li>
                                <li>Not attempt to breach, test, or disrupt the security of our website (unless part of an authorized responsible disclosure).</li>
                                <li>Not use our site to distribute malware, spam, or illegal content.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Client Responsibilities</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-medium text-white mb-2">Cybersecurity Services</h3>
                                    <p>
                                        Clients must provide explicit written authorization before DevGuardian performs any security testing. You represent that you own or have the necessary permissions for any system, network, or application you ask us to test.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-white mb-2">AI & Automation</h3>
                                    <p>
                                        AI models can produce errors. Clients acknowledge that AI-generated outputs should be reviewed by human experts before being deployed in critical production environments. DevGuardian does not guarantee that AI outputs will be free from errors or hallucinations.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Payments & Refunds</h2>
                            <p>
                                Payment terms, milestones, and deliverables are defined in your specific Project Proposal or SOW.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Unless otherwise specified, deposits are non-refundable once resources have been scheduled or work has commenced.</li>
                                <li>Refunds are not typically issued for completed milestones.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
                            <p>
                                <strong>Deliverables:</strong> Upon full payment of all fees, the Client shall own the copyright to the final specific deliverables created for them (exclude pre-existing materials).
                            </p>
                            <p className="mt-2">
                                <strong>DevGuardian IP:</strong> DevGuardian retains all rights, title, and interest in its pre-existing tools, libraries, frameworks, methodologies, and know-how used to deliver the services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Confidentiality</h2>
                            <p>
                                Both parties agree to treat proprietary information received from the other party as confidential. We will not disclose your sensitive data to third parties without your consent, except as required by law or to perform the services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Disclaimers & Limitation of Liability</h2>
                            <p>
                                DevGuardian provides services on a professional "best efforts" basis. However:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>We do not guarantee that your systems will be 100% immune to cyberattacks, as threats evolve daily.</li>
                                <li>To the maximum extent permitted by law, DevGuardian shall not be liable for any indirect, incidental, distinctive, or consequential damages resulting from the use of our website or services.</li>
                                <li>Our total liability shall be limited to the amount paid by the client for the specific service in question during the 6 months prior to the claim.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
                            <p>
                                We reserve the right to terminate access to our website or services immediately if you breach these Terms. Termination of Paid Services is governed by the specific SOW/MSA contract.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
                            <p>
                                These terms shall be governed by the laws of Bangladesh. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Dhaka, Bangladesh.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                            <p>
                                If you have any questions regarding these Terms, please contact us at <a href="mailto:team@devguardian.site" className="text-blue-400 hover:underline">team@devguardian.site</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <FAQ items={termsFaqs} title="Terms FAQ" description="Common questions about our terms of service" />

            <GlobalContact variant="solid" />

            {/* Gradient Line Separator */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <Footer className="!mt-0 !border-t-0" />
        </div>
    );
}
