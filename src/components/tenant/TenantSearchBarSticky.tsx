
import React from "react";
import { MapPin, Home, Calendar, Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSearchFilters } from "@/hooks/useSearchFilters";

const PROPERTY_TYPES = [
  { label: "Apartment", value: "apartment" },
  { label: "House", value: "house" },
  { label: "WG Room", value: "wg" },
  { label: "Studio", value: "studio" },
];

const TenantSearchBarSticky = () => {
  const { filters, setFilters, handleSearch } = useSearchFilters({ submitUrl: "/tenant/home" });

  return (
    <section className="sticky top-16 z-20 bg-white/95 backdrop-blur-md border-b border-border shadow-refined py-6">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <form
          onSubmit={e => { e.preventDefault(); handleSearch(); }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end"
          autoComplete="off"
        >
          {/* City/Area Input */}
          <div className="md:col-span-4">
            <label className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Enter city or area"
                className="pl-12 h-12 border-border bg-white hover:border-primary/20 focus:border-primary focus:ring-2 focus:ring-ring transition-all duration-300 text-sm"
                value={filters.location}
                onChange={e => setFilters({ location: e.target.value })}
                name="location"
              />
            </div>
          </div>

          {/* Property Type Dropdown */}
          <div className="md:col-span-3">
            <label className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
              Property Type
            </label>
            <Select value={filters.propertyType} onValueChange={(value) => setFilters({ propertyType: value })}>
              <SelectTrigger className="h-12 border-border bg-white hover:border-primary/20 focus:border-primary focus:ring-2 focus:ring-ring transition-all duration-300">
                <Home className="w-4 h-4 mr-3 text-muted-foreground" />
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent className="bg-white border-border shadow-refined-lg">
                {PROPERTY_TYPES.map(pt => (
                  <SelectItem key={pt.value} value={pt.value} className="text-sm hover:bg-accent">{pt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Move-in Date */}
          <div className="md:col-span-3">
            <label className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
              Move-in Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="month"
                className="pl-12 h-12 border-border bg-white hover:border-primary/20 focus:border-primary focus:ring-2 focus:ring-ring transition-all duration-300 text-sm"
                value={filters.moveInDate || ""}
                onChange={e => setFilters({ moveInDate: e.target.value })}
                name="moveInDate"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="md:col-span-2">
            <Button
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-refined hover:shadow-refined-lg"
              type="submit"
            >
              <SearchIcon className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TenantSearchBarSticky;
