
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
      className="bg-background rounded-xl overflow-hidden shadow border hover:shadow-lg transition-shadow cursor-pointer flex flex-col group"
      onClick={onClick}
    >
      <div className="relative w-full h-40 bg-gradient-to-br from-muted to-muted/50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          />
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 rounded-full bg-white/80 hover:bg-secondary z-10"
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
          <div className="absolute bottom-2 right-2">
            <Badge className="bg-green-600 text-white">Verified</Badge>
          </div>
        )}
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <div className="flex items-center gap-1 mb-1">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{city}</span>
        </div>
        <div className="font-semibold text-lg mb-1">{title}</div>
        <div className="text-primary text-base font-bold mb-2">{rent}/mo</div>
        <div className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${statusColors[status] || "bg-gray-400 text-white"}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
