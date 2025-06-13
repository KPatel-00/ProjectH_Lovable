import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Home, Calendar, Users, FileText, MessageSquare, BarChart3, Shield, Play, Star, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Hero = () => {
  const [selectedAudience, setSelectedAudience] = useState('tenant');
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    propertyType: '',
    moveInDate: ''
  });
  const navigate = useNavigate();

  const cities = [
    { name: 'Berlin', subtitle: 'Startup hub', properties: '2,400+ rentals' },
    { name: 'Munich', subtitle: 'Home of Oktoberfest', properties: '1,800+ rentals' },
    { name: 'Frankfurt', subtitle: 'Finance capital', properties: '1,200+ rentals' },
    { name: 'Hamburg', subtitle: 'Port city charm', properties: '950+ rentals' },
    { name: 'Cologne', subtitle: 'Cultural center', properties: '1,100+ rentals' },
    { name: 'Stuttgart', subtitle: 'Tech innovation', properties: '800+ rentals' },
  ];

  const featuredProperties = [
    {
      id: 1,
      image: '/placeholder.svg',
      type: 'Modern Apartment',
      area: 'Berlin Mitte',
      rent: '€1,200',
      details: '2 Bed | 2 Bath | 1200 sq ft',
      verified: true,
      daysListed: 3
    },
    {
      id: 2,
      image: '/placeholder.svg',
      type: 'Spacious House',
      area: 'Munich Schwabing',
      rent: '€2,100',
      details: '4 Bed | 3 Bath | 2500 sq ft',
      verified: true,
      daysListed: 1
    },
    {
      id: 3,
      image: '/placeholder.svg',
      type: 'Luxury Condo',
      area: 'Frankfurt Westend',
      rent: '€1,800',
      details: '1 Bed | 1 Bath | 800 sq ft',
      verified: false,
      daysListed: 5
    },
    {
      id: 4,
      image: '/placeholder.svg',
      type: 'Charming Flat',
      area: 'Hamburg Altona',
      rent: '€950',
      details: '2 Bed | 1 Bath | 1000 sq ft',
      verified: true,
      daysListed: 2
    }
  ];

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
      description: 'Create your listing in minutes with our intuitive form builder'
    },
    {
      icon: Users,
      title: 'Application management',
      description: 'Manage applications efficiently and find the best tenant for your property'
    },
    {
      icon: MessageSquare,
      title: 'Direct communication',
      description: 'Connect directly with potential tenants through our platform'
    },
    {
      icon: BarChart3,
      title: 'Dashboard insights',
      description: 'Get valuable insights into your property\'s performance'
    }
  ];

  const landlordReviews = [
    {
      name: 'Markus S.',
      title: '2 months ago',
      review: 'Listing my property was incredibly easy and I found great tenants quickly.',
      rating: 5
    },
    {
      name: 'Julia R.',
      title: '3 months ago',
      review: 'The application management tools saved me a lot of time and effort.',
      rating: 4
    },
    {
      name: 'Thomas H.',
      title: '1 month ago',
      review: 'I appreciate the direct communication features, which made it easy to answer tenant questions.',
      rating: 5
    }
  ];

  return (
    <section className="relative bg-background">
      {/* Hero Header */}
      <div className="relative">
        {/* Background Image Section */}
        <div className="relative h-[600px] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/placeholder.svg')",
              backgroundBlendMode: 'overlay'
            }}
          ></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
            {/* Audience Toggle */}
            <div className="flex justify-center pt-12 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
                <div className="flex">
                  <button
                    onClick={() => setSelectedAudience('tenant')}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedAudience === 'tenant'
                        ? 'bg-white text-slate-800 shadow-md'
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    I'm a Tenant
                  </button>
                  <button
                    onClick={() => setSelectedAudience('landlord')}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedAudience === 'landlord'
                        ? 'bg-white text-slate-800 shadow-md'
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    I'm a Landlord
                  </button>
                </div>
              </div>
            </div>

            {/* Dynamic Hero Content */}
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center max-w-4xl mx-auto">
                {selectedAudience === 'tenant' ? (
                  <>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                      Find Your Perfect Rental
                    </h1>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                      Discover a wide range of rental properties, from cozy apartments to spacious houses, all in one place.
                    </p>

                    {/* Search Bar */}
                    <div className="bg-white rounded-xl p-4 shadow-xl max-w-2xl mx-auto">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1 relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input 
                            placeholder="Enter an address, neighborhood, city, or ZIP" 
                            className="pl-10 h-12 border-0 focus:ring-2 focus:ring-primary"
                            value={searchFilters.location}
                            onChange={(e) => setSearchFilters({ ...searchFilters, location: e.target.value })}
                          />
                        </div>
                        <Button 
                          size="lg" 
                          className="h-12 px-8 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg"
                          onClick={handleSearch}
                        >
                          Search
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                      List Your Property with Ease
                    </h1>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                      Reach thousands of potential tenants across Germany.
                    </p>
                    <Button 
                      size="lg" 
                      className="h-12 px-8 bg-white text-slate-800 hover:bg-white/90 font-semibold rounded-lg"
                      onClick={() => handleCTAClick('list-property')}
                    >
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {selectedAudience === 'tenant' ? (
          <>
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 -mt-8 relative z-20">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">1,000,000+</div>
                <div className="text-muted-foreground">Listings</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">10,000,000+</div>
                <div className="text-muted-foreground">Visitors</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">5,000,000+</div>
                <div className="text-muted-foreground">Renters</div>
              </div>
            </div>

            {/* Popular Cities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Popular Cities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city, index) => (
                  <div 
                    key={city.name}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                    onClick={() => handleCityClick(city.name)}
                  >
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-xl font-bold">{city.name}</div>
                        <div className="text-sm opacity-90">{city.subtitle}</div>
                        <div className="text-sm opacity-75">{city.properties}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Properties */}
            <div className="mb-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Featured Properties</h2>
                <Button variant="outline" onClick={() => handleCTAClick('view-all')}>View All</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProperties.map((property) => (
                  <div 
                    key={property.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
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
                      <div className="mb-2">
                        <div className="font-semibold text-foreground">{property.type}</div>
                        <div className="text-sm text-muted-foreground">{property.area}</div>
                        <div className="text-sm text-muted-foreground">{property.details}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-lg font-bold text-primary">{property.rent}</div>
                        <div className="text-xs text-muted-foreground">
                          {property.daysListed} days ago
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose RentConnect?</h2>
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h3 className="text-2xl font-bold mb-4">Find Your Dream Rental with Ease</h3>
                <p className="text-muted-foreground text-lg">
                  RentConnect offers a comprehensive and user-friendly platform for tenants seeking their ideal rental property. With a wide range of listings, advanced search tools, and a commitment to security, we make the rental process seamless and stress-free.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Extensive Property Listings</h4>
                  <p className="text-muted-foreground">Access a vast database of rental properties across the country, with new listings added daily.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">User-Friendly Search Tools</h4>
                  <p className="text-muted-foreground">Easily filter and sort search results based on your specific needs, including location, price, and amenities.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Secure and Reliable Platform</h4>
                  <p className="text-muted-foreground">Rest assured knowing that our platform prioritizes your safety and security with verified listings and secure payment options.</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Find Your New Home?</h3>
              <p className="text-xl mb-6 opacity-90">Join RentConnect today and start your search for the perfect rental property.</p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                onClick={() => handleCTAClick('view-all')}
              >
                Get Started
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Why List with Us */}
            <div className="mb-16">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Benefits of Listing with RentConnect</h2>
                <p className="text-muted-foreground text-lg">
                  Discover why landlords choose RentConnect to manage their properties.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {landlordFeatures.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to List Video */}
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold mb-8">See How It Works</h2>
              <div className="max-w-2xl mx-auto">
                <div className="relative bg-gradient-to-br from-muted to-muted/50 rounded-xl overflow-hidden aspect-video cursor-pointer group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mb-16 text-center">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl mb-6 opacity-90">Join thousands of landlords who trust RentConnect to manage their properties.</p>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                  onClick={() => handleCTAClick('list-property')}
                >
                  List Your Property
                </Button>
              </div>
            </div>

            {/* Landlord Reviews */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">What Landlords Are Saying</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {landlordReviews.map((review, index) => (
                  <div 
                    key={review.name}
                    className="bg-white rounded-xl p-6 shadow-lg"
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
              <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg border border-border">
                <BarChart3 className="w-5 h-5 text-primary mr-2" />
                <span className="font-semibold text-foreground">93% of listings get leads within 72 hours</span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
