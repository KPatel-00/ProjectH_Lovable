import React, { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
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

const parseSearchParams = (params: URLSearchParams) => {
  const obj: any = {
    location: params.get("location") || "",
    // CHANGE: propertyType now defaults to "all"
    propertyType: params.get("propertyType") || "all",
    price: [Number(params.get("minPrice")) || DEFAULT_PRICE[0], Number(params.get("maxPrice")) || DEFAULT_PRICE[1]],
    bedrooms: params.get("bedrooms") || "Any",
    moveInDate: params.get("moveInDate") || "",
    verifiedOnly: params.get("verifiedOnly") === "true",
    furnished: params.get("furnished") === "true",
    petFriendly: params.get("petFriendly") === "true",
    parking: params.get("parking") === "true",
    balcony: params.get("balcony") === "true",
    sort: params.get("sort") || SORT_OPTIONS[0].value
  };
  return obj;
};

const getFilteredListings = (filters: any, listings: any[]) => {
  // Filtering logic - mock
  return listings.filter(listing => {
    if (
      filters.location &&
      !listing.city.toLowerCase().includes(filters.location.toLowerCase())
    )
      return false;
    // Only filter by propertyType if not "all"
    if (
      filters.propertyType &&
      filters.propertyType !== "all" &&
      listing.title.toLowerCase().indexOf(filters.propertyType.toLowerCase()) === -1
    )
      return false;
    if (
      filters.verifiedOnly &&
      !listing.verified
    )
      return false;
    if (
      listing.rent < filters.price[0] ||
      listing.rent > filters.price[1]
    )
      return false;
    // For this demo, we just use 'Apartment' as property type in title
    if (filters.bedrooms !== "Any") {
      // Not implemented for demo
    }
    if (filters.furnished && Math.random() < 0.3) return false;
    if (filters.petFriendly && Math.random() < 0.3) return false;
    if (filters.parking && Math.random() < 0.3) return false;
    if (filters.balcony && Math.random() < 0.3) return false;
    return true;
  });
};

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState(() => parseSearchParams(searchParams));
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [displayed, setDisplayed] = useState(PAGE_SIZE);
  const [listings, setListings] = useState<any[]>([]);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    setFilters(parseSearchParams(searchParams));
  }, [searchParams]);

  useEffect(() => {
    // Filtering logic - mock
    const filtered = getFilteredListings(filters, MOCK_LISTINGS);
    setListings(filtered);
    setDisplayed(PAGE_SIZE);
  }, [filters]);

  // Add a helper to check if any search filter is currently applied:
  const isFiltering = React.useMemo(() => {
    // Ignore default price/bedrooms/sort, focus on user-applied filters
    return !!(
      filters.location ||
      (filters.propertyType && filters.propertyType !== "all") ||
      filters.price[0] !== 500 ||
      filters.price[1] !== 2500 ||
      (filters.bedrooms && filters.bedrooms !== "Any") ||
      filters.moveInDate ||
      filters.verifiedOnly ||
      filters.furnished ||
      filters.petFriendly ||
      filters.parking ||
      filters.balcony
    );
  }, [filters]);

  const handleResetFilters = () => {
    setFilters({
      location: "",
      propertyType: "all",
      price: [500, 2500],
      bedrooms: "Any",
      moveInDate: "",
      verifiedOnly: false,
      furnished: false,
      petFriendly: false,
      parking: false,
      balcony: false,
      sort: SORT_OPTIONS[0].value,
    });
    setSearchParams({});
  };

  const handleFilterChange = (updates: any) => setFilters(f => ({ ...f, ...updates }));

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (filters.location) params.set("location", filters.location);
    // Only set propertyType if not "all"
    if (filters.propertyType && filters.propertyType !== "all")
      params.set("propertyType", filters.propertyType);
    if (filters.price[0]) params.set("minPrice", String(filters.price[0]));
    if (filters.price[1]) params.set("maxPrice", String(filters.price[1]));
    if (filters.bedrooms && filters.bedrooms !== "Any") params.set("bedrooms", String(filters.bedrooms));
    if (filters.moveInDate) params.set("moveInDate", filters.moveInDate);
    if (filters.verifiedOnly) params.set("verifiedOnly", "true");
    if (filters.furnished) params.set("furnished", "true");
    if (filters.petFriendly) params.set("petFriendly", "true");
    if (filters.parking) params.set("parking", "true");
    if (filters.balcony) params.set("balcony", "true");
    if (filters.sort) params.set("sort", filters.sort);

    navigate(`/search?${params.toString()}`);
  };

  const handleBookmark = (id: number) => {
    setListings(ls =>
      ls.map(l =>
        l.id === id ? { ...l, bookmarked: !l.bookmarked } : l
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Topbar Filters */}
      <div className="sticky top-0 z-30 bg-background/95 border-b border-border backdrop-blur pb-1">
        <div className="max-w-7xl mx-auto flex items-center px-4 py-2 gap-2 lg:gap-3">
          <div className="relative flex-1 min-w-[120px]">
            <MapPin className="absolute left-2 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Enter city, area, or zip code"
              className="pl-8 h-10"
              value={filters.location}
              onChange={e => handleFilterChange({ location: e.target.value })}
              onKeyDown={e => (e.key === "Enter" ? handleSearch() : undefined)}
            />
          </div>
          <Select
            // propertyType value (use "all" for unfiltered)
            value={filters.propertyType}
            onValueChange={v => handleFilterChange({ propertyType: v })}
          >
            <SelectTrigger className="h-10 min-w-[128px]">
              <Home className="w-4 h-4 mr-1" />
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              {/* Changed "All Types" to value="all" */}
              <SelectItem value="all">All Types</SelectItem>
              {PROPERTY_TYPES.map(pt => (
                <SelectItem key={pt.value} value={pt.value}>{pt.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center min-w-[120px] w-44">
            <span className="mr-2 text-xs text-muted-foreground">€</span>
            <Slider
              min={300}
              max={4000}
              step={25}
              value={filters.price}
              onValueChange={vals => handleFilterChange({ price: vals })}
              className="w-full h-2"
            />
            <span className="ml-2 text-xs">{`${filters.price[0]}–${filters.price[1]} €/mo`}</span>
          </div>
          <Select
            value={String(filters.bedrooms)}
            onValueChange={v => handleFilterChange({ bedrooms: v })}
          >
            <SelectTrigger className="h-10 min-w-[90px]">
              <ChevronDown className="w-3 h-3 mr-1" />
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              {BEDROOMS.map(b => (
                <SelectItem key={b} value={String(b)}>{b}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="relative min-w-[124px]">
            <Calendar className="absolute left-2 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              type="month"
              className="pl-8 h-10"
              placeholder="Choose move-in date"
              value={filters.moveInDate}
              onChange={e => handleFilterChange({ moveInDate: e.target.value })}
            />
          </div>
          <Button
            variant="outline"
            className="lg:hidden"
            size="icon"
            onClick={() => setShowMobileFilters(true)}
            title="More filters"
          >
            <SlidersHorizontal />
          </Button>
          <Button size="lg" onClick={handleSearch} className="ml-2 min-w-[110px]">
            <SearchIcon className="w-4 h-4 mr-1" />
            Search
          </Button>
          {isFiltering && (
            <Button size="sm" variant="ghost" className="ml-2 px-3 border border-border rounded-md text-destructive hover:bg-destructive/10 transition"
              onClick={handleResetFilters}
              tabIndex={0}
              aria-label="Reset all filters"
            >
              Reset filters
            </Button>
          )}
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto w-full pt-8 pb-16 gap-4">
        {/* Sidebar (desktop) */}
        <SearchSidebarFilters filters={filters} setFilters={handleFilterChange} />
        {/* Listings Grid */}
        <main className="flex-1 min-w-0">
          {listings.length === 0 ? (
            <div className="flex flex-col items-center py-16">
              <img src="/placeholder.svg" className="w-24 h-24 mb-6 opacity-60" />
              <div className="text-2xl font-semibold mb-2">No results found</div>
              <div className="text-muted-foreground mb-4 text-center">
                Try changing your filters or check back soon.
              </div>
              <Button
                variant="ghost"
                className="mt-2 border border-border text-destructive hover:bg-destructive/10"
                onClick={handleResetFilters}
                aria-label="Reset search filters"
              >
                Reset filters
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {listings.slice(0, displayed).map(l => (
                  <div
                    key={l.id}
                    tabIndex={0}
                    className={`group outline-none ring-offset-2 rounded-xl transition-all bg-background
                      hover:scale-[1.02] hover:shadow-xl focus:scale-[1.01] focus:ring-2 focus:ring-primary/60
                    `}
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
                      onClick={() => navigate(`/listing/${l.id}`)}
                    />
                  </div>
                ))}
              </div>
              {displayed < listings.length && (
                <div className="flex justify-center mt-8">
                  <Button onClick={() => setDisplayed(d => d + PAGE_SIZE)}>
                    Load More
                  </Button>
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
        setFilters={handleFilterChange}
        onApply={handleSearch}
      />
    </div>
  );
};

export default Search;
