import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CardLighting } from '@/components/lighting-effects';
import Link from 'next/link';
import Image from 'next/image';
import { CaseStudy } from '@/data/case-studies';

interface CaseStudyCardProps {
    study: CaseStudy;
    index: number;
    delay?: number;
}

export function CaseStudyCard({ study, index, delay = 0.1 }: CaseStudyCardProps) {
    return (
        <CardLighting>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * delay }}
                viewport={{ once: true }}
                className="h-full"
            >
                <Link href={`/case-studies/${study.slug}`} className="block h-full group">
                    <Card className="border-border/20 overflow-hidden h-full flex flex-col hover:border-primary/50 transition-colors duration-300">
                        <div className="relative h-48 overflow-hidden bg-zinc-900 border-b border-border/10">
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
                            <Image
                                src={study.image}
                                alt={study.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <CardHeader>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {study.tags.slice(0, 3).map((tag, i) => (
                                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">{study.title}</CardTitle>
                            <CardDescription className="line-clamp-2">{study.subtitle || study.situation}</CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto pt-0">
                            <div className="flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors mt-4">
                                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </motion.div>
        </CardLighting>
    );
}
