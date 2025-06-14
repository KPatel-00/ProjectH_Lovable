
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Bookmark } from "lucide-react";
type Listing = {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
};
type Props = { listings: Listing[] };

const TenantRecommended: React.FC<Props> = ({ listings }) => {
  const navigate = useNavigate();
  return (
    <section className="mt-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Recommended for You</h2>
        <Button variant="ghost" size="sm" onClick={() => navigate("/browse?recommended=true")}>
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.map(listing =>
          <div key={listing.id} className="bg-white rounded-xl shadow-md p-3 flex flex-col relative hover:shadow-lg transition group">
            <img src={listing.image} alt={listing.title} className="rounded-lg h-32 w-full object-cover mb-2" />
            <div className="font-bold">{listing.title}</div>
            <div className="text-sm text-muted-foreground">{listing.location}</div>
            <div className="font-semibold text-primary mt-1">{listing.price}</div>
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-2 right-2"
              aria-label="Bookmark"
            >
              <Bookmark className="w-5 h-5 text-primary" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
export default TenantRecommended;
