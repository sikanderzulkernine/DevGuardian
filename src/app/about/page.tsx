import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Users, Target, Zap, Globe, Briefcase, Award, CheckCircle, TrendingUp, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { GlobalContact } from '@/components/global-contact';
import { SurfaceCard } from '@/components/ui/surface-card';
import { CalendlyButton } from '@/components/calendly-button';
import { CountUp } from '@/components/ui/count-up';
import { HeroAmbientLighting } from '@/components/hero-ambient-lighting';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About DevGuardian | Secure Digital Innovation',
  description: 'DevGuardian bridges the gap between rapid innovation and ironclad security. Meet our team of cybersecurity experts and AI engineers.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About DevGuardian | Secure Digital Innovation',
    description: 'Empowering businesses with secure, cutting-edge digital solutions.',
    type: 'profile',
  },
};
import { JsonLd } from '@/components/seo/json-ld';

const stats = [
  { label: 'Years Experience', value: '5+', icon: <Briefcase className="h-6 w-6 text-white" /> },
  { label: 'Security Experts', value: '50+', icon: <Shield className="h-6 w-6 text-white" /> },
  { label: 'Projects Delivered', value: '230+', icon: <CheckCircle className="h-6 w-6 text-white" /> },
  { label: 'Client Satisfaction', value: '98%', icon: <Users className="h-6 w-6 text-white" /> },
];

const values = [
  {
    icon: <Shield className="h-10 w-10 text-white mb-4" />,
    title: 'Security First',
    description: 'Security is not an add-on; it’s our foundation. We integrate robust protection into every layer of our solutions from day one.',
  },
  {
    icon: <Users className="h-10 w-10 text-white mb-4" />,
    title: 'Client-Centric',
    description: 'Your success is our priority. We build lasting partnerships based on transparency, trust, and shared goals.',
  },
  {
    icon: <Zap className="h-10 w-10 text-white mb-4" />,
    title: 'Innovation Driven',
    description: 'We stay ahead of the curve, leveraging the latest technologies to solve complex problems with elegance and efficiency.',
  },
  {
    icon: <Target className="h-10 w-10 text-white mb-4" />,
    title: 'Results Focused',
    description: 'We deliver measurable impact. Our solutions are designed to drive growth, efficiency, and real-world value.',
  },
];

