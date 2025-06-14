
import React from "react";
import HeaderNavLinks from "@/components/shared/HeaderNavLinks";
import { useT } from "@/i18n";

// The hardcoded navigation links for Landlord
const NAV_LINKS = [
  { nameKey: "dashboard", to: "/landlord/dashboard" },
  { nameKey: "myListings", to: "/landlord/dashboard/mylistings" },
  { nameKey: "helpCenter", to: "/help" },
];

// Renders translation-aware landlord navigation
const LandlordNavLinks = () => {
  const t = useT();
  const links = NAV_LINKS.map(n => ({ name: t(n.nameKey).toUpperCase(), to: n.to }));
  return (
    <HeaderNavLinks
      links={links}
      navClassName="hidden md:flex mx-auto flex-1 justify-center items-center gap-2"
      btnClassName="relative px-4 py-1 font-medium text-xs uppercase tracking-wide transition-all duration-300 ease-out rounded-sm hover:scale-105"
      activeClassName="text-primary after:absolute after:-bottom-px after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-[2px] after:bg-primary after:rounded-full after:content-[''] after:animate-in after:slide-in-from-bottom-1"
      inactiveClassName="text-muted-foreground hover:text-primary"
    />
  );
};

export default LandlordNavLinks;
