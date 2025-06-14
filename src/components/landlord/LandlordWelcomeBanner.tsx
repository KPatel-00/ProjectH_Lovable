
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ShieldCheck } from "lucide-react";

interface Props {
  name: string;
  business?: string;
  verified: boolean;
}
const LandlordWelcomeBanner: React.FC<Props> = ({ name, business, verified }) => (
  <section className="flex items-center gap-5 mb-8 px-6 py-5 rounded-2xl bg-white shadow-md animate-fade-in">
    <Avatar className="h-16 w-16 text-2xl">
      <AvatarFallback className="bg-primary text-primary-foreground font-bold text-3xl">
        {name[0]}
      </AvatarFallback>
    </Avatar>
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold leading-tight text-gray-900">
          Welcome back, {name}
        </span>
        {verified && (
          <ShieldCheck className="text-green-600 w-5 h-5" aria-label="Verified" />
        )}
      </div>
      {business && (
        <div className="text-sm text-muted-foreground font-semibold flex items-center gap-2">
          <span>{business}</span>
          {verified && (
            <span className="ml-1 px-2 py-0.5 rounded bg-green-100 text-green-700 text-[11px] font-semibold align-middle">Verified</span>
          )}
        </div>
      )}
    </div>
  </section>
);

export default LandlordWelcomeBanner;
