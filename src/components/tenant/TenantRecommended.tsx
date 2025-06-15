
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
        <h2 className="text-2xl font-light tracking-wide text-[#1A1A1A] uppercase">
          Recommended for You
        </h2>
        <Button 
          variant="ghost" 
          onClick={() => navigate("/browse?recommended=true")}
          className="text-xs uppercase tracking-widest text-[#8A8A8A] hover:text-[#1A1A1A] p-0 h-auto font-medium"
        >
          View All
          <ArrowRight className="w-3 h-3 ml-2" />
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
              className="group bg-white border border-[#EBEBEB] rounded-2xl overflow-hidden hover:border-[#1A1A1A] transition-all duration-300 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] cursor-pointer"
              onClick={() => navigate(`/listing/${listing.id}`)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#F8F8F8]">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-3 h-3 text-[#8A8A8A]" />
                  <span className="text-xs uppercase tracking-widest text-[#8A8A8A] font-medium">
                    {listing.location}
                  </span>
                </div>
                <h3 className="font-medium text-[#1A1A1A] text-lg mb-4 leading-tight">
                  {listing.title}
                </h3>
                <div className="text-xl font-light text-[#1A1A1A]">
                  {listing.price}
                  <span className="text-sm text-[#8A8A8A] ml-1">/month</span>
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
