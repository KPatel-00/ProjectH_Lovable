
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

  // ---- 👇 Detect user type based on route ----
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if this is a landlord route
  const isLandlord = location.pathname.startsWith('/landlord');
  // Mock landlord info
  const landlordUser = {
    name: 'Alex',
    email: 'contact@primerentals.com',
    avatarUrl: '',
    businessName: 'Prime Rentals',
    role: 'Landlord',
    verified: true,
  };
  // Simulated tenant info
  const tenantUser = {
    name: 'Anna',
    email: 'anna.tenant@example.com',
    avatarUrl: '',
    role: 'Tenant',
  };
  const user = isLandlord ? landlordUser : tenantUser;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; tab: 'login' | 'signup' }>({
    isOpen: false,
    tab: 'signup'
  });
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = isLandlord
    ? [
        { label: 'Dashboard', href: '/landlord/dashboard' },
        { label: 'My Listings', href: '/landlord/listings' },
        { label: 'Inbox', href: '/landlord/inbox' },
      ]
    : [
        { label: 'Browse Listings', href: '/listings' },
        { label: 'List Property', href: '/list-property' },
        { label: 'Help Center', href: '/contact' },
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
    navigate(isLandlord ? '/landlord/home' : '/');
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
      <header className={`sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-shadow duration-200 ${
        isScrolled ? 'shadow-md' : ''
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Section - Brand Identity */}
            <div 
              className="flex items-center space-x-3 cursor-pointer transition-all duration-200 hover:scale-105 hover:text-primary active:scale-95" 
              onClick={handleLogoClick}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-sm transition-shadow hover:shadow-md">
                <span className="text-primary-foreground font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-foreground transition-colors duration-200">
                RentConnect
              </span>
              {isLandlord && (
                <span className="ml-2 px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-bold">Landlord</span>
              )}
            </div>

            {/* Center Section - Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-muted-foreground hover:text-foreground transition-all duration-200 relative group font-medium py-2 ${
                    isActivePage(item.href) ? 'text-foreground' : ''
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-200 ${
                    isActivePage(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
            </nav>

            {/* Right Section - Actions */}
            <div className="flex items-center space-x-3">
              {/* Language Selector - Hidden on small screens */}
              <div className="hidden sm:block">
                <LanguageSelector />
              </div>
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Avatar>
                        {user.avatarUrl ? (
                          <AvatarImage src={user.avatarUrl} alt={user.name} />
                        ) : (
                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                        )}
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="flex flex-col">
                      <span className="font-semibold">{user.name}</span>
                      {isLandlord && user.businessName && (
                        <span className="text-xs font-medium text-muted-foreground mb-1">{user.businessName}</span>
                      )}
                      <span className="text-xs font-normal text-muted-foreground">{user.email}</span>
                      <span className="text-[10px] mt-0.5 font-semibold text-green-600">{isLandlord ? "Landlord" : "Tenant"}</span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {isLandlord ? (
                      <>
                        <DropdownMenuItem onClick={() => navigate('/landlord/listings')}>
                          <User className="w-4 h-4 mr-2" /> My Listings
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/landlord/dashboard')}>
                          <UserRound className="w-4 h-4 mr-2" /> Dashboard
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/landlord/inbox')}>
                          <User className="w-4 h-4 mr-2" /> Inbox
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <>
                        <DropdownMenuItem onClick={() => navigate('/profile')}>
                          <UserRound className="w-4 h-4 mr-2" /> My Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/profile/applications')}>
                          <User className="w-4 h-4 mr-2" /> My Applications
                        </DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                      <LogOut className="w-4 h-4 mr-2" /> Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                // --- Guest / Not Authenticated ---
                <div className="hidden sm:flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => openAuthModal('login')}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    Log In
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-200 shadow-sm font-medium px-6" 
                    onClick={() => openAuthModal('signup')}
                  >
                    Get Started
                  </Button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden hover:bg-accent transition-colors p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg animate-in slide-in-from-top-2 duration-200 z-50">
              <div className="px-4 py-6 space-y-4">
                {/* Navigation Items */}
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={`block text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left py-2 font-medium ${
                      isActivePage(item.href) ? 'text-foreground border-l-2 border-primary pl-3' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Actions */}
                <div className="pt-4 border-t border-border space-y-3">
                  <div className="flex justify-start">
                    <LanguageSelector />
                  </div>
                  {isAuthenticated ? (
                    <div className="pt-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="w-full justify-start font-medium">
                            <Avatar className="mr-2 w-6 h-6">
                              <AvatarFallback>{user.name[0]}</AvatarFallback>
                            </Avatar>
                            {user.name}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48">
                          {isLandlord ? (
                            <>
                              <DropdownMenuItem onClick={() => navigate('/landlord/listings')}>
                                <User className="w-4 h-4 mr-2" /> My Listings
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => navigate('/landlord/dashboard')}>
                                <UserRound className="w-4 h-4 mr-2" /> Dashboard
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => navigate('/landlord/inbox')}>
                                <User className="w-4 h-4 mr-2" /> Inbox
                              </DropdownMenuItem>
                            </>
                          ) : (
                            <>
                              <DropdownMenuItem onClick={() => navigate('/profile')}>
                                <UserRound className="w-4 h-4 mr-2" /> My Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => navigate('/profile/applications')}>
                                <User className="w-4 h-4 mr-2" /> My Applications
                              </DropdownMenuItem>
                            </>
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                            <LogOut className="w-4 h-4 mr-2" /> Sign Out
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full justify-start font-medium" 
                        onClick={() => {
                          openAuthModal('login');
                          setIsMenuOpen(false);
                        }}
                      >
                        Log In
                      </Button>
                      <Button 
                        size="sm" 
                        className="w-full bg-gradient-to-r from-primary to-secondary font-medium" 
                        onClick={() => {
                          openAuthModal('signup');
                          setIsMenuOpen(false);
                        }}
                      >
                        Get Started
                      </Button>
                    </div>
                  )}
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

