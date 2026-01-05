'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LightingEffects, ScrollLighting } from '@/components/lighting-effects';
import { caseStudies } from '@/data/case-studies';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CaseStudyCard } from './case-study-card';

export function CaseStudiesList() {
    const [visibleCount, setVisibleCount] = useState(6);

    const visibleStudies = caseStudies.slice(0, visibleCount);
    const hasMore = visibleCount < caseStudies.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 3, caseStudies.length));
    };

    return (
        <ScrollLighting>
            <div className="min-h-screen bg-black text-foreground relative overflow-hidden">
                <Header />
                <LightingEffects />
                <main className="pt-32 pb-20">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 relative z-10">
                                Case Studies
                            </h1>
                            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto text-glow-dark">
                                Real-world examples of how we deliver value to our clients through security, AI, and performance engineering.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {visibleStudies.map((study, index) => (
                                <CaseStudyCard key={study.id} study={study} index={index} />
                            ))}
                        </div>

                        {hasMore && (
                            <div className="flex justify-center mt-12">
                                <button
                                    onClick={handleLoadMore}
                                    className="group relative inline-flex items-center gap-2 rounded-full border border-white/30 bg-white px-8 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-95"
                                >
                                    <div className="absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-black/40 to-transparent"></div>
                                    <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-black/40 to-transparent"></div>
                                    Show More
                                </button>
                            </div>
                        )}

                        {!hasMore && caseStudies.length > 6 && (
                            <div className="flex justify-center mt-12">
                                <button
                                    onClick={() => setVisibleCount(6)}
                                    className="group relative inline-flex items-center gap-2 rounded-full border border-white/30 bg-white px-8 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-95"
                                >
                                    <div className="absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-black/40 to-transparent"></div>
                                    <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-black/40 to-transparent"></div>
                                    Show Less
                                </button>
                            </div>
                        )}
                    </div>
                </main>
                <Footer />
            </div>
        </ScrollLighting>
    );
}
