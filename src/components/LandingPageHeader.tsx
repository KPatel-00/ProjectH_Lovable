
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

const navLinks = [
  { name: "dashboard", to: "/listings" },
  { name: "getStarted", to: "/list-property" },
  { name: "helpCenter", to: "/contact" },
];

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

  // Use translations for nav links
  const translatedNavLinks = [
    { name: t("dashboard"), to: "/listings" },
    { name: t("getStarted"), to: "/list-property" },
    { name: t("helpCenter"), to: "/contact" },
  ];

  return (
    <>
      {/* Skip to Main Content Link */}
      <a
        href="#main-content"
        className="fixed left-2 top-2 z-[100] px-4 py-2 bg-white text-primary border border-primary rounded transition-transform -translate-y-16 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary"
        tabIndex={0}
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-shadow duration-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <BrandLogo showText={true} showRoleTag={false} onClick={() => navigate("/")} />
          {/* Nav (desktop only) */}
          <HeaderNavLinks
            links={translatedNavLinks}
            navClassName="hidden md:flex space-x-8"
            btnClassName="font-medium"
            inactiveClassName="text-muted-foreground hover:text-foreground"
            activeClassName="text-foreground underline underline-offset-4"
          />
          {/* Actions */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block"><LanguageSelector /></div>
            <Button
              size="sm"
              variant="ghost"
              className="font-medium hidden md:inline-flex"
              onClick={openLoginModal}
            >
              {t("login")}
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary font-medium px-6 hidden md:inline-flex"
              onClick={openSignupModal}
            >
              {t("getStarted")}
            </Button>
            {/* Mobile nav trigger */}
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
              <SheetContent side="right" className="p-0 pt-2 w-72 max-w-full flex flex-col">
                {/* Logo at top of drawer */}
                <div className="px-5 pt-1 pb-6 border-b flex items-center">
                  <BrandLogo showText={true} showRoleTag={false} onClick={() => {navigate("/"); setSheetOpen(false);}} />
                </div>
                {/* Nav links */}
                <nav className="flex flex-col gap-3 mt-4 px-5">
                  {translatedNavLinks.map(link => (
                    <Button
                      key={link.to}
                      variant="ghost"
                      className="justify-start w-full text-base font-medium"
                      onClick={() => { navigate(link.to); setSheetOpen(false); }}
                    >
                      {link.name}
                    </Button>
                  ))}
                </nav>
                <div className="border-t mt-6 mb-0" />
                {/* Language selector and Auth buttons */}
                <div className="flex flex-col gap-3 px-5 py-4">
                  <LanguageSelector />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="font-medium"
                    onClick={openLoginModal}
                  >
                    {t("login")}
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-secondary font-medium px-6"
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
