import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyImageGallery from "@/components/PropertyImageGallery";
import PropertySummary from "@/components/PropertySummary";
import PropertyAmenities from "@/components/PropertyAmenities";
import LandlordCard from "@/components/LandlordCard";
import ActionPanel from "@/components/ActionPanel";
import Map from "@/components/Map";
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
    // Loading skeletons
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 pt-24 pb-16">
          <Skeleton className="h-80 w-full mb-6 rounded-xl" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5">
              <Skeleton className="h-10 w-1/3" />
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-6 w-40" />
            </div>
            <div>
              <Skeleton className="h-64 w-full rounded-xl" />
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
      <main className="container mx-auto px-2 sm:px-4 lg:px-8 pt-24 pb-16">
        {/* Image Gallery */}
        <PropertyImageGallery images={listing.images} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Title and Info */}
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold text-foreground">{listing.title}</h1>
              {listing.verified && (
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">Verified</span>
              )}
              <span className="text-sm text-muted-foreground">Listed {Math.floor((Date.now() - listing.listedAt) / 86400000)} days ago</span>
            </div>
            <div className="flex gap-3 flex-wrap items-center text-muted-foreground text-base mb-3">
              <span>{listing.city}</span>
              <span>•</span>
              <span>{listing.neighborhood}</span>
            </div>
            <div className="text-2xl font-bold text-primary mb-4">€{listing.rent}/month</div>
            <PropertySummary
              type={listing.type}
              size={listing.size}
              rooms={listing.rooms}
              floor={listing.floor}
              furnishing={listing.furnishing}
              moveInDate={listing.moveInDate}
            />
            <PropertyAmenities amenities={listing.amenities} />
            <div>
              <h2 className="text-xl font-bold mt-6 mb-2">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{listing.description}</p>
            </div>
          </div>
          {/* Sticky Action Panel & Landlord */}
          <div className="relative h-fit mt-6 lg:mt-0">
            <div className="lg:sticky lg:top-28 flex flex-col gap-6">
              <ActionPanel listingId={listing.id} />
              <LandlordCard landlord={listing.landlord} />
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-3">Location</h2>
          <Map center={listing.location} />
        </div>

        <div className="mt-12">
          <RecommendedListings listing={listing} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
