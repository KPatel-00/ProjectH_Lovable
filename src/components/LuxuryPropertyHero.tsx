
import React from "react";
import PropertyImageGallery from "./PropertyImageGallery";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users } from "lucide-react";

type Props = {
  images: string[];
  title: string;
  city: string;
  neighborhood: string;
  rent: number;
  verified: boolean;
  listedAt: number;
  type: string;
  rooms: number;
};

const LuxuryPropertyHero: React.FC<Props> = ({
  images,
  title,
  city,
  neighborhood,
  rent,
  verified,
  listedAt,
  type,
  rooms,
}) => {
  const daysListed = Math.floor((Date.now() - listedAt) / 86400000);

  return (
    <div className="relative">
      {/* Hero Image Gallery */}
      <div className="mb-12">
        <PropertyImageGallery images={images} />
      </div>

      {/* Floating Info Card */}
      <div className="absolute bottom-8 left-8 right-8 lg:left-12 lg:right-auto lg:max-w-md">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Verification Badge */}
          {verified && (
            <div className="mb-4">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-2 text-sm font-medium">
                Verified Property
              </Badge>
            </div>
          )}

          {/* Property Title */}
          <h1 className="editorial-headline text-3xl lg:text-4xl mb-4 text-foreground leading-tight">
            {title}
          </h1>

          {/* Location */}
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <span className="editorial-subhead text-lg text-muted-foreground">
              {neighborhood}, {city}
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="editorial-display text-4xl lg:text-5xl text-primary mb-1">
              €{rent.toLocaleString()}
            </div>
            <span className="editorial-caption text-muted-foreground">per month</span>
          </div>

          {/* Quick Info */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="editorial-body text-muted-foreground">
                {rooms} {rooms === 1 ? 'Room' : 'Rooms'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="editorial-body text-muted-foreground">
                Listed {daysListed} days ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryPropertyHero;
