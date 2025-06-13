
import React, { useState } from 'react';
import { Search, MapPin, Home, Calendar, Users, FileText, MessageSquare, BarChart3, Shield, Play, Star, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Hero = () => {
  const [selectedAudience, setSelectedAudience] = useState('tenant');

  const cities = [
    { name: 'Berlin', subtitle: 'Startup hub', image: '/placeholder.svg' },
    { name: 'Munich', subtitle: 'Home of Oktoberfest', image: '/placeholder.svg' },
    { name: 'Frankfurt', subtitle: 'Finance capital', image: '/placeholder.svg' },
    { name: 'Hamburg', subtitle: 'Port city charm', image: '/placeholder.svg' },
    { name: 'Cologne', subtitle: 'Cultural center', image: '/placeholder.svg' },
    { name: 'Stuttgart', subtitle: 'Tech innovation', image: '/placeholder.svg' },
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

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
        {/* Audience Toggle */}
        <div className="flex justify-center mb-12 animate-fade-in">
          <div className="bg-background rounded-full p-1 shadow-lg border border-border">
            <div className="flex">
              <button
                onClick={() => setSelectedAudience('tenant')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedAudience === 'tenant'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                I'm a Tenant
              </button>
              <button
                onClick={() => setSelectedAudience('landlord')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedAudience === 'landlord'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                I'm a Landlord
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Content Based on Selection */}
        <div className="animate-fade-in">
          {selectedAudience === 'tenant' ? (
            // Tenant Content
            <>
              {/* Why Choose Us */}
              <div className="text-center mb-12">
                <div className="flex justify-center space-x-8 mb-8">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Browse verified listings</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Easy & quick applications</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Direct landlord contact</span>
                  </div>
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
                      />
                    </div>
                    <Select>
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
                      />
                    </div>
                    <Button size="lg" className="h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
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
                <div className="cities-scroll-container overflow-x-auto pb-4">
                  <div className="flex space-x-6 min-w-max px-4">
                    {cities.map((city, index) => (
                      <div 
                        key={city.name}
                        className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300 cursor-pointer min-w-[250px] group"
                      >
                        <div className="h-40 bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          <div className="absolute bottom-3 left-3 text-white">
                            <div className="text-lg font-bold">{city.name}</div>
                            <div className="text-sm opacity-90">{city.subtitle}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Featured Properties */}
              <div className="mb-16">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold">Explore Featured Properties</h2>
                  <Button variant="outline">View All</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredProperties.map((property) => (
                    <div 
                      key={property.id}
                      className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
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
            </>
          ) : (
            // Landlord Content
            <>
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
                  {landlordFeatures.map((feature, index) => (
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
                    <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      List Your Property
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
