
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Line, LineChart, Tooltip, CartesianGrid } from "recharts";
import { List, FileText, LayoutDashboard, Archive, Repeat } from "lucide-react";

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
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container xl:max-w-6xl mx-auto flex-1 px-2 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Title & business info */}
        <div className="mb-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-0 text-foreground">Landlord Dashboard</h1>
            <div className="text-muted-foreground font-medium">{landlord.businessName}</div>
          </div>
          <Badge variant="outline" className="mt-2 sm:mt-0">
            <span className="text-green-700">Verified Account</span>
          </Badge>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-9">
          {dashboardStats.map((stat) => (
            <Card
              key={stat.label}
              className={`flex flex-col border-2 border-transparent shadow-none hover-scale hover:border-primary transition`}
            >
              <CardContent className="flex items-center gap-2 pt-6 pb-2">
                <span className={stat.color + " rounded p-1"}>{stat.icon}</span>
                <span className="text-2xl font-bold">{stat.value}</span>
              </CardContent>
              <CardHeader className="pb-3 pt-0">
                <CardDescription className="text-base font-medium">{stat.label}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Analytics Charts */}
        <div className="md:grid md:grid-cols-2 gap-6 flex flex-col mb-10">
          <Card className="mb-6 md:mb-0">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Listing Views Over Time</CardTitle>
              <CardDescription>
                Last 7 Months <span className="ml-2 font-semibold text-green-600">+15%</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={viewsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="views" stroke="#2563eb" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Applications by Listing</CardTitle>
              <CardDescription>
                Last 30 Days <span className="ml-2 font-semibold text-green-600">+8%</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={applicationsByListing}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="apps" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3 mb-10">
          {quickActions.map((action) => (
            <Button
              key={action.label}
              variant={action.variant}
              onClick={() => action.route !== "#" && navigate(action.route)}
              className="flex items-center gap-1"
              disabled={action.route === "#"}
            >
              {action.icon}
              {action.label}
            </Button>
          ))}
        </div>

        {/* Recent Activity Table */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <Button size="sm" variant="ghost" onClick={() => navigate("/landlord/listings")}>View All Listings</Button>
          </div>
          <div className="overflow-x-auto rounded-lg border bg-card shadow-sm">
            <table className="min-w-full divide-y divide-border">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-2 text-left text-xs font-semibold text-muted-foreground">Listing</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-muted-foreground">Status</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-muted-foreground">Views</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-muted-foreground">Applications</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-muted-foreground">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((listing, idx) => (
                  <tr key={idx} className="hover:bg-muted/50">
                    <td className="px-4 py-2">{listing.title}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${statusBadge[listing.status]}`}>{listing.status}</span>
                    </td>
                    <td className="px-4 py-2">{listing.views}</td>
                    <td className="px-4 py-2">{listing.applications}</td>
                    <td className="px-4 py-2">{listing.lastUpdated}</td>
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

// NOTE: File getting quite long; consider refactoring into components!

