import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Line, LineChart, Tooltip, CartesianGrid } from "recharts";
import { List, FileText, LayoutDashboard, Archive, Repeat } from "lucide-react";

const cardBase =
  "rounded-2xl border bg-white dark:bg-card px-6 py-5 flex flex-col shadow-sm";
const statIconBg =
  "flex items-center justify-center rounded-full w-8 h-8 bg-muted mr-3";

// Demo landlord info (mocked)
const landlord = {
  name: "Alex",
  businessName: "Prime Rentals",
  verified: true,
};

// Stats & KPIs (demo for now)
const dashboardStats = [
  {
    label: "Total Listings",
    value: 12,
    icon: <List className="w-5 h-5 mr-1" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    label: "Active Listings",
    value: 8,
    icon: <List className="w-5 h-5 mr-1" />,
    color: "bg-green-100 text-green-700",
  },
  {
    label: "Avg. Views / Listing",
    value: 250,
    icon: <LayoutDashboard className="w-5 h-5 mr-1" />,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    label: "Applications Received",
    value: 45,
    icon: <FileText className="w-5 h-5 mr-1" />,
    color: "bg-orange-100 text-orange-700",
  },
];

// Mock chart data
const viewsData = [
  { month: "Jan", views: 120 },
  { month: "Feb", views: 140 },
  { month: "Mar", views: 110 },
  { month: "Apr", views: 180 },
  { month: "May", views: 160 },
  { month: "Jun", views: 200 },
  { month: "Jul", views: 230 },
];

const applicationsByListing = [
  { name: "Apt Berlin", apps: 10 },
  { name: "Haus Munich", apps: 15 },
  { name: "Studio Hamburg", apps: 20 },
  { name: "Flat Cologne", apps: 12 },
  { name: "Penthouse FRK", apps: 9 },
];

// Enhanced Quick Actions (add Archive, Re-publish)
const quickActions = [
  {
    label: "Manage Listings",
    route: "/landlord/listings",
    variant: "default" as const,
    icon: <List className="mr-2 w-5 h-5" />,
  },
  {
    label: "View Applications",
    route: "/landlord/applications",
    variant: "outline" as const,
    icon: <FileText className="mr-2 w-5 h-5" />,
  },
  {
    label: "Archive Listing",
    route: "#", // TODO: action hook or dialog
    variant: "secondary" as const,
    icon: <Archive className="mr-2 w-5 h-5" />,
  },
  {
    label: "Re-publish Listing",
    route: "#", // TODO: action hook or dialog
    variant: "ghost" as const,
    icon: <Repeat className="mr-2 w-5 h-5" />,
  },
];

const recentActivity = [
  {
    title: "Cozy Apartment in Berlin",
    status: "Active",
    views: 120,
    applications: 15,
    lastUpdated: "2023-11-15",
  },
  {
    title: "Spacious House in Munich",
    status: "Inactive",
    views: 80,
    applications: 10,
    lastUpdated: "2023-11-10",
  },
  {
    title: "Modern Studio in Hamburg",
    status: "Active",
    views: 150,
    applications: 20,
    lastUpdated: "2023-11-05",
  },
  {
    title: "Charming Flat in Cologne",
    status: "Active",
    views: 100,
    applications: 12,
    lastUpdated: "2023-10-30",
  },
  {
    title: "Luxury Penthouse in Frankfurt",
    status: "Inactive",
    views: 90,
    applications: 8,
    lastUpdated: "2023-10-25",
  },
];

const statusBadge: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-700",
};

const LandlordDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f9fb] dark:bg-background flex flex-col">
      <Header />
      <main className="container xl:max-w-6xl mx-auto flex-1 px-2 sm:px-6 lg:px-8 pt-10 pb-10">
        {/* Heading row */}
        <div className="mb-9 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h1 className="text-3xl sm:text-4xl font-bold mb-0 text-foreground tracking-tight">Dashboard</h1>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md text-base shadow-sm"
            onClick={() => navigate("/landlord/listings")}
          >
            + Create New Listing
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {dashboardStats.map((stat, i) => (
            <div key={stat.label} className={cardBase + " flex-row items-center"}>
              <span className={statIconBg + " " + stat.color}>
                {stat.icon}
              </span>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className="text-sm text-muted-foreground font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Listing Performance */}
        <div>
          <h2 className="text-lg font-semibold mb-5">Listing Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Views Line Chart */}
            <div className={cardBase + " mb-0"}>
              <div className="flex items-center mb-1">
                <div className="text-base font-semibold flex-1">
                  Listing Views Over Time
                </div>
                <span className="text-green-600 font-semibold">+15%</span>
              </div>
              <div className="text-xs text-muted-foreground mb-4">Last 30 Days</div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={viewsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="views" stroke="#2563eb" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Applications Bar Chart */}
            <div className={cardBase + " mb-0"}>
              <div className="flex items-center mb-1">
                <div className="text-base font-semibold flex-1">
                  Applications by Listing
                </div>
                <span className="text-green-600 font-semibold">+8%</span>
              </div>
              <div className="text-xs text-muted-foreground mb-4">Last 30 Days</div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={applicationsByListing}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="apps" fill="#2563eb" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-base font-semibold mb-2">Quick Actions</h3>
          <div className="flex flex-wrap gap-2 mb-10">
            <Button
              variant="outline"
              className="rounded-md font-semibold px-5 py-2"
              onClick={() => navigate("/landlord/listings")}
            >
              Manage Listings
            </Button>
            <Button
              variant="outline"
              className="rounded-md font-semibold px-5 py-2"
              onClick={() => navigate("/landlord/applications")}
            >
              View Applications
            </Button>
            <Button
              variant="secondary"
              className="rounded-md font-semibold px-5 py-2"
              disabled
            >
              Archive Listing
            </Button>
            <Button
              variant="ghost"
              className="rounded-md font-semibold px-5 py-2"
              disabled
            >
              Re-publish Listing
            </Button>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div>
          <h3 className="text-base font-semibold mb-3">Recent Activity</h3>
          <div className="overflow-x-auto rounded-2xl border bg-white dark:bg-card">
            <table className="min-w-full divide-y">
              <thead>
                <tr className="text-muted-foreground border-b bg-muted">
                  <th className="px-4 py-3 text-xs font-medium text-left">Listing</th>
                  <th className="px-4 py-3 text-xs font-medium text-left">Status</th>
                  <th className="px-4 py-3 text-xs font-medium text-left">Views</th>
                  <th className="px-4 py-3 text-xs font-medium text-left">Applications</th>
                  <th className="px-4 py-3 text-xs font-medium text-left">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((listing, idx) => (
                  <tr key={idx} className="border-b last:border-b-0 hover:bg-muted/50">
                    <td className="px-4 py-3 text-base">{listing.title}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold ${statusBadge[listing.status]}`}>
                        {listing.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{listing.views}</td>
                    <td className="px-4 py-3">{listing.applications}</td>
                    <td className="px-4 py-3">{listing.lastUpdated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandlordDashboard;

// NOTE: This file is now very long! Please consider splitting it into focused components.
