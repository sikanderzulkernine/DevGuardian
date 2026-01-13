import dynamic from 'next/dynamic';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { GlobalContact } from '@/components/global-contact';

const SectionDivider = () => (
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />
);

const StatsSection = dynamic(() => import('@/components/home/stats-section').then((mod) => mod.StatsSection), {
  loading: () => null,
});
const ServicesSection = dynamic(() => import('@/components/home/services-section').then((mod) => mod.ServicesSection), {
  loading: () => null,
});
const ProcessSection = dynamic(() => import('@/components/home/process-section').then((mod) => mod.ProcessSection), {
  loading: () => null,
});
const WhyChooseUsSection = dynamic(() => import('@/components/why-choose-us').then((mod) => mod.WhyChooseUsSection), {
  loading: () => null,
});
const CaseStudiesSection = dynamic(() => import('@/components/case-studies').then((mod) => mod.CaseStudiesSection), {
  loading: () => null,
});
const TestimonialsSection = dynamic(() => import('@/components/testimonials').then((mod) => mod.TestimonialsSection), {
  loading: () => null,
});
const FAQ = dynamic(() => import('@/components/faq').then((mod) => mod.FAQ), {
  loading: () => null,
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Header />
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
      <Footer />
    </div>
  );
}
