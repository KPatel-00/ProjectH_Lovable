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

  const handleSignOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
    navigate("/");
  };

  const getInitials = (name: string) => {
    if (!name) return "?";
    return name.split(" ").map((n) => n[0]).join("").toUpperCase();
  };

  // Styling for scroll shadow
  // Use a state to detect scroll
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* --- LEFT: Brand --- */}
        <LandlordHeaderBrand onClick={() => navigate("/landlord/home")} />
        {/* --- CENTER: Navigation Menu --- */}
        <HeaderNavLinks
          links={navLinks}
          navClassName="hidden md:flex mx-auto flex-1 justify-center items-center gap-2"
          btnClassName="relative px-4 py-1 font-medium transition-all rounded-sm"
          activeClassName="text-primary after:absolute after:-bottom-px after:left-1/2 after:-translate-x-1/2 after:w-5/6 after:h-[2px] after:bg-primary after:rounded-full content-['']"
          inactiveClassName="text-muted-foreground hover:text-primary"
        />
        {/* --- RIGHT: Actions --- */}
        <div className="flex items-center space-x-1">
          {/* Language Selector */}
          <div className="hidden sm:block">
            <LanguageSelector />
          </div>
          {/* Notifications */}
          <Button
            size="icon"
            variant="ghost"
            aria-label="Notifications"
            onClick={() => navigate("/notifications")}
            className="relative"
            type="button"
          >
            <Bell className="w-5 h-5" />
          </Button>
          {/* Avatar Dropdown (desktop) */}
          <div className="hidden md:block">
            <AvatarMenuDropdown
              user={user}
              menu={avatarMenu}
              onNavigate={navigate}
              onSignOut={handleSignOut}
            />
          </div>
          {/* Hamburger menu + avatar (mobile) */}
          <div className="flex items-center md:hidden gap-1">
            {/* Avatar sheet trigger */}
            <Sheet open={avatarSheetOpen} onOpenChange={setAvatarSheetOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="rounded-full aspect-square" type="button">
                  <Avatar>
                    {user.avatarUrl ?
                      <AvatarImage src={user.avatarUrl} alt={user.name} /> :
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>}
                  </Avatar>
                </Button>
              </SheetTrigger>
              <LandlordHeaderMobileAvatar
                user={user}
                avatarMenu={avatarMenu}
                setAvatarSheetOpen={setAvatarSheetOpen}
                handleSignOut={handleSignOut}
                navigate={navigate}
              />
            </Sheet>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="ml-1" type="button">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <LandlordHeaderMobileMenu navLinks={navLinks} />
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandlordHomePageHeader;
