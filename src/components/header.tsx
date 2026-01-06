'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Cpu, Globe, Lock, ChevronDown } from 'lucide-react';
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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkText, setIsDarkText] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [isPointerInsideServices, setIsPointerInsideServices] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesMenuValue = 'services';
  const closeDelayMs = 3000;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const header = document.querySelector('header');
      if (header) {
        const headerRect = header.getBoundingClientRect();
        const headerCenterY = headerRect.top + headerRect.height / 2;
        const lightSections = document.querySelectorAll('.light-section');
        let isOverLight = false;
        lightSections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (headerCenterY >= rect.top && headerCenterY <= rect.bottom) {
            isOverLight = true;
          }
        });
        setIsDarkText(isOverLight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.05, rotate: 5 },
  };

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
      <motion.header
        className={`fixed isolate top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 rounded-2xl border border-border/20 ${isScrolled ? 'w-[90%] max-w-6xl' : 'w-[95%] max-w-7xl'
          }`}
        initial="initial"
        animate="animate"
        whileHover={isScrolled ? {} : { scale: 1.02 }}
      >
        <div className={`glass hover:border-primary/30 transition-colors rounded-2xl px-6 py-4 ${isDarkText ? 'bg-white/80 border-black/10' : ''}`}>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <motion.div variants={logoVariants} whileHover="hover">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="relative w-8 h-8">
                  <Image
                    src="/logo.png"
                    alt="DevGuardian Logo"
                    fill
                    className={`object-contain ${isDarkText ? 'brightness-0' : ''}`}
                  />
                </div>
                <span className={`text-xl font-bold transition-colors ${isDarkText ? 'text-black' : 'text-foreground group-hover:text-primary'}`}>
                  DevGuardian
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavigationMenu
                value={activeMenu}
                onValueChange={handleMenuValueChange}
              >
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/" className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 ${isDarkText ? 'text-black hover:bg-black/10' : ''}`}>
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem value={servicesMenuValue}>
                    <NavigationMenuTrigger
                      className={`bg-transparent hover:bg-accent ${isDarkText ? 'text-black hover:bg-black/10' : ''}`}
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
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                      <Link href="/about" className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 ${isDarkText ? 'text-black hover:bg-black/10' : ''}`}>
                        About
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Button asChild className="glow-primary hover-lighting">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className={`h-5 w-5 ${isDarkText ? 'text-black' : ''}`} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="glass border-border/20 p-6">
                <div className="flex flex-col space-y-6 mt-12 px-2">
                  <Link
                    href="/"
                    className="text-lg font-medium hover:text-primary transition-colors py-2"
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
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/about"
                    className="text-lg font-medium hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>

                  <div className="pt-4">
                    <Button asChild className="glow-primary w-full h-12 text-base">
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
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-24" />
    </>
  );
}

