import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Linkedin, Calendar } from 'lucide-react';
import { CalendlyButton } from './calendly-button';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps = {}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative isolate z-10 glass transition-colors ${className || ''}`}>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />
      <div className="container mx-auto px-6 py-12">
        {/* Main content columns */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4" data-reveal-stagger>
          {/* Branding & Socials Column (Left Side) */}
          <div className="flex flex-col space-y-6" data-reveal="fade-up">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.webp"
                  alt="DevGuardian Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">DevGuardian</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI-powered automation and secure web solutions that help your business grow with confidence.
            </p>

            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/company/devguardian"
                className="premium-button rounded-lg glass p-2 transition-colors hover:bg-accent"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://twitter.com/devguardian"
                className="premium-button group rounded-lg glass p-2 transition-colors hover:bg-accent"
                aria-label="X (formerly Twitter)"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current text-foreground group-hover:text-primary transition-colors"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href="https://wa.me/8801644425655"
                className="premium-button group rounded-lg glass p-2 transition-colors hover:bg-accent"
                aria-label="WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current text-foreground group-hover:text-primary transition-colors"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div data-reveal="fade-up">
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/ai-agents" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-muted-foreground hover:text-primary transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-security" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Security Column */}
          <div data-reveal="fade-up">
            <h4 className="font-semibold text-foreground mb-4">Legal & Security</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-muted-foreground hover:text-primary transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/responsible-disclosure" className="text-muted-foreground hover:text-primary transition-colors">
                  Responsible Disclosure
                </Link>
              </li>
              <li>
                <Link href="/responsible-disclosure#report" className="text-muted-foreground hover:text-primary transition-colors">
                  Report a Security Issue
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div data-reveal="fade-up">
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:team@devguardian.site"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>team@devguardian.site</span>
              </a>
              <a
                href="tel:+8801644425655"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+880 1644425655</span>
              </a>
              <CalendlyButton
                variant="ghost"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-left p-0 h-auto hover:bg-transparent justify-start"
              >
                <Calendar className="h-4 w-4 mr-2" />
                <span>Book a call</span>
              </CalendlyButton>
              <Link
                href="/careers"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Careers
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border/20 pt-8" data-reveal="fade-in">
          <div className="flex justify-center items-center">
            <p className="text-muted-foreground text-sm">
              (c) {currentYear} DevGuardian. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

