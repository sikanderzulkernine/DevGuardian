import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Lock, Code, FileCode, Server, CheckCircle, ChevronDown, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CalendlyButton } from '@/components/calendly-button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { GlobalContact } from '@/components/global-contact';
import { SurfaceCard } from '@/components/ui/surface-card';
import { FeaturedCaseStudies } from '@/components/featured-case-studies';

import { CountUp } from '@/components/ui/count-up';
import { CompanyMarquee } from '@/components/company-marquee';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/json-ld';
import Image from 'next/image';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
    title: 'Web Security Services & WAF Protection',
    description: 'Secure your web apps with WAF configuration, Secure Code Review, and Real-time Threat Monitoring. Prevent SQLi, XSS, and DDoS attacks.',
    alternates: {
        canonical: absoluteUrl('/services/web-security'),
    },
    openGraph: {
        title: 'Web Security Services & WAF Protection',
        description: 'Secure your web apps with WAF configuration, Secure Code Review, and Real-time Threat Monitoring. Prevent SQLi, XSS, and DDoS attacks.',
        url: absoluteUrl('/services/web-security'),
        type: 'website',
        images: [
            {
                url: '/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'Web Security Services & WAF Protection',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Web Security Services & WAF Protection',
        description: 'Secure your web apps with WAF configuration, Secure Code Review, and Real-time Threat Monitoring. Prevent SQLi, XSS, and DDoS attacks.',
        images: ['/og-image.webp'],
    },
};

const features = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-white" />,
        title: 'WAF Configuration',
        description: 'Deploying and tuning Web Application Firewalls to block malicious traffic and bots.',
    },
    {
        icon: <Code className="h-8 w-8 text-white" />,
        title: 'Secure Code Review',
        description: 'Analyzing your source code line-by-line to identify logic flaws and insecure patterns.',
    },
    {
        icon: <Lock className="h-8 w-8 text-white" />,
        title: 'SSL & Encryption',
        description: 'Implementing strong encryption standards (TLS 1.3) and managing certificates.',
    },
    {
        icon: <Activity className="h-8 w-8 text-white" />,
        title: 'Real-time Monitoring',
        description: 'Continuous surveillance of your application traffic to detect and stop active attacks.',
    },
];

const process = [
    { step: '01', title: 'Audit', description: 'Reviewing current security configurations and identifying gaps.' },
    { step: '02', title: 'Harden', description: 'Applying security headers, configuring firewalls, and patching known CVEs.' },
    { step: '03', title: 'Code Fixes', description: 'Refactoring vulnerable code segments to prevent XSS, SQLi, and more.' },
    { step: '04', title: 'Verify', description: 'Testing the applied fixes to ensure they are effective and non-disruptive.' },
    { step: '05', title: 'Monitor', description: 'Setting up alerts and logging for ongoing security visibility.' },
];

const pricing = [
    {
        name: 'Hardening Pack',
        price: '$495',
        description: 'Essential security setup for existing web applications.',
        features: [
            'Security Headers Setup (CSP, HSTS)',
            'SSL/TLS Configuration',
            'Rate Limiting Setup',
            'Bot Protection',
            'Basic WAF Ruleset',
            'Security Score Report',
        ],
    },
    {
        name: 'Secure Code Review',
        price: '$1,150',
        description: 'Deep dive into your codebase to root out vulnerabilities.',
        popular: true,
        features: [
            'Line-by-Line Code Analysis',
            'Framework Configuration Review',
            'Dependency Auditing',
            'Remediation Pull Requests',
            'Developer Security Training Session',
            'Final Review Report',
        ],
    },
    {
        name: 'Protection Retainer',
        price: 'Custom',
        description: 'Ongoing security management and monitoring.',
        features: [
            'Monthly Security Scans',
            'WAF Management & Tuning',
            'Incident Response Support',
            'DDoS Mitigation',
            'Monthly Security Report',
            'Real-time Dashboard',
        ],
    },
];

