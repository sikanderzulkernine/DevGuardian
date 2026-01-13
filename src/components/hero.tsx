"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { CalendlyButton } from "./calendly-button";
import { LightingEffects, ScrollLightingOverlay } from "./lighting-effects";
import { Badge } from "./ui/badge";

type GlQuality = {
  dpr: [number, number];
  size: number;
  pointSize: number;
  opacity: number;
  noiseScale: number;
  noiseIntensity: number;
  speed: number;
  timeScale: number;
};

const DEFAULT_QUALITY: GlQuality = {
  dpr: [1, 1.5],
  size: 512,
  pointSize: 10,
  opacity: 0.8,
  noiseScale: 0.6,
  noiseIntensity: 0.52,
  speed: 1,
  timeScale: 1,
};

const MOBILE_QUALITY: GlQuality = {
  dpr: [0.9, 1],
  size: 300,
  pointSize: 9,
  opacity: 0.7,
  noiseScale: 0.6,
  noiseIntensity: 0.52,
  speed: 0.9,
  timeScale: 0.9,
};

const REDUCED_QUALITY: GlQuality = {
  dpr: [0.9, 1],
  size: 300,
  pointSize: 8,
  opacity: 0.7,
  noiseScale: 0.6,
  noiseIntensity: 0.52,
  speed: 0.9,
  timeScale: 0.9,
};

const GL = dynamic(() => import("./gl").then((mod) => mod.GL), { ssr: false });

export function Hero() {
  const [hovering, setHovering] = useState(false);
  const [showGL, setShowGL] = useState(false);
  const [quality, setQuality] = useState<GlQuality>(DEFAULT_QUALITY);

  useEffect(() => {
    let timeoutId: number | null = null;
    const idleCallback = (window as Window & { requestIdleCallback?: (cb: () => void, options?: { timeout: number }) => number }).requestIdleCallback;
    const cancelIdle = (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback;

    if (idleCallback) {
      const idleId = idleCallback(() => setShowGL(true), { timeout: 1200 });
      return () => cancelIdle?.(idleId);
    }

    timeoutId = window.setTimeout(() => setShowGL(true), 300);
    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

    const updateQuality = () => {
      const deviceMemory = "deviceMemory" in navigator ? (navigator as Navigator & { deviceMemory?: number }).deviceMemory : undefined;
      const hardwareConcurrency = navigator.hardwareConcurrency ?? 8;
      const isLowPower = (deviceMemory ?? 8) <= 4 || hardwareConcurrency <= 4;
      const isMobile = mobileQuery.matches || coarsePointerQuery.matches;

      if (reducedMotionQuery.matches) {
        setQuality(REDUCED_QUALITY);
      } else if (isMobile || isLowPower) {
        setQuality(MOBILE_QUALITY);
      } else {
        setQuality(DEFAULT_QUALITY);
      }
    };

    updateQuality();
    reducedMotionQuery.addEventListener("change", updateQuality);
    mobileQuery.addEventListener("change", updateQuality);
    coarsePointerQuery.addEventListener("change", updateQuality);

    return () => {
      reducedMotionQuery.removeEventListener("change", updateQuality);
      mobileQuery.removeEventListener("change", updateQuality);
      coarsePointerQuery.removeEventListener("change", updateQuality);
    };
  }, []);
  return (
    <div className="flex flex-col h-svh items-center relative -mt-24">
      <div className="absolute inset-0 z-0">
        {showGL ? <GL hovering={hovering} quality={quality} /> : null}
      </div>
      <ScrollLightingOverlay position="absolute" />
      <LightingEffects position="absolute" />

      <div className="flex-1" />

      <div className="relative z-10 pb-6 flex flex-col items-center gap-6">
        <div className="text-center flex flex-col items-center px-6">
          <Badge variant="outline" className="mb-6 px-4 py-1 text-sm font-medium rounded-full text-white border-white/40 bg-black/60 backdrop-blur-md hover:bg-black/70 hover:border-white/50 transition-all shadow-lg">
            Built for Scale
          </Badge>

          <h1 className="fluid-h1 font-sentient leading-[1.05]">
            Build faster. <br />
            <i className="font-light">Stay secure.</i>
          </h1>
          <p className="font-mono fluid-lead text-white text-balance mt-5 max-w-[22rem] sm:max-w-[28rem] lg:max-w-[48rem] mx-auto leading-relaxed">
            Power your growth with AI agents, secure web apps,
            <br className="hidden lg:block" />
            and battle-tested cybersecurity.
          </p>
        </div>
        <CalendlyButton
          size="lg"
          className="max-sm:hidden bg-white text-black hover:bg-zinc-200 h-12 px-8 text-lg"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          Book a call
        </CalendlyButton>
        <CalendlyButton
          size="sm"
          className="sm:hidden bg-white text-black hover:bg-zinc-200 h-10 px-6 text-base"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          Book a call
        </CalendlyButton>
      </div>
    </div>
  );
}
