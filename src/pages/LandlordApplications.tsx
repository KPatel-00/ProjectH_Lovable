
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, Check, X, MessageCircle } from "lucide-react";

// Mock data for listings (normally fetched)
const MOCK_LISTINGS = [
  { id: "1", title: "Downtown Loft", city: "San Francisco", rent: 3200 },
  { id: "2", title: "Cozy Cottage", city: "Portland", rent: 2100 },
];

// Mock data for applications (normally fetched)
const MOCK_APPLICATIONS = [
  {
    id: "a1",
    listingId: "1",
    applicant: { id: "u11", name: "Jamie Smith", email: "jamie@email.com" },
    moveInDate: new Date("2024-09-01"),
    message: "I'm moving for work and love your property. Looking forward to hearing from you!",
    status: "pending",
    createdAt: new Date("2024-06-01"),
    documents: [],
  },
  {
    id: "a2",
    listingId: "2",
    applicant: { id: "u12", name: "Chris Doe", email: "chris@email.com" },
    moveInDate: new Date("2024-07-15"),
    message: "This cottage looks perfect for my family.",
    status: "accepted",
    createdAt: new Date("2024-05-12"),
    documents: [],
  },
  {
    id: "a3",
    listingId: "1",
    applicant: { id: "u13", name: "Sarah Lee", email: "sarah@email.com" },
    moveInDate: new Date("2024-10-01"),
    message: "Looking for a quiet space close to transit.",
    status: "rejected",
    createdAt: new Date("2024-06-10"),
    documents: [],
  },
];

const STATUS_MAP = {
  all: "All",
  pending: "Pending",
  accepted: "Accepted",
  rejected: "Rejected",
};
const STATUS_COLOR = {
  pending: "bg-yellow-500 text-white",
  accepted: "bg-green-600 text-white",
  rejected: "bg-destructive text-white",
};

function getBadge(status: string) {
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${STATUS_COLOR[status] || "bg-gray-200 text-foreground"}`}
    >
      {STATUS_MAP[status] || status}
    </span>
  );
}

const LandlordApplications: React.FC = () => {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState<keyof typeof STATUS_MAP>("all");
  const [listingFilter, setListingFilter] = useState("all");
  const [applications, setApplications] = useState(MOCK_APPLICATIONS);
  const [activeAppId, setActiveAppId] = useState<string | null>(null);

  // Filtering logic
  let filtered = applications;
  if (listingFilter !== "all") {
    filtered = filtered.filter(app => app.listingId === listingFilter);
  }
  if (statusFilter !== "all") {
    filtered = filtered.filter(app => app.status === statusFilter);
  }

  const openDetail = (id: string) => setActiveAppId(id);
  const closeDetail = () => setActiveAppId(null);

  const handleAccept = (id: string) => {
    setApplications(apps => apps.map(app => app.id === id ? { ...app, status: "accepted" } : app));
    closeDetail();
  };
  const handleReject = (id: string) => {
    setApplications(apps => apps.map(app => app.id === id ? { ...app, status: "rejected" } : app));
    closeDetail();
  };

  // Resolve listing info
  function listingSummary(listingId: string) {
    const l = MOCK_LISTINGS.find(l => l.id === listingId);
    if (!l) return { title: "Unknown", city: "N/A", rent: 0 };
    return l;
  }

  const activeApp = activeAppId ? applications.find(a => a.id === activeAppId) : null;
  const activeListing = activeApp ? listingSummary(activeApp.listingId) : null;

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-foreground mb-1">Applications Received</h1>
        <div />
      </div>
      {/* Filters */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex flex-col sm:flex-row gap-4 items-start sm:items-end justify-between">
        {/* Application status tabs */}
        <Tabs defaultValue="all" value={statusFilter} onValueChange={(v) => setStatusFilter(v as keyof typeof STATUS_MAP)}>
          <TabsList>
            {Object.entries(STATUS_MAP).map(([key, label]) => (
              <TabsTrigger value={key} key={key}>{label}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        {/* Filter by listing */}
        <div className="flex items-center gap-2">
          <label htmlFor="listing-filter" className="font-medium text-muted-foreground">Filter by Listing:</label>
          <select
            id="listing-filter"
            className="bg-background border px-3 py-2 rounded-md text-sm"
            value={listingFilter}
            onChange={e => setListingFilter(e.target.value)}
          >
            <option value="all">All</option>
            {MOCK_LISTINGS.map(l => (
              <option value={l.id} key={l.id}>{l.title}</option>
            ))}
          </select>
        </div>
      </div>
      {/* Applications Table or Empty State */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            {/* Empty State */}
            <h3 className="text-xl font-bold mb-2">You haven’t received any applications yet.</h3>
            <p className="mb-6 text-muted-foreground text-center">Tenant applications to your properties will show up here.</p>
          </div>
        ) : (
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Listing</TableHead>
                  <TableHead>City / Rent</TableHead>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Move-in date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map(app => {
                  const l = listingSummary(app.listingId);
                  return (
                    <TableRow key={app.id}>
                      <TableCell>
                        <div className="font-medium">{l.title}</div>
                      </TableCell>
                      <TableCell>{l.city} <br /> <span className="font-semibold">${l.rent.toLocaleString()}/mo</span></TableCell>
                      <TableCell>
                        <div className="font-medium">{app.applicant.name}</div>
                        <div className="text-xs text-muted-foreground">{app.applicant.email}</div>
                      </TableCell>
                      <TableCell>
                        {app.moveInDate ? (
                          new Date(app.moveInDate).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })
                        ) : (
                          "-"
                        )}
                      </TableCell>
                      <TableCell>
                        {getBadge(app.status)}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="icon" variant="outline" onClick={() => openDetail(app.id)} title="View details">
                            <Eye className="w-4 h-4" />
                          </Button>
                          {app.status === "pending" && (
                            <>
                              <Button size="icon" variant="secondary" onClick={() => handleAccept(app.id)} title="Accept">
                                <Check className="w-4 h-4" />
                              </Button>
                              <Button size="icon" variant="destructive" onClick={() => handleReject(app.id)} title="Reject">
                                <X className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                          <Button size="icon" variant="ghost" onClick={() => navigate(`/profile/${app.applicant.id}`)} title="View profile">
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
      {/* Application detail modal */}
      <Dialog open={!!activeApp} onOpenChange={(open) => !open && closeDetail()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
            <DialogDescription>
              {activeListing && (
                <>
                  <span className="font-semibold">{activeListing.title}</span> – {activeListing.city}&nbsp;(${activeListing.rent.toLocaleString()}/mo)
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          {activeApp && (
            <div className="space-y-4 py-2">
              <div>
                <span className="font-medium">Applicant:</span> {activeApp.applicant.name} <br />
                <span className="text-xs text-muted-foreground">{activeApp.applicant.email}</span>
              </div>
              <div>
                <span className="font-medium">Move-in Date: </span>
                {activeApp.moveInDate ? new Date(activeApp.moveInDate).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : "-"}
              </div>
              <div>
                <span className="font-medium">Message:</span>
                <div className="text-sm bg-muted p-2 rounded mt-1">{activeApp.message}</div>
              </div>
              {/* Documents/attachments could go here */}
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={closeDetail}>Close</Button>
            {activeApp?.status === "pending" && (
              <>
                <Button variant="secondary" onClick={() => handleAccept(activeApp.id)}>
                  Accept
                </Button>
                <Button variant="destructive" onClick={() => handleReject(activeApp.id)}>
                  Reject
                </Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LandlordApplications;
