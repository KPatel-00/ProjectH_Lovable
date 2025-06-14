
import React from "react";
import { Bookmark, Trash2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type Listing = {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
};

type Props = {
  listings: Listing[];
  onRemove?: (id: number) => void;
};

const TenantSavedListings: React.FC<Props> = ({ listings, onRemove }) => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Your Saved Homes</h2>
        <Button variant="ghost" size="sm" onClick={() => navigate("/wishlist")}>
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto pb-2">
        {listings.map(listing =>
          <div key={listing.id} className="bg-white rounded-xl shadow-md p-3 flex flex-col relative hover:shadow-lg transition group">
            <img src={listing.image} alt={listing.title} className="rounded-lg h-32 w-full object-cover mb-2" />
            <div className="font-bold">{listing.title}</div>
            <div className="text-sm text-muted-foreground">{listing.location}</div>
            <div className="font-semibold text-primary mt-1">{listing.price}</div>
            <div className="flex gap-2 mt-3">
              <Button variant="outline" className="flex-1" onClick={() => navigate(`/messages?listing=${listing.id}`)}>
                <Mail className="w-4 h-4 mr-1" /> Contact landlord
              </Button>
              <Button size="icon" variant="ghost" aria-label="Remove from saved" onClick={() => onRemove && onRemove(listing.id)}>
                <Trash2 className="w-5 h-5 text-destructive" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default TenantSavedListings;
