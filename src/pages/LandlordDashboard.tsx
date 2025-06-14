
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LandlordDashboardLayout from "@/components/landlord/LandlordDashboardLayout";
import DashboardHome from "@/components/landlord/DashboardHome";
import ListingsSection from "@/components/landlord/ListingsSection";
import ApplicationsSection from "@/components/landlord/ApplicationsSection";

const SECTION_COMPONENTS: Record<string, React.FC> = {
  dashboard: DashboardHome,
  listings: ListingsSection,
  applications: ApplicationsSection,
};

const DEFAULT_SECTION = "dashboard";

export default function LandlordDashboard() {
  const [section, setSection] = useState<string>(DEFAULT_SECTION);
  const location = useLocation();

  useEffect(() => {
    // On first mount, check location.state for a section override from navigation
    if (location.state && (location.state as any).section) {
      setSection((location.state as any).section);
    }
    // eslint-disable-next-line
  }, []);

  const SectionComponent = SECTION_COMPONENTS[section] || DashboardHome;

  return (
    <LandlordDashboardLayout section={section} setSection={setSection}>
      <SectionComponent />
    </LandlordDashboardLayout>
  );
}
