
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Browse Listings', href: '/listings' },
  { label: 'List Property', href: '/list-property' },
  { label: 'Help Center', href: '/contact' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const user = { name: "Anna", email: "anna.tenant@example.com" };
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="w-full border-b border-border bg-white">
      <div className="container flex items-center justify-between h-16 max-w-4xl mx-auto px-2">
        {/* Brand - minimalist */}
        <button
          className="text-xl font-semibold tracking-tight text-black bg-transparent border-0 p-0 m-0 hover:underline"
          onClick={() => navigate('/')}
          aria-label="RentConnect home"
        >
          RentConnect
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map(item => (
            <button
              key={item.label}
              className={`minimal-button${isActive(item.href) ? ' active' : ''}`}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => navigate(item.href)}
              style={{ fontSize: "1rem" }}
            >
              {item.label}
            </button>
          ))}
        </nav>
        {/* Profile / auth */}
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <div className="relative">
              <button
                className="minimal-button flex items-center gap-2 bg-transparent border-0"
                onClick={() => setIsMenuOpen(v => !v)}
                aria-label="User menu"
              >
                <span className="font-bold text-base">{user.name[0]}</span>
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 bg-white border border-border w-44 py-2 z-20">
                  <button className="minimal-button w-full text-left" onClick={() => {navigate('/profile');setIsMenuOpen(false);}}>My Profile</button>
                  <button className="minimal-button w-full text-left" onClick={() => {navigate('/profile/applications');setIsMenuOpen(false);}}>My Applications</button>
                  <button className="minimal-button w-full text-left text-red-600" onClick={() => {setIsAuthenticated(false);setIsMenuOpen(false);navigate('/');}}>Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <button className="minimal-button" onClick={() => setIsMenuOpen(true)}>Log In</button>
              <button className="minimal-button" style={{ color: "#246BFD" }}>Get Started</button>
            </div>
          )}
          {/* Mobile Menu */}
          <button
            className="md:hidden minimal-button p-0"
            onClick={() => setIsMenuOpen(v => !v)}
            aria-label="Open menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {/* Mobile nav */}
      {isMenuOpen && (
        <nav className="md:hidden px-4 pt-2 pb-4 flex flex-col gap-1 bg-white border-t border-border">
          {navItems.map(item => (
            <button
              key={item.label}
              className={`minimal-button text-left${isActive(item.href) ? ' active' : ''}`}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => {navigate(item.href);setIsMenuOpen(false);}}
              style={{ fontSize: "1rem" }}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-border mt-2 flex flex-col gap-1">
            {isAuthenticated ? (
              <>
                <button className="minimal-button text-left" onClick={() => {navigate('/profile');setIsMenuOpen(false);}}>My Profile</button>
                <button className="minimal-button text-left" onClick={() => {navigate('/profile/applications');setIsMenuOpen(false);}}>My Applications</button>
                <button className="minimal-button text-left text-red-600" onClick={() => {setIsAuthenticated(false);setIsMenuOpen(false);navigate('/');}}>Sign Out</button>
              </>
            ) : (
              <>
                <button className="minimal-button text-left" onClick={() => setIsMenuOpen(false)}>Log In</button>
                <button className="minimal-button text-left" style={{ color: "#246BFD" }}>Get Started</button>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
