
import React from 'react';

const PopularCitiesSection = () => {
  const cities = [
    {
      name: "Berlin",
      subtitle: "Capital & Culture Hub",
      image: "https://images.unsplash.com/photo-1587330979470-3016b6702d89?w=400&h=300&fit=crop"
    },
    {
      name: "Munich",
      subtitle: "Bavarian Charm",
      image: "https://images.unsplash.com/photo-1595867818082-083862f3d630?w=400&h=300&fit=crop"
    },
    {
      name: "Hamburg",
      subtitle: "Maritime Gateway",
      image: "https://images.unsplash.com/photo-1564213065542-3685c1e4e2dc?w=400&h=300&fit=crop"
    },
    {
      name: "Frankfurt",
      subtitle: "Financial Center",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop"
    },
    {
      name: "Cologne",
      subtitle: "Historic Rhine",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop"
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Popular Cities</h2>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {cities.map((city, index) => (
            <div
              key={index}
              className="min-w-[240px] rounded-2xl overflow-hidden bg-white shadow-sm border border-border group hover:shadow-lg transition-all duration-300 cursor-pointer flex-shrink-0"
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={city.image} 
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-foreground mb-1">{city.name}</h3>
                <p className="text-sm text-muted-foreground">{city.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCitiesSection;
