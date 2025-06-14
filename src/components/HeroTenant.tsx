
import React from 'react';
import {
  CheckCircle2,
  FileText,
  BarChart3,
  MapPin,
  Home,
  Calendar,
  Search,
  Star,
  Shield,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useNavigate } from "react-router-dom";

const valuePoints = [
  {
    icon: CheckCircle2,
    label: 'Browse Verified Listings',
  },
  {
    icon: FileText,
    label: 'Easy & Quick Applications',
  },
  {
    icon: BarChart3,
    label: 'Real-Time Application Status',
  },
];

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

function BeerMugIcon(props: any) { return <BarChart3 {...props} />;}
function ShipIcon(props: any) { return <Home {...props} />;}
function CathedralIcon(props: any) { return <Star {...props} />;}

const popularCities = [
  {
    name: 'Berlin',
    subtitle: 'Startup hub',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80',
    icon: BarChart3,
  },
  {
    name: 'Munich',
    subtitle: 'Home of Oktoberfest',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80',
    icon: BeerMugIcon,
  },
  {
    name: 'Frankfurt',
    subtitle: 'Finance capital',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    icon: BarChart3,
  },
  {
    name: 'Hamburg',
    subtitle: 'Port city charm',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    icon: ShipIcon,
  },
  {
    name: 'Cologne',
    subtitle: 'Cultural center',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    icon: CathedralIcon,
  },
  {
    name: 'Stuttgart',
    subtitle: 'Tech innovation',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    icon: BarChart3,
  },
];

type Props = {
  searchFilters: {
    location: string;
    propertyType: string;
    moveInDate: string;
  };
  setSearchFilters: React.Dispatch<React.SetStateAction<{
    location: string;
    propertyType: string;
    moveInDate: string;
  }>>;
  handleSearch: () => void;
  handleCityClick: (cityName: string) => void;
  handlePropertyClick: (propertyId: number) => void;
  handleCTAClick: (action: string) => void;
  cityScroll: number;
  setCityScroll: (s: number) => void;
  visibleCities: () => number;
};

const HeroTenant: React.FC<Props> = ({
  searchFilters,
  setSearchFilters,
  handleSearch,
  handleCityClick,
  handlePropertyClick,
  handleCTAClick,
  cityScroll,
  setCityScroll,
  visibleCities,
}) => {
  // carousel utility
  const cityPageCount = Math.max(1, Math.ceil(popularCities.length / visibleCities()));
  const renderCityCarousel = () => {
    const perPage = visibleCities();
    const total = popularCities.length;
    const firstIdx = cityScroll * perPage;
    const lastIdx = Math.min(firstIdx + perPage, total);

    return (
      <div className="relative">
        <div className="flex items-center mb-4 justify-end gap-2 pr-6">
          <button
            className={`rounded-full p-2 bg-background border border-border shadow-md transition disabled:opacity-50`}
            onClick={() => setCityScroll(Math.max(0, cityScroll - 1))}
            disabled={cityScroll === 0}
            aria-label="Previous Cities"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className={`rounded-full p-2 bg-background border border-border shadow-md transition disabled:opacity-50`}
            onClick={() => setCityScroll(Math.min(cityPageCount - 1, cityScroll + 1))}
            disabled={cityScroll >= cityPageCount - 1}
            aria-label="Next Cities"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="cities-scroll-container overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-max px-4">
            {popularCities.slice(firstIdx, lastIdx).map((city) => (
              <div
                key={city.name}
                className="group bg-background rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-200 hover:scale-105 cursor-pointer min-w-[220px]"
                onClick={() => handleCityClick(city.name)}
                tabIndex={0}
                role="button"
                aria-label={`Go to listings for ${city.name}`}
              >
                <div className="relative h-36 w-full">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="object-cover h-full w-full"
                    style={{ objectPosition: 'center', minHeight: 120, maxHeight: 144, transition: 'transform 0.2s' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <city.icon className="bg-white/90 p-1 rounded-full w-8 h-8 text-primary border border-primary shadow" />
                  </div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="text-lg font-bold">{city.name}</div>
                    <div className="text-xs opacity-90">{city.subtitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Dots indicator */}
        <div className="flex justify-center mt-2 gap-1">
          {Array.from({ length: cityPageCount }).map((_, idx) => (
            <div
              key={idx}
              className={`w-2.5 h-2.5 rounded-full ${idx === cityScroll ? 'bg-primary' : 'bg-muted'} transition`}
              style={{
                opacity: idx === cityScroll ? 1 : 0.5,
                transform: idx === cityScroll ? 'scale(1.15)' : 'scale(0.92)',
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Why Choose Us */}
      <div className="text-center mb-10">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8">
          {valuePoints.map((vp) => (
            <div key={vp.label} className="flex gap-2 items-center text-base text-muted-foreground font-medium">
              <vp.icon className="w-6 h-6 text-primary" />
              <span>{vp.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Find Your Dream Home
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {" "}in Minutes
          </span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          From student rooms to full apartments – across Germany.
        </p>
        {/* Search Bar */}
        <div className="bg-background rounded-2xl p-6 shadow-xl border border-border max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="City / Area / Zip Code"
                className="pl-10 h-12"
                value={searchFilters.location}
                onChange={(e) => setSearchFilters({ ...searchFilters, location: e.target.value })}
              />
            </div>
            <Select value={searchFilters.propertyType} onValueChange={(value) => setSearchFilters({ ...searchFilters, propertyType: value })}>
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
                value={searchFilters.moveInDate}
                onChange={(e) => setSearchFilters({ ...searchFilters, moveInDate: e.target.value })}
              />
            </div>
            <Button size="lg" className="h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" onClick={handleSearch}>
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
      {/* Popular Cities */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Top Cities</h2>
        {renderCityCarousel()}
      </div>
      {/* Featured Properties */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Explore Featured Properties</h2>
          <Button variant="outline" onClick={() => handleCTAClick('view-all')}>View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => handlePropertyClick(property.id)}
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
      </div>
      {/* Trust Bar */}
      <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
            </div>
            <div className="font-semibold">4.8/5 from 1,200+ users</div>
            <div className="text-sm text-muted-foreground">Trustpilot Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">💬</div>
            <div className="font-semibold">"Found my perfect apartment in 2 days!"</div>
            <div className="text-sm text-muted-foreground">- Sarah M.</div>
          </div>
          <div className="text-center">
            <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="font-semibold">GDPR Compliant</div>
            <div className="text-sm text-muted-foreground">Secure & Private</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTenant;
