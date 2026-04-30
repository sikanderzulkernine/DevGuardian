"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { LightingEffects, ScrollLightingOverlay } from "./lighting-effects";

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

function getConnection() {
  return (navigator as Navigator & {
    connection?: {
      effectiveType?: string;
      saveData?: boolean;
      addEventListener?: (type: "change", listener: () => void) => void;
      removeEventListener?: (type: "change", listener: () => void) => void;
    };
  }).connection;
}

export function HeroEffects() {
  const [hovering, setHovering] = useState(false);
  const [showGL, setShowGL] = useState(false);
  const [quality, setQuality] = useState<GlQuality>(DEFAULT_QUALITY);
  const [canUseGL, setCanUseGL] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const effectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerOver = (event: PointerEvent) => {
      if ((event.target as Element | null)?.closest("[data-hero-gl-trigger]")) {
        setHovering(true);
      }
    };

    const handlePointerOut = (event: PointerEvent) => {
      if ((event.target as Element | null)?.closest("[data-hero-gl-trigger]")) {
        setHovering(false);
      }
    };

    const handleFocusIn = (event: FocusEvent) => {
      if ((event.target as Element | null)?.closest("[data-hero-gl-trigger]")) {
        setHovering(true);
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      if ((event.target as Element | null)?.closest("[data-hero-gl-trigger]")) {
        setHovering(false);
      }
    };

    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    window.addEventListener("pointerout", handlePointerOut, { passive: true });
    window.addEventListener("focusin", handleFocusIn);
    window.addEventListener("focusout", handleFocusOut);

    return () => {
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("focusin", handleFocusIn);
      window.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  useEffect(() => {
    const node = effectRef.current;
    if (!node || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const connection = getConnection();

    const updateQuality = () => {
      const deviceMemory =
        "deviceMemory" in navigator
          ? (navigator as Navigator & { deviceMemory?: number }).deviceMemory
          : undefined;
      const hardwareConcurrency = navigator.hardwareConcurrency ?? 8;
      const isLowPower = (deviceMemory ?? 8) <= 4 || hardwareConcurrency <= 4;
      const isMobile = mobileQuery.matches || coarsePointerQuery.matches;
      const saveData = connection?.saveData ?? false;
      const effectiveType = connection?.effectiveType;
      const isSlowConnection =
        effectiveType === "slow-2g" || effectiveType === "2g" || effectiveType === "3g";

      if (reducedMotionQuery.matches) {
        setQuality(REDUCED_QUALITY);
      } else if (isLowPower || saveData || isSlowConnection) {
        setQuality(REDUCED_QUALITY);
      } else if (isMobile) {
        setQuality(MOBILE_QUALITY);
      } else {
        setQuality(DEFAULT_QUALITY);
      }

      setCanUseGL(!reducedMotionQuery.matches);
    };

    updateQuality();
    reducedMotionQuery.addEventListener("change", updateQuality);
    mobileQuery.addEventListener("change", updateQuality);
    coarsePointerQuery.addEventListener("change", updateQuality);
    connection?.addEventListener?.("change", updateQuality);

    return () => {
      reducedMotionQuery.removeEventListener("change", updateQuality);
      mobileQuery.removeEventListener("change", updateQuality);
      coarsePointerQuery.removeEventListener("change", updateQuality);
      connection?.removeEventListener?.("change", updateQuality);
    };
  }, []);

  useEffect(() => {
    if (!canUseGL) {
      setShowGL(false);
      return;
    }

    let timeoutId: number | null = null;
    let idleId: number | null = null;
    const requestIdle = (window as Window & {
      requestIdleCallback?: (cb: () => void, options?: { timeout: number }) => number;
    }).requestIdleCallback;
    const cancelIdle = (window as Window & {
      cancelIdleCallback?: (id: number) => void;
    }).cancelIdleCallback;

    const enable = () => setShowGL(true);

    if (requestIdle) {
      idleId = requestIdle(enable, { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(enable, 1200);
    }

    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      if (idleId !== null) {
        cancelIdle?.(idleId);
      }
    };
  }, [canUseGL]);

  return (
    <>
      <div ref={effectRef} className="absolute inset-0 z-0" aria-hidden="true">
        {showGL && isInView ? <GL hovering={hovering} quality={quality} /> : null}
      </div>
      <ScrollLightingOverlay position="absolute" />
      <LightingEffects position="absolute" />
    </>
  );
}
