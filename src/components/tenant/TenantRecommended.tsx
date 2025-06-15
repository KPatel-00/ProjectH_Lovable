
import React from "react";
import EmptyState from "@/components/EmptyState";
import { LocateOff, MapPin } from "lucide-react";

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
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
          Recommended for You
        </h2>
      </div>
      {listings.length === 0 ? (
        <EmptyState
          icon={LocateOff}
          title="No recommendations right now"
          description="We'll recommend properties based on your preferences once you start searching."
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="group bg-background border border-border/30 hover:border-border/60 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="h-40 w-full overflow-hidden bg-muted/20">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground font-light truncate">{listing.location}</span>
                </div>
                <h3 className="font-medium text-foreground leading-tight line-clamp-2">{listing.title}</h3>
                <div className="text-xl font-bold text-foreground tracking-tight mt-auto">
                  {listing.price}
                  <span className="text-sm font-normal text-muted-foreground ml-1">/mo</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TenantRecommended;
