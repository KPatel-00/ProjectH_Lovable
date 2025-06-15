
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LanguageSelector from '@/components/LanguageSelector';
import BrandLogo from "@/components/shared/BrandLogo";
import HeaderNotificationsButton from "@/components/shared/HeaderNotificationsButton";
import HeaderAvatarMenuDesktop from "@/components/shared/HeaderAvatarMenuDesktop";
import { UserRound } from "lucide-react";

const mainNavLinks = [
  { name: 'BROWSE LISTINGS', path: '/tenant/home' },
  { name: 'WISHLIST', path: '/wishlist' },
  { name: 'HELP CENTER', path: '/help' },
];

// Demo tenant user object
const user = {
  name: "Jane Doe",
  email: "jane.doe@email.com",
  avatarUrl: "",
};

const avatarMenu = [
  { label: "Profile", icon: "user-round", path: "/tenant/profile" },
  { label: "Settings", icon: "user-round", path: "/tenant/settings" }
];

// Build menu objects with icon components (UserRound)
function buildMenu(menuArray: typeof avatarMenu) {
  return menuArray.map(item => ({
    ...item,
    icon: UserRound,
  }));
}

// Helper get initials: returns capitalized first letters of user's name.
const getInitials = (name: string) => {
  if (!name) return '';
  return name.trim().split(' ').map(n => n[0]?.toUpperCase()).join('');
};

const TenantHomePageHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
          {/* Language selector */}
          <div className="transition-transform duration-200 hover:scale-105">
            <LanguageSelector />
          </div>
          
          {/* Notification Bell - strong contrast, border, visible icon */}
          <HeaderNotificationsButton 
            ariaLabel="Notifications"
            className="bg-white border border-border rounded-2xl h-12 w-12 flex items-center justify-center transition-all duration-200 hover:bg-accent hover:scale-105 shadow-sm"
          />

          {/* Avatar (initials in bold white on black) */}
          <div className="rounded-2xl h-12 w-12 flex items-center justify-center bg-black border border-border">
            <span className="text-white font-bold text-base select-none">
              {getInitials(user.name)}
            </span>
          </div>
          {/* 
          If you want avatar dropdown instead of static, 
          just use HeaderAvatarMenuDesktop, but override its avatar fallback style with props. 
          If dropdown not needed, this is simplest and guaranteed WCAG-visible. 
          */}
        </div>
      </div>
    </header>
  );
};

export default TenantHomePageHeader;
