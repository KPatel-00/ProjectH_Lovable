
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
      <main className="flex-1 w-full max-w-3xl mx-auto px-3 md:px-0 pt-12 pb-16 flex flex-col gap-8 items-stretch">
        {/* 1. Welcome Header */}
        <UserWelcomeBanner
          name={landlord.firstName}
          business={landlord.businessName}
          verified={landlord.verified}
        />

        {/* 2. Stat Cards */}
        <StatCards stats={metrics} />

        {/* 3. Recent Listings Section */}
        <section className="bg-white rounded-xl shadow-md px-0 py-0 md:p-0">
          <div className="flex items-center justify-between px-6 pt-6 pb-3">
            <h2 className="font-semibold text-lg md:text-xl">Recent Listings</h2>
            <button
              className="text-xs md:text-sm text-primary hover:underline font-medium transition"
              onClick={() => navigate("/landlord/dashboard", { state: { section: "listings" } })}
            >
              View All
            </button>
          </div>
          <RecentListingsCard
            listings={recentListings}
            onViewAll={() => navigate("/landlord/dashboard", { state: { section: "listings" } })}
            showHeader={false}
            className="border-none shadow-none bg-transparent"
          />
        </section>

        {/* 4. Recent Applications Section */}
        <section className="bg-white rounded-xl shadow-md px-0 py-0 md:p-0">
          <div className="flex items-center justify-between px-6 pt-6 pb-3">
            <h2 className="font-semibold text-lg md:text-xl">Recent Applications</h2>
            <button
              className="text-xs md:text-sm text-primary hover:underline font-medium transition"
              onClick={() => navigate("/landlord/dashboard", { state: { section: "applications" } })}
            >
              View All
            </button>
          </div>
          <RecentApplicationsCard
            applications={recentApplications}
            onViewAll={() => navigate("/landlord/dashboard", { state: { section: "applications" } })}
            showHeader={false}
            className="border-none shadow-none bg-transparent"
          />
        </section>

        {/* 5. CTA Button */}
        <div className="sticky bottom-0 z-20 w-full flex items-center justify-center mt-6 md:mt-8">
          <Button
            className="w-full md:w-fit mx-auto text-base md:text-lg font-semibold py-4 rounded-xl shadow-lg bg-primary text-primary-foreground hover:scale-105 hover:shadow-xl transition-all duration-150 px-8 flex items-center gap-2"
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

