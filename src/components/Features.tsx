
import React from 'react';
import { Shield, Clock, Star, Search, Home, Users, MessageSquare, CreditCard } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Advanced filters and AI-powered recommendations to find your perfect match.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Verified Listings',
      description: 'All properties and users are thoroughly verified for your safety and peace of mind.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Instant Booking',
      description: 'Book viewings and secure properties instantly with our streamlined process.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Star,
      title: 'Top-Rated Service',
      description: '5-star customer service with dedicated support throughout your journey.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: MessageSquare,
      title: 'Direct Communication',
      description: 'Chat directly with landlords and tenants through our secure messaging system.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Safe and secure payment processing with multiple payment options.',
      gradient: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}RentConnect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of rental platforms with our innovative features designed to make renting simple, secure, and seamless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
