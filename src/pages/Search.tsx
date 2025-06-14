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
            <div className="flex flex-col items-center py-16">
              <img src="/placeholder.svg" className="w-24 h-24 mb-6 opacity-60" />
              <div className="text-2xl font-semibold mb-2">No results found</div>
              <div className="text-muted-foreground mb-4 text-center">
                Try changing your filters or check back soon.
              </div>
              <button
                className="mt-2 border border-border text-destructive hover:bg-destructive/10 px-4 py-2 rounded"
                onClick={handleReset}
                aria-label="Reset search filters"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <>
              <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5" aria-label="Search results">
                {listings.slice(0, displayed).map(l => (
                  <li
                    key={l.id}
                    tabIndex={0}
                    className={`group outline-none ring-offset-2 rounded-xl transition-all bg-background
                      hover:scale-[1.02] hover:shadow-xl focus:scale-[1.01] focus:ring-2 focus:ring-primary/60
                    `}
                    onClick={() => navigate(`/listing/${l.id}`)}
                    onKeyDown={e => {
                      if (e.key === "Enter") navigate(`/listing/${l.id}`);
                    }}
                    aria-label={`${l.verified ? "Verified " : ""}${l.title} in ${l.city}, €${l.rent}/mo`}
                    role="button"
                  >
                    <ListingCard
                      image={l.image}
                      title={l.title}
                      rent={l.rent}
                      city={l.city}
                      verified={l.verified}
                      status={l.status}
                      bookmarked={l.bookmarked}
                      onBookmark={() => handleBookmark(l.id)}
                    />
                  </li>
                ))}
              </ul>
              {displayed < listings.length && (
                <div className="flex justify-center mt-8">
                  <button onClick={() => setDisplayed(d => d + 9)} className="px-4 py-2 rounded bg-secondary">Load More</button>
                </div>
              )}
            </>
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
