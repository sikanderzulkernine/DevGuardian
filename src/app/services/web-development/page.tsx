import React from 'react';
import { Metadata } from 'next';
import { Layout, Smartphone, Code, Rocket, Layers, CheckCircle, ArrowRight, ChevronDown, Globe, FileCode, Server, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CalendlyButton } from '@/components/calendly-button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { GlobalContact } from '@/components/global-contact';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { TestimonialsSection } from '@/components/testimonials';
import { FeaturedCaseStudies } from '@/components/featured-case-studies';

import { CountUp } from '@/components/ui/count-up';
import { CompanyMarquee } from '@/components/company-marquee';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
    title: 'Web Development Services | Next.js & React Experts',
    description: 'Custom, high-performance web applications built with Next.js, React, and Tailwind CSS. Scalable, secure, and SEO-optimized architecture.',
    alternates: {
        canonical: 'https://devguardian.site/services/web-development',
    },
    openGraph: {
        title: 'Web Development Services | Next.js & React Experts',
        description: 'Custom, high-performance web applications built with Next.js, React, and Tailwind CSS. Scalable, secure, and SEO-optimized architecture.',
        url: 'https://devguardian.site/services/web-development',
        type: 'website',
        images: [
            {
                url: '/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'Web Development Services | Next.js & React Experts',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Web Development Services | Next.js & React Experts',
        description: 'Custom, high-performance web applications built with Next.js, React, and Tailwind CSS. Scalable, secure, and SEO-optimized architecture.',
        images: ['/og-image.webp'],
    },
};

const features = [
    {
        icon: <Layout className="h-8 w-8 text-white" />,
        title: 'Modern Tech Stack',
        description: 'We build with Next.js, React, and TypeScript to ensure your application is fast, scalable, and maintainable.',
    },
    {
        icon: <Smartphone className="h-8 w-8 text-white" />,
        title: 'Responsive Design',
        description: 'Flawless experiences across all devices. Mobile-first approach ensures you capture every user.',
    },
    {
        icon: <Rocket className="h-8 w-8 text-white" />,
        title: 'Performance Optimization',
        description: 'Core Web Vitals optimization for lightning-fast load times and better search engine rankings.',
    },
    {
        icon: <Layers className="h-8 w-8 text-white" />,
        title: 'Scalable Architecture',
        description: 'Built to grow. We design systems that handle increased traffic and complexity without breaking.',
    },
];

const process = [
    { step: '01', title: 'Planning', description: 'Defining requirements, user flows, and technical architecture.' },
    { step: '02', title: 'Design', description: 'Creating high-fidelity UI/UX mockups and interactive prototypes.' },
    { step: '03', title: 'Development', description: 'Clean, modular coding with regular progress updates and staging previews.' },
    { step: '04', title: 'QA & Testing', description: 'Cross-browser testing, functional verification, and performance tuning.' },
    { step: '05', title: 'Launch', description: 'Smooth deployment to production with configured CI/CD pipelines.' },
];

const projectPackages = [
    {
        name: 'Growth Landing',
        price: '$950+',
        billing: '/project',
        description: 'High-converting multi-page website for early-stage brands.',
        features: [
            '7-13 Unique Pages',
            'Next.js, WordPress, Webflow, or Framer',
            'Advanced Animations',
            'On-Page SEO Optimization',
            'CMS Setup + Editor Guide',
            'Contact Form & Lead Capture',
            'Speed Optimization (100 Lighthouse)',
        ],
        cta: 'Discuss Project',
    },
    {
        name: 'Business Website',
        price: '$2,100+',
        billing: '/project',
        description: 'Scalable business website with unlimited CMS pages.',
        popular: true,
        badge: 'Best Value',
        features: [
            'Unlimited Pages (CMS-managed)',
            'Dynamic Content Management',
            'Blog / News Section',
            'Google Analytics 4 Setup',
            'CMS Setup (WordPress, Webflow, Framer)',
            'Admin Dashboard',
            'Basic Technical SEO',
        ],
        cta: 'Discuss Project',
    },
    {
        name: 'Custom Web App',
        price: 'Custom',
        billing: '',
        description: 'Full-featured SaaS or complex web application.',
        features: [
            'User Authentication (Auth.js)',
            'Database Design (PostgreSQL)',
            'Payment Gateway (Stripe)',
            'API Development',
            'Scalable Cloud Infrastructure',
            'Automated Testing',
        ],
        cta: 'Discuss Project',
    },
];

const maintenancePlans = [
    {
        name: 'Standard Care',
        price: '$130',
        billing: '/2 months',
        description: 'Short-term coverage to keep your site stable after launch.',
        features: [
            'Core framework or CMS updates',
            'Security patches for critical issues',
            'Uptime and performance monitoring',
            'Monthly backups and restore support',
            'Minor bug fixes and content updates',
            'Performance and SEO health check',
            'Monthly maintenance report',
        ],
        cta: 'Choose Standard',
    },
    {
        name: 'Growth Care',
        price: '$299',
        billing: '/6 months',
        description: 'Proactive care for growing sites with priority support.',
        popular: true,
        badge: 'Most Popular',
        features: [
            'Proactive dependency updates and patching',
            'Uptime and error monitoring with alerts',
            'Scheduled backups and restore testing',
            'Minor bug fixes and content updates',
            'Priority support queue',
            'Quarterly performance tune-ups',
            'SEO and analytics review',
            'Security hardening checks',
        ],
        cta: 'Choose Growth',
    },
    {
        name: 'Premium Care',
        price: '$550',
        billing: '/year',
        description: 'Full-year partnership with continuous optimization and guidance.',
        features: [
            'Planned version upgrades and compatibility checks',
            'Continuous monitoring and incident triage',
            'Monthly backups and restore testing',
            'Minor feature tweaks and content updates',
            'Monthly performance optimization',
            'Security hardening checks',
            'Quarterly strategy review',
            'Priority support queue',
        ],
        cta: 'Choose Premium',
    },
];

const faqs = [
    {
        question: "What technology stack do you use?",
        answer: "We primarily use the T3 Stack: Next.js (React framework), TypeScript for type safety, Tailwind CSS for styling, and specialized databases like PostgreSQL or MongoDB depending on your needs."
    },
    {
        question: "Will my website be mobile friendly?",
        answer: "Yes, we prioritize a 'Mobile-First' design strategy. Your site will look and perform perfectly on smartphones, tablets, laptops, and large desktop screens."
    },
    {
        question: "How do you handle SEO?",
        answer: "SEO is baked into our process. We use semantic HTML, correct heading structures, meta tags, and ensure fast load times—all critical factors for ranking well on Google."
    },
    {
        question: "Can I update the website content myself?",
        answer: "Yes, we integrate modern Content Management Systems (CMS) like Sanity or Strapi, which give you a user-friendly dashboard to edit text, images, and blog posts without touching code."
    },
    {
        question: "Do you provide hosting?",
        answer: "We set up your hosting on enterprise-grade platforms like Vercel or AWS. We'll hand over the accounts to you so you have full control, or we can manage it for you."
    }
];

export default function WebDevelopmentPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Web Application Development',
        provider: { '@id': 'https://devguardian.site/#organization' },
        description: 'Full-cycle web development services using Next.js, React, and Cloud Infrastructure.',
        areaServed: 'Global',
        serviceType: 'WebDevelopment',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Development and Maintenance Packages',
            itemListElement: [
                { '@type': 'Offer', name: 'Growth Landing', price: '950', priceCurrency: 'USD' },
                { '@type': 'Offer', name: 'Business Website', price: '2100', priceCurrency: 'USD' },
                { '@type': 'Offer', name: 'Custom Web App', price: 'Custom' },
                { '@type': 'Offer', name: 'Standard Care (2 Months)', price: '130', priceCurrency: 'USD' },
                { '@type': 'Offer', name: 'Growth Care (6 Months)', price: '299', priceCurrency: 'USD' },
                { '@type': 'Offer', name: 'Premium Care (1 Year)', price: '550', priceCurrency: 'USD' }
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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

            <Header />

            <main className="flex-grow relative z-10">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32">
                    <div className="container px-6 mx-auto text-center">
                        <Badge variant="outline" className="mb-6 px-4 py-1 text-sm font-medium rounded-full text-cyan-400 border-cyan-400/20 bg-cyan-400/5">
                            Engineering Excellence
                        </Badge>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
                            Web Applications Built for <br className="hidden md:block" />
                            <span className="text-white">
                                Scale & Performance
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10 leading-relaxed">
                            We build high-performance websites and applications. Using the latest technologies,
                            we create fast, secure, and SEO-friendly software that drives results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                                <div className="text-3xl font-bold text-white mb-1"><CountUp value="100" />/100</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">Google Lighthouse</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">&lt; <CountUp value="2" />s</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">Load Time</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">Scalable</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">Architecture</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">SEO</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">Optimized Structure</div>
                            </div>
                        </div>
                    </div>
                </section>

                <CompanyMarquee />

                {/* Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                {/* Features Grid */}
                <section className="py-24 relative">
                    <div className="container px-6 mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Why Choose Our Dev Team?</h2>
                            <p className="text-lg text-zinc-400">
                                We combine great design with solid engineering to deliver products that last.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <SpotlightCard key={index} className="p-8 bg-zinc-900 border-white/10">
                                    <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg border border-white/10">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </SpotlightCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                {/* Process Section */}
                <section className="py-24 bg-zinc-900/50">
                    <div className="container px-6 mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">Development Lifecycle</h2>
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

                {/* Client Success Section Removed */}

                <FeaturedCaseStudies filterTag="Web Development" />

                {/* Pricing Section */}
                <section className="py-24 relative">
                    <div className="container px-6 mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Development Packages</h2>
                            <p className="text-lg text-zinc-400">
                                Clear milestones and deliverables. Choose the right scope for your project.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {projectPackages.map((plan, index) => (
                                <SpotlightCard
                                    key={index}
                                    className={`p-8 flex flex-col bg-zinc-900 border-white/10 ${plan.popular ? 'border-cyan-500/30 ring-1 ring-cyan-500/30' : ''}`}
                                >
                                    {plan.popular && (
                                        <div className="self-start px-3 py-1 mb-4 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                                            {plan.badge ?? 'Best Value'}
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <div className="mb-4">
                                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                                        {plan.billing && <span className="text-zinc-400">{plan.billing}</span>}
                                    </div>
                                    <p className="text-zinc-400 text-sm mb-8">{plan.description}</p>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                                                <CheckCircle className="h-5 w-5 text-cyan-400 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        className={`w-full ${plan.popular ? 'bg-cyan-600 hover:bg-cyan-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                                        asChild
                                    >
                                        <Link href="/contact">{plan.cta}</Link>
                                    </Button>
                                </SpotlightCard>
                            ))}
                        </div>

                        <div className="mt-20 text-center max-w-3xl mx-auto mb-12">
                            <h3 className="text-2xl md:text-4xl font-bold mb-4 text-white">Maintenance Plans</h3>
                            <p className="text-lg text-zinc-400">
                                Ongoing care to keep your site secure, fast, and up to date.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {maintenancePlans.map((plan, index) => (
                                <SpotlightCard
                                    key={index}
                                    className={`p-8 flex flex-col bg-zinc-900 border-white/10 ${plan.popular ? 'border-cyan-500/30 ring-1 ring-cyan-500/30' : ''}`}
                                >
                                    {plan.popular && (
                                        <div className="self-start px-3 py-1 mb-4 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                                            {plan.badge ?? 'Best Value'}
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <div className="mb-4">
                                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                                        {plan.billing && <span className="text-zinc-400">{plan.billing}</span>}
                                    </div>
                                    <p className="text-zinc-400 text-sm mb-8">{plan.description}</p>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                                                <CheckCircle className="h-5 w-5 text-cyan-400 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        className={`w-full ${plan.popular ? 'bg-cyan-600 hover:bg-cyan-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                                        asChild
                                    >
                                        <Link href="/contact">{plan.cta}</Link>
                                    </Button>
                                </SpotlightCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                {/* Tech Stack Marquee (Simplified as static grid for now) */}
                <section className="py-24 border-t border-white/10">
                    <div className="container px-6 mx-auto">
                        <h2 className="text-xl text-center text-zinc-500 font-medium mb-12 uppercase tracking-widest">Technologies We Master</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
                            {/* Tech Stack Icons */}
                            <div className="text-center group flex flex-col items-center">
                                <img
                                    src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png"
                                    alt="Next.js"
                                    className="h-12 w-auto object-contain mb-3 group-hover:scale-110 transition-transform"
                                />
                                <span className="font-semibold text-white">Next.js</span>
                            </div>
                            <div className="text-center group flex flex-col items-center">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                    alt="React"
                                    className="h-12 w-auto object-contain mb-3 group-hover:scale-110 transition-transform"
                                />
                                <span className="font-semibold text-white">React</span>
                            </div>
                            <div className="text-center group flex flex-col items-center">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                    alt="TypeScript"
                                    className="h-12 w-auto object-contain mb-3 group-hover:scale-110 transition-transform"
                                />
                                <span className="font-semibold text-white">TypeScript</span>
                            </div>
                            <div className="text-center group flex flex-col items-center">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                                    alt="Tailwind CSS"
                                    className="h-12 w-auto object-contain mb-3 group-hover:scale-110 transition-transform"
                                />
                                <span className="font-semibold text-white">Tailwind</span>
                            </div>
                            <div className="text-center group flex flex-col items-center">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                    alt="Node.js"
                                    className="h-12 w-auto object-contain mb-3 group-hover:scale-110 transition-transform"
                                />
                                <span className="font-semibold text-white">Node.js</span>
                            </div>
                            <div className="text-center group flex flex-col items-center">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                                    alt="Express.js"
                                    className="h-12 w-auto object-contain mb-3 group-hover:scale-110 transition-transform brightness-0 invert"
                                />
                                <span className="font-semibold text-white">Express</span>
                            </div>
                            <div className="text-center group flex flex-col items-center">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                                    alt="PostgreSQL"
                                    className="h-12 w-auto object-contain mb-3 group-hover:scale-110 transition-transform"
                                />
                                <span className="font-semibold text-white">PostgreSQL</span>
                            </div>
                            <div className="text-center group flex flex-col items-center">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                    alt="MongoDB"
                                    className="h-12 w-auto object-contain mb-3 group-hover:scale-110 transition-transform"
                                />
                                <span className="font-semibold text-white">MongoDB</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                {/* FAQ Section */}
                <section className="py-24 bg-black relative">
                    <div className="container px-6 mx-auto relative z-10 max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">Common Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
                                    <details className="group">
                                        <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                                            <span className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">{faq.question}</span>
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
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Related Services */}
                <section className="py-12 bg-zinc-900/30 border-t border-white/5">
                    <div className="container px-6 mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="text-center md:text-left">
                                <h3 className="text-lg font-semibold text-white mb-2">Explore Other Services</h3>
                                <p className="text-zinc-400 text-sm">Comprehensive solutions for your digital ecosystem.</p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/services/ai-agents">
                                    <Button variant="outline" className="border-white/10 hover:bg-white/5 text-zinc-300 hover:text-white">AI Agents</Button>
                                </Link>
                                <Link href="/services/cybersecurity">
                                    <Button variant="outline" className="border-white/10 hover:bg-white/5 text-zinc-300 hover:text-white">Cybersecurity</Button>
                                </Link>
                                <Link href="/services/web-security">
                                    <Button variant="outline" className="border-white/10 hover:bg-white/5 text-zinc-300 hover:text-white">Web Security</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

            </main>

            <Footer className="!mt-0 !border-t-0" />
        </div>
    );
}
