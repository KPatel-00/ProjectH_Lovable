import React from "react";
import EmptyState from "@/components/EmptyState";
import { Globe2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type City = {
  name: string;
  subtitle: string;
  image: string;
};

type Props = { cities: City[] };

const TenantExploreCities: React.FC<Props> = ({ cities }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-light tracking-wide text-foreground uppercase">
          Explore Popular Cities
        </h2>
        <Button
          variant="default"
          size="sm"
          onClick={() => navigate("/browse")}
          className="rounded-xl px-5 py-2 text-base font-bold flex items-center gap-2"
        >
          View All
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
      
      {cities.length === 0 ? (
        <EmptyState
          icon={Globe2}
          title="No popular cities to explore"
          description="Come back later to see top cities or browse listings by search."
        />
      ) : (
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {cities.map(city => (
            <div
              key={city.name}
              className="min-w-[280px] max-w-[320px] bg-white border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300 hover:shadow-refined-lg cursor-pointer group flex-shrink-0 card-refined"
              onClick={() => navigate(`/browse?city=${encodeURIComponent(city.name)}`)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-accent">
                <img 
                  src={city.image} 
                  alt={city.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-medium text-foreground text-lg mb-2">
                  {city.name}
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  {city.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TenantExploreCities;
