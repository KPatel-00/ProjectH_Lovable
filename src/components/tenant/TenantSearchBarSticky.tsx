
// --- Clean sticky search bar for tenant dashboard, matches new mockup ---
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
    <section className="sticky top-16 z-20 bg-white border-b border-[#EBEBEB] px-4" style={{boxShadow:'0 2px 12px -9px #8787871b'}}>
      <form
        onSubmit={e => { e.preventDefault(); handleSearch(); }}
        className="w-full max-w-screen-2xl mx-auto flex flex-wrap md:flex-nowrap gap-2 py-3"
        autoComplete="off"
      >
        <div className="relative flex-1 min-w-[170px]">
          <label className="block text-xs font-semibold text-gray-600 pl-2 mb-1">Location</label>
          <Input
            placeholder="Enter city or area"
            className="pl-9 h-11 rounded-lg bg-[#F7F7F8] border border-[#EBEBEB] focus:ring-black"
            value={filters.location}
            onChange={e => setFilters({ location: e.target.value })}
            name="location"
            style={{ fontSize: '1em' }}
          />
          <MapPin className="absolute left-3 top-9 -mt-2.5 text-gray-400 w-5 h-5 pointer-events-none" />
        </div>
        <div className="relative min-w-[140px] max-w-[180px] flex-1">
          <label className="block text-xs font-semibold text-gray-600 pl-2 mb-1">Property Type</label>
          <Select value={filters.propertyType} onValueChange={(value) => setFilters({ propertyType: value })}>
            <SelectTrigger className="h-11 rounded-lg bg-[#F7F7F8] border border-[#EBEBEB] px-4">
              <Home className="w-4 h-4 mr-2 text-gray-400" />
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {PROPERTY_TYPES.map(pt => (
                <SelectItem key={pt.value} value={pt.value}>{pt.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="relative min-w-[140px] flex-1">
          <label className="block text-xs font-semibold text-gray-600 pl-2 mb-1">Move-in Date</label>
          <Input
            type="month"
            placeholder="Select date"
            className="pl-10 h-11 rounded-lg bg-[#F7F7F8] border border-[#EBEBEB]"
            value={filters.moveInDate || ""}
            onChange={e => setFilters({ moveInDate: e.target.value })}
            name="moveInDate"
            style={{ fontSize: '1em' }}
          />
          <Calendar className="absolute left-3 top-9 -mt-2.5 text-gray-400 w-5 h-5 pointer-events-none" />
        </div>
        <div className="flex items-end">
          <Button
            className="rounded-lg bg-black hover:bg-black/90 text-white font-semibold px-7 h-11 shadow-md transition"
            type="submit"
          >
            <SearchIcon className="w-5 h-5 mr-2" />
            Search
          </Button>
        </div>
      </form>
    </section>
  );
};
export default TenantSearchBarSticky;
