'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Clock, Users, Building, Shield, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { LightingEffects, ScrollLighting, CardLighting } from '@/components/lighting-effects';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { CaseStudy } from '@/data/case-studies';

type CaseStudyDetailClientProps = {
    study: CaseStudy;
};

export function CaseStudyDetailClient({ study }: CaseStudyDetailClientProps) {
    return (
        <ScrollLighting>
            <div className="min-h-screen bg-black text-foreground relative overflow-hidden">
                <Header />
                <LightingEffects />

                <main className="pt-32 pb-20">
                    <div className="container mx-auto px-6">
                        <Link href="/case-studies" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
                        </Link>

                        {/* Header Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-12"
                        >
                            <div className="flex flex-wrap gap-2 mb-4">
                                {study.tags.map((tag, i) => (
                                    <Badge key={i} variant="outline" className="border-primary/20 text-primary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow-dark">{study.title}</h1>
                            {study.subtitle && (
                                <p className="text-2xl text-muted-foreground mb-6">{study.subtitle}</p>
                            )}
                        </motion.div>

                        {/* Meta Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                        >
                            <CardLighting>
                                <Card className="h-full border-border/20 bg-background/50">
                                    <CardHeader className="pb-2">
                                        <div className="flex items-center gap-2 text-primary mb-1">
                                            <Building className="h-5 w-5" />
                                            <span className="font-semibold">Client</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-foreground/80">{study.client}</p>
                                    </CardContent>
                                </Card>
                            </CardLighting>

                            <CardLighting>
                                <Card className="h-full border-border/20 bg-background/50">
                                    <CardHeader className="pb-2">
                                        <div className="flex items-center gap-2 text-primary mb-1">
                                            <Clock className="h-5 w-5" />
                                            <span className="font-semibold">Duration</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-foreground/80">{study.duration}</p>
                                    </CardContent>
                                </Card>
                            </CardLighting>

                            <CardLighting>
                                <Card className="h-full border-border/20 bg-background/50">
                                    <CardHeader className="pb-2">
                                        <div className="flex items-center gap-2 text-primary mb-1">
                                            <Users className="h-5 w-5" />
                                            <span className="font-semibold">Team</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-foreground/80">
                                            {Array.isArray(study.team) ? study.team.join(', ') : study.team}
                                        </p>
                                    </CardContent>
                                </Card>
                            </CardLighting>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Content Column */}
                            <div className="lg:col-span-2 space-y-12">

                                {/* Situation */}
                                <section>
                                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                        <Shield className="h-6 w-6 text-primary" />
                                        Situation
                                    </h2>
                                    <div className="prose prose-invert max-w-none text-foreground/80 leading-relaxed">
                                        <p>{study.situation}</p>
                                    </div>
                                </section>

                                {/* Objectives */}
                                <section>
                                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                        <Target className="h-6 w-6 text-primary" />
                                        Objectives
                                    </h2>
                                    <ul className="space-y-3">
                                        {study.objectives.map((obj, i) => (
                                            <li key={i} className="flex items-start gap-3 text-foreground/80">
                                                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                                                <span>{obj}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                {/* What We Did */}
                                <section>
                                    <h2 className="text-2xl font-bold mb-6">What We Did</h2>
                                    <div className="space-y-6">
                                        {study.whatWeDid.map((item, i) => (
                                            <CardLighting key={i}>
                                                <Card className="border-border/20 bg-zinc-900/30">
                                                    <CardHeader>
                                                        <CardTitle className="text-lg text-primary">{item.title}</CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <p className="text-foreground/80 mb-2">{item.description}</p>
                                                        {item.items && (
                                                            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm ml-2">
                                                                {item.items.map((subItem, j) => (
                                                                    <li key={j}>{subItem}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </CardContent>
                                                </Card>
                                            </CardLighting>
                                        ))}
                                    </div>
                                </section>

                                {/* Difficulties */}
                                <section>
                                    <h2 className="text-2xl font-bold mb-6">Challenges & Solutions</h2>
                                    <div className="space-y-6">
                                        {study.difficulties.map((item, i) => (
                                            <div key={i} className="border-l-2 border-primary/30 pl-6 py-2">
                                                <h3 className="text-lg font-semibold text-foreground mb-2">{item.issue}</h3>
                                                <p className="text-foreground/80 italic">Solution: {item.solution}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Future */}
                                {study.future && (
                                    <section className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                                        <h2 className="text-xl font-bold mb-2">What's Next (Phase 2)</h2>
                                        <p className="text-foreground/80">{study.future}</p>
                                    </section>
                                )}

                            </div>

                            {/* Sidebar Column */}
                            <div className="lg:col-span-1 space-y-8">

                                {/* Outcomes */}
                                <CardLighting>
                                    <Card className="border-border/20 bg-gradient-to-br from-primary/10 to-transparent">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <Target className="h-5 w-5" />
                                                Key Outcomes
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-4">
                                                {study.outcomes.map((outcome, i) => (
                                                    <li key={i} className="relative pl-6">
                                                        <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" />
                                                        <span className="text-sm font-medium leading-relaxed">{outcome}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </CardLighting>

                                {/* Deliverables */}
                                <div className="bg-zinc-900/50 rounded-xl p-6 border border-white/5">
                                    <h3 className="text-lg font-bold mb-4">Deliverables</h3>
                                    <ul className="space-y-3">
                                        {study.deliverables.map((item, i) => (
                                            <li key={i} className="text-sm text-foreground/70 border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Services Tags */}
                                <div className="bg-zinc-900/50 rounded-xl p-6 border border-white/5">
                                    <h3 className="text-lg font-bold mb-4">Services Provided</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {study.services.map((service, i) => (
                                            <Badge key={i} variant="secondary" className="bg-white/5 hover:bg-white/10 text-foreground/80">
                                                {service}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-20 text-center">
                            <h3 className="text-2xl font-bold mb-6">Ready to achieve similar results?</h3>
                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold px-8">
                                    Start Your Project
                                </Button>
                            </Link>
                        </div>

                    </div>
                </main>

                <Footer />
            </div>
        </ScrollLighting>
    );
}
