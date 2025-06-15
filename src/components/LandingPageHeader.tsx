
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import AuthModal from '@/components/AuthModal';
import BrandLogo from '@/components/shared/BrandLogo';
import HeaderNavLinks from '@/components/shared/HeaderNavLinks';
import { useT } from "@/i18n";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const LandingPageHeader = () => {
  const navigate = useNavigate();
  const t = useT();

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authDefaultTab, setAuthDefaultTab] = useState<'login'|'signup'>('login');
  const [sheetOpen, setSheetOpen] = useState(false);

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
      <a
        href="#main-content"
        className="fixed left-2 top-2 z-[100] px-4 py-2 bg-white text-primary border border-primary rounded shadow transition-transform -translate-y-16 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary"
        tabIndex={0}
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-border shadow-sm transition-shadow duration-200">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandLogo showText={true} className="hover:text-primary" onClick={() => navigate("/")} />
          </div>
          <HeaderNavLinks
            links={translatedNavLinks}
            navClassName="hidden md:flex space-x-10"
            btnClassName="text-lg"
            inactiveClassName="text-muted-foreground hover:text-primary"
            activeClassName="text-primary"
          />
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden sm:block"><LanguageSelector /></div>
            <Button
              size="sm"
              className="rounded-lg px-6 font-semibold bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hidden md:inline-flex"
              onClick={openSignupModal}
            >
              {t("getStarted")}
            </Button>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  className="md:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="p-0 pt-2 w-full min-w-0 max-w-xs sm:w-72 flex flex-col"
                style={{ maxWidth: '100vw' }}
              >
                <div className="px-5 pt-1 pb-6 border-b">
                  <BrandLogo showText={true} className="-ml-2" onClick={() => {navigate("/"); setSheetOpen(false);}} />
                </div>
                <nav className="flex flex-col gap-3 mt-4 px-5">
                  {translatedNavLinks.map(link => (
                    <Button
                      key={link.to}
                      variant="ghost"
                      className="justify-start w-full text-lg font-medium"
                      onClick={() => { navigate(link.to); setSheetOpen(false); }}
                    >
                      {link.name}
                    </Button>
                  ))}
                </nav>
                <div className="border-t mt-6 mb-0" />
                <div className="flex flex-col gap-3 px-5 py-4">
                  <LanguageSelector />
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground font-medium px-6"
                    onClick={openSignupModal}
                  >
                    {t("getStarted")}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <AuthModal
            isOpen={authModalOpen}
            onClose={() => setAuthModalOpen(false)}
            defaultTab={authDefaultTab}
          />
        </div>
      </header>
    </>
  );
};

export default LandingPageHeader;
