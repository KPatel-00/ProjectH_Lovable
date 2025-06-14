import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  MapPin,
  Home,
  Calendar,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Shield,
  Play,
  Star,
  ArrowRight,
  Phone,
  Building2,
  User,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const popularCities = [
  {
    name: 'Berlin',
    subtitle: 'Startup hub',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80',
    icon: Building2, // Use an available icon
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
    icon: Building2,
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

function BeerMugIcon(props: any) {
  // Inline SVG or simply use 'Users' for illustration
  return <Users {...props} />;
}
function ShipIcon(props: any) {
  // Placeholder, use City icon or similar
  return <Home {...props} />;
}
function CathedralIcon(props: any) {
  // Placeholder, use a star
  return <Star {...props} />;
}

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

// For value points with icons
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

  const landlordFeatures = [
    {
      icon: FileText,
      title: 'Easy listing creation',
      description: 'Create professional listings in minutes with our intuitive form builder'
    },
    {
      icon: Users,
      title: 'Application management',
      description: 'Review, compare and manage tenant applications from one dashboard'
    },
    {
      icon: FileText,
      title: 'Document management',
      description: 'Secure document storage and sharing (Coming Soon)',
      comingSoon: true
    },
    {
      icon: MessageSquare,
      title: 'Communicate with tenants easily',
      description: 'Built-in messaging system for seamless landlord-tenant communication'
    },
    {
      icon: BarChart3,
      title: 'Dashboard insights',
      description: 'Track views, leads, and performance metrics for your listings'
    }
  ];

  const landlordReviews = [
    {
      name: 'Michael Weber',
      title: 'Student Housing Manager',
      review: 'Filled 3 units in under a week! The platform makes tenant screening so much easier.',
      rating: 5
    },
    {
      name: 'Sarah Müller',
      title: 'Property Owner',
      review: 'Great communication tools and the dashboard gives me all the insights I need.',
      rating: 5
    },
    {
      name: 'Thomas Schmidt',
      title: 'Real Estate Investor',
      review: 'Professional service and quality tenants. Highly recommend for landlords.',
      rating: 5
    }
  ];

  // Ref: amount of cards visible per screen
  const visibleCities = () => {
    if (window.innerWidth < 640) return 2;
    if (window.innerWidth < 1024) return 4;
    return 6;
  };

  // Dots for carousel
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
            onClick={() => setCityScroll((s) => Math.max(0, s - 1))}
            disabled={cityScroll === 0}
            aria-label="Previous Cities"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className={`rounded-full p-2 bg-background border border-border shadow-md transition disabled:opacity-50`}
            onClick={() => setCityScroll((s) => Math.min(cityPageCount - 1, s + 1))}
            disabled={cityScroll >= cityPageCount - 1}
            aria-label="Next Cities"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="cities-scroll-container overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-max px-4">
            {popularCities.slice(firstIdx, lastIdx).map((city, index) => (
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
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
        {/* Audience Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-background border border-border rounded-full p-1 shadow-lg max-w-md w-full mx-auto">
            <button
              onClick={() => setSelectedAudience('tenant')}
              className={`flex-1 text-base font-semibold rounded-full py-2 transition-all duration-300 z-10 text-center
                ${selectedAudience === "tenant"
                  ? "text-primary border-2 border-primary bg-white shadow"
                  : "text-muted-foreground hover:text-primary"}
              `}
              style={{
                outline: "none",
                background: selectedAudience === "tenant" ? "white" : "transparent"
              }}
              aria-pressed={selectedAudience === "tenant"}
            >
              I'm a Tenant
            </button>
            <button
              onClick={() => setSelectedAudience('landlord')}
              className={`flex-1 text-base font-semibold rounded-full py-2 transition-all duration-300 z-10 text-center
                ${selectedAudience === "landlord"
                  ? "text-primary border-2 border-primary bg-white shadow"
                  : "text-muted-foreground hover:text-primary"}
              `}
              style={{
                outline: "none",
                background: selectedAudience === "landlord" ? "white" : "transparent"
              }}
              aria-pressed={selectedAudience === "landlord"}
            >
              I'm a Landlord
            </button>
          </div>
        </div>

        {/* Animated Content Switch */}
        <div
          className="relative animate-fade-in"
          style={{ minHeight: 600, transition: "min-height 0.3s" }}
        >
          {/* --- TENANT PATH --- */}
          {selectedAudience === 'tenant' && (
            <div key="tenant" className="w-full">
              {/* Why Choose Us */}
              <div className="text-center mb-10">
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8">
                  {valuePoints.map((vp, i) => (
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

              {/* Platform Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
                <div className="p-6 bg-background rounded-2xl shadow-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">60+</div>
                  <div className="text-muted-foreground">Cities Covered</div>
                </div>
                <div className="p-6 bg-background rounded-2xl shadow-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
                  <div className="text-muted-foreground">Properties Listed</div>
                </div>
                <div className="p-6 bg-background rounded-2xl shadow-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">2,000+</div>
                  <div className="text-muted-foreground">Verified Landlords</div>
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
          )}

          {/* --- LANDLORD PATH --- */}
          {selectedAudience === 'landlord' && (
            <div key="landlord" className="w-full">
              {/* Why List with Us */}
              <div className="mb-16">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-foreground mb-6 leading-tight">
                  List Your Property with
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {" "}Confidence
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                  Join thousands of landlords who trust us to connect them with quality tenants.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {landlordFeatures.map((feature) => (
                    <div
                      key={feature.title}
                      className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:scale-105 group relative"
                    >
                      {feature.comingSoon && (
                        <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                          Coming Soon
                        </div>
                      )}
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to List Video */}
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold mb-8">See How Easy It Is</h2>
                <div className="max-w-2xl mx-auto">
                  <div className="relative bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden aspect-video cursor-pointer group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-primary ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm opacity-90">Under 60 seconds</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mb-16 text-center">
                <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-4">Ready to List Your Property?</h2>
                  <p className="text-xl mb-6 opacity-90">Join thousands of successful landlords today</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-white text-primary hover:bg-white/90"
                      onClick={() => handleCTAClick('list-property')}
                    >
                      <ArrowRight className="w-5 h-5 mr-2" />
                      List Your Property
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary"
                      onClick={() => handleCTAClick('contact-support')}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Contact Support
                    </Button>
                  </div>
                </div>
              </div>

              {/* Landlord Reviews */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">What Landlords Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {landlordReviews.map((review, index) => (
                    <div
                      key={review.name}
                      className="bg-background rounded-2xl p-6 shadow-lg border border-border"
                    >
                      <div className="flex items-center mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">"{review.review}"</p>
                      <div>
                        <div className="font-semibold text-foreground">{review.name}</div>
                        <div className="text-sm text-muted-foreground">{review.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Badge */}
              <div className="text-center">
                <div className="inline-flex items-center bg-background rounded-full px-6 py-3 shadow-lg border border-border">
                  <BarChart3 className="w-5 h-5 text-primary mr-2" />
                  <span className="font-semibold text-foreground">93% of listings get leads within 72 hours</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
