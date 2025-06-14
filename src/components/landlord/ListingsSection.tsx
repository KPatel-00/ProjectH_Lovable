
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const MOCK_LISTINGS = [
  { address: "123 Main Street, Berlin", landlord: "Anna Schmidt", status: "Active", applications: 5 },
  { address: "456 Oak Avenue, Munich", landlord: "Markus Weber", status: "Inactive", applications: 2 },
  { address: "789 Pine Road, Hamburg", landlord: "Julia Fischer", status: "Active", applications: 8 },
  { address: "101 Elm Street, Cologne", landlord: "Stefan Braun", status: "Active", applications: 3 },
  { address: "222 Maple Drive, Frankfurt", landlord: "Katrin Vogel", status: "Inactive", applications: 1 },
  { address: "333 Cedar Lane, Stuttgart", landlord: "Thomas Keller", status: "Active", applications: 6 },
];

function statusBadge(status: string) {
  return (
    <span className={`text-xs rounded px-2 py-0.5 font-semibold ${
      status === "Active"
        ? "bg-green-50 text-green-700"
        : "bg-red-50 text-red-700"
    }`}>
      {status}
    </span>
  );
}

export default function ListingsSection() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
        <div>
          <h2 className="text-2xl font-bold">Listings</h2>
          <div className="text-muted-foreground text-base">Manage all property listings on the platform.</div>
        </div>
        <Button variant="primary">+ Add New Listing</Button>
      </div>
      <div className="mt-3 bg-white rounded-lg shadow border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Address</TableHead>
              <TableHead>Landlord</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Applications</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_LISTINGS.map(listing =>
              <TableRow key={listing.address}>
                <TableCell>{listing.address}</TableCell>
                <TableCell>{listing.landlord}</TableCell>
                <TableCell>{statusBadge(listing.status)}</TableCell>
                <TableCell>{listing.applications}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="link" size="sm">View</Button>
                    <Button variant="link" size="sm">Edit</Button>
                    <Button variant="link" size="sm" className="text-destructive">Remove</Button>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="p-4 text-xs text-muted-foreground">Showing 1 to 6 of 20 listings</div>
      </div>
    </div>
  );
}
