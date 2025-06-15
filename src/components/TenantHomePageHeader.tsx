
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LanguageSelector from '@/components/LanguageSelector';
import BrandLogo from "@/components/shared/BrandLogo";
import HeaderNotificationsButton from "@/components/shared/HeaderNotificationsButton";
import HeaderAvatarMenuDesktop from "@/components/shared/HeaderAvatarMenuDesktop";
import { UserRound } from "lucide-react"; // FIX: Import UserRound here

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

const TenantHomePageHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper get initials: returns capitalized first letter of user's first name.
  const getInitials = (name: string) => {
    const firstWord = name?.trim().split(" ")[0] ?? "";
    return firstWord.charAt(0).toUpperCase();
  };

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
        <div className="flex items-center gap-2">
          {/* Language selector */}
          <div className="transition-transform duration-200 hover:scale-105">
            <LanguageSelector />
          </div>
          
          {/* Notification bell */}
          <HeaderNotificationsButton ariaLabel="Notifications" className="transition-all duration-200 hover:bg-gray-100 hover:scale-110" />

          {/* Avatar (user initials in dark circle, with dropdown) */}
          <HeaderAvatarMenuDesktop
            user={user}
            menu={buildMenu(avatarMenu)}
            onNavigate={to => navigate(to)}
          />
        </div>
      </div>
    </header>
  );
};

export default TenantHomePageHeader;
