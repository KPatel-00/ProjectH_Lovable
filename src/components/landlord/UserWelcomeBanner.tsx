
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ShieldCheck } from "lucide-react";

interface Props {
  name: string;
  business?: string;
  verified: boolean;
}

const UserWelcomeBanner: React.FC<Props> = ({ name, business, verified }) => (
  <section className="flex items-center gap-4 mb-6">
    <Avatar>
      <AvatarFallback className="bg-primary text-primary-foreground font-bold">{name[0]}</AvatarFallback>
    </Avatar>
    <div>
      <div className="text-xl font-bold flex items-center gap-2">
        {name}
        {verified && <ShieldCheck className="text-green-600 w-5 h-5" aria-label="Verified"/>}
      </div>
      {business && (
        <div className="text-sm text-muted-foreground font-medium">{business}</div>
      )}
      <Badge className={verified ? "bg-green-400 text-white ml-1" : "bg-red-400 text-white ml-1"}>
        {verified ? "Verified" : "Not Verified"}
      </Badge>
    </div>
  </section>
);

export default UserWelcomeBanner;
