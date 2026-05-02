import { CalendlyButton } from "./calendly-button";
import { HeroBackground } from "./hero-background";
import { Badge } from "./ui/badge";

export function Hero() {
  return (
    <section className="relative isolate -mt-24 flex h-svh flex-col items-center overflow-hidden bg-background">
      <HeroBackground />
      <div className="flex-1" />

      <div className="relative z-10 flex flex-col items-center gap-6 pb-6">
        <div className="flex flex-col items-center px-6 text-center" data-reveal="fade-up">
          <Badge variant="outline" className="mb-6 rounded-full border-white/40 bg-black/60 px-4 py-1 text-sm font-medium text-white shadow-lg backdrop-blur-md transition-all hover:border-white/50 hover:bg-black/70">
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
          data-reveal="fade-up"
          data-reveal-delay="short"
          className="premium-button h-12 bg-white px-8 text-lg text-black hover:bg-zinc-200 max-sm:hidden"
        >
          Book a call
        </CalendlyButton>
        <CalendlyButton
          size="sm"
          data-reveal="fade-up"
          data-reveal-delay="short"
          className="premium-button h-10 bg-white px-6 text-base text-black hover:bg-zinc-200 sm:hidden"
        >
          Book a call
        </CalendlyButton>
      </div>
    </section>
  );
}
