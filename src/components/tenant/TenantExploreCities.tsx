
import React from "react";
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
    <section className="mt-8">
      <h2 className="text-lg font-semibold mb-3">Explore Popular Cities</h2>
      <div className="flex gap-4 overflow-x-auto">
        {cities.map(city =>
          <div
            key={city.name}
            className="min-w-[180px] max-w-[210px] rounded-xl overflow-hidden bg-white shadow group hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate(`/browse?city=${encodeURIComponent(city.name)}`)}
          >
            <img src={city.image} alt={city.name} className="h-28 w-full object-cover" />
            <div className="p-3">
              <div className="font-bold">{city.name}</div>
              <div className="text-xs text-muted-foreground">{city.subtitle}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default TenantExploreCities;
