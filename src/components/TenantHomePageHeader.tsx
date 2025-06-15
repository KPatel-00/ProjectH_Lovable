import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LanguageSelector from '@/components/LanguageSelector';
import BrandLogo from "@/components/shared/BrandLogo";
import HeaderNotificationsButton from "@/components/shared/HeaderNotificationsButton";
import HeaderAvatarMenuDesktop from "@/components/shared/HeaderAvatarMenuDesktop";
import HeaderAvatarMenuMobileSheet from "@/components/shared/HeaderAvatarMenuMobileSheet";
import { useIsMobile } from '@/hooks/use-mobile';
import { UserRound, Heart, ListChecks, Settings, Menu } from "lucide-react";

const mainNavLinks = [
  { name: 'BROWSE LISTINGS', path: '/tenant/home' },
  { name: 'WISHLIST', path: '/wishlist' },
  { name: 'HELP CENTER', path: '/help' },
];
const user = {
  name: "Jane Doe",
  email: "jane.doe@email.com",
  avatarUrl: "",
};
const avatarMenu = [
  { label: "My Profile", icon: UserRound, path: "/profile" },
  { label: "Saved Listings", icon: Heart, path: "/wishlist" },
  { label: "My Applications", icon: ListChecks, path: "/myapplications" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

const getInitials = (name: string) => {
  if (!name) return '';
  return name.trim().split(' ').map(n => n[0]?.toUpperCase()).join('');
};

const TenantHomePageHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [avatarSheetOpen, setAvatarSheetOpen] = useState(false);

  // Mobile nav sheet
  const [navOpen, setNavOpen] = useState(false);

  // Mobile header version
  if (isMobile) {
    return (
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-[#EBEBEB] transition-all duration-300">
        <div className="max-w-full flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setNavOpen(v => !v)}
              aria-label="Open Navigation"
              className="mr-1 p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <BrandLogo showText={false} className="!p-0" />
          </div>

          <div className="flex items-center gap-2">
            <HeaderNotificationsButton
              ariaLabel="Notifications"
              className="bg-white border border-border rounded-xl h-9 w-9 flex items-center justify-center transition-all duration-200 hover:bg-accent hover:scale-105 shadow-sm"
            />
            <HeaderAvatarMenuMobileSheet
              user={user}
              avatarMenu={avatarMenu}
              avatarSheetOpen={avatarSheetOpen}
              setAvatarSheetOpen={setAvatarSheetOpen}
              navigate={navigate}
              roleLabel="Tenant"
            />
          </div>
        </div>
        {/* Mobile Nav: Overlay dropdown */}
        {navOpen && (
          <nav className="w-full absolute bg-white left-0 top-14 z-40 border-t border-border shadow-md animate-fade-in">
            <div className="flex flex-col gap-2 py-3 px-4">
              {mainNavLinks.map(link => (
                <button
                  key={link.path}
                  onClick={() => { navigate(link.path); setNavOpen(false) }}
                  className={`py-2 px-2 text-base text-left font-semibold rounded hover:bg-accent transition`}
                  style={{ minWidth: 110 }}
                >
                  {link.name}
                </button>
              ))}
              <div className="mt-2">
                <LanguageSelector />
              </div>
            </div>
          </nav>
        )}
      </header>
    );
  }

  // Desktop header unchanged
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-[#EBEBEB] transition-all duration-300">
      <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between px-6 h-16 gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3 transition-transform duration-200 hover:scale-105">
          <BrandLogo showText className="!p-0" />
        </div>

        {/* Nav (center) */}
        <nav className="flex gap-2 sm:gap-8 flex-1 justify-center">
          {mainNavLinks.map(link => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`relative py-2 px-4 text-xs font-medium uppercase tracking-wide transition-all duration-300 ease-out ${
                location.pathname === link.path
                  ? "text-black after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:bg-black after:rounded-full after:content-[''] after:animate-in after:slide-in-from-bottom-1"
                  : "text-gray-500 hover:text-black hover:transform hover:scale-105"
              }`}
              style={{ minWidth: 110 }}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="transition-transform duration-200 hover:scale-105">
            <LanguageSelector />
          </div>
          <HeaderNotificationsButton 
            ariaLabel="Notifications"
            className="bg-white border border-border rounded-2xl h-12 w-12 flex items-center justify-center transition-all duration-200 hover:bg-accent hover:scale-105 shadow-sm"
          />
          <HeaderAvatarMenuDesktop
            user={user}
            menu={avatarMenu}
            onNavigate={(to: string) => navigate(to)}
          />
        </div>
      </div>
    </header>
  );
};

export default TenantHomePageHeader;
