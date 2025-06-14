
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, User, FileText, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const TenantHomePageHeader = () => {
  const navigate = useNavigate();
  // Hardcoded user data for demo
  const user = {
    name: 'Anna',
    email: 'anna.tenant@example.com',
    avatarUrl: '',
    role: 'Tenant',
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
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer hover:scale-105 hover:text-primary transition-all duration-200"
          onClick={() => navigate("/")}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-primary-foreground font-bold text-sm">R</span>
          </div>
          <span className="text-xl font-bold text-foreground">RentConnect</span>
        </div>
        {/* Tenant nav */}
        <nav className="hidden md:flex space-x-8">
          <Button variant="ghost" onClick={() => navigate('/listings')} className="text-muted-foreground hover:text-foreground font-medium">
            Browse Listings
          </Button>
          <Button variant="ghost" onClick={() => navigate('/list-property')} className="text-muted-foreground hover:text-foreground font-medium">
            List Property
          </Button>
          <Button variant="ghost" onClick={() => navigate('/contact')} className="text-muted-foreground hover:text-foreground font-medium">
            Help Center
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
              <DropdownMenuItem onClick={() => navigate('/tenant/profile')}>
                <User className="mr-2 h-4 w-4" /> My Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/tenant/applications')}>
                <FileText className="mr-2 h-4 w-4" /> My Applications
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

export default TenantHomePageHeader;
