
import React from "react";

type Status = "active" | "banned" | "unverified" | "pending";

const COLORS: Record<Status, string> = {
  active: "bg-green-100 text-green-800 border border-green-200",
  banned: "bg-red-100 text-red-800 border border-red-200",
  unverified: "bg-yellow-100 text-yellow-900 border border-yellow-200",
  pending: "bg-gray-100 text-gray-700 border border-gray-200",
};

export function UserStatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${COLORS[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
