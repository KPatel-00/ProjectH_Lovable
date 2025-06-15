
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const EditorialStorytellingSection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Story */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16 mb-32">
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
            <h6 className="ui-label text-muted-foreground mb-8">Our Story</h6>
            <h2 className="editorial-headline text-editorial-4xl font-editorial-bold text-foreground mb-8 tracking-editorial-tight">
              Redefining the Rental Experience
            </h2>
            <p className="editorial-body text-editorial-lg text-muted-foreground mb-8 leading-editorial-relaxed">
              Born from the frustration of outdated rental processes, RentConnect emerged as a solution that puts people first. We believe finding a home should be inspiring, not exhausting.
            </p>
            <p className="editorial-body text-editorial-base text-muted-foreground mb-12 leading-editorial-relaxed">
              Our platform bridges the gap between landlords and tenants through technology, transparency, and trust. Every feature is designed with both parties in mind, creating a marketplace that works for everyone.
            </p>
            <Button className="editorial-subhead bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-editorial-medium hover:opacity-90 transition-opacity group self-start">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-2 gap-6 h-[700px]">
              <div className="col-span-1 space-y-6">
                <div className="h-2/3 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=500&fit=crop"
                    alt="Modern apartment building"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-1/3 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=200&fit=crop"
                    alt="Beautiful building details"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-1 space-y-6">
                <div className="h-1/3 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=200&fit=crop"
                    alt="Architectural details"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-2/3 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=500&fit=crop"
                    alt="Night view of buildings"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="editorial-display text-editorial-6xl font-editorial-black text-foreground mb-12 tracking-editorial-wide leading-editorial-tight">
            Building Communities, One Home at a Time
          </h2>
          <p className="editorial-body text-editorial-xl text-muted-foreground leading-editorial-relaxed max-w-4xl mx-auto">
            We're not just a platform — we're architects of connection, creating spaces where landlords and tenants can build lasting relationships based on mutual respect and shared values.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EditorialStorytellingSection;
