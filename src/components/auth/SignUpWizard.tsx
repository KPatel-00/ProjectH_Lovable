import React, { useState } from 'react';
import AccountCreationStep from './steps/AccountCreationStep';
import EmailVerificationStep from './steps/EmailVerificationStep';
import ReferralSourceStep from './steps/ReferralSourceStep';
import ProfileSetupStep from './steps/ProfileSetupStep';
import { useNavigate } from 'react-router-dom';

export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'tenant' | 'landlord';
  agreeToTerms: boolean;
  referralSource?: string;
  referralOther?: string;
  profile?: {
    phone?: string;
    preferredLocation?: string;
    budgetRange?: string;
    moveInDate?: string;
    businessName?: string;
    propertyType?: string;
  };
}

interface SignUpWizardProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const DOTS = [1, 2, 3, 4];

const SignUpWizard = ({ onClose, onSwitchToLogin }: SignUpWizardProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [signUpData, setSignUpData] = useState<SignUpData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'tenant',
    agreeToTerms: false
  });
  const navigate = useNavigate();

  const updateSignUpData = (data: Partial<SignUpData>) => {
    setSignUpData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleComplete = () => {
    import('@/hooks/use-toast').then(({ toast }) => {
      toast({
        title: "Sign up successful",
        description: "Your account has been created!",
      })
    });
    onClose();
    if (signUpData.role === 'landlord') {
      navigate('/landlord/home');
    } else {
      navigate('/tenant/home');
    }
  };

  const renderProgressDots = () => (
    <div className="flex justify-center items-center mb-4 mt-1">
      {DOTS.map((dot, idx) => (
        <div
          key={dot}
          className={`w-3 h-3 rounded-full mx-1 transition-all duration-200
            ${currentStep === dot
              ? 'bg-primary border-2 border-primary/60 shadow-md'
              : 'bg-primary/10 border border-primary/20'}
          `}
          style={{
            opacity: currentStep >= dot ? 1 : 0.4,
            transform: currentStep === dot ? 'scale(1.15)' : 'scale(1)',
          }}
        />
      ))}
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <AccountCreationStep
            data={signUpData}
            updateData={updateSignUpData}
            onNext={nextStep}
            onSwitchToLogin={onSwitchToLogin}
          />
        );
      case 2:
        return (
          <EmailVerificationStep
            email={signUpData.email}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <ReferralSourceStep
            data={signUpData}
            updateData={updateSignUpData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 4:
        return (
          <ProfileSetupStep
            data={signUpData}
            updateData={updateSignUpData}
            onComplete={handleComplete}
            onBack={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {renderProgressDots()}
      {renderStep()}
    </div>
  );
};

export default SignUpWizard;
