
import React, { useState } from 'react';
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
  const [isAuthenticated, setIsAuthenticated] = useState(true);
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
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Browse Listings', href: '/listings' },
    { label: 'List Property', href: '/list-property' },
    { label: 'Help Center', href: '/contact' }
  ];

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

  const handleSignOut = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <>
      <header className="w-full border-b border-gray-200 bg-white font-sans">
        <div className="container mx-auto flex items-center justify-between h-16 px-0 max-w-5xl">
          {/* Minimal Brand (clickable) */}
          <span 
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={handleLogoClick}
            tabIndex={0}
          >
            <span className="text-lg font-bold tracking-tight text-black">
              RentConnect
            </span>
          </span>

          {/* Minimalist Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`bg-transparent border-0 px-0 py-1 font-medium text-base ${
                  isActivePage(item.href)
                    ? 'text-accent font-semibold'
                    : 'text-gray-600 hover:text-black'
                }`}
                style={{ outline: 'none' }}
                tabIndex={0}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            {/* Language selector can remain very minimalist or be removed if desired */}
            <div className="hidden sm:block">
              <LanguageSelector />
            </div>
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full p-0 hover:bg-transparent focus-visible:ring-0">
                    <Avatar>
                      {user.avatarUrl ? (
                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                      ) : (
                        <AvatarFallback className="text-black bg-gray-200">{user.name[0]}</AvatarFallback>
                      )}
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44 border border-gray-200 bg-white px-0 py-1">
                  <DropdownMenuLabel className="px-3 py-2 font-semibold text-black">
                    <span>{user.name}</span>
                    <span className="block text-xs font-normal text-gray-500">{user.email}</span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/profile')} className="px-3 py-2 text-black hover:bg-gray-100">
                    <UserRound className="w-4 h-4 mr-2" /> My Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/profile/applications')} className="px-3 py-2 text-black hover:bg-gray-100">
                    <User className="w-4 h-4 mr-2" /> My Applications
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="px-3 py-2 text-red-600 hover:bg-gray-100">
                    <LogOut className="w-4 h-4 mr-2" /> Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="font-medium text-black hover:text-accent"
                  onClick={() => openAuthModal('login')}
                >
                  Log In
                </Button>
                <Button
                  size="sm"
                  className="font-medium text-white bg-accent hover:bg-accent"
                  onClick={() => openAuthModal('signup')}
                >
                  Get Started
                </Button>
              </div>
            )}
            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-1.5 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white border-b border-gray-200 py-4">
            <div className="flex flex-col gap-4 px-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-base bg-transparent border-0 px-0 py-1 text-left ${
                    isActivePage(item.href)
                      ? 'text-accent font-semibold'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                {isAuthenticated ? (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-black text-left px-0"
                      onClick={() => { navigate('/profile'); setIsMenuOpen(false); }}
                    >
                      My Profile
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-black text-left px-0"
                      onClick={() => { navigate('/profile/applications'); setIsMenuOpen(false); }}
                    >
                      My Applications
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 text-left px-0"
                      onClick={() => { handleSignOut(); setIsMenuOpen(false); }}
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-black text-left px-0"
                      onClick={() => { openAuthModal('login'); setIsMenuOpen(false); }}
                    >
                      Log In
                    </Button>
                    <Button
                      size="sm"
                      className="text-white bg-accent px-0"
                      onClick={() => { openAuthModal('signup'); setIsMenuOpen(false); }}
                    >
                      Get Started
                    </Button>
                  </>
                )}
              </div>
              <div className="pt-2">
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </header>
      <AuthModal isOpen={authModal.isOpen} onClose={closeAuthModal} defaultTab={authModal.tab} />
    </>
  );
};

export default Header;
