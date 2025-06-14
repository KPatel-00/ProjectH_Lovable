
import React from "react";
import { useLocation } from "react-router-dom";
import LandingPageHeader from "./LandingPageHeader";
import TenantHomePageHeader from "./TenantHomePageHeader";
import LandlordHomePageHeader from "./LandlordHomePageHeader";
import AdminHeader from "./AdminHeader";

// Render the correct header depending on route
const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path.startsWith("/landlord")) {
    return <LandlordHomePageHeader />;
  }
  if (path.startsWith("/tenant")) {
    return <TenantHomePageHeader />;
  }
  if (path.startsWith("/admin")) {
    return <AdminHeader />;
  }
  // Default: landing & general pages
  return <LandingPageHeader />;
};

export default Header;
