
import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, Bell, User, LogOut, LayoutDashboard, List, HelpCircle, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import BrandLogo from "@/components/shared/BrandLogo";
import HeaderNavLinks from "@/components/shared/HeaderNavLinks";
import { AvatarMenuDropdown } from "@/components/shared/AvatarMenuDropdown";
import { toast } from "@/components/ui/use-toast";
import LandlordHeaderBrand from "@/components/LandlordHeaderBrand";
import LandlordHeaderMobileMenu from "@/components/LandlordHeaderMobileMenu";
import LandlordHeaderMobileAvatar from "@/components/LandlordHeaderMobileAvatar";
import { useT } from "@/i18n";
import HeaderNotificationsButton from "@/components/shared/HeaderNotificationsButton";
import HeaderAvatarMenuDesktop from "@/components/shared/HeaderAvatarMenuDesktop";
import HeaderAvatarMenuMobileSheet from "@/components/shared/HeaderAvatarMenuMobileSheet";
import { useSignOut } from "@/hooks/useSignOut";
import LandlordNavLinks from "./landlord/LandlordNavLinks";
import { useScrollShadow } from "@/hooks/useScrollShadow";
import useSkipLinkFocus from "@/hooks/useSkipLinkFocus";

// Avatar dropdown menu items
const avatarMenu = [
  { label: "Profile", icon: User, path: "/profile" },
  { label: "Dashboard", icon: LayoutDashboard, path: "/landlord/dashboard" },
  { label: "My Listings", icon: List, path: "/landlord/dashboard/mylistings" },
  { label: "Applications Management", icon: FileText, path: "/landlord/dashboard/applications" },
  { label: "Settings", icon: Settings, path: "/settings" }
];

const navLinks = [
  { name: "Dashboard", to: "/landlord/dashboard" },
  { name: "My Listings", to: "/landlord/dashboard/mylistings" },
  { name: "Help Center", to: "/help" },
];

const LandlordHomePageHeader = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [avatarSheetOpen, setAvatarSheetOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Hardcoded landlord demo user
  const user = {
    name: "Alex",
    email: "contact@primerentals.com",
    avatarUrl: "",
    businessName: "Prime Rentals",
    role: "Landlord",
    verified: true,
  };

  // Use global sign out
  const signOut = useSignOut();

  const getInitials = (name: string) => {
    if (!name) return "?";
    return name.split(" ").map((n) => n[0]).join("").toUpperCase();
  };

  // Styling for scroll shadow
  const [scrolled] = useScrollShadow();

  const t = useT();

  // map navLinks with translation
  const translatedNavLinks = [
    { name: t("dashboard"), to: "/landlord/dashboard" },
    { name: t("myListings"), to: "/landlord/dashboard/mylistings" },
    { name: t("helpCenter"), to: "/help" },
  ];

  // Accessibility: use skip link focus management
  useSkipLinkFocus();

  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 ${scrolled ? "shadow-lg" : "shadow-none"}`}
    >
      <a
        href="#main-content"
        className="fixed left-2 top-2 z-[100] px-4 py-2 bg-white text-primary border border-primary rounded-lg transition-all duration-300 -translate-y-16 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary"
        tabIndex={0}
      >
        {t("skipToMainContent") || "Skip to main content"}
      </a>
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* --- LEFT: Brand --- */}
        <div className="transition-transform duration-300 hover:scale-105">
          <LandlordHeaderBrand onClick={() => navigate("/landlord/home")} />
        </div>
        
        {/* --- CENTER: Navigation Menu --- */}
        <LandlordNavLinks />
        
        {/* --- RIGHT: Actions --- */}
        <div className="flex items-center space-x-1">
          {/* Language Selector */}
          <div className="hidden sm:block transition-transform duration-200 hover:scale-105">
            <LanguageSelector />
          </div>
          
          {/* Notifications */}
          <div className="transition-transform duration-200 hover:scale-110">
            <HeaderNotificationsButton ariaLabel={t("notifications")} />
          </div>
          
          {/* Avatar Dropdown (desktop) */}
          <HeaderAvatarMenuDesktop
            user={user}
            menu={avatarMenu.map(item => ({
              ...item,
              label: t(
                item.label === "Profile"
                  ? "profile"
                  : item.label === "Dashboard"
                  ? "dashboard"
                  : item.label === "My Listings"
                  ? "myListings"
                  : item.label === "Settings"
                  ? "settings"
                  : item.label
              )
            }))}
            onNavigate={navigate}
          />
          
          {/* Hamburger menu + avatar (mobile) */}
          <div className="flex items-center md:hidden gap-1">
            <HeaderAvatarMenuMobileSheet
              user={user}
              avatarMenu={avatarMenu.map(item => ({
                ...item,
                label: t(
                  item.label === "Profile"
                    ? "profile"
                    : item.label === "Dashboard"
                    ? "dashboard"
                    : item.label === "My Listings"
                    ? "myListings"
                    : item.label === "Settings"
                    ? "settings"
                    : item.label
                )
              }))}
              avatarSheetOpen={avatarSheetOpen}
              setAvatarSheetOpen={setAvatarSheetOpen}
              navigate={navigate}
              roleLabel="Landlord"
            />
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="ml-1 transition-all duration-200 hover:bg-accent hover:scale-110" 
                  type="button"
                >
                  <Menu className="w-6 h-6 transition-transform duration-200" />
                </Button>
              </SheetTrigger>
              <LandlordHeaderMobileMenu navLinks={translatedNavLinks} />
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandlordHomePageHeader;
