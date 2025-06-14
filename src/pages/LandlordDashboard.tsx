
import React, { useState } from "react";
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

  const SectionComponent = SECTION_COMPONENTS[section] || DashboardHome;

  return (
    <LandlordDashboardLayout section={section} setSection={setSection}>
      <SectionComponent />
    </LandlordDashboardLayout>
  );
}
