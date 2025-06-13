
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Square, Calendar, Phone, Mail, Star } from 'lucide-react';

const PropertyDetail = () => {
  const { id } = useParams();

  const property = {
    id: id,
    title: 'Modern Apartment in Berlin Mitte',
    area: 'Berlin Mitte',
    rent: '€1,200',
    type: 'Apartment',
    verified: true,
    bedrooms: 2,
    bathrooms: 1,
    size: '65m²',
    description: 'Beautiful modern apartment in the heart of Berlin Mitte. Perfect for young professionals or students. Fully furnished with modern amenities.',
    amenities: ['Furnished', 'Balcony', 'Washing Machine', 'Internet', 'Heating'],
    landlord: {
      name: 'Michael Weber',
      rating: 4.8,
      properties: 12
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Property Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="h-96 bg-gradient-to-br from-muted to-muted/50 rounded-2xl"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-44 bg-gradient-to-br from-muted to-muted/50 rounded-xl"></div>
              <div className="h-44 bg-gradient-to-br from-muted to-muted/50 rounded-xl"></div>
              <div className="h-44 bg-gradient-to-br from-muted to-muted/50 rounded-xl"></div>
              <div className="h-44 bg-gradient-to-br from-muted to-muted/50 rounded-xl"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Property Details */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <h1 className="text-3xl font-bold text-foreground">{property.title}</h1>
                {property.verified && (
                  <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Verified
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-4 mb-6 text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{property.area}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Bed className="w-4 h-4" />
                  <span>{property.bedrooms} bed</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Bath className="w-4 h-4" />
                  <span>{property.bathrooms} bath</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Square className="w-4 h-4" />
                  <span>{property.size}</span>
                </div>
              </div>

              <div className="text-3xl font-bold text-primary mb-6">{property.rent}/month</div>

              <div className="mb-8">
                <h2 className="text-xl font-bold text-foreground mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">Amenities</h2>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity) => (
                    <span key={amenity} className="bg-muted px-3 py-1 rounded-full text-sm">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-background rounded-2xl p-6 shadow-lg border border-border h-fit">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{property.landlord.name[0]}</span>
                </div>
                <h3 className="font-bold text-foreground">{property.landlord.name}</h3>
                <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>{property.landlord.rating}</span>
                  <span>•</span>
                  <span>{property.landlord.properties} properties</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Viewing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
