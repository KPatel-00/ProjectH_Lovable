
import React from "react";
import { Star, Shield, HelpCircle, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TenantTrustSupport: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-[#EBEBEB] rounded-2xl p-8 md:p-12">
      {/* Trust Indicators */}
      <div className="text-center mb-8">
        <h3 className="text-lg font-light tracking-wide text-[#1A1A1A] uppercase mb-6">
          Trusted by Thousands
        </h3>
        
        {/* Trustpilot Score */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-[#8A8A8A]">4.8/5 • 2,847 reviews</span>
        </div>
        
        {/* Partner Logos */}
        <div className="flex items-center justify-center gap-8 mb-8 opacity-60">
          <div className="text-xs uppercase tracking-widest text-[#8A8A8A] font-medium">
            GDPR Compliant
          </div>
          <div className="w-px h-4 bg-[#EBEBEB]" />
          <div className="text-xs uppercase tracking-widest text-[#8A8A8A] font-medium">
            SSL Secured
          </div>
          <div className="w-px h-4 bg-[#EBEBEB]" />
          <div className="text-xs uppercase tracking-widest text-[#8A8A8A] font-medium">
            Verified Listings
          </div>
        </div>
      </div>
      
      {/* Support Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button
          variant="ghost"
          onClick={() => navigate("/help")}
          className="flex items-center justify-center gap-3 p-4 border border-[#EBEBEB] hover:border-[#1A1A1A] hover:bg-[#F8F8F8] transition-all duration-300 h-auto"
        >
          <HelpCircle className="w-4 h-4 text-[#8A8A8A]" />
          <span className="text-xs uppercase tracking-widest font-medium text-[#1A1A1A]">
            Help Center
          </span>
        </Button>
        
        <Button
          variant="ghost"
          onClick={() => navigate("/help/how-to-apply")}
          className="flex items-center justify-center gap-3 p-4 border border-[#EBEBEB] hover:border-[#1A1A1A] hover:bg-[#F8F8F8] transition-all duration-300 h-auto"
        >
          <FileText className="w-4 h-4 text-[#8A8A8A]" />
          <span className="text-xs uppercase tracking-widest font-medium text-[#1A1A1A]">
            How to Apply
          </span>
        </Button>
        
        <Button
          variant="ghost"
          onClick={() => navigate("/terms")}
          className="flex items-center justify-center gap-3 p-4 border border-[#EBEBEB] hover:border-[#1A1A1A] hover:bg-[#F8F8F8] transition-all duration-300 h-auto"
        >
          <Shield className="w-4 h-4 text-[#8A8A8A]" />
          <span className="text-xs uppercase tracking-widest font-medium text-[#1A1A1A]">
            Terms & Privacy
          </span>
        </Button>
      </div>
    </div>
  );
};

export default TenantTrustSupport;
