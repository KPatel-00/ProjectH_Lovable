
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

const navLinks = [
  { name: "dashboard", to: "/listings" },
  { name: "getStarted", to: "/list-property" },
  { name: "helpCenter", to: "/contact" },
];

const LandingPageHeader = () => {
  const navigate = useNavigate();
  const { language } = useI18n();
  const t = useT();

  // State to control AuthModal and which tab is active (login or signup)
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authDefaultTab, setAuthDefaultTab] = useState<'login'|'signup'>('login');

  const openLoginModal = () => {
    setAuthDefaultTab('login');
    setAuthModalOpen(true);
  };

  const openSignupModal = () => {
    setAuthDefaultTab('signup');
    setAuthModalOpen(true);
  };

  // DEBUG: rerender trigger
  console.log("[LandingPageHeader] Rerender: language =", language);

  // Use translations for nav links (place inside the render so always updates)
  const translatedNavLinks = [
    { name: t("dashboard"), to: "/listings" },
    { name: t("getStarted"), to: "/list-property" },
    { name: t("helpCenter"), to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-shadow duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and brand */}
        <BrandLogo showText={true} showRoleTag={false} onClick={() => navigate("/")} />
        {/* Nav */}
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
          <Button
            size="sm"
            variant="ghost"
            className="md:hidden"
            onClick={() => {/* Open nav menu (not yet implemented) */}}
          >
            <Menu />
          </Button>
        </div>
        {/* Render AuthModal */}
        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          defaultTab={authDefaultTab}
        />
      </div>
    </header>
  );
};

export default LandingPageHeader;

