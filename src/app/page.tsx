'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Cpu, Globe, Lock, CheckCircle, Star, Users, TrendingUp, Zap, Code, Database, Cloud, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { ContactForm } from '@/components/contact-form';
import { GlobalContact } from '@/components/global-contact';
import { LightingEffects, ScrollLighting, TextLighting, CardLighting } from '@/components/lighting-effects';
import { CountUp } from '@/components/ui/count-up';
import { TestimonialsSection } from '@/components/testimonials';
import { CaseStudiesSection } from '@/components/case-studies';
import { WhyChooseUsSection } from '@/components/why-choose-us';
import { FAQ } from '@/components/faq';
import { BackToTop } from '@/components/back-to-top';

const services = [
  {
    icon: <Cpu className="h-8 w-8" />,
    title: 'AI Agents',
    description: 'Intelligent automation solutions powered by cutting-edge AI technology',
    features: ['Natural Language Processing', 'Machine Learning Models', 'Automation Workflows'],
    color: 'text-white',
    href: '/services/ai-agents',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions for modern digital threats',
    features: ['Threat Detection', 'Security Audits', 'Incident Response'],
    color: 'text-white',
    href: '/services/cybersecurity',
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Modern, scalable web applications built for performance',
    features: ['Full-Stack Development', 'Progressive Web Apps', 'API Integration'],
    color: 'text-white',
    href: '/services/web-development',
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: 'Web Security',
    description: 'Advanced security testing and vulnerability assessments',
    features: ['Penetration Testing', 'Code Review', 'Security Training'],
    color: 'text-white',
    href: '/services/web-security',
  },
];

const processSteps = [
  {
    step: '1',
    title: 'Discovery & Analysis',
    description: 'We analyze your requirements and security landscape to understand your unique challenges.',
  },
  {
    step: '2',
    title: 'Strategy & Planning',
    description: 'Our experts develop a comprehensive strategy tailored to your business objectives.',
  },
  {
    step: '3',
    title: 'Implementation & Development',
    description: 'We build and deploy secure, scalable solutions using industry best practices.',
  },
  {
    step: '4',
    title: 'Testing & Validation',
    description: 'Rigorous testing ensures your solution meets security and performance standards.',
  },
  {
    step: '5',
    title: 'Support & Evolution',
    description: 'Ongoing support and continuous improvement to keep your systems secure and up-to-date.',
  },
];

const stats = [
  { label: 'Projects Completed', value: '230+', icon: <CheckCircle className="h-5 w-5" /> },
  { label: 'Security Audits', value: '350+', icon: <Shield className="h-5 w-5" /> },
  { label: 'Happy Clients', value: '200+', icon: <Users className="h-5 w-5" /> },
  { label: 'Years Experience', value: '5+', icon: <TrendingUp className="h-5 w-5" /> },
];

export default function HomePage() {
  return (
    <ScrollLighting>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <Header />
        <LightingEffects />

        {/* Template Hero (moved from template folder) */}
        <Hero />

        {/* Stats Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <CardLighting key={index}>
                  <Card className="border-border/20 text-center">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-2 text-primary">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-1">
                        <CountUp value={stat.value} />
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </CardLighting>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Our Services</h2>
              <p className="text-2xl text-foreground/80 max-w-2xl mx-auto text-glow-dark">
                Comprehensive solutions that combine innovation with security
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <CardLighting key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Link href={service.href} className="block h-full">
                      <Card className="border-border/20 hover:border-primary/30 transition-all duration-300 group h-full flex flex-col">
                        <CardHeader>
                          <div className={`flex items-center space-x-2 mb-2 ${service.color}`}>
                            {service.icon}
                            <CardTitle className="text-xl">{service.title}</CardTitle>
                          </div>
                          <CardDescription className="text-muted-foreground">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto">
                          <ul className="space-y-2 mb-4">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 group-hover:bg-primary/10">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                </CardLighting>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Process Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Our Process</h2>
              <p className="text-2xl text-foreground/80 max-w-2xl mx-auto text-glow-dark">
                A systematic approach to delivering secure, innovative solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <CardLighting key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center h-full"
                  >
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-white">{step.step}</span>
                    </div>
                    <Card className="border-border/20 h-[calc(100%-5rem)] bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                        <CardDescription className="text-base">{step.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                </CardLighting>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <CaseStudiesSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Form Section */}
        <GlobalContact />

        <Footer />
        <BackToTop />
      </div>
    </ScrollLighting>
  );
}