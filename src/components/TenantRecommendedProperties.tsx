
import React, { useState } from "react";
import { Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type Property = {
  id: number;
  image: string;
  title: string;
  price: string;
  location: string;
  bookmarked: boolean;
};

type Props = {
  properties: Property[];
};

const TenantRecommendedProperties: React.FC<Props> = ({ properties }) => {
  const [bookmarks, setBookmarks] = useState<{ [id: number]: boolean }>(
    Object.fromEntries(properties.map(p => [p.id, p.bookmarked]))
  );
  const navigate = useNavigate();

  const toggleBookmark = (id: number) => {
    setBookmarks(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold tracking-tight">Recommended Properties</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate("/search?recommended=true")}
          className="text-muted-foreground hover:text-foreground border border-border/30 hover:border-border/60 transition-all"
        >
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-background rounded-2xl border border-border/30 hover:border-border/60 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 cursor-pointer group"
            onClick={() => navigate(`/listing/${property.id}`)}
          >
            <div className="h-40 w-full bg-muted/20 relative overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm hover:bg-white shadow-sm border-0 w-9 h-9 rounded-full"
                onClick={e => {
                  e.stopPropagation();
                  toggleBookmark(property.id);
                }}
              >
                <Heart className={`w-4 h-4 ${bookmarks[property.id] ? "text-primary fill-primary" : "text-muted-foreground"}`} />
              </Button>
            </div>
            <div className="p-5 flex-1 flex flex-col space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-light">{property.location}</span>
              </div>
              <h3 className="font-medium text-foreground leading-tight line-clamp-2">{property.title}</h3>
              <div className="text-xl font-bold text-foreground tracking-tight mt-auto">
                {property.price}
                <span className="text-sm font-normal text-muted-foreground ml-1">/mo</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TenantRecommendedProperties;
