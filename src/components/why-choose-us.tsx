'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Users, Clock, Server, Lock } from 'lucide-react';
import { Card, CardDescription } from '@/components/ui/card';
import { CardLighting } from '@/components/lighting-effects';

export function WhyChooseUsSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="fluid-h2 font-bold mb-4 relative z-10">Why Choose DevGuardian</h2>
                    <p className="fluid-lead text-foreground/80 max-w-2xl mx-auto text-glow-dark">
                        We combine cutting-edge technology with security-first principles to deliver excellence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    {/* Left Column - Main Feature */}
                    <div className="h-full">
                        <CardLighting>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="h-full"
                            >
                                <Card className="card-solid h-full hover:border-primary/30 transition-colors flex flex-col justify-center items-center text-center p-8 min-h-[400px]">
                                    <div className="mb-6">
                                        <ShieldCheck className="h-16 w-16 text-green-500" />
                                    </div>
                                    <h3 className="fluid-h3 mb-4">Security First</h3>
                                    <CardDescription className="text-lg max-w-md">
                                        Security isn't just a feature; it's our foundation. Every line of code is written with security in mind, ensuring your digital assets are protected from day one.
                                    </CardDescription>
                                </Card>
                            </motion.div>
                        </CardLighting>
                    </div>

                    {/* Right Column - Grid of Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Secondary Feature - Medium Card */}
                        <div className="md:col-span-2">
                            <CardLighting>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="h-full"
                                >
                                    <Card className="card-solid h-full hover:border-primary/30 transition-colors p-5 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="text-blue-400">
                                                <Zap className="h-8 w-8" />
                                            </div>
                                            <h4 className="fluid-h4">Lightning Fast</h4>
                                        </div>
                                        <CardDescription className="text-base">
                                            Optimized solutions that deliver exceptional performance without compromising on security or reliability.
                                        </CardDescription>
                                    </Card>
                                </motion.div>
                            </CardLighting>
                        </div>

                        {/* Tertiary Feature - Small Card */}
                        <div className="md:col-span-1">
                            <CardLighting>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="h-full"
                                >
                                    <Card className="card-solid h-full hover:border-primary/30 transition-colors p-5">
                                        <div className="mb-4 text-purple-400">
                                            <Users className="h-8 w-8" />
                                        </div>
                                        <h4 className="fluid-h4 mb-2">Expert Team</h4>
                                        <CardDescription className="text-base">
                                            Specialists with years of experience in AI, cybersecurity, and web dev.
                                        </CardDescription>
                                    </Card>
                                </motion.div>
                            </CardLighting>
                        </div>

                        {/* Tertiary Feature - Small Card */}
                        <div className="md:col-span-1">
                            <CardLighting>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="h-full"
                                >
                                    <Card className="card-solid h-full hover:border-primary/30 transition-colors p-5">
                                        <div className="mb-4 text-cyan-400">
                                            <Clock className="h-8 w-8" />
                                        </div>
                                        <h4 className="fluid-h4 mb-2">24/7 Support</h4>
                                        <CardDescription className="text-base">
                                            Round-the-clock monitoring and support to keep your systems running smoothly.
                                        </CardDescription>
                                    </Card>
                                </motion.div>
                            </CardLighting>
                        </div>

                        {/* Secondary Feature - Medium Card */}
                        <div className="md:col-span-2">
                            <CardLighting>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="h-full"
                                >
                                    <Card className="card-solid h-full hover:border-primary/30 transition-colors p-5 flex flex-row items-center gap-6">
                                        <div className="text-orange-400 shrink-0">
                                            <Server className="h-10 w-10" />
                                        </div>
                                        <div>
                                            <h4 className="fluid-h4 mb-2">Scalable Architecture</h4>
                                            <CardDescription className="text-base">
                                                Built to grow with your business. Our solutions are designed for scalability and future-proofing from the ground up.
                                            </CardDescription>
                                        </div>
                                    </Card>
                                </motion.div>
                            </CardLighting>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
