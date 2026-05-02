'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Shield, Cpu, Globe, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const services = [
  {
    title: 'AI Agents',
    href: '/services/ai-agents',
    description: 'Intelligent automation solutions powered by cutting-edge AI',
    icon: <Cpu className="h-4 w-4" />,
  },
  {
    title: 'Cybersecurity',
    href: '/services/cybersecurity',
    description: 'Comprehensive security solutions for modern threats',
    icon: <Shield className="h-4 w-4" />,
  },
  {
    title: 'Web Development',
    href: '/services/web-development',
    description: 'Modern, scalable web applications built for performance',
    icon: <Globe className="h-4 w-4" />,
  },
  {
    title: 'Web Security',
    href: '/services/web-security',
    description: 'Advanced security testing and vulnerability assessments',
    icon: <Lock className="h-4 w-4" />,
  },
];

interface HeaderProps {
  reserveSpace?: boolean;
}

export function Header({ reserveSpace = true }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverLight, setIsOverLight] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [isPointerInsideServices, setIsPointerInsideServices] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesMenuValue = 'services';
  const closeDelayMs = 1500;

  useEffect(() => {
    let frameId: number | null = null;

    const handleScroll = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        setIsScrolled(window.scrollY > 20);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    const header = document.querySelector('header');
    const lightSections = Array.from(
      document.querySelectorAll<HTMLElement>('.light-section')
    );

    if (!header || lightSections.length === 0) {
      setIsOverLight(false);
      return;
    }

    const activeSections = new Set<Element>();
    let observer: IntersectionObserver | null = null;

    const observeSections = () => {
      observer?.disconnect();
      activeSections.clear();

      const headerRect = header.getBoundingClientRect();
      const bandHeight = Math.max(6, Math.round(headerRect.height * 0.2));
      const bandTop = headerRect.top + headerRect.height / 2 - bandHeight / 2;
      const topMargin = -Math.max(0, Math.floor(bandTop));
      const bottomMargin = -Math.max(
        0,
        Math.floor(window.innerHeight - bandTop - bandHeight)
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              activeSections.add(entry.target);
            } else {
              activeSections.delete(entry.target);
            }
          });
          setIsOverLight(activeSections.size > 0);
        },
        {
          root: null,
          rootMargin: `${topMargin}px 0px ${bottomMargin}px 0px`,
          threshold: 0,
        }
      );

      lightSections.forEach((section) => observer?.observe(section));
    };

    observeSections();
    window.addEventListener('resize', observeSections);

    return () => {
      window.removeEventListener('resize', observeSections);
      observer?.disconnect();
    };
  }, []);

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      return;
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu('');
      closeTimeoutRef.current = null;
    }, closeDelayMs);
  }, [closeDelayMs]);

  useEffect(() => () => clearCloseTimeout(), [clearCloseTimeout]);

  useEffect(() => {
    if (activeMenu === '') {
      setIsPointerInsideServices(false);
    }
  }, [activeMenu]);

  useEffect(() => {
    if (activeMenu !== servicesMenuValue) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const isInside = Boolean(target?.closest('[data-service-menu="true"]'));

      if (isInside) {
        if (!isPointerInsideServices) {
          setIsPointerInsideServices(true);
        }
        clearCloseTimeout();
        return;
      }

      if (isPointerInsideServices) {
        setIsPointerInsideServices(false);
      }
      scheduleClose();
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [
    activeMenu,
    clearCloseTimeout,
    isPointerInsideServices,
    scheduleClose,
    servicesMenuValue,
  ]);

  const handleMenuValueChange = (value: string) => {
    if (value === '' && isPointerInsideServices) {
      return;
    }
    if (value === '') {
      scheduleClose();
      return;
    }
    clearCloseTimeout();
    setActiveMenu(value);
  };

  const handleMenuPointerEnter = () => {
    setIsPointerInsideServices(true);
    clearCloseTimeout();
  };

  const handleMenuPointerLeave = () => {
    setIsPointerInsideServices(false);
    scheduleClose();
  };

  const openServicesMenu = () => {
    setActiveMenu(servicesMenuValue);
    setIsPointerInsideServices(true);
    clearCloseTimeout();
  };

  return (
    <>
      <header
        className={`fixed isolate left-3 right-3 z-50 rounded-2xl border border-border/20 transition-[top,width,max-width,box-shadow,border-color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:left-1/2 sm:right-auto sm:-translate-x-1/2 ${isScrolled ? 'top-3 shadow-2xl shadow-black/25 sm:w-[88%] sm:max-w-6xl' : 'top-4 sm:w-[95%] sm:max-w-7xl'
          }`}
      >
        <div className={`header-glass rounded-2xl px-4 sm:px-6 transition-[padding,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-primary/30 ${isScrolled ? 'py-3' : 'py-4'} ${isOverLight || isScrolled ? 'header-glass-strong' : ''}`}>
          <nav className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="group flex min-w-0 items-center space-x-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <div className={`relative shrink-0 transition-[height,width,transform] duration-300 ease-out group-hover:scale-[1.04] ${isScrolled ? 'h-7 w-7' : 'h-8 w-8'}`}>
                <Image
                  src="/logo.webp"
                  alt="DevGuardian Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className={`truncate font-bold text-foreground transition-[font-size,color] duration-300 group-hover:text-primary ${isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'}`}>
                DevGuardian
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavigationMenu
                value={activeMenu}
                onValueChange={handleMenuValueChange}
              >
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/" className="group inline-flex h-10 w-max cursor-pointer items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-[color,background-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 motion-reduce:hover:translate-y-0">
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem value={servicesMenuValue}>
                    <NavigationMenuTrigger
                      className="bg-transparent transition-[color,background-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent motion-reduce:hover:translate-y-0"
                      onPointerEnter={openServicesMenu}
                      onPointerLeave={handleMenuPointerLeave}
                      onClick={openServicesMenu}
                      onFocus={openServicesMenu}
                      data-service-menu="true"
                    >
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                      onPointerEnter={handleMenuPointerEnter}
                      onPointerLeave={handleMenuPointerLeave}
                      data-service-menu="true"
                    >
                      <div className="p-6 w-[400px] bg-black/95">
                        <div className="grid grid-cols-1 gap-3">
                          {services.map((service) => (
                            <NavigationMenuLink key={service.href} asChild>
                              <Link
                                href={service.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-[color,background-color,transform] duration-200 ease-out hover:translate-x-1 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground motion-reduce:hover:translate-x-0"
                              >
                                <div className="flex items-center space-x-2 text-sm font-medium leading-none text-white">
                                  {service.icon}
                                  <span>{service.title}</span>
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/about" className="group inline-flex h-10 w-max cursor-pointer items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-[color,background-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 motion-reduce:hover:translate-y-0">
                        About
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Button asChild className="premium-button glow-primary hover-lighting">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="absolute right-4 top-1/2 shrink-0 -translate-y-1/2 text-white hover:text-white md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="header-glass p-6">
                <div className="flex flex-col space-y-6 mt-12 px-2">
                  <Link
                    href="/"
                    className="py-2 text-lg font-medium transition-[color,transform] duration-200 ease-out hover:translate-x-1 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:hover:translate-x-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>

                  <div className="space-y-4">
                    <p className="text-lg font-medium py-2">Services</p>
                    <div className="pl-6 space-y-4 border-l border-white/10 ml-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block py-1 text-sm text-muted-foreground transition-[color,transform] duration-200 ease-out hover:translate-x-1 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:hover:translate-x-0"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/about"
                    className="py-2 text-lg font-medium transition-[color,transform] duration-200 ease-out hover:translate-x-1 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:hover:translate-x-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>

                  <div className="pt-4">
                    <Button asChild className="premium-button glow-primary h-12 w-full text-base">
                      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        Contact
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </header>

      {reserveSpace ? <div className="h-24" /> : null}
    </>
  );
}