const team = [
  {
    name: 'Sikandar Zulkernine',
    role: 'CEO & Founder',
    bio: 'Cybersecurity specialist, penetration tester, and full-stack web developer ensuring enterprise-grade secure systems.',
  },
  {
    name: 'Jafrin Islam',
    role: 'Head of Cybersecurity Operations',
    bio: 'Certified penetration tester specializing in threat detection, vulnerability analysis, and enterprise security hardening.',
  },
  {
    name: 'Hasibur Rahman',
    role: 'Lead AI Engineer',
    bio: 'AI systems architect focusing on AI automation, AI agents, and predictive analytics for secure digital environments.',
  },
  {
    name: 'Fariq Abdullah',
    role: 'Junior Web Developer',
    bio: 'Frontend & backend development support, assisting in building scalable and secure applications.',
  },
];

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      '@id': absoluteUrl('/#organization'),
      name: 'DevGuardian',
      foundingDate: '2023', // Approximate based on context
      founder: {
        '@type': 'Person',
        name: 'Sikandar Zulkernine',
        jobTitle: 'CEO',
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      <JsonLd data={schema} />
      {/* Ambient Background Glows - Monochrome */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <Header reserveSpace={false} />

      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden py-24 md:py-32">
          <HeroAmbientLighting tone="neutral" />
          <div className="container relative z-10 px-6 mx-auto text-center" data-reveal="fade-up">
            <Badge variant="outline" className="mb-6 px-4 py-1 text-sm font-medium rounded-full text-white border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
              Who We Are
            </Badge>
            <h1 className="fluid-h1 font-bold tracking-tight mb-6 text-white">
              Building the Future, <br className="hidden md:block" />
              <span className="text-white">
                Securing the Present.
              </span>
            </h1>
            <p className="fluid-lead text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              DevGuardian is a premier agency bridging the gap between rapid innovation and ironclad security.
              We empower businesses to grow boldly without compromising on safety.
            </p>
          </div>
        </section>

        {/* Stats Section - Monochrome */}
        <section className="py-16 md:py-24 border-b border-white/10 bg-black relative">
          {/* Modern Straight Light Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12" data-reveal-stagger>
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 text-center" data-reveal="scale-in">
                  <div className="p-3 bg-white/10 rounded-full mb-2 border border-white/20 text-white">
                    {stat.icon}
                  </div>
                  <CountUp value={stat.value} className="text-3xl md:text-4xl font-bold tracking-tight text-white" />
                  <span className="text-sm md:text-base text-zinc-400 font-medium uppercase tracking-wide">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Modern Straight Light Effect - Bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 md:py-32">
          <div className="container px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8" data-reveal="fade-up">
                <div className="space-y-4">
                  <h2 className="fluid-h3 font-bold text-white">Our Mission</h2>
                  <p className="text-lg text-zinc-400 leading-relaxed">
                    DevGuardian helps teams build AI-powered web products and protect them from modern threats. We deliver AI agents, secure web development, and cybersecurity practices embedded across design, CI/CD, and production, backed by fast, expert support when critical issues arise.
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="fluid-h3 font-bold text-white">Our Vision</h2>
                  <p className="text-lg text-zinc-400 leading-relaxed">
                    A digital world where security is built into every product from day one and automation makes strong protection the default, enabling organizations to innovate and earn lasting customer trust.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-6">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-white" />
                    <span className="font-medium text-white">Global Reach</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-white" />
                    <span className="font-medium text-white">Continuous Improvement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-white" />
                    <span className="font-medium text-white">Industry Certified</span>
                  </div>
                </div>
              </div>

              <div className="relative" data-reveal="scale-in">
                <div className="absolute -inset-4 bg-white/5 rounded-xl opacity-20 blur-xl" />
                <SurfaceCard className="p-8 md:p-12 shadow-2xl bg-zinc-900 border-white/10">
                  <h3 className="fluid-h3 font-semibold mb-6 text-white">Why We Exist</h3>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white/10 p-2 rounded-full h-fit border border-white/20">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-white">To Prevent Breaches</h4>
                        <p className="text-zinc-400">Proactive threat modeling to stop attacks before they happen.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white/10 p-2 rounded-full h-fit border border-white/20">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-white">To Accelerate Development</h4>
                        <p className="text-zinc-400">Integrating security into CI/CD pipelines for faster, safer releases.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white/10 p-2 rounded-full h-fit border border-white/20">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg text-white">To Build Trust</h4>
                        <p className="text-zinc-400">Helping you earn and keep the trust of your customers through data integrity.</p>
                      </div>
                    </li>
                  </ul>
                </SurfaceCard>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 md:py-32 relative">
          <div className="container px-6 mx-auto relative z-10">
            <div className="mx-auto mb-16 max-w-3xl text-center" data-reveal="fade-up">
              <h2 className="fluid-h2 font-bold mb-6 text-white">Our Core Values</h2>
              <p className="text-lg text-zinc-400">
                The principles that guide our decisions, our code, and our relationships.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
              {values.map((value, index) => (
                <SurfaceCard key={index} className="flex h-full flex-col bg-zinc-900 p-6" data-reveal="fade-up">
                  <div className="mb-6 text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </SurfaceCard>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="container px-6 mx-auto">
            <div className="mx-auto mb-16 max-w-3xl text-center" data-reveal="fade-up">
              <h2 className="fluid-h2 font-bold mb-6 text-white">Meet The Team</h2>
              <p className="text-lg text-zinc-400">
                The security architects, engineers, and strategists behind your protection.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
              {team.map((member, index) => (
                <SurfaceCard key={index} className="group relative flex h-full flex-col overflow-hidden bg-zinc-900 p-5" data-reveal="fade-up">
                  {/* Briefcase icon positioned absolutely in top-right, stays above content */}
                  <div className="absolute top-3 right-3 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                    <Briefcase className="h-20 w-20 text-white rotate-12" />
                  </div>
                  {/* Content with proper padding to avoid icon */}
                  <div className="relative z-10 mb-3 pr-16">
                    <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">{member.name}</h3>
                    <p className="text-sm font-medium text-zinc-400 uppercase tracking-wider mt-1">{member.role}</p>
                  </div>
                  <div className="relative z-10 mt-auto">
                    <div className="w-12 h-1 bg-white/20 mb-3 rounded-full" />
                    <p className="text-zinc-400 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </SurfaceCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-white text-black relative overflow-hidden light-section">
          <div className="container px-6 mx-auto relative z-10">
            <SurfaceCard className="border-none bg-white p-8 text-center shadow-none md:p-10" data-reveal="fade-up">
              <h2 className="fluid-h2 font-bold mb-6 text-black">Ready to Secure Your Future?</h2>
              <p className="fluid-lead text-zinc-600 max-w-2xl mx-auto mb-8 font-medium">
                From high-converting websites to real-time security and AI agents, we help you grow faster and stay protected 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CalendlyButton size="lg" className="premium-button h-12 bg-black px-8 text-lg font-semibold text-white shadow-xl transition-all hover:bg-zinc-800 hover:shadow-2xl">
                  Book a call
                </CalendlyButton>
              </div>
            </SurfaceCard>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-black relative">
          <div className="container px-6 mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center" data-reveal="fade-up">
                <h2 className="fluid-h2 font-bold mb-6 text-white">Frequently Asked Questions</h2>
                <p className="text-lg text-zinc-400">
                  Learn more about DevGuardian's services, expertise, and how we can help your business
                </p>
              </div>

              <div className="space-y-4" data-reveal-stagger>
                {/* FAQ 1 */}
                <SurfaceCard className="bg-zinc-900 border-white/10" data-reveal="fade-up">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-white list-none">
                      What services does DevGuardian offer?
                      <ChevronDown className="ml-4 h-5 w-5 text-white group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                      DevGuardian specializes in three core areas: AI agent development for business automation, secure web application development with security-first engineering, and comprehensive cybersecurity services including penetration testing, vulnerability assessments, and security audits. We integrate security practices across design, CI/CD pipelines, and production environments.
                    </div>
                  </details>
                </SurfaceCard>

                {/* FAQ 2 */}
                <SurfaceCard className="bg-zinc-900 border-white/10" data-reveal="fade-up">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-white list-none">
                      Who are the team members at DevGuardian?
                      <ChevronDown className="ml-4 h-5 w-5 text-white group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                      Our team includes Sikandar Zulkernine (CEO & Founder) with expertise in cybersecurity, penetration testing, and full-stack development; Jafrin Islam (Head of Cybersecurity Operations) specializing in threat detection and vulnerability analysis; Hasibur Rahman (Lead AI Engineer) focused on AI automation and AI agents; and Fariq Abdullah (Junior Web Developer) providing development support.
                    </div>
                  </details>
                </SurfaceCard>

                {/* FAQ 3 */}
                <SurfaceCard className="bg-zinc-900 border-white/10" data-reveal="fade-up">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-white list-none">
                      What makes DevGuardian different from other cybersecurity companies?
                      <ChevronDown className="ml-4 h-5 w-5 text-white group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                      DevGuardian combines AI-powered solutions with security-first engineering. We don't treat security as an afterthought—it's embedded into every layer from day one. Our team delivers enterprise-grade secure systems with fast, expert support, ensuring that innovation and protection work together seamlessly.
                    </div>
                  </details>
                </SurfaceCard>

                {/* FAQ 4 */}
                <SurfaceCard className="bg-zinc-900 border-white/10" data-reveal="fade-up">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-white list-none">
                      How does DevGuardian ensure web applications are secure?
                      <ChevronDown className="ml-4 h-5 w-5 text-white group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                      We follow "Secure by Design" principles, integrating security practices throughout the development lifecycle. This includes secure coding practices, automated security testing in CI/CD pipelines, regular penetration testing, vulnerability assessments, and continuous monitoring in production. Security is built in, not bolted on.
                    </div>
                  </details>
                </SurfaceCard>

                {/* FAQ 5 */}
                <SurfaceCard className="bg-zinc-900 border-white/10" data-reveal="fade-up">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-white list-none">
                      What types of businesses does DevGuardian work with?
                      <ChevronDown className="ml-4 h-5 w-5 text-white group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                      We work with businesses of all sizes—from startups building their first secure product to established enterprises needing advanced AI automation and security hardening. Our services are tailored to meet the unique needs of each client, whether you need full-scale development, security audits, or ongoing support.
                    </div>
                  </details>
                </SurfaceCard>

                {/* FAQ 6 */}
                <SurfaceCard className="bg-zinc-900 border-white/10" data-reveal="fade-up">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-white list-none">
                      How long does it take to complete a security audit or penetration test?
                      <ChevronDown className="ml-4 h-5 w-5 text-white group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                      The timeline depends on the scope and complexity of your system. A typical security audit or penetration test takes 1-3 weeks, including initial assessment, testing, reporting, and remediation guidance. We provide fast, expert support and work with your timeline to ensure minimal disruption to your operations.
                    </div>
                  </details>
                </SurfaceCard>

                {/* FAQ 7 */}
                <SurfaceCard className="bg-zinc-900 border-white/10" data-reveal="fade-up">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-white list-none">
                      How can I get started with DevGuardian?
                      <ChevronDown className="ml-4 h-5 w-5 text-white group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                      Getting started is simple! Contact us through our contact form or reach out directly to our team. We'll schedule an initial consultation to understand your needs, discuss your goals, and create a tailored plan. Our experts typically respond within 24 hours to discuss how we can help secure and scale your business.
                    </div>
                  </details>
                </SurfaceCard>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Integration */}
        <GlobalContact variant="solid" />

      </main>

      <Footer />
    </div>
  );
}
