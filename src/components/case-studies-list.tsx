import { LightingEffects } from "@/components/lighting-effects";
import { caseStudies } from "@/data/case-studies";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CaseStudyCard } from "./case-study-card";

export function CaseStudiesList() {
  return (
    <div className="min-h-screen bg-black text-foreground relative overflow-hidden">
      <Header />
      <LightingEffects />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 relative z-10">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto text-glow-dark">
              Real-world examples of how we deliver value to our clients through security, AI, and performance engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
