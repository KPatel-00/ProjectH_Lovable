
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { SignUpData } from '../SignUpWizard';
import { toast } from '@/hooks/use-toast';

interface AccountCreationStepProps {
  data: SignUpData;
  updateData: (data: Partial<SignUpData>) => void;
  onNext: () => void;
  onSwitchToLogin: () => void;
}

const AccountCreationStep = ({
  data,
  updateData,
  onNext,
  onSwitchToLogin,
}: AccountCreationStepProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showTermsError, setShowTermsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupError, setSignupError] = useState("");
  const firstNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSignupError("");
    if (!data.agreeToTerms) {
      setShowTermsError(true);
      return;
    }
    setShowTermsError(false);
    setIsSubmitting(true);

    // Simulate signup failure for demo: error if email is 'already@used.com'
    setTimeout(() => {
      setIsSubmitting(false);
      if (data.email === "already@used.com") {
        setSignupError("An account with this email already exists.");
        toast({
          title: "Sign up failed",
          description: "An account with this email already exists.",
          variant: "destructive"
        });
        firstNameRef.current?.focus();
        return;
      }
      toast({
        title: "Account Created",
        description: `Welcome, ${data.firstName} – verify your email to continue.`,
      });
      onNext();
    }, 900);
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
      </div>
      <form onSubmit={handleSubmit} className="space-y-4" aria-describedby={signupError || showTermsError ? "signup-error" : undefined}>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              ref={firstNameRef}
              type="text"
              placeholder="First name"
              className="pl-10"
              value={data.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              required
              autoFocus
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
        <div className="space-y-2">
          <label className="text-sm font-medium">I am a:</label>
          <div className="relative flex rounded-full border border-primary/40 bg-white w-full overflow-hidden transition-all">
            <button
              type="button"
              onClick={() => handleInputChange("role", "tenant")}
              className={`flex-1 text-sm font-semibold rounded-full py-2 transition-all z-10
                ${data.role === "tenant"
                  ? "text-primary"
                  : "text-neutral-500 hover:text-primary"}
              `}
              style={{
                border: "none",
                outline: "none",
              }}
              aria-pressed={data.role === "tenant"}
            >
              Tenant
            </button>
            <button
              type="button"
              onClick={() => handleInputChange("role", "landlord")}
              className={`flex-1 text-sm font-semibold rounded-full py-2 transition-all z-10
                ${data.role === "landlord"
                  ? "text-primary"
                  : "text-neutral-500 hover:text-primary"}
              `}
              style={{
                border: "none",
                outline: "none",
              }}
              aria-pressed={data.role === "landlord"}
            >
              Landlord
            </button>
            <span
              className="absolute top-0 bottom-0 w-1/2 rounded-full border-2 border-primary pointer-events-none transition-all duration-300"
              style={{
                left: data.role === "landlord" ? "50%" : "0%",
                right: data.role === "landlord" ? "0%" : "50%",
                boxSizing: "border-box"
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
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
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
            <p className="text-sm text-destructive flex items-center space-x-1" id="signup-error">
              <span>⚠️</span>
              <span>You must agree to the Terms of Service to continue.</span>
            </p>
          )}
          {signupError && (
            <p className="text-sm text-destructive flex items-center space-x-1" id="signup-error" aria-live="assertive">
              <span>⚠️</span>
              <span>{signupError}</span>
            </p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          disabled={!data.agreeToTerms || isSubmitting}
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
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

