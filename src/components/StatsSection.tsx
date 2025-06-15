
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