const faqs = [
    {
        question: "What is the difference between Web Security and a Pentest?",
        answer: "A Pentest is a spot-check to find bugs. Web Security (like our Hardening Pack) is about fixing those bugs and setting up long-term defenses like WAFs, firewalls, and secure headers to stop attacks before they happen."
    },
    {
        question: "Do you fix the vulnerabilities regarding code?",
        answer: "Yes. Our 'Secure Code Review' service includes remediation. We don't just tell you what's wrong; we provide the exact code changes (Pull Requests) to fix the SQL injection, XSS, or logic flaws."
    },
    {
        question: "Will installing a WAF (Firewall) slow down my site?",
        answer: "No. Modern WAFs (like Cloudflare or AWS WAF) often speed up your site by caching content and blocking malicious bot traffic that eats up your server resources."
    },
    {
        question: "Do you support WordPress or custom PHP/Node apps?",
        answer: "Yes, we secure any web technology stack. We have deep experience with Next.js, React, Node.js, PHP, Python, and CMS platforms like WordPress or Shopify."
    },
    {
        question: "Is this a one-time fee or a monthly subscription?",
        answer: "We offer both. 'Hardening' and 'Code Review' are one-time project fees. 'Protection Retainer' is a monthly service for companies that want 24/7 monitoring and incident response."
    }
];

