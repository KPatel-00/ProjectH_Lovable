
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
    <section className="relative bg-background overflow-hidden" id="main-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center">
        {/* Audience Toggle */}
        <div className="flex justify-center mb-12">
          <AudienceToggle
            options={audienceOptions}
            selected={selectedAudience}
            onSelect={setSelectedAudience}
          />
        </div>

        {selectedAudience === 'tenant' ? (
          <div className="animate-fade-in">
            {/* Why Choose Us Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose RentConnect?</h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-lg text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <span>Browse verified listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <span>Easy & quick applications</span>
                </div>
              </div>
            </div>

            {/* Main Hero Content */}
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tighter mb-4">
                Find Your Dream Home in Minutes
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                From student rooms to full apartments – across Germany.
              </p>

              <SearchFiltersBar
                filters={filters}
                setFilters={(newFilters) => setFilters(prev => ({...prev, ...newFilters}))}
                onSubmit={handleSearch}
                showMoveInDate={true}
                buttonText="Search"
                className="shadow-xl rounded-xl p-3"
              />
            </div>
          </div>
        ) : (
          <div className="mt-12 animate-fade-in max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tighter mb-4">List Your Property with Ease</h1>
            <p className="text-xl text-muted-foreground mb-10">
              Reach thousands of qualified tenants and manage your listings all in one place.
            </p>
            <Button
                size="lg"
                onClick={() => handleCTAClick('list-property')}
                className="bg-primary text-primary-foreground px-10 py-6 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
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
