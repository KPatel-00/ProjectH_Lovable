
import React, { useState } from 'react';
import { Search, MapPin, Home, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  const [userType, setUserType] = useState<'tenant' | 'landlord'>('tenant');

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* User Type Toggle */}
            <div className="inline-flex items-center bg-muted rounded-full p-1">
              <button
                onClick={() => setUserType('tenant')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  userType === 'tenant'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                I'm a Tenant
              </button>
              <button
                onClick={() => setUserType('landlord')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  userType === 'landlord'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                I'm a Landlord
              </button>
            </div>

            {/* Dynamic Content */}
            {userType === 'tenant' ? (
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Find Your
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {" "}Perfect Home
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Discover amazing rental properties that match your lifestyle. From cozy apartments to spacious houses, find your next home with ease.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Rent Your Property
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {" "}With Confidence
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Connect with reliable tenants and maximize your rental income. Our platform makes property management simple and profitable.
                </p>
              </div>
            )}

            {/* Search Bar or CTA */}
            {userType === 'tenant' ? (
              <div className="bg-background rounded-2xl p-6 shadow-xl border border-border">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      placeholder="Enter location..."
                      className="pl-10 h-12 border-0 bg-muted focus-visible:ring-2 focus-visible:ring-primary"
                    />
                  </div>
                  <Button className="h-12 px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    <Search className="w-5 h-5 mr-2" />
                    Search Properties
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Home className="w-5 h-5 mr-2" />
                  List Your Property
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">25K+</div>
                <div className="text-sm text-muted-foreground">Happy Tenants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=800&fit=crop&crop=center"
                alt="Modern living space"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-background rounded-2xl p-4 shadow-xl border border-border animate-scale-in delay-500">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Active Users</div>
                  <div className="text-2xl font-bold text-primary">12.5K</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-4 shadow-xl border border-border animate-scale-in delay-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">New Listings</div>
                  <div className="text-2xl font-bold text-secondary">+250</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
