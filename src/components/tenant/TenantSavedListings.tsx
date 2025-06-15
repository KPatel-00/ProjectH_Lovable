
import React from "react";
import EmptyState from "@/components/EmptyState";
import { HeartOff, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="editorial-content-section">
      <div className="editorial-section-header">
        <h2 className="editorial-section-title">
          YOUR SAVED HOMES
        </h2>
        <div className="editorial-section-line" />
      </div>
      
      {listings.length === 0 ? (
        <EmptyState
          icon={HeartOff}
          title="No saved homes yet"
          description="Start browsing and save your favorite properties"
        />
      ) : (
        <div className="editorial-property-grid">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="editorial-property-card group"
            >
              <div className="editorial-property-image">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="studio-image"
                  loading="lazy"
                />
                <div className="editorial-property-overlay" />
              </div>
              
              <div className="editorial-property-content">
                <div className="editorial-property-location">
                  <MapPin className="w-3 h-3 text-[#8A8A8A]" />
                  <span className="editorial-location-text">
                    {listing.location.toUpperCase()}
                  </span>
                </div>
                
                <h3 className="editorial-property-title">
                  {listing.title}
                </h3>
                
                <div className="editorial-property-price">
                  {listing.price}
                  <span className="editorial-price-period">/MONTH</span>
                </div>
                
                <div className="editorial-property-actions">
                  <Button variant="ghost" size="sm" className="editorial-action-button">
                    CONTACT LANDLORD
                  </Button>
                  <Button variant="ghost" size="sm" className="editorial-action-button">
                    REMOVE
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TenantSavedListings;
