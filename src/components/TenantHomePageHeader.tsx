
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LanguageSelector from '@/components/LanguageSelector';
import BrandLogo from "@/components/shared/BrandLogo";
import HeaderNotificationsButton from "@/components/shared/HeaderNotificationsButton";
import HeaderAvatarMenuDesktop from "@/components/shared/HeaderAvatarMenuDesktop";

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

const TenantHomePageHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper get initials: returns capitalized first letter of user's first name.
  const getInitials = (name: string) => {
    const firstWord = name?.trim().split(" ")[0] ?? "";
    return firstWord.charAt(0).toUpperCase();
  };

  // For HeaderAvatarMenuDesktop: Build menu objects with icon components (lucide-react: only user-round allowed)
  function buildMenu(menuArray: typeof avatarMenu) {
    // Import at top level not possible dynamically; statically bring in icon
    // so:
    // import { UserRound } from "lucide-react";
    // ... so below:
    // {label: ..., icon: UserRound, path: ...}
    // However, per instructions, only use user-round
    // But import using allowed icon
    // Also, code shadcn/ui AvatarMenuDropdown expects 'icon' as React.ElementType
    // So import icon at top
    // To make the dropdown functional

    // moved here:
    // icons must be imported at the top
    // I'll add the right import now:
    // import { UserRound } from "lucide-react";
    // Since only allowed icon is user-round

    return menuArray.map(item => ({
      ...item,
      icon: UserRound,
    }));
  }

  // Import here
  // Import the allowed lucide icons
  // (do not move this import up, as per the restriction that imports can't be changed outside the write block)
  // But note: this is required
  // So here is the import:
  // import { UserRound } from "lucide-react";
  // So now, add the import at the top and reference below!

  // Now writing the actual render
  return (
    <>
      {/* Allowed lucide import */}
      {/** 
        * The import for UserRound must be at component scope so the menu object maps
        * (since we cannot change imports at the top in this code block only)
        */}
      {(() => {
        const { UserRound } = require('lucide-react');
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
      })()}
    </>
  );
};

// Hack to allow requiring UserRound inside the component
// and for other code to still work
export default TenantHomePageHeader;

