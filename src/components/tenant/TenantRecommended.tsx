
import React from "react";
import EmptyState from "@/components/EmptyState";
import { LocateOff } from "lucide-react";

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
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
          Recommended for You
        </h2>
        {/* Add filter or reload actions here if needed */}
      </div>
      {listings.length === 0 ? (
        <EmptyState
          icon={LocateOff}
          title="No recommendations right now"
          description="We'll recommend properties based on your preferences once you start searching."
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="group bg-white/90 border border-border rounded-2xl shadow-[0_2px_16px_-4px_rgba(146,153,188,0.11)] p-4 flex flex-col hover:shadow-lg hover:scale-[1.02] transition-all duration-150"
            >
              <img
                src={listing.image}
                alt={listing.title}
                className="h-36 w-full object-cover rounded-xl mb-2"
              />
              <div className="font-semibold text-base truncate text-foreground mb-0.5">{listing.title}</div>
              <div className="text-xs text-muted-foreground mb-1 truncate">{listing.location}</div>
              <div className="text-lg font-bold text-primary">{listing.price}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
export default TenantRecommended;
