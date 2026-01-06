'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function LightingEffects() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[1]">
      {/* Mouse-following light */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-20 transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, oklch(0.95 0.01 240 / 0.3) 0%, transparent 70%)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
        }}
      />

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

// Text lighting wrapper component
export function TextLighting({ children, className = '' }: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, oklch(0.65 0.25 280 / 0.1) 0%, transparent 50%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
    </div>
  );
}

// Scroll-triggered lighting effect
export function ScrollLighting({ children }: { children: React.ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = Math.min(currentScroll / scrollHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Dynamic lighting overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] transition-all duration-300"
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
        className="fixed left-0 top-0 h-full w-96 pointer-events-none z-[1] transition-all duration-500"
        style={{
          background: `radial-gradient(ellipse at left center, 
            oklch(0.95 0.01 240 / ${0.1 + scrollProgress * 0.1}) 0%, 
            transparent 70%)`,
          filter: 'blur(80px)',
          transform: `translateX(${-100 + scrollProgress * 50}px)`,
        }}
      />

      <div
        className="fixed right-0 top-0 h-full w-96 pointer-events-none z-[1] transition-all duration-500"
        style={{
          background: `radial-gradient(ellipse at right center, 
            oklch(0.9 0.01 240 / ${0.1 + scrollProgress * 0.1}) 0%, 
            transparent 70%)`,
          filter: 'blur(80px)',
          transform: `translateX(${100 - scrollProgress * 50}px)`,
        }}
      />

      {children}
    </div>
  );
}

// Interactive card lighting
export function CardLighting({ children, className = '' }: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`relative hover-lighting ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-32 h-32 rounded-full opacity-50"
            style={{
              background: 'radial-gradient(circle, oklch(0.95 0.01 240 / 0.3) 0%, transparent 70%)',
              left: 'var(--mouse-x, 50%)',
              top: 'var(--mouse-y, 50%)',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(20px)',
            }}
          />
        </div>
      )}
    </div>
  );
}