
import React from "react";
import HeaderNavLinks from "@/components/shared/HeaderNavLinks";
import { SheetContent } from "@/components/ui/sheet";
import BrandLogo from "@/components/shared/BrandLogo";

type NavLink = { name: string; to: string };

type Props = {
  navLinks: NavLink[];
};

const LandlordHeaderMobileMenu: React.FC<Props> = ({ navLinks }) => (
  <SheetContent side="left" className="w-full max-w-xs p-0 flex flex-col">
    <div className="px-6 py-4 flex items-center gap-3 border-b">
      <BrandLogo showText={true} showRoleTag={true} roleTag="Landlord" />
    </div>
    <div className="flex flex-col mt-2">
      <HeaderNavLinks
        links={navLinks}
        navClassName="flex flex-col"
        btnClassName="w-full text-left px-6 py-3 rounded-none font-medium text-base"
        activeClassName="bg-primary/10 text-primary"
        inactiveClassName="text-muted-foreground hover:bg-accent"
      />
    </div>
  </SheetContent>
);

export default LandlordHeaderMobileMenu;
