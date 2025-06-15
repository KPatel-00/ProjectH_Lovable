
import React from "react";

type Role = "tenant" | "landlord" | "admin";

const COLORS: Record<Role, string> = {
  tenant: "bg-blue-100 text-blue-800 border border-blue-200",
  landlord: "bg-green-100 text-green-800 border border-green-200",
  admin: "bg-gray-200 text-gray-800 border border-gray-300",
};

export function UserRoleTag({ role }: { role: Role }) {
  return (
    <span className={`inline-block rounded px-2 py-0.5 text-xs font-bold ${COLORS[role]}`}>
      {role.charAt(0).toUpperCase() + role.slice(1)}
    </span>
  );
}
