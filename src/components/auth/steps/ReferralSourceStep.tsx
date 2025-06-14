
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';
import { SignUpData } from '../SignUpWizard';

interface ReferralSourceStepProps {
  data: SignUpData;
  updateData: (data: Partial<SignUpData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const ReferralSourceStep = ({ data, updateData, onNext, onBack }: ReferralSourceStepProps) => {
  const [otherText, setOtherText] = useState(data.referralOther || '');

  const referralOptions = [
    { value: 'google', label: 'Google search' },
    { value: 'social', label: 'Social Media (Instagram, Twitter, etc.)' },
    { value: 'friend', label: 'Friend or Family' },
    { value: 'whatsapp', label: 'WhatsApp Groups' },
    { value: 'agent', label: 'Real Estate Agent' },
    { value: 'listing', label: 'Property Listing Site' },
    { value: 'event', label: 'Event or Conference' },
    { value: 'other', label: 'Other' }
  ];

  const handleSourceChange = (value: string) => {
    updateData({ referralSource: value });
    if (value !== 'other') {
      setOtherText('');
      updateData({ referralOther: '' });
    }
  };

  const handleOtherTextChange = (value: string) => {
    setOtherText(value);
    updateData({ referralOther: value });
  };

  const handleContinue = () => {
    console.log('Referral source:', data.referralSource, data.referralOther);
    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Where did you hear about RentConnect?</h3>
        <p className="text-sm text-muted-foreground">Step 3 of 4</p>
      </div>

      <div className="space-y-4">
        <RadioGroup 
          value={data.referralSource || ''} 
          onValueChange={handleSourceChange}
          className="space-y-3"
        >
          {referralOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value} className="text-sm cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>

        {data.referralSource === 'other' && (
          <div className="ml-6">
            <Input
              placeholder="Please specify..."
              value={otherText}
              onChange={(e) => handleOtherTextChange(e.target.value)}
              className="mt-2"
            />
          </div>
        )}
      </div>

      <div className="space-y-3">
        <Button 
          onClick={handleContinue}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
        >
          Continue
        </Button>

        <Button 
          variant="outline" 
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

export default ReferralSourceStep;
