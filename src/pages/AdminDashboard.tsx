
import React from "react";
import { Users, FileCheck, BadgeCheck, Search, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const analytics = [
  { label: "Total Users", value: 7820, icon: <Users className="text-blue-600" />, color: "bg-blue-50 border-blue-100" },
  { label: "Verified Landlords", value: 312, icon: <BadgeCheck className="text-green-600" />, color: "bg-green-50 border-green-100" },
  { label: "Listings Awaiting Verification", value: 19, icon: <FileCheck className="text-yellow-600" />, color: "bg-yellow-50 border-yellow-100" },
  { label: "Active Listings", value: 568, icon: <Search className="text-gray-600" />, color: "bg-gray-50 border-gray-200" },
];

const navLinks = [
  {
    href: "/admin/users",
    icon: <Users className="w-5 h-5" />,
    label: "User Management",
    description: "Review, manage, and moderate all users",
  },
  {
    href: "/admin/verification",
    icon: <FileCheck className="w-5 h-5" />,
    label: "Verification Management",
    description: "Handle listing & landlord verifications",
  },
  // Additional admin tools can be added here as more systems are built
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto py-10 px-2 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8">Admin Dashboard</h1>
      {/* Analytics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {analytics.map((stat) => (
          <div key={stat.label} className={`flex flex-col gap-2 items-start p-5 rounded-lg border ${stat.color} shadow-sm`}>
            <div className="flex items-center gap-2">
              <span className="rounded-full p-2">{stat.icon}</span>
              <span className="text-lg font-bold">{stat.value}</span>
            </div>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
      {/* Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {navLinks.map(link => (
          <div key={link.href} className="rounded-lg border bg-white p-6 flex gap-4 items-center shadow-sm">
            <div className="flex items-center justify-center rounded-full bg-muted w-14 h-14">
              {link.icon}
            </div>
            <div className="flex-1">
              <div className="text-lg font-semibold">{link.label}</div>
              <div className="text-sm text-muted-foreground">{link.description}</div>
            </div>
            <Button variant="outline" onClick={() => navigate(link.href)}>Open</Button>
          </div>
        ))}
        {/* Placeholders for more admin tools */}
        <div className="rounded-lg border border-dashed p-6 flex flex-col items-center justify-center gap-2 bg-gray-50 min-h-[110px]">
          <BarChart3 className="w-8 h-8 text-gray-400" />
          <span className="text-xs text-muted-foreground">More admin tools coming soon…</span>
        </div>
      </div>
      {/* Optionally: Platform-wide charts/analytics panels at the bottom in the future */}
    </div>
  );
}
