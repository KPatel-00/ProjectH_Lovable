
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UserWelcomeBanner from "@/components/landlord/UserWelcomeBanner";
import StatCards from "@/components/landlord/StatCards";
import RecentListingsCard from "@/components/landlord/RecentListingsCard";
import RecentApplicationsCard from "@/components/landlord/RecentApplicationsCard";
import { Button } from "@/components/ui/button";

// Demo/mock data
const landlord = {
  firstName: "Alex",
  businessName: "Prime Rentals",
  verified: true,
  uid: "landlord-demo-1",
};

const metrics = [
  { label: "Active Listings", value: 4 },
  { label: "Applications Pending", value: 2 },
  { label: "Total Views (30d)", value: 129 }
];

const recentListings = [
  { id: 1, title: "Modern 2BR Apartment", status: "Active", views: 73, lastUpdated: "2024-06-09" },
  { id: 2, title: "Cozy Studio Center", status: "Pending", views: 36, lastUpdated: "2024-06-05" },
  { id: 3, title: "Family Home", status: "Inactive", views: 20, lastUpdated: "2024-06-02" }
];

const recentApplications = [
  { id: 1, applicantName: "Emma Becker", listingTitle: "Modern 2BR Apartment", date: "2024-06-10" },
  { id: 2, applicantName: "Lucas Schulz", listingTitle: "Cozy Studio Center", date: "2024-06-08" },
  { id: 3, applicantName: "Nina Graf", listingTitle: "Family Home", date: "2024-06-06" }
];

const LandlordHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="container mx-auto flex-1 px-2 py-8 md:px-0 flex flex-col justify-between">
        <UserWelcomeBanner
          name={landlord.firstName}
          business={landlord.businessName}
          verified={landlord.verified}
        />
        <StatCards stats={metrics} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <RecentListingsCard
            listings={recentListings}
            onViewAll={() => navigate("/landlord/dashboard", { state: { section: "listings" } })}
          />
          <RecentApplicationsCard
            applications={recentApplications}
            onViewAll={() => navigate("/landlord/dashboard", { state: { section: "applications" } })}
          />
        </div>
        <div className="w-full max-w-md mx-auto sticky bottom-2 z-20">
          <Button
            className="w-full text-lg font-semibold py-3 rounded-md shadow-lg hover:scale-105 hover:bg-primary transition-all duration-150"
            onClick={() => navigate("/landlord/dashboard")}
            variant="outline"
          >
            📊 Open Full Dashboard
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandlordHome;
