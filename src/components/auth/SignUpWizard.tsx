
import React, { useState } from 'react';
import AccountCreationStep from './steps/AccountCreationStep';
import EmailVerificationStep from './steps/EmailVerificationStep';
import ReferralSourceStep from './steps/ReferralSourceStep';
import ProfileSetupStep from './steps/ProfileSetupStep';

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
    console.log('Sign up completed:', signUpData);
    // TODO: Implement actual sign up logic
    onClose();
  };

  const renderProgressDots = () => (
    <div className="flex justify-center space-x-2 mb-6">
      {[1, 2, 3, 4].map((step) => (
        <div
          key={step}
          className={`w-2 h-2 rounded-full transition-colors ${
            step <= currentStep ? 'bg-primary' : 'bg-muted'
          }`}
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
