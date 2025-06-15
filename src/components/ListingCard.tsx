
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
  active: "bg-green-500 text-white",
  pending: "bg-yellow-500 text-white",
  inactive: "bg-gray-400 text-white"
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
      className="bg-background rounded-3xl overflow-hidden shadow border hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col group"
      onClick={onClick}
    >
      <div className="relative w-full h-48 bg-gradient-to-br from-muted to-muted/50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          />
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 rounded-full bg-white/80 hover:bg-secondary z-10 w-10 h-10"
          onClick={e => {
            e.stopPropagation();
            onBookmark && onBookmark();
          }}
        >
          <Heart
            className={bookmarked ? "fill-primary text-primary" : "text-muted-foreground"}
            size={20}
          />
        </Button>
        {verified && (
          <div className="absolute bottom-3 right-3">
            <Badge className="ui-label bg-green-600 text-white px-3 py-1">Verified</Badge>
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className="property-details text-muted-foreground">{city}</span>
        </div>
        <div className="property-title text-foreground mb-3">{title}</div>
        <div className="property-price text-primary mb-4">{rent}/mo</div>
        <div className={`inline-block px-3 py-1.5 rounded-xl ui-label ${statusColors[status] || "bg-gray-400 text-white"}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
