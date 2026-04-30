const companiesRow1 = [
  "Velanique",
  "CyberPulse",
  "Quantum Systems",
  "Vertex Solutions",
  "Echo Dynamics",
  "Titan Guard",
];

const companiesRow2 = [
  "NovaFlow",
  "Zenith Core",
  "IronForge",
  "Apex Innovations",
  "BlueHorizon",
  "Stellar Logic",
];

function CompanyRow({
  companies,
  reverse = false,
  duration,
}: {
  companies: string[];
  reverse?: boolean;
  duration: string;
}) {
  return (
    <div className="flex overflow-hidden py-2 select-none">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className="flex shrink-0 gap-16 md:gap-32 items-center min-w-full pr-16 md:pr-32 animate-marquee"
          style={{
            "--duration": duration,
            animationDirection: reverse ? "reverse" : "normal",
          } as CSSProperties}
          aria-hidden={copy === 1}
        >
          {companies.map((company) => (
            <span
              key={`${copy}-${company}`}
              className="text-xl md:text-3xl font-bold text-zinc-600 whitespace-nowrap tracking-tight"
            >
              {company}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function CompanyMarquee() {
  return (
    <section className="py-24 bg-black border-t border-white/5 overflow-hidden relative">
      <div className="container px-6 mx-auto mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-zinc-400">
            Powering next-generation technology companies worldwide.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-12 relative">
        <div className="absolute inset-y-0 left-0 w-12 sm:w-24 md:w-48 lg:w-80 xl:w-96 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-24 md:w-48 lg:w-80 xl:w-96 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        <CompanyRow companies={companiesRow1} duration="40s" />
        <CompanyRow companies={companiesRow2} duration="45s" reverse />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />
    </section>
  );
}
import type { CSSProperties } from "react";
