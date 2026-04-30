import { CheckCircle, Shield, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CardLighting } from '@/components/card-lighting';
import { CountUp } from '@/components/ui/count-up';

const stats = [
  { label: 'Projects Completed', value: '230+', icon: <CheckCircle className="h-5 w-5" /> },
  { label: 'Security Audits', value: '350+', icon: <Shield className="h-5 w-5" /> },
  { label: 'Happy Clients', value: '200+', icon: <Users className="h-5 w-5" /> },
  { label: 'Years Experience', value: '5+', icon: <TrendingUp className="h-5 w-5" /> },
];

export function StatsSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4" data-reveal-stagger>
          {stats.map((stat, index) => (
            <CardLighting key={index}>
              <div className="h-full" data-reveal="scale-in">
                <Card className="card-solid h-full text-center">
                  <CardContent className="p-6">
                    <div className="mb-2 flex justify-center text-primary">
                      {stat.icon}
                    </div>
                    <div className="mb-1 text-3xl font-bold text-foreground">
                      <CountUp value={stat.value} />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </div>
            </CardLighting>
          ))}
        </div>
      </div>
    </section>
  );
}
