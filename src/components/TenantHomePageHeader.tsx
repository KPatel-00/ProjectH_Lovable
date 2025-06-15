
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import BrandLogo from "@/components/shared/BrandLogo";

const mainNavLinks = [
  { name: 'Browse Listings', path: '/tenant/home' },
  { name: 'Wishlist', path: '/wishlist' },
  { name: 'Help Center', path: '/help' },
];
const TenantHomePageHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hardcoded tenant initials for demo
  const initials = "JD";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#EBEBEB]">
      <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between px-6 h-16 gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <BrandLogo showText className="!p-0" />
        </div>
        {/* Nav (center) */}
        <nav className="flex gap-2 sm:gap-8 flex-1 justify-center">
          {mainNavLinks.map(link => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`relative py-2 px-0 text-base font-medium transition-all ${
                location.pathname === link.path
                  ? "text-black after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-black after:rounded-xl after:content-['']"
                  : "text-gray-500 hover:text-black"
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
          <LanguageSelector />
          {/* Notification bell */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            {/* Demo notifications dot */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Button>
          {/* Avatar */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-9 h-9 bg-gray-900 text-white font-bold"
            aria-label="User menu"
          >
            <span className="flex items-center justify-center w-full h-full">{initials}</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
export default TenantHomePageHeader;
