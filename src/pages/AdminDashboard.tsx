
import React from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { BarChart, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Bar } from "recharts";
import { ArrowUpRight, Users, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ANALYTICS = [
  { label: "Total Users", value: 12345 },
  { label: "New Signups (7d)", value: 321 },
  { label: "Active Listings", value: 456 },
  { label: "Applications", value: 789 },
  { label: "Revenue", value: "€123,456" }
];

// Mock graph & pie data
const userGrowthData = [
  { name: "Week 1", value: 300 },
  { name: "Week 2", value: 250 },
  { name: "Week 3", value: 320 },
  { name: "Week 4", value: 340 },
];

const listingPerfData = [
  { name: "Week 1", new: 60 },
  { name: "Week 2", new: 40 },
  { name: "Week 3", new: 55 },
  { name: "Week 4", new: 50 }
];

const pieData = [
  { name: "Subscription", value: 75, color: "#2563eb" },
  { name: "Commission", value: 25, color: "#facc15" }
];

const topListings = [
  { name: "Luxury Apartment Berlin", value: 85 },
  { name: "Cozy Studio Hamburg", value: 72 },
  { name: "Spacious House Munich", value: 60 },
  { name: "Modern Flat Frankfurt", value: 55 },
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#f6fafd]">
      <AdminSidebar />
      <main className="flex-1 px-8 py-8 w-full max-w-7xl mx-auto">
        <div className="text-3xl font-bold mb-3">Dashboard</div>
        {/* Top analytics cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mb-8">
          {ANALYTICS.map((kpi, i) => (
            <div
              key={kpi.label}
              className="rounded-lg bg-white p-5 flex flex-col items-start shadow border"
            >
              <span className="text-gray-500 font-medium text-xs mb-1">{kpi.label}</span>
              <span className="text-2xl font-bold tracking-wide">
                {kpi.value}
              </span>
            </div>
          ))}
        </div>
        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* User growth */}
          <div className="bg-white p-6 rounded-lg shadow border col-span-2 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="font-semibold">User Growth</div>
                <div className="text-xs text-gray-500">New Users Over Time</div>
              </div>
              <div className="text-green-600 font-bold text-xs">+15% vs last 30d</div>
            </div>
            <ResponsiveContainer width="100%" height={140}>
              <BarChart data={userGrowthData}>
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* Revenue Pie */}
          <div className="bg-white p-6 rounded-lg shadow border flex flex-col items-center">
            <div className="font-semibold mb-1">Revenue Distribution</div>
            <div className="text-xs text-gray-500 mb-2">By Source</div>
            <ResponsiveContainer width="85%" height={120}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={54}
                  fill="#2563eb"
                  paddingAngle={0}
                  dataKey="value"
                  labelLine={false}
                  isAnimationActive={false}
                >
                  {pieData.map((d, idx) => (
                    <Cell key={d.name} fill={d.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex gap-4 mt-2 items-center">
              {pieData.map(d => (
                <div key={d.name} className="flex items-center gap-2 text-xs">
                  <span className="inline-block w-3 h-3 rounded-full" style={{ background: d.color }} />
                  {d.name}
                </div>
              ))}
            </div>
            <div className="mt-4 font-mono text-2xl font-bold text-gray-800">
              75%
            </div>
          </div>
        </div>
        {/* Listing Performance and Top Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Listing Performance */}
          <div className="bg-white p-6 rounded-lg shadow border">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="font-semibold">Listing Performance</div>
                <div className="text-xs text-gray-500">New Listings Trend</div>
              </div>
              <div className="text-green-600 font-bold text-xs">
                +10% vs last 30d
              </div>
            </div>
            <ResponsiveContainer width="100%" height={90}>
              <BarChart data={listingPerfData}>
                <Tooltip />
                <Bar dataKey="new" fill="#678ffe" radius={[8, 8, 0, 0]} barSize={28} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-between text-xs text-gray-500 pt-2">
              {listingPerfData.map(d => (
                <span key={d.name}>{d.name}</span>
              ))}
            </div>
          </div>
          {/* Top Performing Listings */}
          <div className="bg-white p-6 rounded-lg shadow border">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="font-semibold">Top Performing Listings</div>
                <div className="text-xs text-gray-500">Engagement Rate</div>
              </div>
              <div className="text-green-600 font-bold text-xs">
                +5% overall
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              {topListings.map(listing => (
                <div key={listing.name} className="flex items-center gap-2">
                  <span className="w-48 truncate">{listing.name}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-3 mx-2">
                    <div
                      className="bg-blue-500 h-3 rounded-full transition-all"
                      style={{ width: `${listing.value}%` }}
                    />
                  </div>
                  <span className="font-mono w-8">{listing.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Section quick links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <button
            type="button"
            className="bg-white border shadow p-6 rounded-lg text-left hover:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-700 flex items-center gap-4 transition-colors"
            onClick={() => navigate("/admin/users")}
          >
            <Users className="w-8 h-8 text-blue-500" />
            <div>
              <div className="font-semibold">User Management</div>
              <div className="text-xs text-gray-500">Manage, review, and moderate users</div>
              <div className="text-blue-600 font-bold text-sm flex items-center gap-1 mt-2">
                Open <ArrowUpRight className="inline w-4 h-4" />
              </div>
            </div>
          </button>
          <button
            type="button"
            className="bg-white border shadow p-6 rounded-lg text-left hover:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-700 flex items-center gap-4 transition-colors"
            onClick={() => navigate("/admin/verification")}
          >
            <FileText className="w-8 h-8 text-yellow-500" />
            <div>
              <div className="font-semibold">Verification Management</div>
              <div className="text-xs text-gray-500">Listings & Landlord verification workflow</div>
              <div className="text-blue-600 font-bold text-sm flex items-center gap-1 mt-2">
                Open <ArrowUpRight className="inline w-4 h-4" />
              </div>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
}
