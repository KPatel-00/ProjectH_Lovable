
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, List, FileText, DollarSign, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: Home, to: "/admin/dashboard" },
  { label: "Users", icon: Users, to: "/admin/users" },
  { label: "Listings", icon: List, to: "/admin/listings" },
  { label: "Applications", icon: FileText, to: "/admin/applications" },
  { label: "Financials", icon: DollarSign, to: "/admin/financials" },
];

export function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="w-64 min-h-screen bg-white border-r flex flex-col">
      <div className="text-2xl font-extrabold px-6 py-6 tracking-tight">
        <span className="text-blue-700">Immo</span>Admin
      </div>
      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map(item => (
          <button
            key={item.label}
            onClick={() => navigate(item.to)}
            className={cn(
              "flex items-center gap-3 px-6 py-2 text-base rounded-l-full hover:bg-blue-50 transition-colors",
              location.pathname.startsWith(item.to)
                ? "bg-blue-50 text-blue-700 font-bold"
                : "text-gray-700"
            )}
            style={{ textAlign: "left" }}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
        <div className="flex-1" />
        <button
          className="flex items-center gap-3 px-6 py-2 text-base text-gray-600 hover:bg-gray-100 transition-colors mt-auto"
          onClick={() => navigate("/admin/settings")}
        >
          <Settings className="w-5 h-5" /> Settings
        </button>
        <button
          className="flex items-center gap-3 px-6 py-2 text-base text-gray-600 hover:bg-gray-100"
          onClick={() => { navigate("/"); }}
        >
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </nav>
    </aside>
  );
}
