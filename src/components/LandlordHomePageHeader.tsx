
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
    // TODO: implement real signout logic
    alert("Signed out!");
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

  // ---------- MOBILE SHEET CONTENT ----------
  const mobileMenu = (
    <SheetContent side="left" className="w-full max-w-xs p-0 flex flex-col">
      <div className="px-6 py-4 flex items-center gap-3 border-b">
        <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-sm">
          <span className="text-primary-foreground font-bold text-sm">R</span>
        </div>
        <span className="font-bold text-lg">RentConnect</span>
        <span className="ml-auto px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-bold">Landlord</span>
      </div>
      <div className="flex flex-col mt-2">
        {navLinks.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `w-full text-left px-6 py-3 rounded-none font-medium text-base 
                ${isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent"}`
            }
            onClick={() => setSheetOpen(false)}
          >
            {l.name}
          </NavLink>
        ))}
      </div>
    </SheetContent>
  );

  // MOBILE avatar sheet modal
  const mobileAvatarSheet = (
    <SheetContent side="right" className="w-full max-w-xs p-0 flex flex-col">
      <div className="px-6 py-4 flex items-center gap-3 border-b">
        <Avatar>
          {user.avatarUrl ? (
            <AvatarImage src={user.avatarUrl} alt={user.name} />
          ) : (
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          )}
        </Avatar>
        <div>
          <div className="font-bold">{user.name}</div>
          <div className="text-xs text-muted-foreground">{user.email}</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col mt-2">
        {avatarMenu.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="justify-start gap-2 rounded-none px-6"
            onClick={() => { setAvatarSheetOpen(false); navigate(item.path); }}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </Button>
        ))}
        <DropdownMenuSeparator className="my-2" />
        <Button
          variant="ghost"
          className="justify-start gap-2 rounded-none px-6 text-destructive"
          onClick={() => { setAvatarSheetOpen(false); handleSignOut(); }}
        >
          <LogOut className="w-4 h-4" />
          Log Out
        </Button>
      </div>
      <div className="px-6 py-2 text-xs text-muted-foreground border-t">
        RentConnect · Landlord
      </div>
    </SheetContent>
  );

  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* --- LEFT: Brand --- */}
        <div
          className="flex items-center space-x-3 cursor-pointer hover:scale-105 hover:text-primary transition-all duration-200"
          onClick={() => navigate("/landlord/home")}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-primary-foreground font-bold text-sm">R</span>
          </div>
          <span className="text-xl font-bold text-foreground hidden sm:inline-block">RentConnect</span>
          <span className="ml-2 px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-bold hidden sm:inline-block">Landlord</span>
        </div>
        {/* --- CENTER: Navigation Menu --- */}
        <nav className="hidden md:flex mx-auto flex-1 justify-center items-center gap-2">
          {navLinks.map((l) => (
            <NavLink
              to={l.to}
              key={l.to}
              end={l.to === "/help"}
              className={({ isActive }) =>
                `relative px-4 py-1 font-medium transition-all rounded-sm
                ${isActive ? "text-primary" : "text-muted-foreground"}
                hover:text-primary
                ${isActive ? "after:absolute after:-bottom-px after:left-1/2 after:-translate-x-1/2 after:w-5/6 after:h-[2px] after:bg-primary after:rounded-full content-['']" : ""}`
              }
            >
              {l.name}
            </NavLink>
          ))}
        </nav>
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
          >
            <Bell className="w-5 h-5" />
          </Button>
          {/* Avatar Dropdown (desktop) */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost" className="rounded-full aspect-square">
                  <Avatar>
                    {user.avatarUrl ?
                      <AvatarImage src={user.avatarUrl} alt={user.name} /> :
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>}
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 z-[99] bg-background border">
                <div className="p-4 pb-2 border-b">
                  <div className="font-bold">{user.name}</div>
                  <div className="text-xs text-muted-foreground">{user.email}</div>
                </div>
                <DropdownMenuSeparator />
                {avatarMenu.map(item =>
                  <DropdownMenuItem
                    key={item.label}
                    onClick={() => navigate(item.path)}
                  >
                    <item.icon className="mr-2 h-4 w-4" /> {item.label}
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" /> Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Hamburger menu + avatar (mobile) */}
          <div className="flex items-center md:hidden gap-1">
            {/* Avatar sheet trigger */}
            <Sheet open={avatarSheetOpen} onOpenChange={setAvatarSheetOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="rounded-full aspect-square">
                  <Avatar>
                    {user.avatarUrl ?
                      <AvatarImage src={user.avatarUrl} alt={user.name} /> :
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>}
                  </Avatar>
                </Button>
              </SheetTrigger>
              {mobileAvatarSheet}
            </Sheet>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="ml-1">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              {mobileMenu}
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandlordHomePageHeader;

