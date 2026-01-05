import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import { FAQ } from '@/components/faq';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { Button } from '@/components/ui/button';
import { CalendlyButton } from '@/components/calendly-button';

import { Mail, MapPin, Phone, Clock, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact DevGuardian | Security & AI Experts',
  description: 'Get in touch for a free security consultation or AI automation strategy. Available 24/7 for critical infrastructure support.',
};
import { JsonLd } from '@/components/seo/json-ld';

export default function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    description: 'Contact DevGuardian for cybersecurity audits and AI development.',
    mainEntity: {
      '@type': 'Organization',
      '@id': 'https://devguardian.site/#organization',
    },
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <JsonLd data={schema} />
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8">Request a callback to discuss your project and security goals.</p>
            <CalendlyButton size="lg" className="bg-white text-black hover:bg-zinc-200 transition-colors">
              Book a call
            </CalendlyButton>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left Column - Contact Form */}
            <div className="w-full">
              <SpotlightCard className="p-8 md:p-12 shadow-2xl bg-zinc-900 border-white/10">
                <ContactForm compact={true} title="Send us a message" subtitle="We're here to help with your security and AI needs." />
              </SpotlightCard>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Why work with us?</h3>
                <p className="text-zinc-400 text-lg">
                  We specialize in building secure, scalable, and intelligent systems. Whether you need a custom AI agent or a complete security audit, our team is ready to deliver.
                </p>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-white mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Available 24/7</h4>
                    <p className="text-zinc-400">Round-the-clock support for your critical infrastructure.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                <div className="space-y-6"> {/* Increased gap for cleaner look without boxes */}
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-white" />
                    <div>
                      <p className="text-sm text-zinc-400">Email</p>
                      <a href="mailto:team@devguardian.site" className="text-white hover:text-gray-300 transition-colors">team@devguardian.site</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-white" />
                    <div>
                      <p className="text-sm text-zinc-400">Phone</p>
                      <a href="tel:+8801644425655" className="text-white hover:text-gray-300 transition-colors">+880 16444 25655</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <MapPin className="h-5 w-5 text-white" />
                  <div>
                    <p className="text-sm text-zinc-400">Location</p>
                    <p className="text-white">Lalmatia Block C, Dhaka, Bangladesh</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FAQ />

      {/* Gradient Line Separator */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <Footer className="!mt-0 !border-t-0" />
    </div>
  );
}
