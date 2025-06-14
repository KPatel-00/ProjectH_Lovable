
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, User, LayoutDashboard, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const LandlordHomePageHeader = () => {
  const navigate = useNavigate();
  // Hardcoded landlord demo user
  const user = {
    name: 'Alex',
    email: 'contact@primerentals.com',
    avatarUrl: '',
    businessName: 'Prime Rentals',
    role: 'Landlord',
    verified: true,
  };

  // Placeholder signout handler
  const handleSignOut = () => {
    // TODO: implement real signout logic
    alert('Signed out!');
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-shadow duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div
          className="flex items-center space-x-3 cursor-pointer hover:scale-105 hover:text-primary transition-all duration-200"
          onClick={() => navigate("/landlord/home")}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-primary-foreground font-bold text-sm">R</span>
          </div>
          <span className="text-xl font-bold text-foreground">RentConnect</span>
          <span className="ml-2 px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-bold">Landlord</span>
        </div>
        {/* Landlord nav */}
        <nav className="hidden md:flex space-x-8">
          <Button variant="ghost" onClick={() => navigate('/landlord/dashboard')} className="text-muted-foreground hover:text-foreground font-medium">
            Dashboard
          </Button>
          <Button variant="ghost" onClick={() => navigate('/landlord/listings')} className="text-muted-foreground hover:text-foreground font-medium">
            My Listings
          </Button>
          <Button variant="ghost" onClick={() => navigate('/landlord/inbox')} className="text-muted-foreground hover:text-foreground font-medium">
            Inbox
          </Button>
        </nav>
        {/* Actions */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:block"><LanguageSelector /></div>
          {/* Dropdown for user profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="ghost" className="font-medium">
                {user.name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => navigate('/landlord/profile')}>
                <User className="mr-2 h-4 w-4" /> My Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/landlord/dashboard')}>
                <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" /> Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="ghost" className="md:hidden" onClick={() => {/* Open nav menu (not yet implemented) */}}><Menu /></Button>
        </div>
      </div>
    </header>
  );
};

export default LandlordHomePageHeader;
