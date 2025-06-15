
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Shield, MessageCircle, Phone } from "lucide-react";

type Landlord = {
  name: string;
  verified: boolean;
  rating: number;
  business: string | null;
};

type Props = {
  landlord: Landlord;
  listingId: string;
};

const LuxuryLandlordSection: React.FC<Props> = ({ landlord, listingId }) => {
  return (
    <div className="py-16 px-4 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="editorial-headline text-2xl lg:text-3xl mb-12 text-center">
          Meet Your Host
        </h2>
        
        <Card className="p-8 lg:p-12 bg-gradient-to-br from-background to-muted/20 border-border/20 rounded-3xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Landlord Info */}
            <div className="text-center lg:text-left">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                <span className="editorial-headline text-2xl text-primary">
                  {landlord.name.charAt(0)}
                </span>
              </div>
              
              <h3 className="editorial-subhead text-xl lg:text-2xl mb-2">
                {landlord.name}
              </h3>
              
              {landlord.business && (
                <p className="editorial-body text-muted-foreground mb-4">
                  {landlord.business}
                </p>
              )}
              
              <div className="flex items-center gap-4 justify-center lg:justify-start mb-6">
                {landlord.verified && (
                  <div className="flex items-center gap-2 text-secondary">
                    <Shield className="w-4 h-4" />
                    <span className="editorial-caption">Verified Host</span>
                  </div>
                )}
                
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="editorial-subhead text-sm">{landlord.rating}</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full h-14 text-lg rounded-2xl bg-primary hover:bg-primary/90"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Send Message
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full h-14 text-lg rounded-2xl border-2"
              >
                <Phone className="w-5 h-5 mr-3" />
                Schedule Tour
              </Button>
              
              <div className="text-center pt-4">
                <p className="editorial-caption text-muted-foreground">
                  Typically responds within a few hours
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LuxuryLandlordSection;
