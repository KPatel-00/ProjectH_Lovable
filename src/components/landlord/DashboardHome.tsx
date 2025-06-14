
import React from "react";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, LineChart, Line, CartesianGrid } from "recharts";
import { List, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

// Demo KPIs
const KPIS = [
  { label: "Active Listings", value: 8, icon: <List className="w-5 h-5 text-blue-500" />, color: "bg-blue-100" },
  { label: "Applications", value: 45, icon: <FileText className="w-5 h-5 text-orange-500" />, color: "bg-orange-100" },
  { label: "Avg. Views/Listing", value: 244, icon: <BarChart className="w-5 h-5 text-yellow-600" />, color: "bg-yellow-100" },
];

// Demo charts
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
];

// Mock recent listings/applications
const recentListings = [
  { title: "Modern Flat in Berlin", status: "Active", applications: 8, views: 140 },
  { title: "Family Home Munich", status: "Active", applications: 5, views: 90 },
  { title: "Studio Hamburg", status: "Inactive", applications: 2, views: 30 },
];

const recentApplications = [
  { applicant: "Anna Schmidt", for: "Modern Flat in Berlin", status: "Pending", date: "2024-06-12" },
  { applicant: "Lucas Fischer", for: "Family Home Munich", status: "Shortlisted", date: "2024-06-09" },
  { applicant: "Sophie Braun", for: "Studio Hamburg", status: "Rejected", date: "2024-06-09" },
];

export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1 text-foreground">Dashboard</h1>
      <div className="text-muted-foreground mb-6 text-base">Key stats and recent activity across your properties.</div>
      {/* KPI cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
        {KPIS.map(kpi => (
          <Card key={kpi.label} className={`flex items-center px-6 py-5 gap-4`}>
            <div className={`rounded-full w-12 h-12 flex items-center justify-center ${kpi.color}`}>{kpi.icon}</div>
            <div>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{kpi.label}</div>
            </div>
          </Card>
        ))}
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <div className="font-semibold mb-3">Listing views over time</div>
          <div className="h-40">
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
        </Card>
        <Card className="p-6">
          <div className="font-semibold mb-3">Applications by Listing</div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={applicationsByListing}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false}/>
                <Tooltip />
                <Bar dataKey="apps" fill="#2563eb" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      {/* Previews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <Card className="p-5">
          <div className="font-bold mb-2">Recent Listings</div>
          <div>
            {recentListings.map(l => (
              <div key={l.title} className="flex items-center justify-between py-3 border-b last:border-b-0">
                <span className="font-medium">{l.title}</span>
                <span className={`text-xs ${l.status === "Active" ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50"} rounded px-2 py-0.5`}>
                  {l.status}
                </span>
                <span className="text-muted-foreground text-xs">Apps: <b>{l.applications}</b></span>
                <span className="text-muted-foreground text-xs">Views: <b>{l.views}</b></span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-5">
          <div className="font-bold mb-2">Recent Applications</div>
          <div>
            {recentApplications.map(a => (
              <div key={a.applicant + a.date} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b last:border-b-0">
                <span>
                  <span className="font-medium">{a.applicant}</span> &rarr; <span className="text-muted-foreground">{a.for}</span>
                </span>
                <span className={`text-xs mt-1 sm:mt-0 ${a.status === "Shortlisted" ? "text-green-700 bg-green-50" : a.status === "Rejected" ? "text-red-700 bg-red-50" : "text-blue-700 bg-blue-50"} rounded px-2 py-0.5`}>
                  {a.status}
                </span>
                <span className="text-xs text-muted-foreground">{a.date}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="flex justify-end mt-4">
        <Button variant="outline">View all updates</Button>
      </div>
    </div>
  );
}
