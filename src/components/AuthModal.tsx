
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import LoginForm from './auth/LoginForm';
import SignUpWizard from './auth/SignUpWizard';
import AnimatedSwitch from './ui/AnimatedSwitch';
import { useT } from "@/i18n";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'signup';
}

const AuthModal = ({ isOpen, onClose, defaultTab = "login" }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(defaultTab);
  const t = useT();

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  const handleClose = () => {
    setActiveTab('login');
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
              {t("welcomeTo", "common") || "Welcome to"} RentConnect
            </DialogTitle>
          </div>
        </DialogHeader>
        <div className="px-6 pb-4">
          <div className="flex flex-col gap-2">
            <div className="relative flex rounded-full border border-primary/40 bg-white transition-all w-full overflow-hidden">
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 text-base font-semibold rounded-full py-2 transition-all z-10
                  ${activeTab === "login"
                    ? "text-primary border-primary"
                    : "text-neutral-500 hover:text-primary"}
                `}
                style={{
                  border: "none",
                  outline: "none",
                }}
                aria-pressed={activeTab === "login"}
              >
                {t("login")}
              </button>
              <button
                onClick={() => setActiveTab("signup")}
                className={`flex-1 text-base font-semibold rounded-full py-2 transition-all z-10
                  ${activeTab === "signup"
                    ? "text-primary border-primary"
                    : "text-neutral-500 hover:text-primary"}
                `}
                style={{
                  border: "none",
                  outline: "none",
                }}
                aria-pressed={activeTab === "signup"}
              >
                {t("getStarted")}
              </button>
              {/* Outline indicator for active tab */}
              <span
                className="absolute top-0 bottom-0 w-1/2 rounded-full border-2 border-primary pointer-events-none transition-all duration-300"
                style={{
                  left: activeTab === "signup" ? "50%" : "0%",
                  right: activeTab === "signup" ? "0%" : "50%",
                  boxSizing: "border-box"
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        {/* STEP DOTS [REMOVED, dots are now only in SignUpWizard] */}
        <div className="px-6 pb-6 min-h-[420px]">
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
