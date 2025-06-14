
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Edit, View, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

// Mock landlord data
const landlord = {
  firstName: "Alex",
  businessName: "Prime Rentals",
  verified: true,
};

// Mock stats
const stats = [
  {
    label: "Active Listings",
    value: 4,
    color: "green",
  },
  {
    label: "Pending Applications",
    value: 2,
    color: "yellow",
  },
  {
    label: "Views Last 7 Days",
    value: 129,
    color: "blue",
  },
  {
    label: "Verified Status",
    value: landlord.verified ? "Verified" : "Not Verified",
    color: landlord.verified ? "green" : "red",
  },
];

// Mock recent listings
const recentListings = [
  {
    id: 1,
    thumbnail: "/placeholder.svg",
    title: "Modern 2BR Apartment",
    rent: "€1,400",
    city: "Berlin",
    status: "active",
  },
  {
    id: 2,
    thumbnail: "/placeholder.svg",
    title: "Cozy Studio Center",
    rent: "€950",
    city: "Hamburg",
    status: "pending",
  },
  {
    id: 3,
    thumbnail: "/placeholder.svg",
    title: "Family Home",
    rent: "€2,200",
    city: "Munich",
    status: "inactive",
  },
];

// Mock applications
const recentApplications = [
  {
    id: 1,
    tenantName: "Emma Becker",
    property: "Modern 2BR Apartment",
    status: "pending",
  },
  {
    id: 2,
    tenantName: "Lucas Schulz",
    property: "Cozy Studio Center",
    status: "accepted",
  },
  {
    id: 3,
    tenantName: "Nina Graf",
    property: "Family Home",
    status: "rejected",
  },
];

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  inactive: "bg-red-100 text-red-800",
  accepted: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

const LandlordHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container xl:max-w-6xl mx-auto flex-1 px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
            Welcome back, {landlord.firstName}
          </h1>
          {landlord.businessName && (
            <div className="text-muted-foreground font-medium mb-1">
              {landlord.businessName}
            </div>
          )}
          <div>
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
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <Button
            className="w-full sm:w-auto"
            onClick={() => navigate("/list-property")}
          >
            Add New Listing
          </Button>
          <Button
            variant="secondary"
            className="w-full sm:w-auto"
            onClick={() => navigate("/landlord/listings")}
          >
            Manage Listings
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => navigate("/landlord/dashboard")}
          >
            Go to Dashboard
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="flex flex-col">
              <CardHeader className="pb-2">
                <CardDescription className="text-base font-medium">{stat.label}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-2 flex-1">
                <span
                  className={`text-2xl font-bold ${
                    stat.color === "green"
                      ? "text-green-600"
                      : stat.color === "yellow"
                      ? "text-yellow-600"
                      : stat.color === "red"
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                >
                  {stat.value}
                </span>
                {(stat.label === "Verified Status") && (
                  <Badge
                    className={
                      landlord.verified
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }
                  >
                    {stat.value}
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Listings */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Listings</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/landlord/listings")}
            >
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentListings.map((listing) => (
              <Card key={listing.id} className="overflow-hidden flex flex-col">
                <img
                  src={listing.thumbnail}
                  alt={listing.title}
                  className="h-36 w-full object-cover bg-muted"
                />
                <CardContent className="flex-1 flex flex-col pt-4">
                  <div className="mb-1 flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">{listing.title}</CardTitle>
                    <Badge className={statusColors[listing.status]}>
                      {listing.status.charAt(0).toUpperCase() +
                        listing.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="mb-1 text-primary font-bold text-lg">{listing.rent}</div>
                  <div className="text-muted-foreground mb-2">{listing.city}</div>
                  <div className="flex gap-2 mt-auto pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => navigate(`/listing/${listing.id}/edit`)}
                      title="Edit"
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => navigate(`/listing/${listing.id}`)}
                      title="View"
                    >
                      <View className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => alert("Deactivate action")}
                      title="Deactivate"
                    >
                      <X className="w-4 h-4 mr-1" />
                      Deactivate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Applications */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Applications</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/landlord/applications")}
            >
              View All
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            {recentApplications.map((app) => (
              <Card key={app.id} className="flex md:flex-row flex-col items-center md:items-stretch gap-4 py-3 px-4">
                <div className="flex-1">
                  <div className="font-semibold">{app.tenantName}</div>
                  <div className="text-muted-foreground text-sm">
                    {app.property}
                  </div>
                </div>
                <Badge className={statusColors[app.status]}>
                  {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandlordHome;
