
import React from "react";
import EmptyState from "@/components/EmptyState";
import { Globe2 } from "lucide-react";
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
      <h2 className="text-2xl font-light tracking-wide text-[#1A1A1A] uppercase mb-8">
        Explore Popular Cities
      </h2>
      
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
              className="min-w-[280px] max-w-[320px] bg-white border border-[#EBEBEB] rounded-2xl overflow-hidden hover:border-[#1A1A1A] transition-all duration-300 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] cursor-pointer group flex-shrink-0"
              onClick={() => navigate(`/browse?city=${encodeURIComponent(city.name)}`)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#F8F8F8]">
                <img 
                  src={city.image} 
                  alt={city.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-medium text-[#1A1A1A] text-lg mb-2">
                  {city.name}
                </h3>
                <p className="text-sm text-[#8A8A8A] font-light">
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
