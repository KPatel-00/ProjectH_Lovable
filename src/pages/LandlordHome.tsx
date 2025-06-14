
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

// Mock landlord/user data
const landlord = {
  firstName: "Alex",
  businessName: "Prime Rentals",
  verified: true,
  uid: "landlord-demo-1",
};

// Mock stats (demo)
const metrics = [
  {
    label: "Active Listings",
    value: 4,
  },
  {
    label: "Applications Pending",
    value: 2,
  },
  {
    label: "Total Views (30d)",
    value: 129,
  },
];

// Mock listings
const recentListings = [
  {
    id: 1,
    title: "Modern 2BR Apartment",
    status: "Active",
    views: 73,
    lastUpdated: "2024-06-09",
  },
  {
    id: 2,
    title: "Cozy Studio Center",
    status: "Pending",
    views: 36,
    lastUpdated: "2024-06-05",
  },
  {
    id: 3,
    title: "Family Home",
    status: "Inactive",
    views: 20,
    lastUpdated: "2024-06-02",
  },
];

// Mock applications
const recentApplications = [
  {
    id: 1,
    applicantName: "Emma Becker",
    listingTitle: "Modern 2BR Apartment",
    date: "2024-06-10",
  },
  {
    id: 2,
    applicantName: "Lucas Schulz",
    listingTitle: "Cozy Studio Center",
    date: "2024-06-08",
  },
  {
    id: 3,
    applicantName: "Nina Graf",
    listingTitle: "Family Home",
    date: "2024-06-06",
  },
];

const statusTextColor: Record<string, string> = {
  Active: "text-green-600",
  Pending: "text-yellow-700",
  Inactive: "text-red-500",
};

const LandlordHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="container max-w-2xl mx-auto flex-1 px-4 py-16">
        {/* Welcome */}
        <section className="mb-10">
          <h1 className="text-[2rem] font-bold mb-1 leading-snug tracking-tight text-foreground">
            Welcome, {landlord.firstName}
          </h1>
          {landlord.businessName && (
            <div className="text-base text-muted-foreground font-medium mb-2">{landlord.businessName}</div>
          )}
          <Badge
            className={
              landlord.verified
                ? "bg-green-400 text-white px-2 py-1 text-xs rounded"
                : "bg-red-400 text-white px-2 py-1 text-xs rounded"
            }
          >
            {landlord.verified ? "Verified" : "Not Verified"}
          </Badge>
        </section>
        {/* Metrics */}
        <section className="grid grid-cols-3 gap-4 mb-10">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg min-h-[66px] flex flex-col items-center justify-center bg-background border border-border"
            >
              <div className="text-2xl font-bold text-foreground">{m.value}</div>
              <div className="text-xs text-muted-foreground font-medium mt-1 text-center">{m.label}</div>
            </div>
          ))}
        </section>
        {/* Recent Listings */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold">Recent Listings</h2>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs px-2"
              onClick={() => navigate("/landlord/dashboard", { state: { section: "listings" } })}
            >
              View All
            </Button>
          </div>
          <div>
            {recentListings.length === 0 && (
              <div className="py-5 text-muted-foreground text-center text-sm">No listings yet.</div>
            )}
            {recentListings.slice(0, 3).map((listing) => (
              <div
                key={listing.id}
                className="flex flex-row items-center justify-between px-0 py-2 border-b border-border last:border-b-0"
              >
                <div>
                  <div className="font-medium text-sm text-foreground">{listing.title}</div>
                  <div className="text-xs text-muted-foreground">
                    <span className={statusTextColor[listing.status]}>
                      {listing.status}
                    </span>
                    {" · "}Views: <span className="font-semibold">{listing.views}</span>
                    {" · "}Updated: {listing.lastUpdated}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Recent Applications */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold">Recent Applications</h2>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs px-2"
              onClick={() => navigate("/landlord/dashboard", { state: { section: "applications" } })}
            >
              View All
            </Button>
          </div>
          <div>
            {recentApplications.length === 0 && (
              <div className="py-5 text-muted-foreground text-center text-sm">No applications yet.</div>
            )}
            {recentApplications.slice(0, 3).map((app) => (
              <div
                key={app.id}
                className="flex flex-row items-center justify-between px-0 py-2 border-b border-border last:border-b-0"
              >
                <div>
                  <div className="font-medium text-sm text-foreground">{app.applicantName}</div>
                  <div className="text-xs text-muted-foreground">
                    {app.listingTitle} · Applied {app.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="pt-1">
          <Button
            className="w-full text-base font-semibold py-3 rounded-md"
            onClick={() => navigate("/landlord/dashboard")}
            variant="outline"
          >
            Open Full Dashboard
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandlordHome;

// NOTE: This file is long (211 lines). Consider refactoring into smaller components for better maintainability.

