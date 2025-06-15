
import React from "react";
import EmptyState from "@/components/EmptyState";
import { HeartOff } from "lucide-react";

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

const TenantSavedListings: React.FC<Props> = ({ listings }) => {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
          Saved Listings
        </h2>
        {/* Could add an action button here if desired */}
      </div>
      {listings.length === 0 ? (
        <EmptyState
          icon={HeartOff}
          title="No saved listings"
          description="You haven't saved any properties yet. Start browsing and save your favorites!"
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="group bg-white/90 border border-border rounded-2xl overflow-hidden shadow-[0_2px_16px_-4px_rgba(146,153,188,0.11)] flex flex-col hover:shadow-lg hover:scale-[1.02] transition-all duration-150"
            >
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-36 w-full object-cover transition-all"
                />
                {/* Save/favourite button can go here */}
              </div>
              <div className="flex-1 p-4 flex flex-col gap-2">
                <div className="font-semibold text-base truncate text-foreground">{listing.title}</div>
                <div className="text-xs text-muted-foreground truncate">{listing.location}</div>
                <div className="text-lg font-bold text-primary mt-1">{listing.price}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TenantSavedListings;
