
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import BrandLogo from "@/components/shared/BrandLogo";

const mainNavLinks = [
  { name: 'BROWSE LISTINGS', path: '/tenant/home' },
  { name: 'WISHLIST', path: '/wishlist' },
  { name: 'HELP CENTER', path: '/help' },
];

const TenantHomePageHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hardcoded tenant initials for demo
  const initials = "JD";

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
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative transition-all duration-200 hover:bg-gray-100 hover:scale-110"
          >
            <Bell className="w-5 h-5 transition-transform duration-200" />
            {/* Demo notifications dot */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          </Button>
          
          {/* Avatar */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-9 h-9 bg-gray-900 text-white font-bold transition-all duration-300 hover:bg-gray-800 hover:scale-110 hover:shadow-lg"
            aria-label="User menu"
          >
            <span className="flex items-center justify-center w-full h-full transition-transform duration-200">{initials}</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TenantHomePageHeader;
