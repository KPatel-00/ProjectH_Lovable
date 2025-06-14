import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, MapPin, Home, Calendar, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useT } from "@/i18n";

const Listings = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    propertyType: searchParams.get('propertyType') || '',
    moveInDate: searchParams.get('moveInDate') || ''
  });

  // Add useNavigate for SPA navigation
  const navigate = useNavigate();

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

  const handleSearch = () => {
    // Removed console.log for production
  };
  const t = useT();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Search Filters */}
        <div className="bg-background rounded-2xl p-6 shadow-xl border border-border mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder={t("cityAreaZip") || "Enter city, area, or zip code"}
                className="pl-10 h-12"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              />
            </div>
            <Select value={filters.propertyType} onValueChange={(value) => setFilters({ ...filters, propertyType: value })}>
              <SelectTrigger className="h-12">
                <Home className="w-4 h-4 mr-2" />
                <SelectValue placeholder={t("propertyType") || "Property Type"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">{t("apartment")}</SelectItem>
                <SelectItem value="house">{t("house")}</SelectItem>
                <SelectItem value="wg">{t("wgRoom")}</SelectItem>
                <SelectItem value="studio">{t("studio")}</SelectItem>
              </SelectContent>
            </Select>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input 
                type="month" 
                className="pl-10 h-12"
                placeholder={t("moveInDate") || "Choose move-in date"}
                value={filters.moveInDate}
                onChange={(e) => setFilters({ ...filters, moveInDate: e.target.value })}
              />
            </div>
            <Button size="lg" className="h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" onClick={handleSearch}>
              <Search className="w-5 h-5 mr-2" />
              {t("search")}
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {searchParams.get('location') ? `${t("propertiesIn")} ${searchParams.get('location')}` : t("allListings")}
          </h1>
          <p className="text-muted-foreground">
            {featuredProperties.length} {t("propertiesFound")}
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <div 
              key={property.id}
              className={`
                bg-background rounded-2xl overflow-hidden shadow-lg border border-border
                hover:shadow-2xl hover:scale-[1.02] transition-all duration-200
                focus-within:ring-2 focus-within:ring-primary/70 focus-within:outline-none focus-within:scale-[1.01]
                group cursor-pointer
              `}
              tabIndex={0}
              onClick={() => navigate(`/listing/${property.id}`)}
              onKeyDown={e => e.key === "Enter" && navigate(`/listing/${property.id}`)}
            >
              <div className="h-48 bg-gradient-to-br from-muted to-muted/50 relative">
                {property.verified && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {t("verified")}
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-foreground">{t(property.type.toLowerCase())}</div>
                    <div className="text-sm text-muted-foreground">{property.area}</div>
                  </div>
                  <div className="text-lg font-bold text-primary">{property.rent}</div>
                </div>
                <div className="text-xs text-muted-foreground">
                  {/* Safe replacement for "listedAgo" with days interpolation */}
                  {t("listedAgo").replace("{days}", String(property.daysListed))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Listings;
