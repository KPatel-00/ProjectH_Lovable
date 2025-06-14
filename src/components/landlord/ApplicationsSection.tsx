
import React from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const MOCK_APPLICATIONS = [
  { name: "Anna Schmidt", role: "Software Engineer", contact: "anna.schmidt@email.com", date: "2024-07-26", status: "New" },
  { name: "Markus Weber", role: "Marketing Manager", contact: "markus.weber@email.com", date: "2024-07-25", status: "Shortlisted" },
  { name: "Julia Klein", role: "Graphic Designer", contact: "julia.klein@email.com", date: "2024-07-24", status: "Rejected" },
  { name: "Lukas Fischer", role: "Student", contact: "lukas.fischer@email.com", date: "2024-07-23", status: "New" },
  { name: "Sophie Braun", role: "Data Analyst", contact: "sophie.braun@email.com", date: "2024-07-22", status: "Shortlisted" },
];

function statusBadge(status: string) {
  const color =
    status === "Shortlisted"
      ? "bg-green-50 text-green-700"
      : status === "Rejected"
        ? "bg-red-50 text-red-700"
        : "bg-blue-50 text-blue-700";
  return (
    <span className={`text-xs font-semibold rounded px-2 py-0.5 ${color}`}>
      {status}
    </span>
  );
}
export default function ApplicationsSection() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
        <div>
          <h2 className="text-2xl font-bold">Applications</h2>
          <div className="text-muted-foreground text-base">All applications submitted to your listings.</div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Filter</Button>
          <Button variant="primary">Manage Waitlist</Button>
        </div>
      </div>
      <div className="bg-white rounded-lg border shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Applicant</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_APPLICATIONS.map(app => (
              <TableRow key={app.contact}>
                <TableCell>
                  <div>
                    <div className="font-semibold">{app.name}</div>
                    <div className="text-xs text-muted-foreground">{app.role}</div>
                  </div>
                </TableCell>
                <TableCell>{app.contact}</TableCell>
                <TableCell>{app.date}</TableCell>
                <TableCell>{statusBadge(app.status)}</TableCell>
                <TableCell>
                  <Button variant="link" size="sm">View Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="p-4 text-xs text-muted-foreground">Showing 1 to 5 of 12 applications</div>
      </div>
    </div>
  );
}
