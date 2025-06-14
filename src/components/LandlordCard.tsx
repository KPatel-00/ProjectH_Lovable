
import React from "react";
import { User, ShieldCheck, Star } from "lucide-react";

type Props = {
  landlord: {
    name: string;
    verified?: boolean;
    rating?: number;
    business?: string;
  };
};

const LandlordCard: React.FC<Props> = ({ landlord }) => {
  return (
    <div className="bg-background rounded-xl p-6 shadow border border-border">
      <div className="flex flex-col items-center text-center">
        <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-2">
          <User className="w-8 h-8 text-white" />
        </div>
        <div className="font-semibold text-lg">{landlord.name}</div>
        {landlord.business && (
          <div className="text-sm text-muted-foreground">{landlord.business}</div>
        )}
        <div className="flex flex-wrap justify-center items-center mt-1 gap-2 text-sm">
          {landlord.verified && (
            <span className="inline-flex items-center gap-1 text-green-600 font-medium">
              <ShieldCheck className="w-4 h-4" /> Verified
            </span>
          )}
          {landlord.rating && (
            <span className="inline-flex items-center gap-1 text-yellow-500 font-medium">
              <Star className="w-4 h-4 fill-current" /> {landlord.rating}
            </span>
          )}
        </div>
        <button
          type="button"
          className="mt-5 w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
          onClick={() => alert("Contact/Message Landlord (demo)")}
        >
          Contact Landlord
        </button>
      </div>
    </div>
  );
};

export default LandlordCard;
