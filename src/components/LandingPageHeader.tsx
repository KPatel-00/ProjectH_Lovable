import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import AuthModal from '@/components/AuthModal';
import { useState } from 'react';

const LandingPageHeader = () => {
  const navigate = useNavigate();

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

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-shadow duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and brand */}
        <div
          className="flex items-center space-x-3 cursor-pointer hover:scale-105 hover:text-primary transition-all duration-200"
          onClick={() => navigate("/")}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-primary-foreground font-bold text-sm">R</span>
          </div>
          <span className="text-xl font-bold text-foreground">RentConnect</span>
        </div>
        {/* Nav */}
        <nav className="hidden md:flex space-x-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/listings')}
            className="text-muted-foreground hover:text-foreground font-medium"
          >
            Browse Listings
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate('/list-property')}
            className="text-muted-foreground hover:text-foreground font-medium"
          >
            List Property
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate('/contact')}
            className="text-muted-foreground hover:text-foreground font-medium"
          >
            Help Center
          </Button>
        </nav>
        {/* Actions */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:block"><LanguageSelector /></div>
          <Button
            size="sm"
            variant="ghost"
            className="font-medium"
            onClick={openLoginModal}
          >
            Log In
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-primary to-secondary font-medium px-6"
            onClick={openSignupModal}
          >
            Get Started
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
