"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const defaultFaqs = [
    {
        question: "What makes DevGuardian's AI agents different?",
        answer:
            "Our AI agents are built on proprietary models that are specifically trained for secure enterprise environments. Unlike generic bots, they understand complex workflows, adhere to strict security protocols, and can autonomously handle tasks ranging from customer support to threat detection with 99.9% accuracy.",
    },
    {
        question: "How do you ensure the security of your web applications?",
        answer:
            "We adopt a 'security-first' approach to development. This involves implementing secure coding practices from day one, conducting regular automated and manual penetration testing, and integrating real-time threat monitoring. All our applications undergo a rigorous security audit before deployment.",
    },
    {
        question: "Can you integrate AI solutions into our existing legacy systems?",
        answer:
            "Yes, we specialize in modernizing legacy infrastructure. Our team builds custom API layers and middleware that allow your existing systems to communicate seamlessly with modern AI tools, enabling you to leverage cutting-edge technology without a complete system overhaul.",
    },
    {
        question: "What industries do you primarily serve?",
        answer:
            "While we work with a diverse range of clients, we have deep expertise in FinTech, Healthcare, and E-commerce sectors where security and compliance (like HIPAA, GDPR, and PCI-DSS) are paramount.",
    },
    {
        question: "How long does a typical security audit take?",
        answer:
            "The duration depends on the size and complexity of your infrastructure. A standard web application audit typically takes 1-2 weeks, while a comprehensive enterprise-wide security assessment may take 3-4 weeks. We provide a detailed timeline after our initial discovery phase.",
    },
    {
        question: "Do you provide ongoing support after project delivery?",
        answer:
            "Absolutely. We offer various support and maintenance packages that include 24/7 monitoring, regular security updates, performance optimization, and priority feature development to ensure your solution evolves with your business.",
    },
];

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items?: FAQItem[];
    title?: string;
    description?: string;
}

export function FAQ({ items = defaultFaqs, title = "Frequently Asked Questions", description = "Everything you need to know about our services and process" }: FAQProps) {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="fluid-h2 font-bold mb-4 relative z-10">
                        {title}
                    </h2>
                    <p className="fluid-lead text-foreground/80 max-w-2xl mx-auto text-glow-dark">
                        {description}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {items.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-white/10 bg-zinc-900 backdrop-blur-md rounded-lg px-6 overflow-hidden"
                            >
                                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
