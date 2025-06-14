
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Phone, MapPin, DollarSign, Calendar, Building, Home } from 'lucide-react';
import { SignUpData } from '../SignUpWizard';

interface ProfileSetupStepProps {
  data: SignUpData;
  updateData: (data: Partial<SignUpData>) => void;
  onComplete: () => void;
  onBack: () => void;
}

const ProfileSetupStep = ({ data, updateData, onComplete, onBack }: ProfileSetupStepProps) => {
  const [profileData, setProfileData] = useState(data.profile || {});

  const handleProfileChange = (field: string, value: string) => {
    const updatedProfile = { ...profileData, [field]: value };
    setProfileData(updatedProfile);
    updateData({ profile: updatedProfile });
  };

  const handleSkip = () => {
    console.log('Skipping profile setup');
    onComplete();
  };

  const handleSaveAndContinue = () => {
    console.log('Saving profile and continuing:', profileData);
    onComplete();
  };

  const renderTenantFields = () => (
    <div className="space-y-4">
      <div className="relative">
        <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <Input
          type="tel"
          placeholder="Phone Number (Optional)"
          className="pl-10"
          value={profileData.phone || ''}
          onChange={(e) => handleProfileChange('phone', e.target.value)}
        />
      </div>

      <div className="relative">
        <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Preferred location (city)"
          className="pl-10"
          value={profileData.preferredLocation || ''}
          onChange={(e) => handleProfileChange('preferredLocation', e.target.value)}
        />
      </div>

      <div className="relative">
        <DollarSign className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Budget range (e.g., $1000-1500)"
          className="pl-10"
          value={profileData.budgetRange || ''}
          onChange={(e) => handleProfileChange('budgetRange', e.target.value)}
        />
      </div>

      <div className="relative">
        <Calendar className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <Input
          type="month"
          placeholder="Move-in date"
          className="pl-10"
          value={profileData.moveInDate || ''}
          onChange={(e) => handleProfileChange('moveInDate', e.target.value)}
        />
      </div>
    </div>
  );

  const renderLandlordFields = () => (
    <div className="space-y-4">
      <div className="relative">
        <Building className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Business name (Optional)"
          className="pl-10"
          value={profileData.businessName || ''}
          onChange={(e) => handleProfileChange('businessName', e.target.value)}
        />
      </div>

      <div className="relative">
        <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <Input
          type="tel"
          placeholder="Phone number"
          className="pl-10"
          value={profileData.phone || ''}
          onChange={(e) => handleProfileChange('phone', e.target.value)}
        />
      </div>

      <div className="relative">
        <Home className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Property type preference"
          className="pl-10"
          value={profileData.propertyType || ''}
          onChange={(e) => handleProfileChange('propertyType', e.target.value)}
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Complete Your Profile</h3>
        <p className="text-sm text-muted-foreground">Step 4 of 4</p>
      </div>

      <div className="space-y-4">
        <div className="text-center">
          <Label className="text-sm font-medium">
            {data.role === 'tenant' ? 'Tenant' : 'Landlord'} Profile
          </Label>
        </div>

        {data.role === 'tenant' ? renderTenantFields() : renderLandlordFields()}

        <div className="bg-muted/50 p-3 rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            ✨ You can complete your profile later from the My Profile section
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <Button 
          onClick={handleSaveAndContinue}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
        >
          Save & Continue
        </Button>

        <Button 
          variant="outline" 
          onClick={handleSkip}
          className="w-full"
        >
          Skip for Now
        </Button>

        <Button 
          variant="ghost" 
          onClick={onBack}
          className="w-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>
    </div>
  );
};

export default ProfileSetupStep;
