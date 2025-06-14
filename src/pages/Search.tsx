import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, Search as SearchIcon, MapPin, Calendar, ChevronDown, SlidersHorizontal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ListingCard from "@/components/ListingCard";
import SearchSidebarFilters from "@/components/SearchSidebarFilters";
import MobileFiltersDrawer from "@/components/MobileFiltersDrawer";
import { Slider } from "@/components/ui/slider";
const MOCK_LISTINGS = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  image: "/placeholder.svg",
  title: `Apartment in City ${i + 1}`,
  rent: 900 + i * 40,
  city: `City ${i + 1}`,
  verified: i % 3 === 0,
  bookmarked: false,
  status: ["active", "pending", "inactive"][i % 3]
}));

const PROPERTY_TYPES = [
  { label: "Apartment", value: "apartment" },
  { label: "House", value: "house" },
  { label: "WG Room", value: "wg" },
  { label: "Studio", value: "studio" }
];

const BEDROOMS = ["Any", 1, 2, 3, 4, 5];

const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Price Low–High", value: "priceLowHigh" },
  { label: "Price High–Low", value: "priceHighLow" }
];

const DEFAULT_PRICE = [500, 2500];

const PAGE_SIZE = 9;

import SearchFiltersBar from "@/components/SearchFiltersBar";
import { useSearchFilters } from "@/hooks/useSearchFilters";
import NoResultsMessage from "@/components/NoResultsMessage";
import SearchListingsGrid from "@/components/SearchListingsGrid";

const Search = () => {
  const {
    filters,
    setFilters,
    handleSearch,
    isFiltering,
    handleReset,
  } = useSearchFilters({ submitUrl: "/search" });

  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [displayed, setDisplayed] = useState(9); // PAGE_SIZE
  const [listings, setListings] = useState<any[]>([]);
  const isFirstLoad = useRef(true);
  const navigate = useNavigate();

  // Move original filtering logic here, using shared filters:
  useEffect(() => {
    // Filtering logic - mock
    const filtered = MOCK_LISTINGS.filter(listing => {
      if (
        filters.location &&
        !listing.city.toLowerCase().includes(filters.location.toLowerCase())
      )
        return false;
      if (
        filters.propertyType &&
        filters.propertyType !== "all" &&
        listing.title.toLowerCase().indexOf(filters.propertyType.toLowerCase()) === -1
      )
        return false;
      return true;
    });
    setListings(filtered);
    setDisplayed(9);
  }, [filters]);

  const handleBookmark = (id: number) => {
    setListings(ls =>
      ls.map(l =>
        l.id === id ? { ...l, bookmarked: !l.bookmarked } : l
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* NEW: Shared Filters bar */}
      <SearchFiltersBar
        filters={filters}
        setFilters={setFilters}
        onSubmit={handleSearch}
        showMoveInDate={true}
      />
      {isFiltering && (
        <div className="flex mt-2 mb-4">
          <button
            className="ml-auto px-3 py-2 text-destructive text-sm border border-border rounded-md hover:bg-destructive/10 transition"
            onClick={handleReset}
            tabIndex={0}
            aria-label="Reset search filters"
            type="button"
          >
            Reset filters
          </button>
        </div>
      )}
      <div className="flex max-w-7xl mx-auto w-full pt-8 pb-16 gap-4">
        {/* Sidebar (desktop) */}
        <SearchSidebarFilters filters={filters} setFilters={setFilters} />
        {/* Listings Grid */}
        <main className="flex-1 min-w-0">
          {listings.length === 0 ? (
            <NoResultsMessage onReset={handleReset} showReset={true} />
          ) : (
            <SearchListingsGrid
              listings={listings}
              displayed={displayed}
              onBookmark={handleBookmark}
              onLoadMore={() => setDisplayed(d => d + 9)}
            />
          )}
        </main>
      </div>
      <MobileFiltersDrawer
        open={showMobileFilters}
        setOpen={setShowMobileFilters}
        filters={filters}
        setFilters={setFilters}
        onApply={handleSearch}
      />
    </div>
  );
};

export default Search;
// NOTE: This file exceeds 300 lines and should be refactored into smaller modules soon!
