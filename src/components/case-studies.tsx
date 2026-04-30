import React from 'react';
import Link from 'next/link';
import { caseStudies as allCaseStudies } from '@/data/case-studies';
import { CaseStudyCard } from './case-study-card';

const caseStudies = allCaseStudies.slice(0, 3);

export function CaseStudiesSection() {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="reveal-up mb-16 text-center">
                    <h2 className="fluid-h2 font-bold mb-4 relative z-10">Selected Case Studies</h2>
                    <p className="fluid-lead text-foreground/80 max-w-2xl mx-auto text-glow-dark">
                        Real-world examples of how we deliver value to our clients
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3" data-reveal-stagger>
                    {caseStudies.map((study) => (
                        <CaseStudyCard key={study.id} study={study} />
                    ))}
                </div>

                <div className="mt-12 flex justify-center" data-reveal="fade-up">
                    <Link href="/case-studies">
                        <button
                            className="premium-button group relative inline-flex items-center gap-2 rounded-full border border-white/30 bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-95"
                        >
                            <div className="absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-black/40 to-transparent"></div>
                            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-black/40 to-transparent"></div>
                            More Case Studies
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
