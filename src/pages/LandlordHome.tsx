
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UserWelcomeBanner from "@/components/landlord/UserWelcomeBanner";
import StatCards from "@/components/landlord/StatCards";
import RecentListingsCard from "@/components/landlord/RecentListingsCard";
import RecentApplicationsCard from "@/components/landlord/RecentApplicationsCard";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";

// DEMO DATA
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
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Header />
      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-3 md:px-0 pt-12 pb-20 flex flex-col">
        {/* Header */}
        <UserWelcomeBanner
          name={landlord.firstName}
          business={landlord.businessName}
          verified={landlord.verified}
        />

        {/* Stat Cards */}
        <div className="mb-8">
          <StatCards stats={metrics} />
        </div>

        {/* Recent Listings */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-lg font-semibold text-gray-900">Recent Listings</h2>
            <button
              className="text-sm font-medium text-primary hover:underline transition"
              onClick={() => navigate("/landlord/dashboard", { state: { section: "listings" } })}
            >
              View All
            </button>
          </div>
          <RecentListingsCard
            listings={recentListings}
            showHeader={false}
            className="border-none shadow-none bg-transparent"
          />
        </section>

        {/* Recent Applications */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-lg font-semibold text-gray-900">Recent Applications</h2>
            <button
              className="text-sm font-medium text-primary hover:underline transition"
              onClick={() => navigate("/landlord/dashboard", { state: { section: "applications" } })}
            >
              View All
            </button>
          </div>
          <RecentApplicationsCard
            applications={recentApplications}
            showHeader={false}
            className="border-none shadow-none bg-transparent"
          />
        </section>

        {/* CTA: Open Full Dashboard */}
        <div className="sticky bottom-0 z-20 w-full flex items-center justify-center">
          <Button
            className="w-full md:w-fit mx-auto text-base md:text-lg font-semibold py-4 rounded-xl shadow-lg bg-primary text-primary-foreground hover:scale-105 hover:shadow-xl transition-all duration-150 px-8 flex items-center gap-2 animate-scale-in"
            onClick={() => navigate("/landlord/dashboard")}
          >
            <LayoutDashboard className="w-6 h-6" />
            <span>Open Full Dashboard</span>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandlordHome;

