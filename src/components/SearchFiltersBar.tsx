
import React from "react";
import { Search, Calendar as CalendarIcon, Home as HomeIcon, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export type SearchFiltersBarProps = {
  filters: {
    location: string;
    propertyType: string;
    moveInDate?: string;
    [key: string]: any;
  };
  setFilters: (f: Partial<any>) => void;
  onSubmit: () => void;
  showMoveInDate?: boolean;
  buttonText?: string;
  loading?: boolean;
  className?: string;
};

const PROPERTY_TYPES = [
  { label: "Apartment", value: "apartment" },
  { label: "House", value: "house" },
  { label: "WG Room", value: "wg" },
  { label: "Studio", value: "studio" }
];

const SearchFiltersBar: React.FC<SearchFiltersBarProps> = ({
  filters,
  setFilters,
  onSubmit,
  showMoveInDate = true,
  buttonText = "Search Now",
  loading = false,
  className = "",
}) => (
  <section className={`w-full bg-white border border-border rounded-2xl shadow-refined p-4 sm:p-6 ${className}`}>
    <form
      className="flex flex-col gap-4 sm:flex-row sm:gap-4 flex-wrap"
      onSubmit={e => { e.preventDefault(); onSubmit(); }}
      autoComplete="off"
    >
      <div className="relative flex-1 min-w-0">
        <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="City / Area / Zip Code"
          className="pl-11 h-12 min-w-0 text-sm bg-white border-border hover:border-primary/20 focus:border-primary focus:ring-2 focus:ring-ring transition-all duration-300"
          value={filters.location}
          onChange={(e) => setFilters({ location: e.target.value })}
          name="location"
        />
      </div>
      <Select value={filters.propertyType} onValueChange={(value) => setFilters({ propertyType: value })}>
        <SelectTrigger className="h-12 flex-1 min-w-0 min-w-[140px] text-sm bg-white border-border hover:border-primary/20 focus:border-primary focus:ring-2 focus:ring-ring transition-all duration-300">
          <HomeIcon className="w-4 h-4 mr-2 text-muted-foreground" />
          <SelectValue placeholder="Property Type" />
        </SelectTrigger>
        <SelectContent className="bg-white border-border shadow-refined-lg">
          {PROPERTY_TYPES.map(pt => (
            <SelectItem key={pt.value} value={pt.value} className="hover:bg-accent">{pt.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      {showMoveInDate && (
        <div className="relative flex-1 min-w-0">
          <CalendarIcon className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            type="month"
            className="pl-11 h-12 min-w-0 text-sm bg-white border-border hover:border-primary/20 focus:border-primary focus:ring-2 focus:ring-ring transition-all duration-300"
            placeholder="Move-in Date"
            value={filters.moveInDate || ""}
            onChange={(e) => setFilters({ moveInDate: e.target.value })}
            name="moveInDate"
          />
        </div>
      )}
      <Button
        size="lg"
        className="h-12 mt-1 sm:mt-0 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 min-w-0 flex-shrink-0 text-sm px-8 shadow-refined hover:shadow-refined-lg"
        type="submit"
        disabled={loading}
      >
        <Search className="w-5 h-5 mr-2" />
        {buttonText}
      </Button>
    </form>
  </section>
);

export default SearchFiltersBar;
