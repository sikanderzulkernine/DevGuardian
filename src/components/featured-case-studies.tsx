'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CardLighting } from '@/components/lighting-effects';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies as allCaseStudies } from '@/data/case-studies';

// Helper to filter case studies by a specific tag/category or fallback to first 3
export function FeaturedCaseStudies({ filterTag }: { filterTag?: string }) {

    // Logic: if filterTag is provided, try to find matches. 
    // If no matches (or no tag), fallback to the first 3 general case studies.
    let relevantStudies = allCaseStudies;

    if (filterTag) {
        // Create regex for flexible matching (case-insensitive)
        const regex = new RegExp(filterTag, 'i');
        const filtered = allCaseStudies.filter(study =>
            study.tags.some(tag => regex.test(tag)) ||
            regex.test(study.title) ||
            (study.services && study.services.some(s => regex.test(s)))
        );

        if (filtered.length > 0) {
            relevantStudies = filtered;
        }
    }

    // Limit to 3 items
    const displayStudies = relevantStudies.slice(0, 3);

    const CaseStudyImage = ({ src, alt }: { src: string; alt: string }) => {
        const fallbackSrc = `https://placehold.co/600x400/1a1a1a/666666?text=${encodeURIComponent(alt)}`;
        const [imgSrc, setImgSrc] = useState(src);

        return (
            <Image
                src={imgSrc}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                onError={() => {
                    if (imgSrc !== fallbackSrc) {
                        setImgSrc(fallbackSrc);
                    }
                }}
            />
        );
    };

    return (
        <section className="py-24 bg-zinc-900/30 relative">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50 absolute top-0 left-0" />
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Recent Work</h2>
                    <p className="text-lg text-zinc-400">
                        Proven results from our latest engagements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayStudies.map((study, index) => (
                        <CardLighting key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="h-full"
                            >
                                <Card className="border-white/10 bg-zinc-900/50 overflow-hidden h-full flex flex-col group hover:border-white/20 transition-colors">
                                    <Link href={`/case-studies/${study.slug}`} className="block flex-grow">
                                        <div className="relative h-48 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                                            <CaseStudyImage src={study.image} alt={study.title} />
                                        </div>
                                        <CardHeader>
                                            <div className="flex flex-wrap gap-2 mb-3 mt-4">
                                                {study.tags.slice(0, 3).map((tag, i) => (
                                                    <Badge key={i} variant="outline" className="border-white/10 text-zinc-400 bg-white/5">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">{study.title}</CardTitle>
                                            <CardDescription className="line-clamp-2 text-zinc-400">{study.subtitle || study.situation}</CardDescription>
                                        </CardHeader>
                                    </Link>
                                    <CardContent className="mt-auto pt-0">
                                        <Link href={`/case-studies/${study.slug}`}>
                                            <Button variant="ghost" className="w-full text-white hover:text-white hover:bg-white/10 justify-between group-hover:underline decoration-blue-400/50 underline-offset-4">
                                                Read Analysis
                                                <ArrowRight className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </CardLighting>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <Link href="/case-studies">
                        <Button
                            className="bg-white text-black hover:bg-zinc-200 px-8 py-6 rounded-full text-base group font-medium transition-all"
                        >
                            More Case Studies
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50 absolute bottom-0 left-0" />
        </section>
    );
}
