
// This page now only renders the analytics dashboard directly.
// The sections/routes for listings and applications are handled separately by App.tsx.

import React from "react";
import LandlordDashboardLayout from "@/components/landlord/LandlordDashboardLayout";
import DashboardHome from "@/components/landlord/DashboardHome";

export default function LandlordDashboard() {
  return (
    <LandlordDashboardLayout section="dashboard" setSection={() => {}}>
      <DashboardHome />
    </LandlordDashboardLayout>
  );
}
