
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  image: string;
  title: string;
  rent: string;
  city: string;
  verified: boolean;
  bookmarked?: boolean;
  status: "active" | "pending" | "inactive";
  onBookmark?: () => void;
  onClick?: () => void;
};

const statusColors: Record<string, string> = {
  active: "bg-green-50 text-green-700 border-green-200",
  pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
  inactive: "bg-gray-50 text-gray-500 border-gray-200"
};

const ListingCard: React.FC<Props> = ({
  image,
  title,
  rent,
  city,
  verified,
  bookmarked,
  status,
  onBookmark,
  onClick
}) => {
  return (
    <div
      className="bg-background rounded-3xl overflow-hidden border border-border/30 hover:border-border/60 transition-all duration-300 cursor-pointer flex flex-col group hover:shadow-lg"
      onClick={onClick}
    >
      {/* Large Image Section */}
      <div className="relative w-full h-64 bg-gradient-to-br from-muted/20 to-muted/40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Floating Action Button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-sm border-0 w-10 h-10"
          onClick={e => {
            e.stopPropagation();
            onBookmark && onBookmark();
          }}
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              bookmarked ? "fill-primary text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          />
        </Button>

        {/* Verification Badge */}
        {verified && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-white/90 text-green-700 border-0 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              Verified
            </Badge>
          </div>
        )}

        {/* Status Overlay */}
        <div className="absolute bottom-4 right-4">
          <Badge className={`${statusColors[status]} border text-xs font-medium px-3 py-1.5 backdrop-blur-sm`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </div>

      {/* Content Section with Minimal Padding */}
      <div className="p-6 flex-1 flex flex-col space-y-4">
        {/* Location with Icon */}
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <span className="text-sm text-muted-foreground font-light tracking-wide">{city}</span>
        </div>

        {/* Property Title */}
        <h3 className="text-lg font-medium text-foreground leading-tight line-clamp-2 tracking-tight">
          {title}
        </h3>

        {/* Price - Prominent Display */}
        <div className="mt-auto pt-2">
          <div className="text-2xl font-bold text-foreground tracking-tight">
            {rent}
            <span className="text-base font-normal text-muted-foreground ml-1">/mo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
