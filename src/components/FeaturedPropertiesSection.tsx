
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Properties</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {property.featured && (
                  <span className="absolute top-3 left-3 bg-foreground text-background text-xs font-bold px-2 py-1 rounded">
                    Featured
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{property.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </div>
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                  <span>{property.rooms}</span>
                  <span>{property.size}</span>
                </div>
                <div className="text-xl font-bold text-foreground">{property.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
