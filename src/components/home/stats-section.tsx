'use client';

import { CheckCircle, Shield, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CardLighting } from '@/components/lighting-effects';
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <CardLighting key={index}>
              <Card className="card-solid text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-2 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    <CountUp value={stat.value} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </CardLighting>
          ))}
        </div>
      </div>
    </section>
  );
}
