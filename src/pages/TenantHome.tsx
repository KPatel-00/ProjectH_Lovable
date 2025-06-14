
import React from "react";
import TenantWelcomeBanner from "@/components/TenantWelcomeBanner";
import TenantSearchBar from "@/components/TenantSearchBar";
import TenantSavedSearches from "@/components/TenantSavedSearches";
import TenantRecommendedProperties from "@/components/TenantRecommendedProperties";
import TenantAnnouncements from "@/components/TenantAnnouncements";

const mockUser = {
  firstName: "Emma",
  moveInGoal: "2025-09",
};

const mockSavedSearches = [
  { title: "Berlin 1BR under €1000", filters: { location: "Berlin", propertyType: "apartment", maxPrice: 1000 }, id: 1 },
  { title: "Hamburg Studios", filters: { location: "Hamburg", propertyType: "studio" }, id: 2 },
  { title: "Frankfurt House Rentals", filters: { location: "Frankfurt", propertyType: "house" }, id: 3 },
  { title: "Dresden WG Offers", filters: { location: "Dresden", propertyType: "wg" }, id: 4 },
];

const mockRecommendations = [
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&q=80",
    title: "Sunny 1BR Apartment",
    price: "€950",
    location: "Berlin Mitte",
    bookmarked: false,
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
    title: "Cozy Studio Room",
    price: "€750",
    location: "Hamburg Altona",
    bookmarked: true,
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=80",
    title: "2BR Family House",
    price: "€1,600",
    location: "Frankfurt Westend",
    bookmarked: false,
  }
];

const mockAnnouncements = [
  { title: "Tip", desc: "Update your profile to get more relevant recommendations!" },
  { title: "Feature", desc: "New verified badge now visible on trusted listings." },
  { title: "Tip", desc: "Check out our Safety Center before messaging a new landlord." },
];

const TenantHome = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto max-w-4xl px-4 py-6 flex-1 flex flex-col gap-8">
        <TenantWelcomeBanner firstName={mockUser.firstName} moveInGoal={mockUser.moveInGoal} />
        <TenantSearchBar />
        <TenantSavedSearches savedSearches={mockSavedSearches} />
        <TenantRecommendedProperties properties={mockRecommendations} />
        <TenantAnnouncements announcements={mockAnnouncements} />
      </div>
    </div>
  );
};

export default TenantHome;
