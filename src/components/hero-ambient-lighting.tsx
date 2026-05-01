import type { CSSProperties } from "react";

type HeroAmbientLightingTone = "neutral" | "ai" | "cyber" | "web" | "security";

const toneVars: Record<HeroAmbientLightingTone, CSSProperties> = {
  neutral: {
    "--hero-light-primary": "219 219 219",
    "--hero-light-secondary": "153 153 153",
    "--hero-light-accent": "95 96 98",
  } as CSSProperties,
  ai: {
    "--hero-light-primary": "96 165 250",
    "--hero-light-secondary": "168 85 247",
    "--hero-light-accent": "219 219 219",
  } as CSSProperties,
  cyber: {
    "--hero-light-primary": "248 113 113",
    "--hero-light-secondary": "153 153 153",
    "--hero-light-accent": "219 219 219",
  } as CSSProperties,
  web: {
    "--hero-light-primary": "34 211 238",
    "--hero-light-secondary": "219 219 219",
    "--hero-light-accent": "153 153 153",
  } as CSSProperties,
  security: {
    "--hero-light-primary": "250 204 21",
    "--hero-light-secondary": "219 219 219",
    "--hero-light-accent": "153 153 153",
  } as CSSProperties,
};

export function HeroAmbientLighting({ tone = "neutral" }: { tone?: HeroAmbientLightingTone }) {
  return (
    <div
      aria-hidden="true"
      className="hero-ambient-lighting"
      style={toneVars[tone]}
    >
      <div className="hero-ambient-lighting__plane" />
      <div className="hero-ambient-lighting__beam" />
      <div className="hero-ambient-lighting__edge" />
    </div>
  );
}
