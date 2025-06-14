import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Bell, User, LogOut, UsersRound, FileText, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import BrandLogo from "@/components/shared/BrandLogo";
import HeaderNavLinks from "@/components/shared/HeaderNavLinks";
import { toast } from '@/components/ui/use-toast';
import { AvatarMenuDropdown } from "@/components/shared/AvatarMenuDropdown";
import HeaderNotificationsButton from "@/components/shared/HeaderNotificationsButton";
import HeaderAvatarMenuDesktop from "@/components/shared/HeaderAvatarMenuDesktop";
import HeaderAvatarMenuMobileSheet from "@/components/shared/HeaderAvatarMenuMobileSheet";

const navLinks = [
  { name: 'Browse Listings', path: '/browse', id: 'browse' },
  { name: 'Wishlist', path: '/wishlist', id: 'wishlist' },
  { name: 'Help Center', path: '/help', id: 'help' },
];

const avatarMenu = [
  { label: "My Profile", icon: User, path: "/profile" },
  { label: "Saved Listings", icon: UsersRound, path: "/wishlist" },
  { label: "My Applications", icon: FileText, path: "/applications" },
  { label: "Settings", icon: HelpCircle, path: "/settings" },
];
const TenantHomePageHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [avatarSheetOpen, setAvatarSheetOpen] = useState(false);

  // Hardcoded user data for demo
  const user = {
    name: 'Anna',
    email: 'anna.tenant@example.com',
    avatarUrl: '',
    role: 'Tenant',
  };

  const handleSignOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
    navigate('/');
  };

  // Utility to determine active link
  const isActive = (to: string) => location.pathname.startsWith(to);

  // Avatar fallback (initials)
  const getInitials = (name: string) => {
    if (!name) return "?";
    return name.split(" ").map((n) => n[0]).join("").toUpperCase();
  };

  // Sheet content for avatar actions (mobile) - now handled by HeaderAvatarMenuMobileSheet

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm transition-all duration-200">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* --- LEFT: Brand --- */}
        <BrandLogo
          showText={true}
          showRoleTag={false}
          onClick={() => navigate("/tenant/home")}
        />
        {/* --- CENTER: Navigation Menu --- */}
        <HeaderNavLinks
          links={navLinks.map(l => ({ name: l.name, to: l.path, id: l.id }))}
          navClassName="hidden md:flex mx-auto flex-1 justify-center items-center gap-2"
          btnClassName="relative px-4 font-medium transition-all"
          button={true}
          onNavigate={(to) => navigate(to)}
        />
        {/* --- RIGHT: Actions --- */}
        <div className="flex items-center space-x-1">
          {/* Language Selector */}
          <div className="hidden sm:block">
            <LanguageSelector />
          </div>
          {/* Notifications */}
          <HeaderNotificationsButton />
          {/* Avatar Dropdown (desktop) */}
          <HeaderAvatarMenuDesktop
            user={user}
            menu={avatarMenu}
            onNavigate={navigate}
            onSignOut={handleSignOut}
          />
          {/* Hamburger menu + avatar (mobile) */}
          <div className="flex items-center md:hidden gap-1">
            <HeaderAvatarMenuMobileSheet
              user={user}
              avatarMenu={avatarMenu}
              avatarSheetOpen={avatarSheetOpen}
              setAvatarSheetOpen={setAvatarSheetOpen}
              handleSignOut={handleSignOut}
              navigate={navigate}
              roleLabel="Tenant"
            />
            <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="ml-1">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-60 p-0 flex flex-col">
                <div className="px-6 py-4 flex items-center gap-3 border-b">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-primary-foreground font-bold text-sm">R</span>
                  </div>
                  <span className="font-bold text-lg">RentConnect</span>
                </div>
                <div className="flex flex-col mt-2">
                  {navLinks.map((l) => (
                    <Button
                      key={l.id}
                      variant={isActive(l.path) ? 'secondary' : 'ghost'}
                      className="justify-start px-6 py-3 text-base rounded-none"
                      onClick={() => { setMobileNavOpen(false); navigate(l.path); }}
                    >
                      {l.name}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TenantHomePageHeader;
