
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import AuthModal from '@/components/AuthModal';
import BrandLogo from '@/components/shared/BrandLogo';
import HeaderNavLinks from '@/components/shared/HeaderNavLinks';
import { useI18n } from '@/hooks/useI18n';
import { useT } from "@/i18n";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const LandingPageHeader = () => {
  const navigate = useNavigate();
  const { language } = useI18n();
  const t = useT();

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authDefaultTab, setAuthDefaultTab] = useState<'login'|'signup'>('login');
  const [sheetOpen, setSheetOpen] = useState(false);

  const openLoginModal = () => {
    setAuthDefaultTab('login');
    setAuthModalOpen(true);
    setSheetOpen(false);
  };

  const openSignupModal = () => {
    setAuthDefaultTab('signup');
    setAuthModalOpen(true);
    setSheetOpen(false);
  };

  const translatedNavLinks = [
    { name: t("browseListings") || "Browse Listings", to: "/listings" },
    { name: t("listProperty") || "List Property", to: "/list-property" },
    { name: t("helpCenter") || "Help Center", to: "/contact" },
  ];

  return (
    <>
      {/* Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-white text-primary border border-primary rounded-lg transition-all duration-200"
        tabIndex={0}
      >
        Skip to main content
      </a>
      
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <BrandLogo 
            showText={true} 
            showRoleTag={false} 
            onClick={() => navigate("/")}
            textClassName="text-2xl font-bold text-gray-900 hidden sm:inline-block tracking-tight"
          />
          
          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {translatedNavLinks.map(link => (
              <button
                key={link.to}
                onClick={() => navigate(link.to)}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 text-base"
              >
                {link.name}
              </button>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector - Desktop */}
            <div className="hidden sm:block">
              <LanguageSelector />
            </div>
            
            {/* Login Button - Desktop */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex text-gray-600 hover:text-gray-900 font-medium"
              onClick={openLoginModal}
            >
              {t("login") || "Log in"}
            </Button>
            
            {/* Get Started Button - Desktop */}
            <Button
              size="sm"
              className="hidden md:inline-flex bg-gray-900 text-white hover:bg-gray-800 font-medium px-6 py-2 rounded-lg transition-all duration-200"
              onClick={openSignupModal}
            >
              {t("getStarted") || "Get Started"}
            </Button>
            
            {/* Mobile Menu Trigger */}
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  className="lg:hidden p-2"
                  aria-label="Open navigation menu"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              
              <SheetContent 
                side="right"
                className="w-full max-w-sm p-0 flex flex-col bg-white"
              >
                {/* Mobile Header */}
                <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                  <BrandLogo 
                    showText={true} 
                    showRoleTag={false} 
                    onClick={() => {navigate("/"); setSheetOpen(false);}}
                    textClassName="text-xl font-bold text-gray-900"
                  />
                </div>
                
                {/* Mobile Navigation */}
                <nav className="flex flex-col px-6 py-4 space-y-1">
                  {translatedNavLinks.map(link => (
                    <Button
                      key={link.to}
                      variant="ghost"
                      className="justify-start text-left text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium py-3"
                      onClick={() => { navigate(link.to); setSheetOpen(false); }}
                    >
                      {link.name}
                    </Button>
                  ))}
                </nav>
                
                <div className="border-t border-gray-100 mt-auto" />
                
                {/* Mobile Actions */}
                <div className="flex flex-col gap-3 px-6 py-6">
                  <LanguageSelector />
                  
                  <Button
                    variant="ghost"
                    className="justify-start text-gray-600 hover:text-gray-900 font-medium"
                    onClick={openLoginModal}
                  >
                    {t("login") || "Log in"}
                  </Button>
                  
                  <Button
                    className="bg-gray-900 text-white hover:bg-gray-800 font-medium py-3 rounded-lg"
                    onClick={openSignupModal}
                  >
                    {t("getStarted") || "Get Started"}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultTab={authDefaultTab}
      />
    </>
  );
};

export default LandingPageHeader;
