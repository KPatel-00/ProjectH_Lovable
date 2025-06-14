
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
    <section>
      <h2 className="text-lg font-semibold mb-2">Saved Listings</h2>
      {listings.length === 0 ? (
        <EmptyState
          icon={HeartOff}
          title="No saved listings"
          description="You haven't saved any properties yet. Start browsing and save your favorites!"
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <img src={listing.image} alt={listing.title} className="h-32 w-full object-cover" />
              <div className="p-3">
                <div className="font-bold">{listing.title}</div>
                <div className="text-xs text-muted-foreground">{listing.location}</div>
                <div className="text-sm font-medium text-primary">{listing.price}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
export default TenantSavedListings;
