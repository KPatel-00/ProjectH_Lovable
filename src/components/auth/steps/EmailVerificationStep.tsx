
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle, ArrowLeft, RotateCcw } from 'lucide-react';

interface EmailVerificationStepProps {
  email: string;
  onNext: () => void;
  onBack: () => void;
}

const EmailVerificationStep = ({ email, onNext, onBack }: EmailVerificationStepProps) => {
  const [resendCountdown, setResendCountdown] = useState(0);

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCountdown]);

  const handleResendEmail = () => {
    console.log('Resending verification email to:', email);
    setResendCountdown(60);
    // TODO: Implement actual resend logic
  };

  const handleVerified = () => {
    console.log('Email verified for:', email);
    // TODO: Check verification status
    onNext();
  };

  return (
    <div className="space-y-6 text-center">
      <div>
        <h3 className="text-lg font-semibold mb-2">Verify Your Email</h3>
        <p className="text-sm text-muted-foreground">Step 2 of 4</p>
      </div>

      <div className="space-y-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <Mail className="w-8 h-8 text-primary" />
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            We've sent a verification link to
          </p>
          <p className="font-medium">{email}</p>
          <p className="text-sm text-muted-foreground">
            Click the link in your email to verify your account, then click below to continue.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <Button 
          onClick={handleVerified}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          I've Verified My Email
        </Button>

        <Button 
          variant="outline" 
          onClick={handleResendEmail}
          disabled={resendCountdown > 0}
          className="w-full"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          {resendCountdown > 0 ? `Resend in ${resendCountdown}s` : 'Resend Email'}
        </Button>

        <Button 
          variant="ghost" 
          onClick={onBack}
          className="w-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default EmailVerificationStep;
