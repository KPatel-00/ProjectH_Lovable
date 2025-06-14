
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
    <section className="mt-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Recommended for You</h2>
      </div>
      {listings.length === 0 ? (
        <EmptyState
          icon={LocateOff}
          title="No recommendations right now"
          description="We'll recommend properties based on your preferences once you start searching."
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-xl shadow-md p-3 flex flex-col"
            >
              <img src={listing.image} alt={listing.title} className="h-32 w-full object-cover rounded-lg mb-2" />
              <div className="font-bold mb-1">{listing.title}</div>
              <div className="text-xs text-muted-foreground mb-2">{listing.location}</div>
              <div className="font-medium text-primary text-sm">{listing.price}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
export default TenantRecommended;
