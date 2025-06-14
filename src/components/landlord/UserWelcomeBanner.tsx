
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ShieldCheck } from "lucide-react";

interface Props {
  name: string;
  business?: string;
  verified: boolean;
}
const UserWelcomeBanner: React.FC<Props> = ({ name, business, verified }) => (
  <section className="flex items-center gap-4 mb-3 p-5 rounded-2xl bg-card shadow-sm border">
    <Avatar className="h-14 w-14 text-xl">
      <AvatarFallback className="bg-primary text-primary-foreground font-bold text-2xl">
        {name[0]}
      </AvatarFallback>
    </Avatar>
    <div>
      <div className="text-2xl md:text-3xl font-extrabold flex items-center gap-2 leading-tight">
        Welcome, {name}
        {verified && (
          <span title="Verified">
            <ShieldCheck className="text-green-600 w-6 h-6" aria-label="Verified"/>
          </span>
        )}
      </div>
      {business && (
        <div className="text-sm md:text-base text-muted-foreground font-medium mt-1">
          {business} <span className="ml-1 bg-green-100 text-green-700 px-2 py-0.5 rounded text-[11px] font-bold align-middle">Verified</span>
        </div>
      )}
    </div>
  </section>
);

export default UserWelcomeBanner;
