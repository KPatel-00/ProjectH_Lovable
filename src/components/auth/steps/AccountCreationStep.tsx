import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { User, Mail, Lock, Eye, EyeOff, Info } from 'lucide-react';
import { SignUpData } from '../SignUpWizard';

interface AccountCreationStepProps {
  data: SignUpData;
  updateData: (data: Partial<SignUpData>) => void;
  onNext: () => void;
  onSwitchToLogin: () => void;
}

const AccountCreationStep = ({ data, updateData, onNext, onSwitchToLogin }: AccountCreationStepProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showTermsError, setShowTermsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!data.agreeToTerms) {
      setShowTermsError(true);
      return;
    }
    
    setShowTermsError(false);
    onNext();
  };

  const handleInputChange = (field: keyof SignUpData, value: any) => {
    updateData({ [field]: value });
    if (field === 'agreeToTerms' && value) {
      setShowTermsError(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Create Your Account</h3>
        <p className="text-sm text-muted-foreground">Step 1 of 4</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="First name" 
              className="pl-10"
              value={data.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              required 
            />
          </div>
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Last name" 
              className="pl-10"
              value={data.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              required 
            />
          </div>
        </div>

        {/* Role Toggle */}
        <div className="space-y-2">
          <label className="text-sm font-medium">I am a:</label>
          {/* Better pill toggle */}
          <div className="relative flex gap-0.5 rounded-full bg-neutral-100 border border-primary/20 shadow-inner">
            <button
              type="button"
              onClick={() => handleInputChange("role", "tenant")}
              className={`flex-1 py-2 px-4 text-sm font-semibold rounded-full transition-all
                duration-200 z-10
                ${
                  data.role === "tenant"
                    ? "bg-white border-2 border-primary shadow-lg text-primary"
                    : "bg-transparent text-neutral-400 hover:text-primary"
                }`}
              aria-pressed={data.role === "tenant"}
              style={{
                transition: "all 0.20s cubic-bezier(.4,0,.2,1)",
                borderColor: data.role === "tenant" ? "var(--tw-shadow-color)" : "transparent",
              }}
            >
              Tenant
            </button>
            <button
              type="button"
              onClick={() => handleInputChange("role", "landlord")}
              className={`flex-1 py-2 px-4 text-sm font-semibold rounded-full transition-all
                duration-200 z-10
                ${
                  data.role === "landlord"
                    ? "bg-white border-2 border-primary shadow-lg text-primary"
                    : "bg-transparent text-neutral-400 hover:text-primary"
                }`}
              aria-pressed={data.role === "landlord"}
              style={{
                transition: "all 0.20s cubic-bezier(.4,0,.2,1)",
                borderColor: data.role === "landlord" ? "var(--tw-shadow-color)" : "transparent",
              }}
            >
              Landlord
            </button>
            {/* bubble */}
            <span
              className={`absolute top-1 left-1 h-[calc(100%-0.5rem)] w-1/2 rounded-full
                bg-primary/5 shadow-lg transition-transform duration-300 z-0
                ${data.role === "landlord" ? "translate-x-full" : "translate-x-0"}`}
              style={{
                transition: "transform 0.30s cubic-bezier(.4,0,.2,1)",
              }}
              aria-hidden="true"
            />
          </div>
          <div className="flex items-center space-x-1 text-xs text-muted-foreground mt-1">
            <span className="w-3 h-3 inline-block">ℹ️</span>
            <span>You can switch or add the other role later in your profile.</span>
          </div>
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input 
            type="email" 
            placeholder="Email address" 
            className="pl-10"
            value={data.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required 
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input 
            type={showPassword ? "text" : "password"}
            placeholder="Password" 
            className="pl-10 pr-10"
            value={data.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            required 
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        {/* Terms Checkbox */}
        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={data.agreeToTerms}
              onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
            />
            <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
              I've read and agree to the{' '}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            </label>
          </div>
          {showTermsError && (
            <p className="text-sm text-destructive flex items-center space-x-1">
              <span>⚠️</span>
              <span>You must agree to the Terms of Service to continue.</span>
            </p>
          )}
        </div>

        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          disabled={!data.agreeToTerms}
        >
          Create Account
        </Button>
      </form>

      <div className="text-center text-sm text-muted-foreground">
        Already have an account?{' '}
        <button onClick={onSwitchToLogin} className="text-primary hover:underline font-medium">
          Log in here
        </button>
      </div>
    </div>
  );
};

export default AccountCreationStep;
