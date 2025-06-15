
import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  firstName: string;
  moveInGoal?: string;
}

const TenantWelcomeBanner: React.FC<Props> = ({ firstName, moveInGoal }) => (
  <section className="editorial-hero-section">
    <div className="editorial-hero-content">
      <div className="editorial-hero-text">
        <h1 className="editorial-hero-headline">
          WELCOME BACK, {firstName.toUpperCase()}
        </h1>
        <p className="editorial-hero-subtext">
          Your personalized rental journey continues here
        </p>
        {moveInGoal && (
          <div className="editorial-move-in-goal">
            <span className="editorial-accent-dot" />
            <span className="editorial-caption-text">
              MOVE-IN GOAL: {moveInGoal.toUpperCase()}
            </span>
          </div>
        )}
      </div>
      
      {/* Editorial CTA */}
      <div className="editorial-hero-actions">
        <Button 
          variant="outline" 
          className="editorial-button-ghost"
        >
          COMPLETE YOUR PROFILE
        </Button>
      </div>
    </div>
    
    {/* Subtle background element */}
    <div className="editorial-hero-background" />
  </section>
);

export default TenantWelcomeBanner;
