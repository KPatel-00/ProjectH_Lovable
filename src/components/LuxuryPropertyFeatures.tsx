
import React from "react";
import { Wifi, Thermometer, PawPrint, WashingMachine, Home, Ruler, Layers, Calendar } from "lucide-react";

const icons: Record<string, React.ElementType> = {
  wifi: Wifi,
  thermometer: Thermometer,
  "paw-print": PawPrint,
  "washing-machine": WashingMachine,
};

type Amenity = {
  name: string;
  icon?: string;
};

type Props = {
  amenities: Amenity[];
  type: string;
  size: number;
  rooms: number;
  floor?: number;
  furnishing: string;
  moveInDate?: string;
};

const LuxuryPropertyFeatures: React.FC<Props> = ({
  amenities,
  type,
  size,
  rooms,
  floor,
  furnishing,
  moveInDate,
}) => {
  const propertyDetails = [
    { icon: Home, label: "Type", value: type },
    { icon: Ruler, label: "Size", value: `${size} m²` },
    { icon: Layers, label: "Floor", value: floor ? `${floor}` : "Ground" },
    { icon: Calendar, label: "Move-in", value: moveInDate || "Flexible" },
  ];

  return (
    <div className="py-16 px-4 lg:px-12">
      {/* Property Details Grid */}
      <div className="mb-16">
        <h2 className="editorial-headline text-2xl lg:text-3xl mb-8 text-center">
          Property Details
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {propertyDetails.map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-muted/30 rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                <Icon className="w-8 h-8 text-muted-foreground group-hover:text-secondary transition-colors duration-300" />
              </div>
              <div className="editorial-caption text-muted-foreground mb-1">{label}</div>
              <div className="editorial-subhead text-foreground">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="editorial-headline text-2xl lg:text-3xl mb-8 text-center">
          Amenities & Features
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity) => {
            const Icon = amenity.icon && icons[amenity.icon] ? icons[amenity.icon] : Home;
            return (
              <div key={amenity.name} className="flex items-center gap-4 p-4 bg-muted/20 rounded-2xl hover:bg-muted/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="editorial-subhead text-foreground">{amenity.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LuxuryPropertyFeatures;
