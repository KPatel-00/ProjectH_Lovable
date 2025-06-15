
// Placeholder admin header improved with navigation tabs for admin sections
import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const adminTabs = [
  { label: "Dashboard", to: "/admin/dashboard" },
  { label: "User Management", to: "/admin/users" },
  { label: "Verification Management", to: "/admin/verification" },
];
const AdminHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <header className="bg-white border-b px-6 py-4 flex flex-col gap-2">
      <h2 className="text-lg font-bold">Admin Panel</h2>
      {isAdminRoute && (
        <nav className="flex gap-3 mt-2">
          {adminTabs.map(tab => (
            <Button
              key={tab.to}
              size="sm"
              variant={location.pathname === tab.to ? "default" : "ghost"}
              onClick={() => navigate(tab.to)}
              className="rounded-md"
            >
              {tab.label}
            </Button>
          ))}
        </nav>
      )}
    </header>
  );
};
export default AdminHeader;
