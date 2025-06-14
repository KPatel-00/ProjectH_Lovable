
import React from "react";
import {
  Wifi,
  Thermometer,
  PawPrint,
  WashingMachine
} from "lucide-react";

// Map string keys to Lucide icons
const icons: Record<string, React.ElementType> = {
  wifi: Wifi,
  "thermometer": Thermometer,
  "paw-print": PawPrint,
  "washing-machine": WashingMachine,
};

type Amenity = {
  name: string;
  icon?: string;
};

type Props = {
  amenities: Amenity[];
};

const PropertyAmenities: React.FC<Props> = ({ amenities }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2 mt-6">Amenities & Features</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 mb-2">
        {amenities.map((a) => {
          const Icon = a.icon && icons[a.icon] ? icons[a.icon] : undefined;
          return (
            <li key={a.name} className="flex items-center gap-2 text-base">
              {Icon && <Icon className="w-5 h-5 text-primary" />}
              <span className="text-foreground">{a.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PropertyAmenities;
