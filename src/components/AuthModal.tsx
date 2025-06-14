import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import LoginForm from './auth/LoginForm';
import SignUpWizard from './auth/SignUpWizard';
import AnimatedSwitch from './ui/AnimatedSwitch';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'signup';
}

const COMPANY_NAME = "RentConnect";

const AuthModal = ({ isOpen, onClose, defaultTab = "login" }: AuthModalProps) => {
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
      <DialogContent className="sm:max-w-lg px-0 pb-0 pt-0 overflow-visible !rounded-2xl !shadow-xl bg-neutral-50 backdrop-blur-lg border border-gray-200">
        <DialogHeader className="px-6 pt-6 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">R</span>
            </div>
            <DialogTitle className="text-xl font-bold">
              Welcome to RentConnect
            </DialogTitle>
          </div>
        </DialogHeader>

        {/* TOP TOGGLE */}
        <div className="px-6 pb-4">
          <div className="relative flex gap-0.5 rounded-full bg-neutral-100 border border-primary/20 shadow-inner">
            {/* Log In */}
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-2 px-4 text-base font-semibold rounded-full transition-all
                duration-200 outline-none z-10
                ${
                  activeTab === "login"
                    ? "bg-white border-2 border-primary shadow-lg text-primary"
                    : "bg-transparent text-neutral-400 hover:text-primary"
                }`}
              aria-pressed={activeTab === "login"}
              style={{
                transition: "all 0.20s cubic-bezier(.4,0,.2,1)",
                borderColor: activeTab === "login" ? "var(--tw-shadow-color)" : "transparent",
              }}
            >
              Log In
            </button>
            {/* Sign Up */}
            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-2 px-4 text-base font-semibold rounded-full transition-all
                duration-200 outline-none z-10
                ${
                  activeTab === "signup"
                    ? "bg-white border-2 border-primary shadow-lg text-primary"
                    : "bg-transparent text-neutral-400 hover:text-primary"
                }`}
              aria-pressed={activeTab === "signup"}
              style={{
                transition: "all 0.20s cubic-bezier(.4,0,.2,1)",
                borderColor: activeTab === "signup" ? "var(--tw-shadow-color)" : "transparent",
              }}
            >
              Sign Up
            </button>
            {/* Animated "bubble" background */}
            <span
              className={`absolute top-1 left-1 h-[calc(100%-0.5rem)] w-1/2 rounded-full
                 bg-primary/5 shadow-lg transition-all duration-300 z-0 ${
                activeTab === "signup" ? "translate-x-full" : "translate-x-0"
              }`}
              style={{
                transition: "transform 0.30s cubic-bezier(.4,0,.2,1)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* MODAL CONTENT */}
        <div className="px-6 pb-6 min-h-[430px]">
          <AnimatedSwitch animationKey={activeTab}>
            {activeTab === "signup" ? (
              <SignUpWizard
                onClose={handleClose}
                onSwitchToLogin={() => setActiveTab("login")}
              />
            ) : (
              <LoginForm
                onClose={handleClose}
                onSwitchToSignUp={() => setActiveTab("signup")}
              />
            )}
          </AnimatedSwitch>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
