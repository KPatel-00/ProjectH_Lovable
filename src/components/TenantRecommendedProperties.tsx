
import React, { useState } from "react";
import { Bookmark } from "lucide-react";
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
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">Recommended Properties</h2>
        <Button variant="ghost" size="sm" onClick={() => navigate("/search?recommended=true")}>
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate(`/listing/${property.id}`)}
          >
            <div className="h-36 w-full bg-muted relative flex items-center justify-center">
              <img
                src={property.image}
                alt={property.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <button
                type="button"
                aria-label={bookmarks[property.id] ? "Remove Bookmark" : "Bookmark"}
                className="absolute top-3 right-3 bg-white/90 hover:bg-white p-1.5 rounded-full shadow z-10"
                onClick={e => {
                  e.stopPropagation();
                  toggleBookmark(property.id);
                }}
              >
                <Bookmark className={`w-5 h-5 ${bookmarks[property.id] ? "text-primary fill-primary" : "text-muted-foreground"}`} />
              </button>
            </div>
            <div className="p-4 flex-1 flex flex-col gap-1">
              <div className="font-bold text-foreground">{property.title}</div>
              <div className="text-primary font-semibold">{property.price}</div>
              <div className="text-sm text-muted-foreground">{property.location}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TenantRecommendedProperties;
