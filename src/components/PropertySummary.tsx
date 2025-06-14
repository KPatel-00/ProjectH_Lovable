
import React from "react";

type Props = {
  type: string;
  size: number;
  rooms: number;
  floor?: number;
  furnishing: string;
  moveInDate?: string;
};

const PropertySummary: React.FC<Props> = ({
  type,
  size,
  rooms,
  floor,
  furnishing,
  moveInDate,
}) => {
  return (
    <div className="mb-4 grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-sm">
      <div>
        <span className="block text-muted-foreground">Type</span>
        <span className="font-medium">{type}</span>
      </div>
      <div>
        <span className="block text-muted-foreground">Size</span>
        <span className="font-medium">{size} m²</span>
      </div>
      <div>
        <span className="block text-muted-foreground">Rooms</span>
        <span className="font-medium">{rooms}</span>
      </div>
      {floor && (
        <div>
          <span className="block text-muted-foreground">Floor</span>
          <span className="font-medium">{floor}</span>
        </div>
      )}
      <div>
        <span className="block text-muted-foreground">Furnishing</span>
        <span className="font-medium">{furnishing}</span>
      </div>
      {moveInDate && (
        <div>
          <span className="block text-muted-foreground">Move-in</span>
          <span className="font-medium">{moveInDate}</span>
        </div>
      )}
    </div>
  );
};

export default PropertySummary;
