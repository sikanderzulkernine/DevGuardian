import React from 'react';
import { Metadata } from 'next';
import { Bot, Brain, Zap, MessageSquare, Workflow, BarChart, CheckCircle, ArrowRight, ChevronDown, Shield } from 'lucide-react';
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
    title: 'AI Agents & Automation Solutions | DevGuardian',
    description: 'Custom autonomous AI agents for enterprise. Automate support, data analysis, and workflows with secure, private LLM integration.',
    alternates: {
        canonical: 'https://devguardian.site/services/ai-agents',
    },
    openGraph: {
        title: 'AI Agents & Automation Solutions | DevGuardian',
        description: 'Custom autonomous AI agents for enterprise. Automate support, data analysis, and workflows with secure, private LLM integration.',
        url: 'https://devguardian.site/services/ai-agents',
        type: 'website',
        images: [
            {
                url: '/og-image.webp',
                width: 1200,
                height: 630,
                alt: 'AI Agents & Automation Solutions | DevGuardian',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Agents & Automation Solutions | DevGuardian',
        description: 'Custom autonomous AI agents for enterprise. Automate support, data analysis, and workflows with secure, private LLM integration.',
        images: ['/og-image.webp'],
    },
};

const features = [
    {
        icon: <Bot className="h-8 w-8 text-white" />,
        title: 'Autonomous Operations',
        description: 'Agents that work 24/7 without supervision, handling tasks from customer service to data entry.',
    },
    {
        icon: <Brain className="h-8 w-8 text-white" />,
        title: 'Advanced Intelligence',
        description: 'Powered by state-of-the-art LLMs (GPT-4, Claude) to understand context, nuance, and intent.',
    },
    {
        icon: <Workflow className="h-8 w-8 text-white" />,
        title: 'Seamless Integration',
        description: 'Connects with your existing stack, including CRMs, databases, APIs, and communication tools.',
    },
    {
        icon: <Shield className="h-8 w-8 text-white" />,
        title: 'Secure by Design',
        description: 'Enterprise-grade data privacy and security controls built into every agent interaction.',
    },
];

const process = [
    { step: '01', title: 'Discovery', description: 'We map your workflows and identify high-impact automation opportunities.' },
    { step: '02', title: 'Strategy', description: 'Designing the agent architecture, personality, and integration points.' },
    { step: '03', title: 'Development', description: 'Building and training your custom AI agents using cutting-edge models.' },
    { step: '04', title: 'Testing', description: 'Rigorous testing for accuracy, safety, and edge-case handling.' },
    { step: '05', title: 'Deployment', description: 'Seamless launch and integration into your production environment.' },
];

const projectPackages = [
    {
        name: 'Starter Agent',
        price: '$750+',
        billing: '/project',
        description: 'Perfect for specific tasks like FAQ support or basic data capture.',
        features: [
            'Custom Knowledge Base Integration',
            'Web-based Chat Interface',
            'Basic CRM Integration',
            'Post-launch support (30 days)',
            'Response Time < 2s',
            'Training on Your Data',
        ],
        cta: 'Get Started',
    },
    {
        name: 'Workflow Automation',
        price: '$1,500+',
        billing: '/project',
        description: 'Multi-step autonomous agents for complex business logic.',
        popular: true,
        features: [
            'Multi-step Reasoning Chains',
            'API Integrations (Zapier/Make)',
            'Custom Function Calling',
            'Advanced Analytics Dashboard',
            'Priority Support 24/7',
            'Vector Database Setup',
        ],
        cta: 'Get Started',
    },
    {
        name: 'Enterprise Matrix',
        price: 'Custom',
        billing: '',
        description: 'Full-scale AI workforce integration for large organizations.',
        features: [
            'Fine-tuned Custom Models (LLaMA/Mistral)',
            'On-Premise / Private Cloud Usage',
            'SLA-backed Performance',
            'Dedicated AI Engineer',
            'Full Security Compliance (SOC2)',
            'Multi-Agent Orchestration',
        ],
        cta: 'Contact Sales',
    },
];

const maintenancePlans = [
    {
        name: 'Standard Care',
        price: '$150',
        billing: '/2 months',
        description: 'Short-term coverage to stabilize production agents after launch.',
        features: [
            'Prompt and model tuning',
            'Monitoring and alerting',
            'Knowledge base refreshes',
            'Minor workflow tweaks',
            'Quality and safety checks',
            'Usage report and recommendations',
        ],
        cta: 'Choose Standard',
    },
    {
        name: 'Growth Care',
        price: '$450',
        billing: '/6 months',
        description: 'Proactive optimization with priority support and tuning.',
        popular: true,
        features: [
            'Proactive tuning and retraining',
            'Monitoring, alerting, and incident response',
            'Integration and workflow updates',
            'Guardrail and safety review',
            'Priority support queue',
            'Performance and cost optimization',
            'Monthly usage report',
        ],
        cta: 'Choose Growth',
    },
    {
        name: 'Premium Care',
        price: '$750',
        billing: '/year',
        description: 'Full-year partnership for continuous improvement and guidance.',
        features: [
            'Ongoing model and prompt optimization',
            'Continuous monitoring and incident triage',
            'Knowledge base refreshes and expansion',
            'Workflow upgrades and new intents',
            'Quarterly system and safety audits',
            'Monthly analytics and cost optimization',
            'Dedicated improvement roadmap',
            'Priority support queue',
        ],
        cta: 'Choose Premium',
    },
];

const faqs = [
    {
        question: "How do AI agents differ from chatbots?",
        answer: "Chatbots follow simple scripts. Our AI agents can reason, plan, and execute actions (like checking a calendar, reading a PDF, or updating a CRM) autonomously to solve complex problems."
    },
    {
        question: "Is my data secure and private?",
        answer: "Yes. We can deploy agents using private LLM instances or local open-source models (like LLaMA 3) that run entirely within your infrastructure, ensuring no data ever leaves your control."
    },
    {
        question: "What systems can you integrate with?",
        answer: "We connect with almost anything: Salesforce, HubSpot, Zendesk, Stripe, Google Workspace, Slack, SQL databases, and any platform with a REST API."
    },
    {
        question: "What happens if the AI makes a mistake?",
        answer: "We build 'Human-in-the-Loop' workflows. For high-stakes actions, the agent will draft a response or action and wait for human approval before execution."
    },
    {
        question: "What is the ROI?",
        answer: "Our clients typically see a 60% reduction in support ticket volume and a 5x increase in lead qualification speed within the first month."
    }
];

export default function AIAgentsPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI Agent Development',
        provider: { '@id': 'https://devguardian.site/#organization' },
        description: 'End-to-end development of autonomous AI agents for customer support, data analysis, and workflow automation.',
        areaServed: 'Global',
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
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <Header />

            <main className="flex-grow relative z-10">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32">
                    <div className="container px-6 mx-auto text-center">
                        <Badge variant="outline" className="mb-6 px-4 py-1 text-sm font-medium rounded-full text-blue-400 border-blue-400/20 bg-blue-400/5">
                            Future of Work
                        </Badge>
                        <h1 className="fluid-h1 font-bold tracking-tight mb-6 text-white">
                            Smarter Workflows with <br className="hidden md:block" />
                            <span className="text-white">
                                Intelligent AI Agents
                            </span>
                        </h1>
                        <p className="fluid-lead text-white max-w-3xl mx-auto mb-10 leading-relaxed">
                            Stop drowning in repetitive tasks. We build autonomous AI agents that handle support,
                            manage data, and execute complex workflows, freeing your team to focus on growth.
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
                                <div className="text-3xl font-bold text-white mb-1"><CountUp value="24/7" /></div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">Availability</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1"><CountUp value="90%" /></div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">Cost Reduction</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1"><CountUp value="0.2s" /></div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">Response Time</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1"><CountUp value="100%" /></div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">Focus on Growth</div>
                            </div>
                        </div>
                    </div>
                </section>

                <CompanyMarquee />

                {/* Features Grid */}
                <section className="py-24 relative">
                    <div className="container px-6 mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="fluid-h2 font-bold mb-6 text-white">Why Implement AI Agents?</h2>
                            <p className="fluid-lead text-zinc-400">
                                More than just chatbots. Our agents can reason, take action, and solve problems across your business.
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
                        <h2 className="fluid-h2 font-bold mb-16 text-center text-white">How We Build</h2>
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
                            <h2 className="fluid-h2 font-bold mb-6 text-white">Client Feedback</h2>
                            <p className="fluid-lead text-zinc-400">
                                See how our AI agents are transforming businesses.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Arjun Mehta",
                                    role: "CTO, FinTech Co",
                                    quote: "DevGuardian's AI agents completely transformed our customer support. Response times dropped by 60% overnight.",
                                    img: "/clients/client-1.webp"
                                },
                                {
                                    name: "Priya Shah",
                                    role: "Operations Director",
                                    quote: "Implementing their AI automation workflows saved our team 20 hours a week. The ROI was immediate.",
                                    img: "/clients/client-4.webp"
                                },
                                {
                                    name: "Ayaan Malik",
                                    role: "Product Manager",
                                    quote: "The AI integration was seamless. It feels like magic how it handles complex user queries automatically.",
                                    img: "/clients/client-7.webp"
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



                <FeaturedCaseStudies filterTag="AI Agents" />

                {/* Pricing Section */}
                <section className="py-24 relative">
                    <div className="container px-6 mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="fluid-h2 font-bold mb-6 text-white">AI Agent Packages</h2>
                            <p className="fluid-lead text-zinc-400">
                                Launch the right agent scope with clear project pricing.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {projectPackages.map((plan, index) => (
                                <SurfaceCard
                                    key={index}
                                    className={`p-8 flex flex-col ${plan.popular
                                        ? 'bg-white border-blue-500/60 ring-1 ring-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.35)] light-section'
                                        : 'bg-zinc-900 border-white/10'
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="self-start px-3 py-1 mb-4 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-200">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.name}</h3>
                                    <div className="mb-4">
                                        <span className={`text-4xl font-bold ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.price}</span>
                                        {plan.billing && (
                                            <span className={plan.popular ? 'text-zinc-600' : 'text-zinc-400'}>
                                                {plan.billing}
                                            </span>
                                        )}
                                    </div>
                                    <p className={`text-sm mb-8 ${plan.popular ? 'text-zinc-700' : 'text-zinc-400'}`}>{plan.description}</p>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className={`flex items-start gap-3 text-sm ${plan.popular ? 'text-zinc-700' : 'text-zinc-300'}`}>
                                                <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                                        asChild
                                    >
                                        <Link href="/contact">{plan.cta}</Link>
                                    </Button>
                                </SurfaceCard>
                            ))}
                        </div>

                        <div className="mt-20 text-center max-w-3xl mx-auto mb-12">
                            <h3 className="fluid-h3 font-bold mb-4 text-white">Maintenance Plans</h3>
                            <p className="fluid-lead text-zinc-400">
                                Keep your agents reliable with 2, 6, or 12-month care plans.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {maintenancePlans.map((plan, index) => (
                                <SurfaceCard
                                    key={index}
                                    className={`p-8 flex flex-col ${plan.popular
                                        ? 'bg-[#f3f3f3] border-blue-500/60 ring-1 ring-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.35)] light-section'
                                        : 'bg-zinc-900 border-white/10'
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="self-start px-3 py-1 mb-4 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-200">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.name}</h3>
                                    <div className="mb-4">
                                        <span className={`text-4xl font-bold ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.price}</span>
                                        {plan.billing && (
                                            <span className={plan.popular ? 'text-zinc-600' : 'text-zinc-400'}>
                                                {plan.billing}
                                            </span>
                                        )}
                                    </div>
                                    <p className={`text-sm mb-8 ${plan.popular ? 'text-zinc-700' : 'text-zinc-400'}`}>{plan.description}</p>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className={`flex items-start gap-3 text-sm ${plan.popular ? 'text-zinc-700' : 'text-zinc-300'}`}>
                                                <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                                        asChild
                                    >
                                        <Link href="/contact">{plan.cta}</Link>
                                    </Button>
                                </SurfaceCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                {/* Use Cases / Examples */}
                <section className="py-24 border-t border-white/10">
                    <div className="container px-6 mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="fluid-h2 font-bold mb-6 text-white">Real-World Applications</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-white/10 p-2 h-fit rounded-lg"><MessageSquare className="h-6 w-6 text-white" /></div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Customer Support Agent</h3>
                                        <p className="text-zinc-400">Handle 80% of support queries instantly, resolving issues and routing complex tickets to humans.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-white/10 p-2 h-fit rounded-lg"><BarChart className="h-6 w-6 text-white" /></div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Data Analyst Bot</h3>
                                        <p className="text-zinc-400">Process spreadsheets, generate reports, and find insights from your raw data automatically.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-white/10 p-2 h-fit rounded-lg"><Zap className="h-6 w-6 text-white" /></div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Lead Qualification</h3>
                                        <p className="text-zinc-400">Engage site visitors, qualify prospects based on criteria, and book meetings for your sales team.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full" />
                            <SurfaceCard className="relative bg-zinc-950 p-8 border-white/10">
                                <div className="space-y-4">
                                    <div className="flex gap-3 items-start">
                                        <div className="bg-zinc-800 p-2 rounded-lg"><Bot className="h-5 w-5 text-white" /></div>
                                        <div className="bg-zinc-800 p-3 rounded-tr-xl rounded-b-xl max-w-[80%]">
                                            <p className="text-sm text-zinc-300">I've analyzed your sales data from last month. Revenue is up 15%, driven mostly by the new enterprise plan.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start justify-end">
                                        <div className="bg-blue-600/20 p-3 rounded-tl-xl rounded-b-xl max-w-[80%] border border-blue-500/20">
                                            <p className="text-sm text-white">That's great! Can you break down the churn rate by region?</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <div className="bg-zinc-800 p-2 rounded-lg"><Bot className="h-5 w-5 text-white" /></div>
                                        <div className="bg-zinc-800 p-3 rounded-tr-xl rounded-b-xl max-w-[80%]">
                                            <p className="text-sm text-zinc-300">Certainly. North America has the lowest churn at 2.1%, while Europe is at 4.5%. I've prepared a chart for you.</p>
                                        </div>
                                    </div>
                                </div>
                            </SurfaceCard>
                        </div>
                    </div>
                </section>

                {/* Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                {/* FAQ Section */}
                <section className="py-24 bg-black relative">
                    <div className="container px-6 mx-auto relative z-10 max-w-4xl">
                        <h2 className="fluid-h2 font-bold mb-12 text-center text-white">Common Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
                                    <details className="group">
                                        <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                                            <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">{faq.question}</span>
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
                                <Link href="/services/cybersecurity">
                                    <Button variant="outline" className="border-white/10 hover:bg-white/5 text-zinc-300 hover:text-white">Cybersecurity</Button>
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
        </div >
    );
}