export default function WebSecurityPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Web Security Hardening',
        provider: { '@id': absoluteUrl('/#organization') },
        description: 'Proactive web application security, WAF setup, and secure code review services.',
        areaServed: 'Global',
        serviceType: 'CyberSecurity',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Security Protection Packages',
            itemListElement: [
                { '@type': 'Offer', name: 'Hardening Pack', price: '495', priceCurrency: 'USD' },
                { '@type': 'Offer', name: 'Secure Code Review', price: '1150', priceCurrency: 'USD' },
                { '@type': 'Offer', name: 'Protection Retainer', price: 'Custom' }
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
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

            <Header />

            <main className="flex-grow relative z-10">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32">
                    <div className="container px-6 mx-auto text-center" data-reveal="fade-up">
                        <Badge variant="outline" className="mb-6 px-4 py-1 text-sm font-medium rounded-full text-yellow-400 border-yellow-400/20 bg-yellow-400/5">
                            Application Hardening
                        </Badge>
                        <h1 className="fluid-h1 font-bold tracking-tight mb-6 text-white">
                            Fortify Your Web Apps <br className="hidden md:block" />
                            <span className="text-white">
                                Against Modern Threats
                            </span>
                        </h1>
                        <p className="fluid-lead text-white max-w-3xl mx-auto mb-10 leading-relaxed">
                            Security isn't just a feature; it's the foundation of trust. We help you build and maintain
                            resilient web applications that withstand attacks and keep user data safe.
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
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-reveal-stagger>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1"><CountUp value="99.9" />%</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">Uptime Maintained</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">A+</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">SSL Labs Score</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1"><CountUp value="24" />/7</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">Threat Monitoring</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1"><CountUp value="100" />%</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </section>

                <CompanyMarquee />

                {/* Features Grid */}
                <section className="py-24 relative">
                    <div className="container px-6 mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16" data-reveal="fade-up">
                            <h2 className="fluid-h2 font-bold mb-6 text-white">Proactive Defense</h2>
                            <p className="fluid-lead text-zinc-400">
                                Stop attacks at the edge and within the code. We implement defense-in-depth strategies.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6" data-reveal-stagger>
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
                        <h2 className="fluid-h2 font-bold mb-16 text-center text-white">Hardening Process</h2>
                        <div className="grid md:grid-cols-5 gap-4" data-reveal-stagger>
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
                        <div className="text-center max-w-3xl mx-auto mb-16" data-reveal="fade-up">
                            <h2 className="fluid-h2 font-bold mb-6 text-white">Trust & Safety</h2>
                            <p className="fluid-lead text-zinc-400">
                                Companies that trust us to keep their applications secure.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-reveal-stagger>
                            {[
                                {
                                    name: "Monica Reeves",
                                    role: "Director of Ops",
                                    quote: "We sleep better knowing our app is hardened. The daily threat monitoring catches attacks we'd miss.",
                                    img: "/clients/client-8.webp"
                                },
                                {
                                    name: "Alex Johnson",
                                    role: "Lead Developer",
                                    quote: "Their code review process was incredibly educativo. They found logic flaws that scanners missed.",
                                    img: "/clients/client-1.webp"
                                },
                                {
                                    name: "Chloe Winters",
                                    role: "Founder",
                                    quote: "Encryption, security headers, and WAF were setup perfectly. Our SSL score is now A+ across the board.",
                                    img: "/clients/client-6.webp"
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



                <FeaturedCaseStudies filterTag="Web Security" />

                {/* Pricing Section */}
                <section className="py-24 relative">
                    <div className="container px-6 mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16" data-reveal="fade-up">
                            <h2 className="fluid-h2 font-bold mb-6 text-white">Security Packages</h2>
                            <p className="fluid-lead text-zinc-400">
                                Secure your application today. One-time hardening or ongoing protection.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-reveal-stagger>
                            {pricing.map((plan, index) => (
                                <SurfaceCard
                                    key={index}
                                    className={`p-8 flex flex-col ${plan.popular
                                        ? 'bg-white border-yellow-500/60 ring-1 ring-yellow-400/50 shadow-[0_0_30px_rgba(234,179,8,0.35)] light-section'
                                        : 'bg-zinc-900 border-white/10'
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="self-start px-3 py-1 mb-4 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full border border-yellow-200">
                                            Top Choice
                                        </div>
                                    )}
                                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.name}</h3>
                                    <div className="mb-4">
                                        <span className={`text-4xl font-bold ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.price}</span>
                                        {plan.price.includes('/') && <span className={plan.popular ? 'text-zinc-600' : 'text-zinc-400'}>/month</span>}
                                        {!plan.price.includes('/') && <span className={plan.popular ? 'text-zinc-600' : 'text-zinc-400'}>/one-time</span>}
                                    </div>
                                    <p className={`text-sm mb-8 ${plan.popular ? 'text-zinc-700' : 'text-zinc-400'}`}>{plan.description}</p>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className={`flex items-start gap-3 text-sm ${plan.popular ? 'text-zinc-700' : 'text-zinc-300'}`}>
                                                <CheckCircle className="h-5 w-5 text-yellow-400 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        className={`w-full ${plan.popular ? 'bg-yellow-600 hover:bg-yellow-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                                        asChild
                                    >
                                        <Link href="/contact">{plan.price.includes('/') ? 'Start Protection' : 'Secure Now'}</Link>
                                    </Button>
                                </SurfaceCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                {/* Visual / Code Block */}
                <section className="py-24 border-t border-white/10">
                    <div className="container px-6 mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="fluid-h2 font-bold mb-6 text-white">Security is in the Code</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-white/10 p-2 h-fit rounded-lg"><FileCode className="h-6 w-6 text-white" /></div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Secure Development Lifecycle</h3>
                                        <p className="text-zinc-400">We integrate security checks into every commit. No vulnerability goes to production.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-white/10 p-2 h-fit rounded-lg"><Server className="h-6 w-6 text-white" /></div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Infrastructure as Code</h3>
                                        <p className="text-zinc-400">Reproducible, secure infrastructure templates (Terraform/AWS CDK) to eliminate configuration drift.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-yellow-500/10 blur-[80px] rounded-full" />
                            <SurfaceCard className="relative bg-zinc-950 p-6 border-white/10 font-mono text-sm leading-relaxed overflow-hidden">
                                <div className="text-zinc-500 mb-2">{"// Example: Secure Headers Implementation"}</div>
                                <div className="text-purple-400">const</div> <div className="text-blue-400 inline">securityHeaders</div> = {'{'}
                                <div className="pl-4">
                                    <div className="text-green-400">'Content-Security-Policy'</div>: <span className="text-orange-300">'default-src 'self'; script-src...'</span>,
                                </div>
                                <div className="pl-4">
                                    <div className="text-green-400">'Strict-Transport-Security'</div>: <span className="text-orange-300">'max-age=31536000...'</span>,
                                </div>
                                <div className="pl-4">
                                    <div className="text-green-400">'X-Frame-Options'</div>: <span className="text-orange-300">'DENY'</span>,
                                </div>
                                <div className="pl-4">
                                    <div className="text-green-400">'X-Content-Type-Options'</div>: <span className="text-orange-300">'nosniff'</span>,
                                </div>
                                {'}'};
                                <div className="mt-4 text-zinc-500">{"// Result: A+ Security Rating"}</div>
                            </SurfaceCard>
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
                                            <span className="text-lg font-medium text-white group-hover:text-yellow-400 transition-colors">{faq.question}</span>
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
                                <Link href="/services/cybersecurity">
                                    <Button variant="outline" className="border-white/10 hover:bg-white/5 text-zinc-300 hover:text-white">Cybersecurity</Button>
                                </Link>
                                <Link href="/services/web-development">
                                    <Button variant="outline" className="border-white/10 hover:bg-white/5 text-zinc-300 hover:text-white">Web Development</Button>
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
