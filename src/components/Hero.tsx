import React, { useState } from 'react';
import HeroTenant from './HeroTenant';
import HeroLandlord from './HeroLandlord';
import { useNavigate } from 'react-router-dom';
import AudienceToggle from "./AudienceToggle";

const audienceOptions = [
  { value: "tenant", label: "I'm a Tenant" },
  { value: "landlord", label: "I'm a Landlord" }
];

const Hero = () => {
  const [selectedAudience, setSelectedAudience] = useState('tenant');
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    propertyType: '',
    moveInDate: ''
  });
  const [cityScroll, setCityScroll] = useState(0);
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchFilters.location) params.set('location', searchFilters.location);
    if (searchFilters.propertyType) params.set('propertyType', searchFilters.propertyType);
    if (searchFilters.moveInDate) params.set('moveInDate', searchFilters.moveInDate);

    navigate(`/listings?${params.toString()}`);
  };

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
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
        {/* Audience Toggle */}
        <div className="flex justify-center mb-12">
          <AudienceToggle
            options={audienceOptions}
            selected={selectedAudience}
            onSelect={setSelectedAudience}
          />
        </div>
        {/* Animated Content Switch */}
        <div className="relative animate-fade-in" style={{ minHeight: 600, transition: "min-height 0.3s" }}>
          {selectedAudience === 'tenant' ? (
            <HeroTenant
              searchFilters={searchFilters}
              setSearchFilters={setSearchFilters}
              handleSearch={handleSearch}
              handleCityClick={handleCityClick}
              handlePropertyClick={handlePropertyClick}
              handleCTAClick={handleCTAClick}
              cityScroll={cityScroll}
              setCityScroll={setCityScroll}
              visibleCities={visibleCities}
            />
          ) : (
            <HeroLandlord
              handleCTAClick={handleCTAClick}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
