
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AudienceToggle from "./AudienceToggle";
import { CheckCircle2 } from 'lucide-react';
import SearchFiltersBar from './SearchFiltersBar';
import { Button } from './ui/button';

const audienceOptions = [
  { value: "tenant", label: "I'm a Tenant" },
  { value: "landlord", label: "I'm a Landlord" }
];

const Hero = () => {
  const [selectedAudience, setSelectedAudience] = useState('tenant');
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    moveInDate: ''
  });
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (filters.location) params.set('location', filters.location);
    if (filters.propertyType) params.set('propertyType', filters.propertyType);
    if (filters.moveInDate) params.set('moveInDate', filters.moveInDate);

    navigate(`/search?${params.toString()}`);
  };

  const handleCTAClick = (action: string) => {
    if (action === 'list-property') {
      navigate('/list-property');
    }
  };

  return (
    <section className="relative bg-background overflow-hidden min-h-[85vh] flex items-center" id="main-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Audience Toggle */}
        <div className="flex justify-center mb-16">
          <AudienceToggle
            options={audienceOptions}
            selected={selectedAudience}
            onSelect={setSelectedAudience}
          />
        </div>

        {selectedAudience === 'tenant' ? (
          <div className="animate-fade-in">
            {/* Why Choose Us Section */}
            <div className="mb-16">
              <h6 className="editorial-caption mb-8 text-muted-foreground">Why Choose RentConnect?</h6>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="editorial-body text-muted-foreground">Browse verified listings</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="editorial-body text-muted-foreground">Easy & quick applications</span>
                </div>
              </div>
            </div>

            {/* Main Hero Content */}
            <div className="max-w-5xl mx-auto mb-16">
              <h1 className="editorial-display text-5xl md:text-6xl lg:text-7xl text-foreground tracking-wide mb-8 leading-tight">
                Find Your Dream Home in Minutes
              </h1>
              <p className="editorial-body text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
                From student rooms to full apartments – across Germany.
              </p>

              <SearchFiltersBar
                filters={filters}
                setFilters={(newFilters) => setFilters(prev => ({...prev, ...newFilters}))}
                onSubmit={handleSearch}
                showMoveInDate={true}
                buttonText="Search"
                className="shadow-refined-lg rounded-2xl p-6 bg-white border border-border"
              />
            </div>
          </div>
        ) : (
          <div className="mt-8 animate-fade-in max-w-4xl mx-auto">
            <h1 className="editorial-display text-5xl md:text-6xl lg:text-7xl text-foreground tracking-wide mb-8 leading-tight">
              List Your Property with Ease
            </h1>
            <p className="editorial-body text-xl text-muted-foreground mb-16">
              Reach thousands of qualified tenants and manage your listings all in one place.
            </p>
            <Button
                size="lg"
                onClick={() => handleCTAClick('list-property')}
                className="editorial-subhead bg-primary text-primary-foreground px-12 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 text-lg shadow-refined hover:shadow-refined-lg"
            >
                List a Property
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
