
import React from "react";
import { Button } from "@/components/ui/button";
import { Bookmark, FileText, Mail } from "lucide-react";

interface Props {
  firstName: string;
  stats?: {
    saved: number;
    applications: number;
    messages: number;
  };
}

const TenantWelcomeBanner: React.FC<Props> = ({ firstName, stats }) => (
  <div className="bg-white border border-[#EBEBEB] rounded-2xl p-8 md:p-12 shadow-[0_4px_32px_-8px_rgba(0,0,0,0.08)]">
    {/* Welcome Content */}
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-light text-[#1A1A1A] tracking-wide mb-3">
        WELCOME BACK, {firstName.toUpperCase()}
      </h1>
      <p className="text-[#8A8A8A] text-lg font-light tracking-wide">
        Ready to find your new home? Let's get started.
      </p>
    </div>
    
    {/* Quick Stats Row */}
    {stats && (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center group">
          <div className="w-12 h-12 bg-[#F8F8F8] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#E5DCC3] transition-colors duration-300">
            <Bookmark className="w-5 h-5 text-[#1A1A1A]" />
          </div>
          <div className="text-2xl font-light text-[#1A1A1A] mb-1">{stats.saved}</div>
          <div className="text-xs uppercase tracking-widest text-[#8A8A8A] font-medium">Saved Listings</div>
        </div>
        
        <div className="text-center group">
          <div className="w-12 h-12 bg-[#F8F8F8] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#E5DCC3] transition-colors duration-300">
            <FileText className="w-5 h-5 text-[#1A1A1A]" />
          </div>
          <div className="text-2xl font-light text-[#1A1A1A] mb-1">{stats.applications}</div>
          <div className="text-xs uppercase tracking-widest text-[#8A8A8A] font-medium">Applications</div>
        </div>
        
        <div className="text-center group">
          <div className="w-12 h-12 bg-[#F8F8F8] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#E5DCC3] transition-colors duration-300">
            <Mail className="w-5 h-5 text-[#1A1A1A]" />
          </div>
          <div className="text-2xl font-light text-[#1A1A1A] mb-1">{stats.messages}</div>
          <div className="text-xs uppercase tracking-widest text-[#8A8A8A] font-medium">New Messages</div>
        </div>
      </div>
    )}
    
    {/* CTA Button */}
    <div className="text-center">
      <Button 
        variant="outline" 
        className="px-8 py-3 text-xs uppercase tracking-widest font-medium border-[#EBEBEB] hover:border-[#1A1A1A] hover:bg-[#F8F8F8] transition-all duration-300"
      >
        Complete Your Profile
      </Button>
    </div>
  </div>
);

export default TenantWelcomeBanner;
