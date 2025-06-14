
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
  <section className={`w-full bg-background border border-border rounded-2xl shadow p-2 sm:p-4 ${className}`}>
    <form
      className="flex flex-col gap-3 sm:flex-row sm:gap-3 flex-wrap"
      onSubmit={e => { e.preventDefault(); onSubmit(); }}
      autoComplete="off"
    >
      <div className="relative flex-1 min-w-0">
        <MapPin className="absolute left-2.5 top-3 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="City / Area / Zip Code"
          className="pl-10 h-11 min-w-0 text-sm"
          value={filters.location}
          onChange={(e) => setFilters({ location: e.target.value })}
          style={{ minWidth: 0, fontSize: '1em' }}
          name="location"
        />
      </div>
      <Select value={filters.propertyType} onValueChange={(value) => setFilters({ propertyType: value })}>
        <SelectTrigger className="h-11 flex-1 min-w-0 min-w-[120px] text-sm">
          <HomeIcon className="w-4 h-4 mr-2" />
          <SelectValue placeholder="Property Type" />
        </SelectTrigger>
        <SelectContent>
          {PROPERTY_TYPES.map(pt => (
            <SelectItem key={pt.value} value={pt.value}>{pt.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      {showMoveInDate && (
        <div className="relative flex-1 min-w-0">
          <CalendarIcon className="absolute left-2.5 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            type="month"
            className="pl-10 h-11 min-w-0 text-sm"
            placeholder="Move-in Date"
            value={filters.moveInDate || ""}
            onChange={(e) => setFilters({ moveInDate: e.target.value })}
            style={{ minWidth: 0, fontSize: '1em' }}
            name="moveInDate"
          />
        </div>
      )}
      <Button
        size="lg"
        className="h-11 mt-1 sm:mt-0 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity min-w-0 flex-shrink-0 text-sm"
        type="submit"
        disabled={loading}
        style={{ minWidth: 0, fontSize: '1em' }}
      >
        <Search className="w-5 h-5 mr-2" />
        {buttonText}
      </Button>
    </form>
  </section>
);

export default SearchFiltersBar;
