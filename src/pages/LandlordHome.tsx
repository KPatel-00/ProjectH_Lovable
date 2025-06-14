
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
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
    color: "text-green-600",
  },
  {
    label: "Applications Pending",
    value: 2,
    color: "text-yellow-600",
  },
  {
    label: "Total Views (last 30 days)",
    value: 129,
    color: "text-blue-600",
  },
];

// More realistic listings mock
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

// More realistic applications mock (show 2–3)
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

// Status color helpers
const statusColors: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-800",
  Inactive: "bg-red-100 text-red-700",
};

const LandlordHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container xl:max-w-4xl mx-auto flex-1 px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Welcome Section */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
            Welcome back, {landlord.firstName}
          </h1>
          {landlord.businessName && (
            <div className="text-muted-foreground font-medium mb-1">
              {landlord.businessName}
            </div>
          )}
          <Badge
            className={
              landlord.verified
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }
          >
            {landlord.verified ? "Verified" : "Not Verified"}
          </Badge>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
          {metrics.map((m) => (
            <Card key={m.label} className="flex flex-col items-center py-4">
              <CardDescription className="text-base font-medium">{m.label}</CardDescription>
              <div className={`text-2xl font-bold mt-2 ${m.color}`}>{m.value}</div>
            </Card>
          ))}
        </div>

        {/* Listings Preview */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Recent Listings</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/landlord/listings")}
            >
              View All
            </Button>
          </div>
          <div className="rounded-lg bg-card border divide-y">
            {recentListings.slice(0, 3).map((listing) => (
              <div key={listing.id} className="flex flex-row items-center px-5 py-3 gap-3">
                <div className="flex-1">
                  <div className="font-semibold text-base">{listing.title}</div>
                  <div className="text-sm text-muted-foreground">
                    <span className="mr-4">
                      <Badge className={statusColors[listing.status]} variant="outline">
                        {listing.status}
                      </Badge>
                    </span>
                    <span className="mr-4">Views: <span className="font-semibold">{listing.views}</span></span>
                    <span>Updated: {listing.lastUpdated}</span>
                  </div>
                </div>
              </div>
            ))}
            {recentListings.length === 0 && (
              <div className="px-5 py-4 text-muted-foreground">No listings yet.</div>
            )}
          </div>
        </div>

        {/* Applications Preview */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Recent Applications</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/landlord/applications")}
            >
              View All
            </Button>
          </div>
          <div className="rounded-lg bg-card border divide-y">
            {recentApplications.slice(0, 3).map((app) => (
              <div key={app.id} className="flex flex-row items-center px-5 py-3 gap-3">
                <div className="flex-1">
                  <div className="font-semibold">{app.applicantName}</div>
                  <div className="text-sm text-muted-foreground">
                    {app.listingTitle} <span className="mx-3">|</span>
                    <span>Applied {app.date}</span>
                  </div>
                </div>
              </div>
            ))}
            {recentApplications.length === 0 && (
              <div className="px-5 py-4 text-muted-foreground">No applications yet.</div>
            )}
          </div>
        </div>

        {/* Dashboard CTA */}
        <div className="flex justify-center pt-3">
          <Button
            className="w-full sm:w-auto text-lg font-semibold py-4"
            onClick={() => navigate("/landlord/dashboard")}
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

