
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
      className="bg-background rounded-3xl overflow-hidden border border-border/20 hover:border-border/40 transition-all duration-500 cursor-pointer flex flex-col group hover:shadow-xl shadow-sm"
      onClick={onClick}
    >
      {/* Editorial Image Section */}
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-muted/10 to-muted/30 overflow-hidden">
        {/* Soft gradient overlay for editorial depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent z-20" />
        
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          style={{
            filter: 'contrast(1.05) saturate(0.95) brightness(1.02)',
            imageRendering: 'crisp-edges'
          }}
          loading="lazy"
        />
        
        {/* Editorial frame effect */}
        <div className="absolute inset-0 ring-1 ring-black/5 pointer-events-none z-10" />
        
        {/* Floating Action Button - Studio Style */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-4 right-4 rounded-full bg-white/95 backdrop-blur-md hover:bg-white shadow-lg border-0 w-11 h-11 z-30 transition-all duration-300 hover:scale-110"
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

        {/* Verification Badge - Editorial Style */}
        {verified && (
          <div className="absolute top-4 left-4 z-30">
            <Badge className="bg-white/95 text-green-700 border-0 px-3 py-1.5 text-xs font-medium backdrop-blur-md shadow-sm">
              Verified
            </Badge>
          </div>
        )}

        {/* Status Badge - Minimal Overlay */}
        <div className="absolute bottom-4 right-4 z-30">
          <Badge className={`${statusColors[status]} border text-xs font-medium px-3 py-1.5 backdrop-blur-md shadow-sm`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </div>

      {/* Content Section - Editorial Typography */}
      <div className="p-6 flex-1 flex flex-col space-y-4 bg-gradient-to-b from-background to-background/98">
        {/* Location with Icon - Editorial Caption Style */}
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 opacity-70" />
          <span className="editorial-caption text-muted-foreground tracking-wide uppercase">
            {city}
          </span>
        </div>

        {/* Property Title - Editorial Headline */}
        <h3 className="editorial-subhead text-lg font-medium text-foreground leading-tight line-clamp-2 tracking-tight">
          {title}
        </h3>

        {/* Price - Editorial Focus */}
        <div className="mt-auto pt-2">
          <div className="editorial-headline text-2xl font-bold text-foreground tracking-tight">
            {rent}
            <span className="editorial-body text-base font-normal text-muted-foreground ml-1">/mo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
