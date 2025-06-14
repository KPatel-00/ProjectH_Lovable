
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthModal from '@/components/AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; tab: 'login' | 'signup' }>({
    isOpen: false,
    tab: 'signup'
  });
  const navigate = useNavigate();

  const navItems = [
    { label: 'Browse Listings', href: '/listings' },
    { label: 'List Property', href: '/list-property' },
    { label: 'Help Center', href: '/contact' },
    { label: 'Contact', href: '/contact' }
  ];

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsMenuOpen(false);
  };

  const openAuthModal = (tab: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, tab });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, tab: 'signup' });
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Company Name */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-foreground">RentConnect</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <Globe className="w-4 h-4 mr-2" />
                EN
              </Button>

              {/* Auth Buttons */}
              <div className="hidden sm:flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={() => openAuthModal('login')}>
                  Log In
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" onClick={() => openAuthModal('signup')}>
                  Get Started
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="block text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-border space-y-2">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Globe className="w-4 h-4 mr-2" />
                    Language
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full" onClick={() => openAuthModal('login')}>
                    Log In
                  </Button>
                  <Button size="sm" className="w-full bg-gradient-to-r from-primary to-secondary" onClick={() => openAuthModal('signup')}>
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <AuthModal 
        isOpen={authModal.isOpen} 
        onClose={closeAuthModal} 
        defaultTab={authModal.tab} 
      />
    </>
  );
};

export default Header;
