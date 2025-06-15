
import React from "react";

type Status = "pending" | "verified" | "rejected";

const colors: Record<Status, string> = {
  pending: "bg-yellow-200 text-yellow-900 border border-yellow-300",
  verified: "bg-green-200 text-green-900 border border-green-300",
  rejected: "bg-red-200 text-red-900 border border-red-300"
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-bold ${colors[status]}`}
      data-testid="status-badge"
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
