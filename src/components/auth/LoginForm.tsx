
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

interface LoginFormProps {
  onClose: () => void;
  onSwitchToSignUp: () => void;
}

const LoginForm = ({ onClose, onSwitchToSignUp }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'tenant',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const firstInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoginError("");
    // Simulate login: if password === 'fail' trigger error
    setTimeout(() => {
      setIsSubmitting(false);
      if (
        formData.email === "fail@example.com" ||
        formData.password === "fail"
      ) {
        setLoginError("Incorrect email or password.");
        toast({
          title: "Login failed",
          description: "Incorrect email or password.",
          variant: "destructive",
        });
        // Focus email input for retry UX
        firstInputRef.current?.focus();
        return;
      }
      onClose();
      toast({
        title: "Successfully logged in!",
        description: `Welcome back, ${formData.email}`,
      });
      // Redirect according to role
      if (formData.role === 'landlord') {
        navigate('/landlord/home');
      } else {
        navigate('/tenant/home');
      }
    }, 900);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4" aria-describedby={loginError ? "login-error" : undefined}>
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input 
            ref={firstInputRef}
            type="email" 
            placeholder="Email address" 
            className="pl-10"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required 
            autoFocus
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input 
            type={showPassword ? "text" : "password"}
            placeholder="Password" 
            className="pl-10 pr-10"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            required 
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
            tabIndex={0}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        {/* Role selection for demo */}
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="role"
              value="tenant"
              checked={formData.role === 'tenant'}
              onChange={() => setFormData(prev => ({ ...prev, role: 'tenant' }))}
              className="accent-primary"
            />
            <span className="text-sm">Tenant</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="role"
              value="landlord"
              checked={formData.role === 'landlord'}
              onChange={() => setFormData(prev => ({ ...prev, role: 'landlord' }))}
              className="accent-primary"
            />
            <span className="text-sm">Landlord</span>
          </label>
        </div>
        {loginError && (
          <div
            id="login-error"
            className="text-destructive text-sm bg-destructive/10 border border-destructive rounded px-3 py-2 flex items-center gap-2"
            tabIndex={-1}
            aria-live="assertive"
          >
            <span aria-hidden="true">⚠️</span>
            <span>{loginError}</span>
          </div>
        )}
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Log In"}
        </Button>
      </form>
      <div className="text-center space-y-3">
        <a href="#" className="text-sm text-primary hover:underline">
          Forgot your password?
        </a>
        <div className="text-sm text-muted-foreground">
          Don't have an account?{' '}
          <button onClick={onSwitchToSignUp} className="text-primary hover:underline font-medium">
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

