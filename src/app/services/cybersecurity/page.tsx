import React from 'react';
import { Metadata } from 'next';
import { Shield, Lock, Search, FileText, Server, AlertTriangle, CheckCircle, ChevronDown, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CalendlyButton } from '@/components/calendly-button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { GlobalContact } from '@/components/global-contact';
import { SurfaceCard } from '@/components/ui/surface-card';
import { TestimonialsSection } from '@/components/testimonials';
import { FeaturedCaseStudies } from '@/components/featured-case-studies';

import { CountUp } from '@/components/ui/count-up';
import { CompanyMarquee } from '@/components/company-marquee';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/json-ld';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Cybersecurity Services & Pen Testing | DevGuardian',
    description: 'Proactive cybersecurity solutions: Penetration Testing, Vulnerability Assessments (VAPT), and ISO Compliance Audits to protect your business assets.',
    alternates: {
        canonical: 'https://devguardian.site/services/cybersecurity',
    },
    openGraph: {
        title: 'Cybersecurity Services & Pen Testing | DevGuardian',
        description: 'Proactive cybersecurity solutions: Penetration Testing, Vulnerability Assessments (VAPT), and ISO Compliance Audits to protect your business assets.',
        url: 'https://devguardian.site/services/cybersecurity',
        type: 'website',
        images: [
            {
                url: '/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'Cybersecurity Services & Pen Testing | DevGuardian',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cybersecurity Services & Pen Testing | DevGuardian',
        description: 'Proactive cybersecurity solutions: Penetration Testing, Vulnerability Assessments (VAPT), and ISO Compliance Audits to protect your business assets.',
        images: ['/og-image.webp'],
    },
};

const features = [
    {
        icon: <Search className="h-8 w-8 text-white" />,
        title: 'Vulnerability Assessment',
        description: 'Automated and manual scanning to identify weak points in your infrastructure before attackers do.',
    },
    {
        icon: <Lock className="h-8 w-8 text-white" />,
        title: 'Penetration Testing',
        description: 'Ethical hacking simulations where we attempt to breach your systems to prove their resilience.',
    },
    {
        icon: <FileText className="h-8 w-8 text-white" />,
        title: 'Compliance Audits',
        description: 'Ensure your systems meet industry standards (GDPR, PCI-DSS, SOC2) and best practices.',
    },
    {
        icon: <Server className="h-8 w-8 text-white" />,
        title: 'Infrastructure Hardening',
        description: 'Configuring servers, firewalls, and networks to minimize the attack surface.',
    },
];

const process = [
    { step: '01', title: 'Reconnaissance', description: 'Gathering intelligence about the target system to understand its footprint.' },
    { step: '02', title: 'Scanning', description: ' identifying potential vulnerabilities using advanced automated tools.' },
    { step: '03', title: 'Exploitation', description: 'Manual attempts to exploit found weaknesses to determine impact.' },
    { step: '04', title: 'Reporting', description: 'Detailed technical report with executive summary and remediation steps.' },
    { step: '05', title: 'Remediation', description: 'Guidance on fixing issues and re-testing to verify solutions.' },
];

const pricing = [
    {
        name: 'Vulnerability Scan',
        price: '$495',
        description: 'Essential baseline security check for small applications.',
        features: [
            'Automated Vulnerability Scanning',
            'Manual False Positive Removal',
            'Basic Executive Report',
            'Remediation Consultation (1 hr)',
            '1 Re-scan after fixes',
            'VAPT Certificate',
        ],
    },
    {
        name: 'Penetration Test',
        price: '$1,350',
        description: 'Comprehensive manual testing for production systems.',
        popular: true,
        features: [
            'Full Manual Exploitation',
            'Business Logic Testing',
            'Detailed Technical VAPT Report',
            'Proof of Concepts (PoC)',
            'Priority Support during fixes',
            'Attestation Letter',
        ],
    },
    {
        name: 'Full Security Audit',
        price: 'Custom',
        description: 'End-to-end security verification for enterprise platforms.',
        features: [
            'Source Code Review (Whitebox)',
            'Architecture Review',
            'Advanced Social Engineering',
            'Compliance Mapping (SOC2/ISO)',
            'Unlimited Re-testing for 30 days',
            'Executive Presentation',
        ],
    },
];

const faqs = [
    {
        question: "What is a VAPT report and do you provide one?",
        answer: "Yes. We provide a comprehensive Vulnerability Assessment and Penetration Testing (VAPT) report. It includes an executive summary, detailed technical findings, risk scoring (CVSS), and step-by-step remediation guides for your developers."
    },
    {
        question: "Do you perform manual testing or just use automated scanners?",
        answer: "We do both. Automated scanners catch the low-hanging fruit (about 40%), but our certified engineers perform rigorous manual testing to find complex business logic flaws and chained vulnerabilities that tools miss."
    },
    {
        question: "Will the penetration test take my website down?",
        answer: "No. We design our tests to be 'safe exploits' that prove the risk without crashing services. For high-intensity stress testing, we coordinate a specific time window with your team."
    },
    {
        question: "Do you offer re-testing after we fix the bugs?",
        answer: "Yes! All our packages include one round of free verification re-testing within 30 days to ensure the vulnerabilities have been correctly patched."
    },
    {
        question: "What certifications do your testers have?",
        answer: "Our team members hold industry-recognized certifications including OSCP (Offensive Security Certified Professional), CEH (Certified Ethical Hacker), and CISSP."
    }
];

export default function CybersecurityPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Cybersecurity Audits & VAPT',
        provider: { '@id': 'https://devguardian.site/#organization' },
        description: 'Comprehensive security assessments, penetration testing, and compliance audits for enterprise infrastructure.',
        areaServed: 'Global',
        serviceType: 'ComputerSecurity',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Security Packages',
            itemListElement: [
                { '@type': 'Offer', name: 'Vulnerability Scan', price: '495', priceCurrency: 'USD' },
                { '@type': 'Offer', name: 'Penetration Test', price: '1350', priceCurrency: 'USD' },
                { '@type': 'Offer', name: 'Full Security Audit', price: 'Custom' }
            ]
        }
    };
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
            <JsonLd data={[schema, faqSchema]} />
            {/* Background Ambience */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[120px] pointer-events-none" />

            <Header />

            <main className="flex-grow relative z-10">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32">
                    <div className="container px-6 mx-auto text-center">
                        <Badge variant="outline" className="mb-6 px-4 py-1 text-sm font-medium rounded-full text-red-500 border-red-500/20 bg-red-500/5">
                            Defensive Security
                        </Badge>
                        <h1 className="fluid-h1 font-bold tracking-tight mb-6 text-white">
                            Bank-Grade Security for <br className="hidden md:block" />
                            <span className="text-white">
                                Your Digital Assets
                            </span>
                        </h1>
                        <p className="fluid-lead text-white max-w-3xl mx-auto mb-10 leading-relaxed">
                            Don't wait for a breach. We simulate real-world attacks to find and fix vulnerabilities
                            before malicious actors can exploit them.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <CalendlyButton size="lg" className="bg-white text-black hover:bg-zinc-200">
                                Book a call
                            </CalendlyButton>
                        </div>
                    </div>
                </section>

                {/* Overview Stats */}
                <section className="py-12 border-y border-white/10 bg-zinc-900/30">
                    <div className="container px-6 mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1"><CountUp value="350" />+</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">Audits Conducted</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1"><CountUp value="100" />%</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">Confidentiality</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">Zero</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">Trust Architecture</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">ISO</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">Standard Process</div>
                            </div>
                        </div>
                    </div>
                </section>

                <CompanyMarquee />

                {/* Features Grid */}
                <section className="py-24 relative">
                    <div className="container px-6 mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="fluid-h2 font-bold mb-6 text-white">Comprehensive Protection</h2>
                            <p className="fluid-lead text-zinc-400">
                                A multi-layered approach to security that covers networks, applications, and cloud infrastructure.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <SurfaceCard key={index} className="p-8 bg-zinc-900 border-white/10">
                                    <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg border border-white/10">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </SurfaceCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                {/* Process Section */}
                <section className="py-24 bg-zinc-900/50">
                    <div className="container px-6 mx-auto">
                        <h2 className="fluid-h2 font-bold mb-16 text-center text-white">Our Audit Workflow</h2>
                        <div className="grid md:grid-cols-5 gap-4">
                            {process.map((item, index) => (
                                <div key={index} className="relative group">
                                    <div className="text-6xl font-bold text-white mb-4 select-none transition-colors">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                                    {index < process.length - 1 && (
                                        <div className="hidden md:block absolute top-8 right-0 w-8 h-[1px] bg-white/10" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                {/* Client Feedback Section */}
                <section className="py-24 relative">
                    <div className="container px-6 mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="fluid-h2 font-bold mb-6 text-white">Security Stories</h2>
                            <p className="fluid-lead text-zinc-400">
                                Trusted by businesses to protect their most critical assets.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Sara Lin",
                                    role: "VP Engineering",
                                    quote: "The cybersecurity audit was thorough and insightful. They found critical vulnerabilities we had no idea existed.",
                                    img: "/clients/client-2.webp"
                                },
                                {
                                    name: "Chloe Winters",
                                    role: "Founder, HealthTech",
                                    quote: "Their security-first approach gave us peace of mind. obtaining SOC2 compliance was smooth with their guidance.",
                                    img: "/clients/client-6.webp"
                                },
                                {
                                    name: "David Chen",
                                    role: "IT Manager",
                                    quote: "We haven't had a single breach since engaging DevGuardian. Their defensive strategies are world-class.",
                                    img: "/clients/client-3.webp"
                                }
                            ].map((testimonial, index) => (
                                <SurfaceCard key={index} className="p-8 bg-zinc-900 border-white/10 flex flex-col">
                                    <div className="flex-grow mb-6">
                                        <p className="text-zinc-300 italic">"{testimonial.quote}"</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10">
                                            <Image
                                                src={testimonial.img}
                                                alt={testimonial.name}
                                                width={40}
                                                height={40}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white">{testimonial.name}</div>
                                            <div className="text-xs text-zinc-500">{testimonial.role}</div>
                                        </div>
                                    </div>
                                </SurfaceCard>
                            ))}
                        </div>
                    </div>
                </section>



                <FeaturedCaseStudies filterTag="Security" />

                {/* Pricing Section */}
                <section className="py-24 relative">
                    <div className="container px-6 mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="fluid-h2 font-bold mb-6 text-white">Security Investment</h2>
                            <p className="fluid-lead text-zinc-400">
                                Transparent packages for audits. No hidden fees, just actionable results.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {pricing.map((plan, index) => (
                                <SurfaceCard
                                    key={index}
                                    className={`p-8 flex flex-col ${plan.popular
                                        ? 'bg-white border-red-500/60 ring-1 ring-red-400/50 shadow-[0_0_30px_rgba(239,68,68,0.35)] light-section'
                                        : 'bg-zinc-900 border-white/10'
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="self-start px-3 py-1 mb-4 text-xs font-semibold text-red-700 bg-red-100 rounded-full border border-red-200">
                                            Recommended
                                        </div>
                                    )}
                                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.name}</h3>
                                    <div className="mb-4">
                                        <span className={`text-4xl font-bold ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.price}</span>
                                        {plan.price.includes('$') && (
                                            <span className={plan.popular ? 'text-zinc-600' : 'text-zinc-400'}>/engagement</span>
                                        )}
                                    </div>
                                    <p className={`text-sm mb-8 ${plan.popular ? 'text-zinc-700' : 'text-zinc-400'}`}>{plan.description}</p>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className={`flex items-start gap-3 text-sm ${plan.popular ? 'text-zinc-700' : 'text-zinc-300'}`}>
                                                <CheckCircle className="h-5 w-5 text-red-400 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        className={`w-full ${plan.popular ? 'bg-red-600 hover:bg-red-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                                        asChild
                                    >
                                        <Link href="/contact">{plan.price.includes('+') ? 'Contact Sales' : 'Schedule Audit'}</Link>
                                    </Button>
                                </SurfaceCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                {/* Threat Visualization / Mock */}
                <section className="py-24 border-t border-white/10">
                    <div className="container px-6 mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative order-2 md:order-1">
                            <div className="absolute inset-0 bg-red-500/10 blur-[80px] rounded-full" />
                            <SurfaceCard className="relative bg-zinc-950 p-6 border-white/10 font-mono text-xs md:text-sm">
                                <div className="space-y-2 text-zinc-400">
                                    <div className="flex justify-between border-b border-white/5 pb-2 mb-2">
                                        <span className="text-white font-bold">VULNERABILITY SCAN REPORT</span>
                                        <span className="text-red-400">HIGH RISK</span>
                                    </div>
                                    <p><span className="text-blue-400">Target:</span> production.system-api.com</p>
                                    <p><span className="text-blue-400">Scan Duration:</span> 4h 12m</p>
                                    <div className="py-2">
                                        <p className="text-white font-semibold">Findings:</p>
                                        <ul className="list-disc pl-4 space-y-1 mt-1 text-red-300">
                                            <li>SQL Injection found in /api/v1/login</li>
                                            <li>Improper Access Control in /admin/users</li>
                                            <li className="text-yellow-400">Outdated SSL/TLS Version</li>
                                            <li className="text-yellow-400">Missing Security Headers (HSTS)</li>
                                        </ul>
                                    </div>
                                    <div className="mt-4 pt-2 border-t border-white/5">
                                        <p className="text-green-400">Recommendation: Immediate patching required for SQLi. Sanitize all inputs...</p>
                                    </div>
                                </div>
                            </SurfaceCard>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="fluid-h2 font-bold mb-6 text-white">Actionable Intelligence</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-white/10 p-2 h-fit rounded-lg"><Eye className="h-6 w-6 text-white" /></div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Uncover Hidden Risks</h3>
                                        <p className="text-zinc-400">We find what scanners miss. Logic flaws, broken access controls, and complex exploits.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-white/10 p-2 h-fit rounded-lg"><AlertTriangle className="h-6 w-6 text-white" /></div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Prioritized Fixes</h3>
                                        <p className="text-zinc-400">Don't waste time on false positives. We rank findings by real-world impact so you know what to fix first.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* FAQ Section */}
                <section className="py-24 bg-black relative">
                    <div className="container px-6 mx-auto relative z-10 max-w-4xl">
                        <h2 className="fluid-h2 font-bold mb-12 text-center text-white">Common Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
                                    <details className="group">
                                        <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                                            <span className="text-lg font-medium text-white group-hover:text-red-400 transition-colors">{faq.question}</span>
                                            <ChevronDown className="h-5 w-5 text-zinc-500 group-open:rotate-180 transition-transform" />
                                        </summary>
                                        <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </details>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <GlobalContact variant="solid" />

                {/* Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                {/* Related Services */}
                <section className="py-12 bg-zinc-900/30 border-t border-white/5">
                    <div className="container px-6 mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="text-center md:text-left">
                                <h3 className="text-lg font-semibold text-white mb-2">Explore Other Services</h3>
                                <p className="text-zinc-400 text-sm"> comprehensive solutions for your digital ecosystem.</p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/services/ai-agents">
                                    <Button variant="outline" className="border-white/10 hover:bg-white/5 text-zinc-300 hover:text-white">AI Agents</Button>
                                </Link>
                                <Link href="/services/web-development">
                                    <Button variant="outline" className="border-white/10 hover:bg-white/5 text-zinc-300 hover:text-white">Web Development</Button>
                                </Link>
                                <Link href="/services/web-security">
                                    <Button variant="outline" className="border-white/10 hover:bg-white/5 text-zinc-300 hover:text-white">Web Security</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
