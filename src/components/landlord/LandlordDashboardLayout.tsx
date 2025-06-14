
import React, { useState } from "react";
import { LayoutDashboard, List, FileText, LogOut, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Dashboard", icon: <LayoutDashboard className="w-4 h-4 mr-2" />, key: "dashboard" },
  { label: "Listings", icon: <List className="w-4 h-4 mr-2" />, key: "listings" },
  { label: "Applications", icon: <FileText className="w-4 h-4 mr-2" />, key: "applications" },
];

type Props = {
  children?: React.ReactNode;
  section: string;
  setSection: (section: string) => void;
};

export default function LandlordDashboardLayout({ children, section, setSection }: Props) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-[#f7f9fb]">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r bg-white flex flex-col justify-between">
        <div>
          {/* Back to Home Button */}
          <div className="px-6 py-4 border-b">
            <Button
              variant="ghost"
              className="w-full justify-start font-medium text-sm"
              onClick={() => navigate("/landlord/home")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
          {/* Brand/Header */}
          <div className="px-6 py-5 flex items-center gap-3 border-b">
            <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-md flex items-center justify-center text-white font-bold text-lg">
              RC
            </div>
            <div>
              <div className="font-bold text-lg text-foreground">RentConnect</div>
              <div className="text-xs text-muted-foreground">Landlord Panel</div>
            </div>
          </div>
          {/* Navigation */}
          <nav className="flex flex-col gap-1 mt-4">
            {NAV_ITEMS.map(item => (
              <button
                key={item.key}
                className={`flex items-center px-6 py-3 w-full text-left rounded-none font-medium hover:bg-blue-50 transition ${
                  section === item.key
                    ? "bg-blue-50 text-blue-700"
                    : "text-muted-foreground"
                }`}
                onClick={() => setSection(item.key)}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        {/* Bottom bar */}
        <div className="px-6 py-4 border-t">
          <Button size="sm" variant="ghost" className="w-full justify-start">
            <LogOut className="w-4 h-4 mr-2" />
            Sign out
          </Button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 min-h-screen px-0 md:px-4 lg:px-8 py-6 relative overflow-x-auto">
        {children}
      </main>
    </div>
  );
}

