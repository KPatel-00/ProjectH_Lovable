
import React from 'react';
import { Heart, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const EditorialFeatured = () => {
  const featuredProperty = {
    id: 1,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=800&fit=crop",
    title: "Penthouse Loft in Berlin Mitte",
    price: "€2,800",
    location: "Berlin, Mitte",
    rooms: "3 rooms",
    size: "120m²",
    description: "A stunning penthouse with panoramic city views, featuring floor-to-ceiling windows, hardwood floors, and a private terrace overlooking the historic district."
  };

  const secondaryProperties = [
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1587330979470-3016b6702d89?w=600&h=400&fit=crop",
      title: "Modern Studio",
      price: "€1,200",
      location: "Munich, Schwabing"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1595867818082-083862f3d630?w=600&h=400&fit=crop",
      title: "Garden Apartment",
      price: "€1,800",
      location: "Hamburg, Altona"
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <h6 className="ui-label text-muted-foreground mb-6">Featured Properties</h6>
          <h2 className="editorial-headline text-editorial-5xl font-editorial-bold text-foreground tracking-editorial-tight mb-8 max-w-4xl mx-auto">
            Exceptional Homes for Discerning Tenants
          </h2>
        </div>

        {/* Main Featured Property - Full Bleed */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16 mb-32">
          <div className="col-span-12 lg:col-span-8">
            <div className="relative h-[70vh] min-h-[500px] rounded-3xl overflow-hidden group">
              <img 
                src={featuredProperty.image} 
                alt={featuredProperty.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span className="editorial-body text-editorial-base">{featuredProperty.location}</span>
                </div>
                <h3 className="editorial-headline text-editorial-3xl font-editorial-bold mb-2 tracking-editorial-tight">
                  {featuredProperty.title}
                </h3>
                <div className="flex items-center gap-6 editorial-body text-editorial-base mb-4">
                  <span>{featuredProperty.rooms}</span>
                  <span>{featuredProperty.size}</span>
                </div>
                <div className="editorial-headline text-editorial-2xl font-editorial-bold">
                  {featuredProperty.price}/mo
                </div>
              </div>
              <button className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Heart className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-center">
            <div className="lg:pl-8">
              <p className="editorial-body text-editorial-lg text-muted-foreground mb-8 leading-editorial-relaxed">
                {featuredProperty.description}
              </p>
              <Button className="editorial-subhead bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-editorial-medium hover:opacity-90 transition-opacity group">
                View Details
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary Properties Grid */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-center">
            <h3 className="editorial-headline text-editorial-3xl font-editorial-bold text-foreground mb-6 tracking-editorial-tight">
              More Exceptional Properties
            </h3>
            <p className="editorial-body text-editorial-base text-muted-foreground leading-editorial-relaxed">
              Discover our curated selection of premium rental properties across Germany's most desirable neighborhoods.
            </p>
          </div>
          
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondaryProperties.map((property) => (
                <div key={property.id} className="group cursor-pointer">
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Heart className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="property-details text-muted-foreground">{property.location}</span>
                  </div>
                  <h4 className="property-title text-foreground mb-2">{property.title}</h4>
                  <div className="property-price text-foreground">{property.price}/mo</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialFeatured;
