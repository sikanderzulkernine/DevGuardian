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
    const update = () => setEnabled(canAnimateHeroBackground());

    update();
    reducedMotion.addEventListener("change", update);

    return () => reducedMotion.removeEventListener("change", update);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black" aria-hidden="true">
      {enabled ? <GL hovering={false} /> : <div className="hero-webgl-fallback" />}
      <div className="hero-webgl-vignette" />
    </div>
  );
}
