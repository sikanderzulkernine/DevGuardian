import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { StatsSection } from "@/components/home/stats-section";
import { ServicesSection } from "@/components/home/services-section";
import { ProcessSection } from "@/components/home/process-section";
import { WhyChooseUsSection } from "@/components/why-choose-us";
import { CaseStudiesSection } from "@/components/case-studies";
import { TestimonialsSection } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { GlobalContact } from "@/components/global-contact";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const SectionDivider = () => (
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <WhyChooseUsSection />
        <SectionDivider />
        <ProcessSection />
        <SectionDivider />
        <CaseStudiesSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <GlobalContact />
      </main>
      <Footer />
    </div>
  );
}
