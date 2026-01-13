'use client';

import React, { useEffect, useState } from 'react';

type EffectPosition = 'fixed' | 'absolute';

export function LightingEffects({ position = 'fixed' }: { position?: EffectPosition }) {
  const [scrollY, setScrollY] = useState(0);
  const [isInteractive, setIsInteractive] = useState(true);
  const positionClass = position === 'absolute' ? 'absolute' : 'fixed';

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointerQuery = window.matchMedia('(pointer: coarse)');
    const updateInteractivity = () => {
      setIsInteractive(!(reducedMotionQuery.matches || coarsePointerQuery.matches));
    };

    updateInteractivity();
    reducedMotionQuery.addEventListener('change', updateInteractivity);
    coarsePointerQuery.addEventListener('change', updateInteractivity);

    return () => {
      reducedMotionQuery.removeEventListener('change', updateInteractivity);
      coarsePointerQuery.removeEventListener('change', updateInteractivity);
    };
  }, []);

  useEffect(() => {
    if (!isInteractive) {
      setScrollY(0);
      return;
    }

    let frameId: number | null = null;
    const handleScroll = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [isInteractive]);

  return (
    <div className={`${positionClass} inset-0 pointer-events-none z-[1]`}>
      {/* Ambient lighting based on scroll */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at 50% ${20 + scrollY * 0.05}%, oklch(0.95 0.01 240 / 0.2) 0%, transparent 50%)`,
          filter: 'blur(60px)',
        }}
      />

      {/* Pulsing accent lights */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full animate-pulse-glow opacity-30"
        style={{
          background: 'radial-gradient(circle, oklch(0.95 0.01 240 / 0.2) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full animate-pulse-glow opacity-30"
        style={{
          background: 'radial-gradient(circle, oklch(0.9 0.01 240 / 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '1s',
        }}
      />
    </div>
  );
}

// Scroll-triggered lighting effect
export function ScrollLighting({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <ScrollLightingOverlay />
      {children}
    </div>
  );
}

export function ScrollLightingOverlay({ position = 'fixed' }: { position?: EffectPosition }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInteractive, setIsInteractive] = useState(true);
  const positionClass = position === 'absolute' ? 'absolute' : 'fixed';

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointerQuery = window.matchMedia('(pointer: coarse)');
    const updateInteractivity = () => {
      setIsInteractive(!(reducedMotionQuery.matches || coarsePointerQuery.matches));
    };

    updateInteractivity();
    reducedMotionQuery.addEventListener('change', updateInteractivity);
    coarsePointerQuery.addEventListener('change', updateInteractivity);

    return () => {
      reducedMotionQuery.removeEventListener('change', updateInteractivity);
      coarsePointerQuery.removeEventListener('change', updateInteractivity);
    };
  }, []);

  useEffect(() => {
    if (!isInteractive) {
      setScrollProgress(0);
      return;
    }

    let frameId: number | null = null;
    const handleScroll = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        const progress = Math.min(currentScroll / scrollHeight, 1);
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [isInteractive]);

  return (
    <>
      {/* Dynamic lighting overlay */}
      <div
        className={`${positionClass} inset-0 pointer-events-none z-[1] transition-all duration-300`}
        style={{
          background: `linear-gradient(180deg, 
            oklch(0.95 0.01 240 / ${0.05 + scrollProgress * 0.1}) 0%, 
            oklch(0.22 0.01 240 / ${0.03 + scrollProgress * 0.05}) 50%, 
            oklch(0.9 0.01 240 / ${0.02 + scrollProgress * 0.03}) 100%)`,
          filter: 'blur(100px)',
        }}
      />

      {/* Side lighting effects */}
      <div
        className={`${positionClass} left-0 top-0 h-full w-96 pointer-events-none z-[1] transition-all duration-500`}
        style={{
          background: `radial-gradient(ellipse at left center, 
            oklch(0.95 0.01 240 / ${0.1 + scrollProgress * 0.1}) 0%, 
            transparent 70%)`,
          filter: 'blur(80px)',
          transform: `translateX(${-100 + scrollProgress * 50}px)`,
        }}
      />

      <div
        className={`${positionClass} right-0 top-0 h-full w-96 pointer-events-none z-[1] transition-all duration-500`}
        style={{
          background: `radial-gradient(ellipse at right center, 
            oklch(0.9 0.01 240 / ${0.1 + scrollProgress * 0.1}) 0%, 
            transparent 70%)`,
          filter: 'blur(80px)',
          transform: `translateX(${100 - scrollProgress * 50}px)`,
        }}
      />
    </>
  );
}

// Interactive card lighting
export function CardLighting({ children, className = '' }: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}
