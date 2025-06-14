
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';

const LandingPageHeader = () => {
  const navigate = useNavigate();

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
          <button onClick={() => navigate('/listings')} className="text-muted-foreground hover:text-foreground font-medium">Browse Listings</button>
          <button onClick={() => navigate('/list-property')} className="text-muted-foreground hover:text-foreground font-medium">List Property</button>
          <button onClick={() => navigate('/contact')} className="text-muted-foreground hover:text-foreground font-medium">Help Center</button>
        </nav>
        {/* Actions */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:block"><LanguageSelector /></div>
          <Button size="sm" variant="ghost" className="font-medium">Log In</Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-secondary font-medium px-6">Get Started</Button>
          <Button size="sm" variant="ghost" className="md:hidden"><Menu /></Button>
        </div>
      </div>
    </header>
  );
};
export default LandingPageHeader;
