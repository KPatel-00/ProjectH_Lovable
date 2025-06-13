
import React, { useState } from 'react';
import { Search, MapPin, Home, Users, Calendar, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  const [userType, setUserType] = useState<'tenant' | 'landlord'>('tenant');

  const tenantBenefits = [
    { icon: CheckCircle, text: "Browse verified listings" },
    { icon: CheckCircle, text: "Easy & quick applications" },
    { icon: CheckCircle, text: "Direct landlord contact" }
  ];

  const stats = [
    { label: "Cities Covered", value: "60+" },
    { label: "Properties Listed", value: "5,000+" },
    { label: "Verified Landlords", value: "2,000+" }
  ];

  const popularCities = [
    { name: "Berlin", subtitle: "Startup hub", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop" },
    { name: "Munich", subtitle: "Cultural capital", image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop" },
    { name: "Frankfurt", subtitle: "Finance center", image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop" },
    { name: "Hamburg", subtitle: "Port city", image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop" },
    { name: "Cologne", subtitle: "Media hub", image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop" },
    { name: "Stuttgart", subtitle: "Tech center", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop" }
  ];

  const featuredProperties = [
    { id: 1, type: "Apartment", area: "Berlin Mitte", rent: "€1,200", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop", verified: true, daysAgo: 2 },
    { id: 2, type: "House", area: "Munich Center", rent: "€2,800", image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop", verified: true, daysAgo: 1 },
    { id: 3, type: "WG Room", area: "Frankfurt", rent: "€650", image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop", verified: false, daysAgo: 3 },
    { id: 4, type: "Studio", area: "Hamburg", rent: "€900", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop", verified: true, daysAgo: 1 }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        {/* Audience Split Toggle */}
        <div className="flex justify-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-muted rounded-full p-1.5 shadow-lg">
            <button
              onClick={() => setUserType('tenant')}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                userType === 'tenant'
                  ? 'bg-background text-foreground shadow-md transform scale-105'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              I'm a Tenant
            </button>
            <button
              onClick={() => setUserType('landlord')}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                userType === 'landlord'
                  ? 'bg-background text-foreground shadow-md transform scale-105'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              I'm a Landlord
            </button>
          </div>
        </div>

        {/* Dynamic Content Based on User Type */}
        <div className="animate-fade-in">
          {userType === 'tenant' ? (
            <div className="space-y-20">
              {/* Why Choose Us */}
              <div className="text-center space-y-8">
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                  {tenantBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 text-muted-foreground">
                      <benefit.icon className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-medium">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Section */}
              <div className="text-center space-y-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Find Your
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {" "}Dream Home
                  </span>
                  {" "}in Minutes
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  From student rooms to full apartments – across Germany.
                </p>

                {/* Search Bar */}
                <div className="bg-background rounded-2xl p-6 shadow-xl border border-border max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <Input
                        placeholder="City / Area / Zip Code"
                        className="pl-10 h-12 border-0 bg-muted focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="h-12 border-0 bg-muted">
                        <Home className="w-5 h-5 mr-2 text-muted-foreground" />
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
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <Input
                        type="date"
                        placeholder="Move-in Date"
                        className="pl-10 h-12 border-0 bg-muted focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </div>
                    <Button className="h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                      <Search className="w-5 h-5 mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
              </div>

              {/* Platform Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Popular Cities */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-center text-foreground">Explore Top Cities</h2>
                <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
                  {popularCities.map((city, index) => (
                    <Card key={index} className="min-w-[280px] cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <img
                          src={city.image}
                          alt={city.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold">{city.name}</h3>
                          <p className="text-sm opacity-90">{city.subtitle}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Featured Properties */}
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold text-foreground">Explore Featured Properties</h2>
                  <Button variant="outline" className="flex items-center gap-2">
                    View All
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredProperties.map((property) => (
                    <Card key={property.id} className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <img
                          src={property.image}
                          alt={property.type}
                          className="w-full h-full object-cover"
                        />
                        {property.verified && (
                          <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium">
                            Verified
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-foreground">{property.type}</h3>
                            <p className="text-sm text-muted-foreground">{property.area}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-foreground">{property.rent}</p>
                            <p className="text-xs text-muted-foreground">per month</p>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">Listed {property.daysAgo} days ago</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Trust Bar */}
              <div className="bg-muted rounded-2xl p-8 space-y-6">
                <div className="text-center">
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-lg font-semibold">4.8/5</span>
                    <span className="text-muted-foreground">from 1,200+ users</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">"Found my perfect apartment in just 2 days!"</p>
                    <p className="text-xs font-medium">- Sarah M.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">"Great platform with verified listings."</p>
                    <p className="text-xs font-medium">- Tom K.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">"Easy application process, highly recommended!"</p>
                    <p className="text-xs font-medium">- Lisa R.</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Landlord content (simplified for now)
            <div className="text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Rent Your Property
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {" "}With Confidence
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect with reliable tenants and maximize your rental income. Our platform makes property management simple and profitable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Home className="w-5 h-5 mr-2" />
                  List Your Property
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
