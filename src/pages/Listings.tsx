
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, MapPin, Home, Calendar, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Listings = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    propertyType: searchParams.get('propertyType') || '',
    moveInDate: searchParams.get('moveInDate') || ''
  });

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
    console.log('Searching with filters:', filters);
  };

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
                placeholder="City / Area / Zip Code" 
                className="pl-10 h-12"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              />
            </div>
            <Select value={filters.propertyType} onValueChange={(value) => setFilters({ ...filters, propertyType: value })}>
              <SelectTrigger className="h-12">
                <Home className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="wg">WG Room</SelectItem>
                <SelectItem value="studio">Studio</SelectItem>
              </SelectContent>
            </Select>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input 
                type="month" 
                className="pl-10 h-12"
                placeholder="Move-in Date"
                value={filters.moveInDate}
                onChange={(e) => setFilters({ ...filters, moveInDate: e.target.value })}
              />
            </div>
            <Button size="lg" className="h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" onClick={handleSearch}>
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {searchParams.get('location') ? `Properties in ${searchParams.get('location')}` : 'All Listings'}
          </h1>
          <p className="text-muted-foreground">
            {featuredProperties.length} properties found
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <div 
              key={property.id}
              className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => window.location.href = `/listing/${property.id}`}
            >
              <div className="h-48 bg-gradient-to-br from-muted to-muted/50 relative">
                {property.verified && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Verified
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-foreground">{property.type}</div>
                    <div className="text-sm text-muted-foreground">{property.area}</div>
                  </div>
                  <div className="text-lg font-bold text-primary">{property.rent}</div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Listed {property.daysListed} days ago
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
