import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, MapPin, Home, Calendar, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useT } from "@/i18n";
import SearchFiltersBar from "@/components/SearchFiltersBar";
import { useSearchFilters } from "@/hooks/useSearchFilters";

const Listings = () => {
  const t = useT();

  const {
    filters,
    setFilters,
    handleSearch,
    isFiltering,
    handleReset,
    searchParams
  } = useSearchFilters({ submitUrl: "/listings" });

  const featuredProperties = [
    {
      id: 1,
      image: '/placeholder.svg',
      type: 'Apartment',
      area: 'Berlin Mitte',
      rent: '€1,200',
      verified: true,
      daysListed: 3
    },
    {
      id: 2,
      image: '/placeholder.svg',
      type: 'WG Room',
      area: 'Munich Schwabing',
      rent: '€650',
      verified: true,
      daysListed: 1
    },
    {
      id: 3,
      image: '/placeholder.svg',
      type: 'House',
      area: 'Frankfurt Westend',
      rent: '€2,100',
      verified: false,
      daysListed: 5
    },
    {
      id: 4,
      image: '/placeholder.svg',
      type: 'Studio',
      area: 'Hamburg Altona',
      rent: '€800',
      verified: true,
      daysListed: 2
    }
  ];

  const navigate = useNavigate();

  const handleCityClick = (cityName: string) => {
    navigate(`/listings?location=${encodeURIComponent(cityName)}`);
  };

  const handlePropertyClick = (propertyId: number) => {
    navigate(`/listing/${propertyId}`);
  };

  const handleCTAClick = (action: string) => {
    switch (action) {
      case 'list-property':
        navigate('/list-property');
        break;
      case 'contact-support':
        navigate('/contact');
        break;
      case 'view-all':
        navigate('/listings');
        break;
      default:
        console.log(`Action: ${action}`);
    }
  };

  // Utility for cities per page (passed down)
  const visibleCities = () => {
    if (window.innerWidth < 640) return 2;
    if (window.innerWidth < 1024) return 4;
    return 6;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Search Filters */}
        <SearchFiltersBar
          filters={filters}
          setFilters={setFilters}
          onSubmit={handleSearch}
          showMoveInDate={true}
        />
        {/* Show Reset Filters Button if any filter is active */}
        {isFiltering && (
          <div className="flex mt-4">
            <button
              className="ml-auto px-3 py-2 text-destructive text-sm border border-border rounded-md hover:bg-destructive/10 transition focus-visible:ring-2 focus-visible:ring-destructive/60"
              onClick={handleReset}
              tabIndex={0}
              aria-label={t("resetFilters") || "Reset all filters"}
              type="button"
            >
              {t("resetFilters") || "Reset filters"}
            </button>
          </div>
        )}

        {/* Results */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4" tabIndex={-1} id="listing-results-title">
            {searchParams.get('location') ? `${t("propertiesIn")} ${searchParams.get('location')}` : t("allListings")}
          </h1>
          <p className="text-muted-foreground">
            {featuredProperties.length} {t("propertiesFound")}
          </p>
        </div>

        {/* Property Grid */}
        {featuredProperties.length === 0 ? (
          <div className="flex flex-col items-center py-16" aria-label="No results found">
            <img src="/placeholder.svg" className="w-24 h-24 mb-6 opacity-60" alt="" role="presentation" />
            <div className="text-2xl font-semibold mb-2" style={{color: "hsl(var(--primary))"}}>{t("noResultsFound") || "No results found"}</div>
            <div className="text-muted-foreground mb-4 text-center">
              {t("tryChangingFilters") || "Try changing your filters or check back soon."}
            </div>
            {/* Add Reset Filters in Empty State */}
            {isFiltering && (
              <Button
                variant="ghost"
                className="mt-2 border border-border text-destructive hover:bg-destructive/10 focus-visible:ring-2 focus-visible:ring-destructive/60"
                onClick={handleReset}
                aria-label={t("resetFilters") || "Reset search filters"}
                type="button"
              >
                {t("resetFilters") || "Reset filters"}
              </Button>
            )}
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            aria-label={t("propertiesFound")}
          >
            {featuredProperties.map((property) => (
              <div 
                key={property.id}
                className={`
                  bg-background rounded-2xl overflow-hidden shadow-lg border border-border
                  hover:shadow-2xl hover:scale-[1.02] transition-all duration-200
                  outline-none ring-0
                  focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:scale-[1.03]
                  group cursor-pointer
                `}
                tabIndex={0}
                onClick={() => navigate(`/listing/${property.id}`)}
                onKeyDown={e => e.key === "Enter" && navigate(`/listing/${property.id}`)}
                aria-label={`${property.verified ? t("verified") + " " : ""}${t(property.type.toLowerCase())} in ${property.area}, ${property.rent}`}
                role="button"
                style={{ borderColor: property.verified ? "#16a34a" : undefined }}
              >
                <div className="h-48 bg-gradient-to-br from-muted to-muted/50 relative">
                  {property.verified && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                      aria-label={t("verified")}
                    >
                      {t("verified")}
                    </div>
                  )}
                  {/* Image with informative alt text for screen readers */}
                  <img
                    src={property.image}
                    alt={`${t(property.type.toLowerCase())} in ${property.area}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-2xl opacity-80"
                    loading="lazy"
                    aria-hidden={!property.image}
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-semibold text-foreground" style={{color: "hsl(var(--foreground))"}}>
                        {t(property.type.toLowerCase())}
                      </div>
                      <div className="text-sm text-muted-foreground" style={{color: "hsl(var(--secondary))"}}>
                        {property.area}
                      </div>
                    </div>
                    <div className="text-lg font-bold text-primary" style={{color: "hsl(var(--primary))"}}>
                      {property.rent}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground" style={{color: "hsl(var(--foreground))"}}>
                    {t("listedAgo").replace("{days}", String(property.daysListed))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Listings;
// NOTE: This file exceeds 250 lines and is becoming too large.
// Consider refactoring into smaller components soon!
