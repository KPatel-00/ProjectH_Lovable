
import React from 'react';
import { MapPin, Building, Users } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: MapPin,
      number: "60+",
      label: "Cities",
    },
    {
      icon: Building,
      number: "5,000+",
      label: "Properties",
    },
    {
      icon: Users,
      number: "2,000+",
      label: "Landlords",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center space-y-6">
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-foreground" />
              </div>
              <div className="editorial-headline text-editorial-4xl font-editorial-bold text-foreground tracking-editorial-tight">
                {stat.number}
              </div>
              <div className="ui-label text-muted-foreground tracking-editorial-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
