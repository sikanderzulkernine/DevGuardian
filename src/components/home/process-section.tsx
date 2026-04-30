import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CardLighting } from '@/components/card-lighting';

const processSteps = [
  {
    step: '1',
    title: 'Discovery & Analysis',
    description: 'We analyze your requirements and security landscape to understand your unique challenges.',
  },
  {
    step: '2',
    title: 'Strategy & Planning',
    description: 'Our experts develop a comprehensive strategy tailored to your business objectives.',
  },
  {
    step: '3',
    title: 'Implementation & Development',
    description: 'We build and deploy secure, scalable solutions using industry best practices.',
  },
  {
    step: '4',
    title: 'Testing & Validation',
    description: 'Rigorous testing ensures your solution meets security and performance standards.',
  },
  {
    step: '5',
    title: 'Support & Evolution',
    description: 'Ongoing support and continuous improvement to keep your systems secure and up-to-date.',
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="reveal-up mb-16 text-center">
          <h2 className="fluid-h2 font-bold mb-4 relative z-10">Our Process</h2>
          <p className="fluid-lead text-foreground/80 max-w-2xl mx-auto text-glow-dark">
            A systematic approach to delivering secure, innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5" data-reveal-stagger>
          {processSteps.map((step, index) => (
            <CardLighting key={index}>
              <div className="h-full text-center" data-reveal="fade-up">
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">{step.step}</span>
                </div>
                <Card className="h-[calc(100%-5rem)] border-zinc-200/70 !bg-white !text-zinc-900 !backdrop-blur-0 shadow-[0_18px_50px_-36px_rgba(0,0,0,0.45)] transition-colors hover:border-zinc-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-zinc-900">{step.title}</CardTitle>
                    <CardDescription className="text-base text-zinc-600">{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </CardLighting>
          ))}
        </div>
      </div>
    </section>
  );
}
