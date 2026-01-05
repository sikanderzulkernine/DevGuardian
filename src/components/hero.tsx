"use client";

import Link from "next/link";
import { GL } from "./gl";
import { CalendlyButton } from "./calendly-button";


import { Button } from "./ui/button"; // Keeping Button just in case, or verify usage first
import { Badge } from "./ui/badge";
import { useState } from "react";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="flex flex-col h-svh justify-end items-center relative pb-32">
      <div className="absolute inset-0 z-0">
        <GL hovering={hovering} />
      </div>

      <div className="text-center relative z-10">
        <Badge variant="outline" className="mb-6 px-4 py-1 text-sm font-medium rounded-full text-white border-white/40 bg-black/60 backdrop-blur-md hover:bg-black/70 hover:border-white/50 transition-all shadow-lg">
          Built for Scale
        </Badge>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Build faster. <br />
          <i className="font-light">Stay secure.</i>
        </h1>
        <p className="font-mono text-lg md:text-xl text-white text-balance mt-8 max-w-lg mx-auto text-glow-dark px-6">
          Power your growth with AI agents, secure web apps, and battle-tested cybersecurity.
        </p>



        <CalendlyButton
          size="lg"
          className="mt-14 max-sm:hidden bg-white text-black hover:bg-zinc-200 h-12 px-8 text-lg"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          Book a call
        </CalendlyButton>
        <CalendlyButton
          size="sm"
          className="mt-14 sm:hidden bg-white text-black hover:bg-zinc-200 h-10 px-6 text-base"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          Book a call
        </CalendlyButton>
      </div>
    </div>
  );
}
