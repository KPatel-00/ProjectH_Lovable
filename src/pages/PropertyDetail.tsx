import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LuxuryPropertyHero from "@/components/LuxuryPropertyHero";
import LuxuryPropertyFeatures from "@/components/LuxuryPropertyFeatures";
import LuxuryPropertyDescription from "@/components/LuxuryPropertyDescription";
import LuxuryLandlordSection from "@/components/LuxuryLandlordSection";
import RecommendedListings from "@/components/RecommendedListings";
import { Skeleton } from "@/components/ui/skeleton";

// Mock Firestore fetch - now returns data for all demo IDs
const demoListings: Record<string, any> = {
  "1": {
    id: "1",
    title: "Spacious 2BR Apartment in Berlin",
    city: "Berlin",
    neighborhood: "Mitte",
    rent: 1200,
    verified: true,
    type: "Apartment",
    listedAt: Date.now() - 1000 * 60 * 60 * 24 * 5,
    size: 73,
    rooms: 2,
    floor: 3,
    furnishing: "Furnished",
    moveInDate: "2024-07-01",
    amenities: [
      { name: "Wi-Fi", icon: "wifi" },
      { name: "Heating", icon: "thermometer" },
      { name: "Pets Allowed", icon: "paw-print" },
      { name: "Washer", icon: "washing-machine" }
    ],
    description:
      "Enjoy urban living in this spacious apartment located in vibrant Berlin Mitte. Close to cafes, parks, and transit. Open layout, garden view, pets allowed.",
    images: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&q=80",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
    ],
    location: {
      lat: 52.520008,
      lng: 13.404954
    },
    landlord: {
      name: "Michael Weber",
      verified: true,
      rating: 4.8,
      business: "Berlin Living GmbH"
    }
  },
  "2": {
    id: "2",
    title: "Cozy WG Room in Munich",
    city: "Munich",
    neighborhood: "Schwabing",
    rent: 650,
    verified: true,
    type: "WG Room",
    listedAt: Date.now() - 1000 * 60 * 60 * 24 * 1,
    size: 18,
    rooms: 1,
    floor: 2,
    furnishing: "Partly furnished",
    moveInDate: "2024-08-15",
    amenities: [
      { name: "Wi-Fi", icon: "wifi" },
      { name: "Heating", icon: "thermometer" },
      { name: "Washer", icon: "washing-machine" }
    ],
    description:
      "Join a friendly flat share in the heart of Schwabing. Close to everything. Perfect for students or young professionals.",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
    ],
    location: {
      lat: 48.159327,
      lng: 11.580163
    },
    landlord: {
      name: "Anna Müller",
      verified: false,
      rating: 4.5,
      business: null
    }
  },
  "3": {
    id: "3",
    title: "Modern Family House in Frankfurt",
    city: "Frankfurt",
    neighborhood: "Westend",
    rent: 2100,
    verified: false,
    type: "House",
    listedAt: Date.now() - 1000 * 60 * 60 * 24 * 5,
    size: 120,
    rooms: 4,
    floor: 1,
    furnishing: "Unfurnished",
    moveInDate: "2024-09-01",
    amenities: [
      { name: "Heating", icon: "thermometer" },
      { name: "Pets Allowed", icon: "paw-print" },
    ],
    description:
      "Spacious family house with a private garden in popular Westend. Perfect for families or professionals seeking more space.",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80"
    ],
    location: {
      lat: 50.117088,
      lng: 8.663788
    },
    landlord: {
      name: "Philip Hoffmann",
      verified: false,
      rating: 3.9,
      business: "Private"
    }
  },
  "4": {
    id: "4",
    title: "Sunny Studio in Hamburg",
    city: "Hamburg",
    neighborhood: "Altona",
    rent: 800,
    verified: true,
    type: "Studio",
    listedAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
    size: 28,
    rooms: 1,
    floor: 4,
    furnishing: "Furnished",
    moveInDate: "2024-07-10",
    amenities: [
      { name: "Wi-Fi", icon: "wifi" },
      { name: "Washer", icon: "washing-machine" }
    ],
    description:
      "Bright and cozy studio with city views in Hamburg Altona. Move in ready, ideal for singles or expats.",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
    ],
    location: {
      lat: 53.54992,
      lng: 9.93528
    },
    landlord: {
      name: "Clara Lehmann",
      verified: true,
      rating: 5.0,
      business: null
    }
  }
};

const mockFetchListing = async (id: string) => {
  await new Promise(res => setTimeout(res, 800)); // Simulate delay
  return demoListings[id] || null;
};

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [listing, setListing] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    if (!id) {
      navigate("/404");
      return;
    }
    setLoading(true);
    mockFetchListing(id).then((data) => {
      if (ignore) return;
      if (!data) {
        navigate("/404");
      } else {
        setListing(data);
        setLoading(false);
      }
    });
    return () => { ignore = true; };
  }, [id, navigate]);

  if (loading) {
    // Loading skeletons with luxury styling
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          <div className="container mx-auto px-4">
            <Skeleton className="h-96 lg:h-[600px] w-full mb-8 rounded-3xl" />
            <div className="max-w-4xl mx-auto space-y-8">
              <Skeleton className="h-12 w-2/3 mx-auto" />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-24 rounded-2xl" />
                ))}
              </div>
              <Skeleton className="h-32 w-full rounded-2xl" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!listing) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <div className="container mx-auto px-4 lg:px-8">
          <LuxuryPropertyHero
            images={listing.images}
            title={listing.title}
            city={listing.city}
            neighborhood={listing.neighborhood}
            rent={listing.rent}
            verified={listing.verified}
            listedAt={listing.listedAt}
            type={listing.type}
            rooms={listing.rooms}
          />
        </div>

        {/* Features Section */}
        <LuxuryPropertyFeatures
          amenities={listing.amenities}
          type={listing.type}
          size={listing.size}
          rooms={listing.rooms}
          floor={listing.floor}
          furnishing={listing.furnishing}
          moveInDate={listing.moveInDate}
        />

        {/* Description Section */}
        <LuxuryPropertyDescription
          description={listing.description}
          furnishing={listing.furnishing}
        />

        {/* Landlord Section */}
        <LuxuryLandlordSection
          landlord={listing.landlord}
          listingId={listing.id}
        />

        {/* Recommended Properties */}
        <div className="py-16 px-4 lg:px-12 bg-muted/10">
          <RecommendedListings listing={listing} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
