
import React from 'react';
import { Heart, MapPin } from 'lucide-react';

const FeaturedPropertiesSection = () => {
  const properties = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
    title: "Modern Apartment",
    price: "€1,200",
    location: "Berlin, Mitte",
    rooms: "2 rooms",
    size: "65m²",
    featured: true
  }));

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="editorial-headline text-editorial-4xl font-editorial-bold text-foreground mb-4 tracking-editorial-tight">
            Featured Properties
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-3xl shadow-sm border border-border overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {property.featured && (
                  <span className="absolute top-4 left-4 ui-label bg-foreground text-background px-3 py-1.5 rounded-xl font-editorial-medium">
                    Featured
                  </span>
                )}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                  <Heart className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="property-title text-foreground mb-3">
                  {property.title}
                </h3>
                <div className="flex items-center property-details text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {property.location}
                </div>
                <div className="flex justify-between items-center property-details text-muted-foreground mb-4">
                  <span>{property.rooms}</span>
                  <span>{property.size}</span>
                </div>
                <div className="property-price text-foreground">
                  {property.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
