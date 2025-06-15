
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Archive, Shield, File } from "lucide-react";

const links = [
  {
    icon: <File className="w-5 h-5 text-primary" />,
    label: "Download Tax Summary",
    href: "/landlord/taxsummary"
  },
  {
    icon: <Archive className="w-5 h-5 text-muted-foreground" />,
    label: "Archived Listings",
    href: "/landlord/archived"
  },
  {
    icon: <Shield className="w-5 h-5 text-green-600" />,
    label: "Verified Landlord Badge",
    href: "/landlord/profile"
  },
  {
    icon: <File className="w-5 h-5 text-gray-700" />,
    label: "Terms & Guidelines Compliance",
    href: "/landlord/compliance"
  },
];

const LandlordTrustShortcuts: React.FC = () => (
  <section>
    <div className="font-semibold text-lg text-gray-900 mb-2">Trust & Compliance</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {links.map(link => (
        <Card key={link.label} className="flex flex-col items-center justify-center h-24 px-2 py-4">
          <div className="mb-2">{link.icon}</div>
          <Button variant="link" size="sm" className="text-primary text-center p-0 h-auto" asChild>
            <a href={link.href}>{link.label}</a>
          </Button>
        </Card>
      ))}
    </div>
  </section>
);

export default LandlordTrustShortcuts;
