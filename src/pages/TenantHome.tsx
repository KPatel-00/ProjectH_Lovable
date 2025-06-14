
import React from "react";
import TenantWelcomeBanner from "@/components/TenantWelcomeBanner";
import TenantSearchBar from "@/components/TenantSearchBar";
import TenantSavedSearches from "@/components/TenantSavedSearches";
import TenantRecommendedProperties from "@/components/TenantRecommendedProperties";
import TenantAnnouncements from "@/components/TenantAnnouncements";
import TenantWishlist from "@/components/TenantWishlist";
import TenantApplicationStatuses from "@/components/TenantApplicationStatuses";

const mockUser = {
  firstName: "Anna",
  moveInGoal: "2024-09",
};

const mockSavedSearches = [
  { title: "Berlin 1BR under €1000", filters: { location: "Berlin", propertyType: "apartment", maxPrice: 1000 }, id: 1 },
  { title: "Hamburg Studios", filters: { location: "Hamburg", propertyType: "studio" }, id: 2 },
  { title: "Frankfurt House Rentals", filters: { location: "Frankfurt", propertyType: "house" }, id: 3 },
];

const mockWishlistProperties = [
  {
    id: 101,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    title: "Charming Apartment in Mitte",
    rooms: 2,
    area: 65,
    price: "€1,200 / month",
    city: "Berlin, Mitte",
    status: "New Message",
    statusType: "danger",
  },
  {
    id: 102,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    title: "Family Home in Prenzlauer Berg",
    rooms: 4,
    area: 120,
    price: "€2,500 / month",
    city: "Berlin, Prenzlauer Berg",
    status: "Status Updated",
    statusType: "success",
  },
  {
    id: 103,
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80",
    title: "Studio with City View in Kreuzberg",
    rooms: 1,
    area: 40,
    price: "€950 / month",
    city: "Berlin, Kreuzberg",
  },
];

const mockRecommendations = [
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
    title: "Spacious Loft in Friedrichshain",
    rooms: 3,
    area: 85,
    price: "€1,800 / month",
    city: "Berlin, Friedrichshain",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=80",
    title: "Townhouse in Charlottenburg",
    rooms: 5,
    area: 150,
    price: "€3,200 / month",
    city: "Berlin, Charlottenburg",
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80",
    title: "Penthouse with Terrace in Schöneberg",
    rooms: 2,
    area: 70,
    price: "€1,500 / month",
    city: "Berlin, Schöneberg",
  },
];

const mockAnnouncements = [
  { title: "Tip", desc: "Update your profile to get more relevant recommendations!" },
  { title: "Feature", desc: "New verified badge now visible on trusted listings." },
  { title: "Tip", desc: "Check out our Safety Center before messaging a new landlord." },
];

const mockApplications = [
  {
    id: 201,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    title: "Apartment in Mitte",
    appliedDate: "15.07.2024",
    progress: 60,
    status: "Under Review",
  },
  {
    id: 202,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    title: "House in Prenzlauer Berg",
    appliedDate: "20.07.2024",
    progress: 20,
    status: "Documents Submitted",
  },
  {
    id: 203,
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80",
    title: "Studio in Kreuzberg",
    appliedDate: "25.07.2024",
    progress: 80,
    status: "Viewing Scheduled",
  },
];

const TenantHome = () => {
  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <div className="container mx-auto max-w-5xl px-4 py-8 flex-1 flex flex-col gap-8">
        <TenantWelcomeBanner firstName={mockUser.firstName} moveInGoal={mockUser.moveInGoal} />
        <TenantSearchBar />
        <TenantWishlist properties={mockWishlistProperties} />
        <TenantSavedSearches savedSearches={mockSavedSearches} />
        <TenantRecommendedProperties properties={mockRecommendations} />
        <TenantAnnouncements announcements={mockAnnouncements} />
        <TenantApplicationStatuses applications={mockApplications} />
      </div>
    </div>
  );
};

export default TenantHome;
