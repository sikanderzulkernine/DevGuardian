import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FAQ } from '@/components/faq';
import { GlobalContact } from '@/components/global-contact';
import { Shield, Lock, Server, Eye, FileCheck, AlertTriangle } from 'lucide-react';
import { SurfaceCard } from '@/components/ui/surface-card';

export const metadata: Metadata = {
    title: 'Security | DevGuardian',
    description: 'Our commitment to security. Learn about DevGuardian\'s infrastructure, data protection, and compliance standards.',
};

const securityFaqs = [
    {
        question: "What security standards do you follow?",
        answer: "We align our internal practices with industry-best standards such as OWASP Top 10 and ISO/IEC 27001 guidelines to ensure robust security management."
    },
    {
        question: "Is my data encrypted?",
        answer: "Yes. We use strong encryption (TLS) for data in transit and industry-standard AES encryption for data at rest."
    },
    {
        question: "How do you handle security incidents?",
        answer: "We maintain an incident response plan that includes identification, containment, eradication, and recovery steps. We engage in transparent communication with affected parties."
    },
    {
        question: "Do you perform regular penetration testing?",
        answer: "We perform regular vulnerability scans and engage in internal security testing. Third-party audits are conducted as required for specific compliance certifications."
    },
    {
        question: "Where is my data hosted?",
        answer: "We utilize top-tier cloud providers (AWS, Google Cloud, Azure) who maintain rigorous physical and network security controls."
    },
    {
        question: "How do you protect against DDoS attacks?",
        answer: "We leverage cloud-native DDoS protection services to filter malicious traffic and ensure the availability of our services."
    },
    {
        question: "Can I request a security audit report?",
        answer: "Enterprise clients may request summary reports or compliance attestations under a non-disclosure agreement (NDA)."
    }
];

export default function SecurityPage() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Header />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                            Security at DevGuardian
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
                            Security is the foundation of everything we build.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        <SurfaceCard className="p-8 bg-zinc-900 border-white/10 h-full">
                            <Lock className="w-10 h-10 text-white mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Data Protection</h3>
                            <p className="text-zinc-400">End-to-end encryption for data in transit and at rest, ensuring your sensitive information remains private.</p>
                        </SurfaceCard>

                        <SurfaceCard className="p-8 bg-zinc-900 border-white/10 h-full">
                            <Server className="w-10 h-10 text-white mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Secure Infrastructure</h3>
                            <p className="text-zinc-400">Built on world-class cloud providers with rigorous physical and network security controls.</p>
                        </SurfaceCard>

                        <SurfaceCard className="p-8 bg-zinc-900 border-white/10 h-full">
                            <Eye className="w-10 h-10 text-white mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Continuous Monitoring</h3>
                            <p className="text-zinc-400">Continuous monitoring (where applicable) to identify potential threats and anomalies in real-time.</p>
                        </SurfaceCard>

                        <SurfaceCard className="p-8 bg-zinc-900 border-white/10 h-full">
                            <FileCheck className="w-10 h-10 text-white mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Compliance</h3>
                            <p className="text-zinc-400">Aligned with industry best practices and security standards to meet regulatory requirements.</p>
                        </SurfaceCard>

                        <SurfaceCard className="p-8 bg-zinc-900 border-white/10 h-full">
                            <AlertTriangle className="w-10 h-10 text-white mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Vulnerability Management</h3>
                            <p className="text-zinc-400">Regular security scans and assessments to proactively fix potential weaknesses.</p>
                        </SurfaceCard>

                        <SurfaceCard className="p-8 bg-zinc-900 border-white/10 h-full">
                            <Shield className="w-10 h-10 text-white mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Access Control</h3>
                            <p className="text-zinc-400">Strict role-based access control (RBAC) and multi-factor authentication (MFA) for internal systems.</p>
                        </SurfaceCard>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-12 text-zinc-300 leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Security Overview</h2>
                            <p className="mb-4">
                                Currently, we implement the following practical security measures to protect our infrastructure and your data:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>TLS Encryption:</strong> All data in transit is protected using strong TLS encryption.</li>
                                <li><strong>Access Control:</strong> We enforce least-privilege access and use Multi-Factor Authentication (MFA) for all administrative and internal systems.</li>
                                <li><strong>Software Updates:</strong> We maintain a rigorous patching schedule to ensure our operating systems and libraries are up to date.</li>
                                <li><strong>Backups:</strong> We perform regular encrypted backups to ensure business continuity.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Vulnerability Reporting</h2>
                            <p>
                                We value the work of the security research community. If you discover a vulnerability in one of our services, please report it to us immediately.
                            </p>
                            <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-lg mt-4">
                                <p className="mb-2"><strong>How to Report:</strong></p>
                                <p>
                                    Please email detailed steps to reproduce the issue to <a href="mailto:team@devguardian.site" className="text-blue-400 hover:underline">team@devguardian.site</a>. We will acknowledge your report, investigate the issue, and notify you when it is resolved.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">Shared Responsibility</h2>
                            <p>
                                Security is a shared responsibility. While we secure the underlying infrastructure and our own applications, clients are responsible for the security of their own accounts, API keys, and the configuration of their deployed environments (unless managed by us).
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <FAQ items={securityFaqs} title="Security FAQ" description="Common questions about our security measures" />

            <GlobalContact variant="solid" />

            <Footer />
        </div>
    );
}
