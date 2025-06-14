import React from "react";
import { LayoutDashboard, List, FileText, LogOut, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useT } from "@/i18n";
import { useSignOut } from "@/hooks/useSignOut";

const NAV_ITEMS = [
  { labelKey: "dashboard", icon: <LayoutDashboard className="w-4 h-4 mr-2" />, key: "dashboard", path: "/landlord/dashboard" },
  { labelKey: "myListings", icon: <List className="w-4 h-4 mr-2" />, key: "listings", path: "/landlord/dashboard/mylistings" },
  { labelKey: "applications", icon: <FileText className="w-4 h-4 mr-2" />, key: "applications", path: "/landlord/dashboard/applications" },
];

type Props = {
  children?: React.ReactNode;
  section: string;
  setSection: (section: string) => void;
};

export default function LandlordDashboardLayout({ children, section, setSection }: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const t = useT();

  // DEBUG: log whenever landlord dashboard layout rerenders and which language is active
  const { language } = require('@/hooks/useI18n').useI18n();
  console.log("[LandlordDashboardLayout] Render. Language =", language);

  // Determine current section by route path
  const activeKey =
    location.pathname.endsWith("/mylistings")
      ? "listings"
      : location.pathname.endsWith("/applications")
      ? "applications"
      : "dashboard";

  return (
    <div className="min-h-screen flex bg-[#f7f9fb]">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r bg-white flex flex-col justify-between">
        <div>
          {/* Close Dashboard Button */}
          <div className="px-6 py-4 border-b">
            <Button
              variant="ghost"
              className="w-full justify-start font-medium text-sm"
              onClick={() => navigate("/landlord/home")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("closeDashboard") || "Close Dashboard"}
            </Button>
          </div>
          {/* Brand/Header */}
          <div className="px-6 py-5 flex items-center gap-3 border-b">
            <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-md flex items-center justify-center text-white font-bold text-lg">
              RC
            </div>
            <div>
              <div className="font-bold text-lg text-foreground">RentConnect</div>
              <div className="text-xs text-muted-foreground">{t("landlordPanel") || "Landlord Panel"}</div>
            </div>
          </div>
          {/* Navigation */}
          <nav className="flex flex-col gap-1 mt-4">
            {NAV_ITEMS.map(item => (
              <button
                key={item.key}
                className={`flex items-center px-6 py-3 w-full text-left rounded-none font-medium hover:bg-blue-50 transition ${
                  activeKey === item.key
                    ? "bg-blue-50 text-blue-700"
                    : "text-muted-foreground"
                }`}
                onClick={() => {
                  setSection(item.key);
                }}
              >
                {item.icon}
                {t(item.labelKey)}
              </button>
            ))}
          </nav>
        </div>
        {/* Bottom bar */}
        <div className="px-6 py-4 border-t">
          <Button size="sm" variant="ghost" className="w-full justify-start" onClick={signOut}>
            <LogOut className="w-4 h-4 mr-2" />
            {t("signOut")}
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
