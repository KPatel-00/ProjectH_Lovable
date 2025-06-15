import React from "react";
import EmptyState from "@/components/EmptyState";
import { LocateOff, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type Listing = {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
};

interface Props {
  listings: Listing[];
}

const TenantRecommended: React.FC<Props> = ({ listings }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-light tracking-wide text-foreground uppercase">
          Recommended for You
        </h2>
        <Button
          variant="default"
          size="sm"
          onClick={() => navigate("/browse?recommended=true")}
          className="rounded-xl px-5 py-2 text-base font-bold flex items-center gap-2"
        >
          View All
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
      
      {listings.length === 0 ? (
        <EmptyState
          icon={LocateOff}
          title="No recommendations right now"
          description="We'll recommend properties based on your preferences once you start searching."
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.slice(0, 6).map((listing) => (
            <div
              key={listing.id}
              className="group bg-white border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300 hover:shadow-refined-lg cursor-pointer card-refined"
              onClick={() => navigate(`/listing/${listing.id}`)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-accent">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                    {listing.location}
                  </span>
                </div>
                <h3 className="font-medium text-foreground text-lg mb-4 leading-tight">
                  {listing.title}
                </h3>
                <div className="text-xl font-light text-foreground">
                  {listing.price}
                  <span className="text-sm text-muted-foreground ml-1">/month</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TenantRecommended;
