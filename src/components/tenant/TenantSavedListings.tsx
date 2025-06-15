
import React from "react";
import EmptyState from "@/components/EmptyState";
import { HeartOff, MapPin, Mail, Trash2, ArrowRight } from "lucide-react";
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

const TenantSavedListings: React.FC<Props> = ({ listings }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-light tracking-wide text-[#1A1A1A] uppercase">
          Your Saved Homes
        </h2>
        <Button 
          variant="ghost" 
          onClick={() => navigate("/wishlist")}
          className="text-xs uppercase tracking-widest text-[#8A8A8A] hover:text-[#1A1A1A] p-0 h-auto font-medium"
        >
          View All
          <ArrowRight className="w-3 h-3 ml-2" />
        </Button>
      </div>
      
      {listings.length === 0 ? (
        <EmptyState
          icon={HeartOff}
          title="No saved homes yet"
          description="Start browsing and save your favorite properties"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.slice(0, 6).map((listing) => (
            <div
              key={listing.id}
              className="group bg-white border border-[#EBEBEB] rounded-2xl overflow-hidden hover:border-[#1A1A1A] transition-all duration-300 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)]"
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
                
                <div className="text-xl font-light text-[#1A1A1A] mb-6">
                  {listing.price}
                  <span className="text-sm text-[#8A8A8A] ml-1">/month</span>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs uppercase tracking-widest font-medium border-[#EBEBEB] hover:border-[#1A1A1A] hover:bg-[#F8F8F8] transition-all duration-300"
                  >
                    <Mail className="w-3 h-3 mr-2" />
                    Contact
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="px-3 text-[#8A8A8A] hover:text-red-600 hover:bg-red-50 transition-all duration-300"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TenantSavedListings;
