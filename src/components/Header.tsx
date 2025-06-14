import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthModal from '@/components/AuthModal';
import LanguageSelector from '@/components/LanguageSelector';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  // Simulate authentication (Replace with actual auth logic later)
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  // Simulated user info
  const user = {
    name: 'Anna',
    email: 'anna.tenant@example.com',
    avatarUrl: '',
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; tab: 'login' | 'signup' }>({
    isOpen: false,
    tab: 'signup'
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Browse Listings', href: '/listings' },
    { label: 'List Property', href: '/list-property' },
    { label: 'Help Center', href: '/contact' }
  ];

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const openAuthModal = (tab: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, tab });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, tab: 'signup' });
  };

  const isActivePage = (href: string) => {
    return location.pathname === href;
  };

  // Simulate sign-out
  const handleSignOut = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <>
      <header className="w-full bg-white border-b border-border">
        <div className="flex items-center justify-between h-16 max-w-screen-xl mx-auto px-4">
          {/* Brand */}
          <button className="text-xl font-bold bg-transparent border-none p-0 m-0 focus:outline-none" onClick={() => navigate('/')}>
            RentConnect
          </button>
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.href)}
                className={`text-base bg-transparent px-0 py-0 border-none focus:outline-none font-medium transition-colors ${
                  location.pathname === item.href ? 'text-accent' : 'text-foreground hover:text-accent'
                }`}
                style={{ outline: 'none' }}
              >
                {item.label}
              </button>
            ))}
          </nav>
          {/* Profile / Auth */}
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <button 
                className="flex items-center gap-2 bg-transparent border-none p-0 hover:underline focus:outline-none"
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-label="User menu"
              >
                <span className="text-base font-medium">{user.name}</span>
                <span className="h-8 w-8 flex items-center justify-center rounded-full bg-muted text-accent font-semibold">
                  {user.name[0]}
                </span>
              </button>
              {isMenuOpen && (
                <div className="absolute right-6 top-16 bg-white border border-border rounded shadow-none p-4 min-w-[160px] flex flex-col z-20">
                  <button
                    className="bg-transparent text-base text-left border-none py-2 hover:text-accent focus:outline-none"
                    onClick={() => {navigate('/profile'); setIsMenuOpen(false);}}
                  >My Profile</button>
                  <button
                    className="bg-transparent text-base text-left border-none py-2 hover:text-accent focus:outline-none"
                    onClick={() => {navigate('/profile/applications'); setIsMenuOpen(false);}}
                  >My Applications</button>
                  <button
                    className="bg-transparent text-base text-left border-none py-2 hover:text-accent focus:outline-none"
                    onClick={() => {handleSignOut(); setIsMenuOpen(false);}}
                  >Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                className="bg-transparent border-none text-base font-medium text-foreground hover:text-accent focus:outline-none"
                onClick={() => { openAuthModal('login') }}
              >Log In</button>
              <button
                className="bg-accent text-white px-4 py-2 rounded font-medium focus:outline-none"
                onClick={() => {openAuthModal('signup')}}
              >Get Started</button>
            </div>
          )}
          {/* Mobile menu would go here (hidden/minimalist for now) */}
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
