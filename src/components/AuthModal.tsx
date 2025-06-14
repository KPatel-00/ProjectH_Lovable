
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import LoginForm from './auth/LoginForm';
import SignUpWizard from './auth/SignUpWizard';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'signup';
}

const COMPANY_NAME = "RentConnect";

const AuthModal = ({ isOpen, onClose, defaultTab = 'login' }: AuthModalProps) => {
  // Default to login tab as per instruction
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(defaultTab);

  // Respond to modal triggers for tab switching
  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  const handleClose = () => {
    setActiveTab('login'); // Reset default to login for modal reopening
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">R</span>
            </div>
            <DialogTitle className="text-xl font-bold">
              Welcome to {COMPANY_NAME}
            </DialogTitle>
          </div>
        </DialogHeader>
        
        {/* Top pill-style toggle: Log In on left (default), Sign Up on right */}
        <div className="px-6 pb-4">
          <div className="bg-muted p-1 rounded-full flex gap-1 border border-border shadow-inner">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 px-4 text-sm font-semibold rounded-full transition-all duration-200 outline-none
                ${activeTab === 'login'
                  ? 'bg-background text-foreground shadow-md ring-1 ring-primary'
                  : 'bg-transparent text-muted-foreground hover:text-foreground'}`
              }
              tabIndex={0}
              aria-pressed={activeTab === 'login'}
              style={{ transition: 'all 0.18s cubic-bezier(.4,0,.2,1)' }}
            >
              Log In
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-2 px-4 text-sm font-semibold rounded-full transition-all duration-200 outline-none
                ${activeTab === 'signup'
                  ? 'bg-background text-foreground shadow-md ring-1 ring-primary'
                  : 'bg-transparent text-muted-foreground hover:text-foreground'}`
              }
              tabIndex={0}
              aria-pressed={activeTab === 'signup'}
              style={{ transition: 'all 0.18s cubic-bezier(.4,0,.2,1)' }}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Modal body */}
        <div className="px-6 pb-6">
          {activeTab === 'signup' ? (
            <SignUpWizard onClose={handleClose} onSwitchToLogin={() => setActiveTab('login')} />
          ) : (
            <LoginForm onClose={handleClose} onSwitchToSignUp={() => setActiveTab('signup')} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
