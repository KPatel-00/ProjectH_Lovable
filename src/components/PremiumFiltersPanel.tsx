
import React, { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type PremiumFiltersPanelProps = {
  filters: any;
  setFilters: (f: any) => void;
  onApply?: () => void;
  className?: string;
};

const PROPERTY_TYPES = [
  { label: "Apartment", value: "apartment" },
  { label: "House", value: "house" },
  { label: "WG Room", value: "wg" },
  { label: "Studio", value: "studio" }
];

const AMENITIES = [
  { label: "Furnished", key: "furnished" },
  { label: "Pet-Friendly", key: "petFriendly" },
  { label: "Parking", key: "parking" },
  { label: "Balcony", key: "balcony" },
  { label: "Garden", key: "garden" },
  { label: "Gym", key: "gym" }
];

const PremiumFiltersPanel: React.FC<PremiumFiltersPanelProps> = ({
  filters,
  setFilters,
  onApply,
  className = ""
}) => {
  const [priceRange, setPriceRange] = useState(filters.priceRange || [500, 2500]);
  const [openSections, setOpenSections] = useState({
    price: true,
    type: true,
    amenities: true,
    preferences: true
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    setFilters({ ...filters, priceRange: value });
  };

  return (
    <div className={`bg-white rounded-lg border border-gray-100 shadow-sm ${className}`}>
      <div className="p-6 border-b border-gray-50">
        <div className="flex items-center gap-3">
          <SlidersHorizontal className="w-4 h-4 text-gray-400" />
          <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide">
            Refine Selection
          </h3>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Property Type */}
        <Collapsible open={openSections.type} onOpenChange={() => toggleSection('type')}>
          <CollapsibleTrigger className="flex items-center justify-between w-full group">
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
              Property Type
            </span>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${openSections.type ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4">
            <Select value={filters.propertyType} onValueChange={(value) => setFilters({ ...filters, propertyType: value })}>
              <SelectTrigger className="h-11 border-gray-200 rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-all duration-300 focus:ring-1 focus:ring-gray-300 focus:border-gray-300">
                <SelectValue placeholder="Select type" className="text-gray-600" />
              </SelectTrigger>
              <SelectContent className="border-gray-100 shadow-lg">
                {PROPERTY_TYPES.map(type => (
                  <SelectItem 
                    key={type.value} 
                    value={type.value}
                    className="hover:bg-gray-50 focus:bg-gray-50 transition-colors duration-200"
                  >
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CollapsibleContent>
        </Collapsible>

        {/* Price Range */}
        <Collapsible open={openSections.price} onOpenChange={() => toggleSection('price')}>
          <CollapsibleTrigger className="flex items-center justify-between w-full group">
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
              Price Range
            </span>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${openSections.price ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4 space-y-4">
            <div className="px-2">
              <Slider
                value={priceRange}
                onValueChange={handlePriceChange}
                max={5000}
                min={200}
                step={50}
                className="w-full"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="px-3 py-1 bg-gray-50 rounded-full">€{priceRange[0]}</span>
              <span className="px-3 py-1 bg-gray-50 rounded-full">€{priceRange[1]}</span>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Amenities */}
        <Collapsible open={openSections.amenities} onOpenChange={() => toggleSection('amenities')}>
          <CollapsibleTrigger className="flex items-center justify-between w-full group">
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
              Amenities
            </span>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${openSections.amenities ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4">
            <div className="grid grid-cols-2 gap-3">
              {AMENITIES.map(amenity => (
                <label 
                  key={amenity.key} 
                  className="flex items-center gap-2 cursor-pointer group hover:bg-gray-50 p-2 rounded-lg transition-all duration-200"
                >
                  <Checkbox
                    checked={!!filters[amenity.key]}
                    onCheckedChange={v => setFilters({ ...filters, [amenity.key]: v })}
                    id={amenity.key}
                    className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:border-black"
                  />
                  <Label 
                    htmlFor={amenity.key} 
                    className="cursor-pointer text-xs text-gray-600 group-hover:text-gray-900 transition-colors duration-200"
                  >
                    {amenity.label}
                  </Label>
                </label>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Preferences */}
        <Collapsible open={openSections.preferences} onOpenChange={() => toggleSection('preferences')}>
          <CollapsibleTrigger className="flex items-center justify-between w-full group">
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
              Preferences
            </span>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${openSections.preferences ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4">
            <label className="flex items-center gap-3 cursor-pointer group hover:bg-gray-50 p-2 rounded-lg transition-all duration-200">
              <Checkbox
                checked={!!filters.verifiedOnly}
                onCheckedChange={v => setFilters({ ...filters, verifiedOnly: v })}
                id="verified-only"
                className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:border-black"
              />
              <Label 
                htmlFor="verified-only" 
                className="cursor-pointer text-xs text-gray-600 group-hover:text-gray-900 transition-colors duration-200"
              >
                Verified Properties Only
              </Label>
            </label>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {onApply && (
        <div className="p-6 border-t border-gray-50">
          <Button 
            onClick={onApply}
            className="w-full h-11 bg-black hover:bg-gray-900 text-white text-xs uppercase tracking-wide font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Apply Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default PremiumFiltersPanel;
