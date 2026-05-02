"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const GL = dynamic(() => import("./gl").then((module) => module.GL), {
  ssr: false,
  loading: () => <div className="hero-webgl-fallback" aria-hidden="true" />,
});

function canAnimateHeroBackground() {
  if (typeof window === "undefined") {
    return false;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  return !reducedMotion.matches;
}

export function HeroBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scheduleAnimation = () => {
      if (!canAnimateHeroBackground()) {
        setEnabled(false);
        return () => {};
      }

      let timeoutId: ReturnType<typeof setTimeout> | null = null;
      let idleId: number | null = null;
      let cancelled = false;

      const start = () => {
        if (!cancelled) {
          setEnabled(true);
        }
      };

      const scheduleIdle = () => {
        if ("requestIdleCallback" in window) {
          idleId = window.requestIdleCallback(start, { timeout: 2400 });
          return;
        }

        timeoutId = globalThis.setTimeout(start, 1400);
      };

      if (document.readyState === "complete") {
        scheduleIdle();
      } else {
        window.addEventListener("load", scheduleIdle, { once: true });
      }

      return () => {
        cancelled = true;
        window.removeEventListener("load", scheduleIdle);
        if (timeoutId !== null) {
          globalThis.clearTimeout(timeoutId);
        }
        if (idleId !== null && "cancelIdleCallback" in window) {
          window.cancelIdleCallback(idleId);
        }
      };
    };

    let cleanupAnimation = scheduleAnimation();

    const handleMotionChange = () => {
      cleanupAnimation();
      cleanupAnimation = scheduleAnimation();
    };

    reducedMotion.addEventListener("change", handleMotionChange);

    return () => {
      cleanupAnimation();
      reducedMotion.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black" aria-hidden="true">
      {enabled ? <GL hovering={false} /> : <div className="hero-webgl-fallback" />}
      <div className="hero-webgl-vignette" />
    </div>
  );
}
