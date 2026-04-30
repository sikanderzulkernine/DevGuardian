import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FAQ } from '@/components/faq';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, MapPin, Briefcase } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: 'Careers | DevGuardian',
    description: 'Join the team building the future of secure AI. View open positions at DevGuardian.',
    alternates: {
        canonical: '/careers',
    },
};

const careersFaqs = [
    {
        question: "What is the interview process like?",
        answer: "Our process typically includes an initial recruiter screen, a technical assessment (take-home or live coding), a system design interview, and a final culture fit chat with our founders."
    },
    {
        question: "Are these roles on-site?",
        answer: "Yes—our roles are primarily on-site to support close collaboration and delivery."
    },
    {
        question: "What benefits do you provide?",
        answer: "We offer competitive salaries, equity packages, comprehensive health insurance, a home office stipend, and unlimited PTO."
    },
    {
        question: "Do you offer internships?",
        answer: "Yes, we run a summer internship program for engineering and security roles. Keep an eye on our careers page for openings in early Spring."
    },
    {
        question: "How can I prepare for the interview?",
        answer: "Brush up on your core engineering concepts, be ready to discuss security best practices, and most importantly, be yourself. We value curiosity and a growth mindset."
    },
    {
        question: "How long does the hiring process take?",
        answer: "We aim to move quickly. The typical time from application to offer is 2-3 weeks."
    }
];

const openPositions = [
    {
        title: "Senior Security Engineer",
        department: "Engineering",
        location: "On-site",
        type: "Full-time",
        overview: "Lead security engineering for client systems and internal platforms, focusing on prevention, detection, and response.",
        responsibilities: [
            "Threat modeling",
            "Security reviews",
            "Penetration testing support",
            "Hardening",
            "Detection rules",
            "Incident response playbooks"
        ],
        eligibility: [
            "5+ years security engineering",
            "Web/app security (OWASP)",
            "Cloud basics",
            "Scripting (Python/Bash)",
            "Strong reporting/communication"
        ]
    },
    {
        title: "AI Research Scientist",
        department: "R&D",
        location: "On-site",
        type: "Full-time",
        overview: "Research and prototype applied ML/AI approaches for cybersecurity and automation.",
        responsibilities: [
            "Model prototyping",
            "Evaluation",
            "Dataset curation",
            "Experimentation",
            "Collaboration with engineering to ship"
        ],
        eligibility: [
            "MS/PhD or equivalent experience",
            "Python",
            "PyTorch/TensorFlow",
            "Solid ML fundamentals",
            "Ability to communicate results clearly"
        ]
    },
    {
        title: "Frontend Developer (React/Next.js)",
        department: "Engineering",
        location: "On-site",
        type: "Full-time",
        overview: "Build high-quality, fast, accessible interfaces for DevGuardian products and client dashboards.",
        responsibilities: [
            "React/Next.js development",
            "UI state management",
            "Performance optimization",
            "Accessibility",
            "API integration"
        ],
        eligibility: [
            "3+ years frontend",
            "React + Next.js",
            "TypeScript",
            "Responsive design",
            "Clean component architecture"
        ]
    },
    {
        title: "Product Designer",
        department: "Design",
        location: "On-site",
        type: "Contract",
        overview: "Design intuitive product experiences from concept to handoff.",
        responsibilities: [
            "User flows",
            "Wireframes",
            "High-fidelity UI",
            "Prototypes",
            "Design systems",
            "Dev handoff"
        ],
        eligibility: [
            "Strong portfolio",
            "Figma",
            "UX fundamentals",
            "Ability to explain decisions and iterate with feedback"
        ]
    }
];

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Header />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    {/* Hero Section */}
                    <div className="text-center mb-24">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                            Join the Mission
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
                            We're building the future of secure AI. If you're passionate about cybersecurity, artificial intelligence, and building unbreakable systems, we want to hear from you.
                        </p>
                        <Link href="/careers#open-positions" scroll={true}>
                            <Button size="lg" className="bg-white text-black hover:bg-zinc-200 transition-colors rounded-full font-semibold">
                                View Open Roles <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>

                    {/* Culture Section: Why work at DevGuardian */}
                    <div className="max-w-4xl mx-auto mb-24">
                        <h2 className="text-3xl font-bold text-white mb-6 text-center md:text-left">Why work at DevGuardian</h2>
                        <p className="text-xl text-zinc-400 mb-8 max-w-2xl text-center md:text-left">
                            We conduct our work in-person to fostor the highest levels of collaboration, trust, and speed.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="p-6 rounded-xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
                                <h3 className="text-lg font-semibold text-white mb-3">On-site Collaboration</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Work closely with the team in person. We solve hard problems faster when we are together.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
                                <h3 className="text-lg font-semibold text-white mb-3">Mission-Driven</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Protect systems, users, and data. Your daily contributions directly make the digital world safer.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
                                <h3 className="text-lg font-semibold text-white mb-3">Growth & Learning</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    We invest in you with mentorship, a dedicated training budget, and support for certifications.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Open Positions */}
                    <div id="open-positions" className="max-w-4xl mx-auto scroll-mt-32">
                        <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>

                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {openPositions.map((position, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border border-white/10 bg-zinc-900/50 rounded-xl px-2 mb-4 overflow-hidden data-[state=open]:bg-zinc-900/80 transition-all"
                                >
                                    <AccordionTrigger className="px-4 py-6 hover:no-underline hover:bg-white/5 rounded-lg transition-colors">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left pr-4">
                                            <span className="text-lg font-semibold text-white">{position.title}</span>
                                            <div className="flex flex-wrap items-center gap-3 mt-2 md:mt-0 text-sm text-zinc-400 font-normal">
                                                <span className="bg-white/5 px-2 py-1 rounded border border-white/5">{position.department}</span>
                                                <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {position.location}</span>
                                                <span className="flex items-center"><Briefcase className="w-3 h-3 mr-1" /> {position.type}</span>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-4 pb-6 pt-2">
                                        <div className="text-zinc-300 space-y-6">
                                            <div>
                                                <p className="text-lg">{position.overview}</p>
                                            </div>

                                            <div>
                                                <h4 className="text-white font-semibold mb-2">Responsibilities</h4>
                                                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                                                    {position.responsibilities.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="text-white font-semibold mb-2">Requirements</h4>
                                                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                                                    {position.eligibility.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="pt-4 border-t border-white/10">
                                                <h4 className="text-white font-semibold mb-2">How to Apply</h4>
                                                <p className="text-zinc-400">
                                                    Email your resume and a short note to <a href="mailto:team@devguardian.site" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">team@devguardian.site</a>
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <p className="mt-12 text-center text-zinc-500">
                            Don't see the perfect fit? <a href="mailto:team@devguardian.site" className="text-zinc-300 hover:text-white underline decoration-zinc-700 transition-colors">Contact us</a> anyway.
                        </p>
                    </div>
                </div>
            </main>

            <FAQ items={careersFaqs} title="Careers FAQ" description="Questions about joining our team" />

            <Footer />
        </div>
    );
}
