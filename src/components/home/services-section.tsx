import Link from 'next/link';
import { ArrowRight, CheckCircle, Cpu, Globe, Lock, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CardLighting } from '@/components/card-lighting';

const services = [
  {
    icon: <Cpu className="h-8 w-8" />,
    title: 'AI Agents',
    description: 'Intelligent automation solutions powered by cutting-edge AI technology',
    features: ['Natural Language Processing', 'Machine Learning Models', 'Automation Workflows'],
    color: 'text-zinc-900',
    href: '/services/ai-agents',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions for modern digital threats',
    features: ['Threat Detection', 'Security Audits', 'Incident Response'],
    color: 'text-zinc-900',
    href: '/services/cybersecurity',
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Modern, scalable web applications built for performance',
    features: ['Full-Stack Development', 'Progressive Web Apps', 'API Integration'],
    color: 'text-zinc-900',
    href: '/services/web-development',
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: 'Web Security',
    description: 'Advanced security testing and vulnerability assessments',
    features: ['Penetration Testing', 'Code Review', 'Security Training'],
    color: 'text-zinc-900',
    href: '/services/web-security',
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="reveal-up mb-16 text-center">
          <h2 className="fluid-h2 font-bold mb-4 relative z-10">Our Services</h2>
          <p className="fluid-lead text-foreground/80 max-w-2xl mx-auto text-glow-dark">
            Comprehensive solutions that combine innovation with security
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          {services.map((service, index) => (
            <CardLighting key={index}>
              <div className="h-full" data-reveal="fade-up">
                <Link href={service.href} className="block h-full">
                  <Card className="group flex h-full flex-col border-zinc-200/70 !bg-white !text-zinc-900 !backdrop-blur-0 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-zinc-300">
                    <CardHeader>
                      <div className={`flex items-center space-x-2 mb-2 ${service.color}`}>
                        {service.icon}
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-zinc-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-zinc-700">
                            <CheckCircle className="h-4 w-4 text-zinc-900 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="premium-button inline-flex h-10 w-full cursor-pointer items-center justify-center rounded-md bg-[#E6E6E6] px-4 py-2 text-sm font-medium text-zinc-900 ring-offset-background transition-colors hover:bg-[#dcdcdc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group-hover:bg-[#dcdcdc]">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CardLighting>
          ))}
        </div>
      </div>
    </section>
  );
}
