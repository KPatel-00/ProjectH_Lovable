// This file now serves as the main dashboard layout with internal routing.

import React from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import LandlordDashboardLayout from "@/components/landlord/LandlordDashboardLayout";
import DashboardHome from "@/components/landlord/DashboardHome"; // Analytics
import ListingsSection from "@/components/landlord/ListingsSection";
import ApplicationsSection from "@/components/landlord/ApplicationsSection";

export default function LandlordDashboard() {
  // We will check the path and set section accordingly to keep button active
  const location = useLocation();
  // Section key for active highlighting; root = "dashboard", etc
  const section = location.pathname.endsWith("/mylistings")
    ? "listings"
    : location.pathname.endsWith("/applications")
    ? "applications"
    : "dashboard";

  const navigate = useNavigate();

  return (
    <LandlordDashboardLayout section={section} setSection={section => {
      // Handled by navigation in sidebar now
      if (section === "dashboard") navigate("/landlord/dashboard");
      else if (section === "listings") navigate("/landlord/dashboard/mylistings");
      else if (section === "applications") navigate("/landlord/dashboard/applications");
    }}>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/mylistings" element={<ListingsSection />} />
        <Route path="/applications" element={<ApplicationsSection />} />
        {/* Redirect any unknown dashboard paths to dashboard home */}
        <Route path="*" element={<Navigate to="/landlord/dashboard" replace />} />
      </Routes>
    </LandlordDashboardLayout>
  );
}
