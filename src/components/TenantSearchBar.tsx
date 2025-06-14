
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Home as HomeIcon, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TenantSearchBar = () => {
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    moveInDate: ""
  });
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (filters.location) params.set("location", filters.location);
    if (filters.propertyType) params.set("propertyType", filters.propertyType);
    if (filters.moveInDate) params.set("moveInDate", filters.moveInDate);
    navigate(`/search?${params.toString()}`);
  };

  return (
    // Improved mobile responsiveness with flex-wrap and min-w-0 on inputs
    <section className="w-full bg-background border border-border rounded-2xl shadow p-2 sm:p-4 mb-0">
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-3 flex-wrap">
        <div className="relative flex-1 min-w-0">
          <MapPin className="absolute left-2.5 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="City / Area / Zip Code"
            className="pl-10 h-11 min-w-0 text-sm"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            style={{ minWidth: 0, fontSize: '1em' }}
          />
        </div>
        <Select value={filters.propertyType} onValueChange={(value) => setFilters({ ...filters, propertyType: value })}>
          <SelectTrigger className="h-11 flex-1 min-w-0 min-w-[120px] text-sm">
            <HomeIcon className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="wg">WG Room</SelectItem>
            <SelectItem value="studio">Studio</SelectItem>
          </SelectContent>
        </Select>
        <div className="relative flex-1 min-w-0">
          <CalendarIcon className="absolute left-2.5 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            type="month"
            className="pl-10 h-11 min-w-0 text-sm"
            placeholder="Move-in Date"
            value={filters.moveInDate}
            onChange={(e) => setFilters({ ...filters, moveInDate: e.target.value })}
            style={{ minWidth: 0, fontSize: '1em' }}
          />
        </div>
        <Button
          size="lg"
          className="h-11 mt-1 sm:mt-0 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity min-w-0 flex-shrink-0 text-sm"
          onClick={handleSearch}
          style={{ minWidth: 0, fontSize: '1em' }}
        >
          <Search className="w-5 h-5 mr-2" />
          Search Now
        </Button>
      </div>
    </section>
  );
};

export default TenantSearchBar;
