import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FAQ } from '@/components/faq';
import { GlobalContact } from '@/components/global-contact';

export const metadata: Metadata = {
    title: 'Responsible Disclosure | DevGuardian',
    description: 'DevGuardian Responsible Disclosure Policy. Guidelines for security researchers to report vulnerabilities.',
};

const disclosureFaqs = [
    {
        question: "What is responsible disclosure?",
        answer: "Responsible disclosure is a collaborative approach where security researchers report potential vulnerabilities privately to us first, giving DevGuardian the opportunity to investigate and fix the issue before any public disclosure. This helps protect our users while still recognizing the valuable work of the security community."
    },
    {
        question: "Do you offer bug bounties?",
        answer: "We do not currently offer monetary bug bounties. Instead, for valid, non-duplicate reports submitted in good faith, we may offer public recognition on our Security Researchers Hall of Fame page or section, with your consent."
    },
    {
        question: "How soon will you respond?",
        answer: "We aim to acknowledge new reports as soon as reasonably possible after receipt. Review and remediation times depend on the complexity and impact of the issue, but we strive to keep you informed of progress throughout the process."
    },
    {
        question: "Can I disclose publicly?",
        answer: "We ask that you do not publicly disclose any details of a vulnerability until we have confirmed and resolved the issue. Once it has been fixed, you are welcome to publish your findings; we simply request that you coordinate timing with us so users remain protected."
    },
    {
        question: "What types of bugs are in scope?",
        answer: "We are interested in vulnerabilities with a clear security impact, such as authentication and authorization issues, access-control weaknesses (including IDOR), injection vulnerabilities, cross-site scripting (XSS), cross-site request forgery (CSRF), and other flaws that could lead to data exposure, privilege escalation, or service compromise."
    },
    {
        question: "What is out of scope?",
        answer: "Examples of issues that are generally out of scope include: best-practice recommendations without a clear security impact, self-XSS, clickjacking on non-sensitive pages, missing security headers that cannot be leveraged into an exploit, denial-of-service or performance issues, use of automated scanners without coordination, and attacks against third-party services not controlled by DevGuardian."
    }
];

export default function ResponsibleDisclosurePage() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Header />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                            Responsible Disclosure
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
                            We value the security community and are committed to working with researchers to verify and fix potential vulnerabilities in a responsible way.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-12 text-zinc-300 leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Purpose</h2>
                            <p>
                                The safety and security of our customers’ data, and the reliability of our products and services, are core priorities for DevGuardian. This policy explains how we work with security researchers to receive, assess, and remediate reports of potential vulnerabilities in a responsible way.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Scope</h2>
                            <p className="mb-4">
                                This policy applies to DevGuardian-owned services, websites, and software.
                            </p>

                            <h3 className="text-xl font-medium text-white mb-2">In scope (examples)</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Public-facing web applications and APIs operated by DevGuardian</li>
                                <li>devguardian.site and subdomains owned and controlled by DevGuardian</li>
                                <li>Authentication, authorization, and session management mechanisms</li>
                                <li>Security controls that protect customer data and service availability</li>
                            </ul>

                            <h3 className="text-xl font-medium text-white mb-2">Out of scope (examples)</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Third-party services or platforms that DevGuardian does not control</li>
                                <li>Social engineering attacks (phishing, vishing, etc.)</li>
                                <li>Physical security attacks against DevGuardian, our employees, or customers</li>
                                <li>Denial-of-service (DoS/DDoS) or any testing that degrades service for other users</li>
                                <li>Automated vulnerability scans without prior coordination</li>
                            </ul>

                            <p>
                                If you are unsure whether a specific asset or test method is in scope, please contact us first before proceeding.
                            </p>
                        </section>

                        <section id="report" className="scroll-mt-32">
                            <h2 className="text-2xl font-semibold text-white mb-4">Report a Security Issue</h2>
                            <p className="mb-4">
                                If you believe you’ve discovered a security vulnerability in a DevGuardian website, service, or system, please let us know so we can investigate and fix the issue.
                            </p>

                            <h3 className="text-xl font-medium text-white mb-2">How to report</h3>
                            <p className="mb-4">
                                We accept vulnerability reports by email only so that you can safely include any supporting details and attachments. Send your report to <a href="mailto:team@devguardian.site" className="text-blue-400 hover:text-blue-300 font-medium">team@devguardian.site</a> with the subject line: <span className="font-mono text-zinc-400">“Security Issue Report – [short description]”</span>.
                            </p>

                            <p className="mb-2 font-medium text-white">Please include:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>A clear description of the issue and its potential impact</li>
                                <li>The specific URL, endpoint, or system affected</li>
                                <li>Exact steps to reproduce the issue (including any relevant parameters or test accounts)</li>
                                <li>Expected vs. actual behavior</li>
                                <li>Any supporting details such as screenshots, logs, or proof-of-concept code (attach these to your email)</li>
                            </ul>

                            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg mb-6">
                                <p className="text-sm">
                                    <strong className="text-red-400">Important:</strong> We do not provide any file upload forms on our website. If you need to share files, please attach them directly to your email.
                                </p>
                            </div>

                            <p className="mb-2 font-medium text-white">While testing, please:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Avoid accessing, modifying, or deleting data that does not belong to you</li>
                                <li>Avoid actions that could degrade our services for other users</li>
                                <li>Use test or demo accounts whenever possible</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">What to Expect from Us</h2>
                            <p className="mb-4">
                                After you submit a report by email, we will:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Acknowledge receipt of your report as soon as reasonably possible</li>
                                <li>Review and validate the issue</li>
                                <li>Assess the severity and impact</li>
                                <li>Work to remediate confirmed vulnerabilities</li>
                                <li>Keep you updated on progress and notify you when the issue has been fixed</li>
                            </ul>
                            <p>
                                Response and resolution times may vary based on the complexity and impact of the issue, but we aim to treat all valid reports with urgency and respect.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Researcher Recognition</h2>
                            <p className="mb-4">
                                We currently do not offer monetary bug bounties.
                            </p>
                            <p className="mb-4">
                                However, we greatly appreciate the efforts of security researchers who help keep DevGuardian and our customers safe. With your explicit consent, we may recognize your contribution on a Security Researchers Hall of Fame section or page after a valid, non-duplicate vulnerability has been fixed.
                            </p>
                            <h3 className="text-xl font-medium text-white mb-2">Recognition may include:</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Your name or preferred alias</li>
                                <li>An optional link (for example, a personal website or social profile)</li>
                                <li>A brief, high-level description of the issue you reported</li>
                            </ul>
                            <p>
                                If you would like to be recognized, please indicate this in your email report and tell us the exact name/alias and link you’d like us to use.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Safe Harbor</h2>
                            <p className="mb-4">
                                DevGuardian will not pursue legal action against individuals who:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Discover and report security issues in good faith</li>
                                <li>Follow this Responsible Disclosure Policy</li>
                                <li>Do not exploit a vulnerability beyond what is necessary to demonstrate its existence</li>
                                <li>Do not access, modify, or destroy data that does not belong to them</li>
                                <li>Give us a reasonable opportunity to remediate the issue before publicly disclosing any details</li>
                            </ul>
                            <p>
                                If you have any questions about whether your planned research is covered by this policy, please contact us at <a href="mailto:team@devguardian.site" className="text-blue-400 hover:text-blue-300">team@devguardian.site</a> before you begin testing.
                            </p>
                        </section>

                    </div>
                </div>
            </main>

            <FAQ items={disclosureFaqs} title="Disclosure FAQ" description="Common questions for security researchers" />

            <GlobalContact variant="solid" />

            <Footer />
        </div>
    );
}
