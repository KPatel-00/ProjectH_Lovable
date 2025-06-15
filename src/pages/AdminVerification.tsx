
import React, { useState } from "react";
import { User, Building2, FileText, Clock, Check, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/admin/StatusBadge";
import ConfirmationModal from "@/components/admin/ConfirmationModal";

type LandlordVerification = {
  id: string;
  name: string;
  email: string;
  business: string;
  submittedDocs: string[];
  date: string;
  status: "pending" | "verified" | "rejected";
};
type ListingVerification = {
  id: string;
  title: string;
  location: string;
  owner: string;
  docs: string[];
  createdAt: string;
  status: "pending" | "verified" | "rejected";
};

const MOCK_LANDLORDS: LandlordVerification[] = [
  {
    id: "u1",
    name: "Alice Wang",
    email: "alice@prop.com",
    business: "Wang Realty LLC",
    submittedDocs: ["business_license.pdf", "photo_id.jpg"],
    date: "2025-06-13",
    status: "pending",
  },
  {
    id: "u2",
    name: "Bob Smith",
    email: "bob@estate.com",
    business: "Smith Estates",
    submittedDocs: ["incorporation.pdf"],
    date: "2025-06-12",
    status: "pending",
  },
];
const MOCK_LISTINGS: ListingVerification[] = [
  {
    id: "l1",
    title: "Sunny Modern Loft",
    location: "Berlin",
    owner: "Alice Wang",
    docs: [],
    createdAt: "2025-06-03",
    status: "pending",
  },
  {
    id: "l2",
    title: "Quiet Suburban House",
    location: "Munich",
    owner: "Bob Smith",
    docs: ["deed.pdf"],
    createdAt: "2025-06-11",
    status: "pending",
  },
];

export default function AdminVerification() {
  const [tab, setTab] = useState<"landlords" | "listings">("landlords");
  const [landlords, setLandlords] = useState(MOCK_LANDLORDS);
  const [listings, setListings] = useState(MOCK_LISTINGS);

  // For approval/rejection modals
  const [modal, setModal] = useState<{
    open: boolean;
    type: null | "approve" | "reject";
    itemType: null | "landlord" | "listing";
    itemId: null | string;
  }>({ open: false, type: null, itemType: null, itemId: null });

  const openModal = (type: "approve" | "reject", itemType: "landlord" | "listing", itemId: string) => {
    setModal({ open: true, type, itemType, itemId });
  };
  const closeModal = () => {
    setModal({ open: false, type: null, itemType: null, itemId: null });
  };
  const confirmAction = (reason?: string) => {
    if (!modal.open || !modal.type || !modal.itemType || !modal.itemId) return;
    if (modal.itemType === "landlord") {
      setLandlords(ls =>
        ls.map(l =>
          l.id === modal.itemId
            ? {
                ...l,
                status: modal.type === "approve" ? "verified" : "rejected",
              }
            : l
        )
      );
    }
    if (modal.itemType === "listing") {
      setListings(ls =>
        ls.map(l =>
          l.id === modal.itemId
            ? {
                ...l,
                status: modal.type === "approve" ? "verified" : "rejected",
              }
            : l
        )
      );
    }
    closeModal();
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-2 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Verification Badge Requests</h1>
    
      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        <Button variant={tab === "landlords" ? "default" : "outline"} onClick={() => setTab("landlords")} size="sm">
          Landlord Verifications
        </Button>
        <Button variant={tab === "listings" ? "default" : "outline"} onClick={() => setTab("listings")} size="sm">
          Listing Verifications
        </Button>
      </div>
      {tab === "landlords" && (
        <div className="rounded-lg bg-white shadow p-4 md:p-6 mb-8 animate-fade-in">
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2">
              <thead>
                <tr className="text-left text-sm text-muted-foreground border-b">
                  <th className="p-2 font-semibold flex items-center">
                    <User className="w-4 h-4 mr-1" /> Name + Email
                  </th>
                  <th className="p-2 font-semibold flex items-center">
                    <Building2 className="w-4 h-4 mr-1" /> Business Name
                  </th>
                  <th className="p-2 font-semibold flex items-center">
                    <FileText className="w-4 h-4 mr-1" /> Submitted Docs
                  </th>
                  <th className="p-2 font-semibold flex items-center">
                    <Clock className="w-4 h-4 mr-1" /> Request Date
                  </th>
                  <th className="p-2 font-semibold">Status</th>
                  <th className="p-2 font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {landlords.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-muted-foreground">No verification requests.</td>
                  </tr>
                ) : (
                  landlords.map(l => (
                    <tr key={l.id} className="bg-accent hover:shadow rounded">
                      <td className="p-2 flex flex-col">
                        <span className="font-medium">{l.name}</span>
                        <span className="text-sm text-muted-foreground">{l.email}</span>
                      </td>
                      <td className="p-2">{l.business}</td>
                      <td className="p-2">
                        <ul>
                          {l.submittedDocs.map(doc => (
                            <li key={doc}>
                              <a className="text-primary underline" href="#" onClick={e => e.preventDefault()}>
                                {doc}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-2">{l.date}</td>
                      <td className="p-2">
                        <StatusBadge status={l.status} />
                      </td>
                      <td className="p-2 flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={l.status !== "pending"}
                          onClick={() => openModal("approve", "landlord", l.id)}
                        >
                          <Check className="w-4 h-4 mr-1" /> Approve
                        </Button>
                        <Button
                          variant="outline"
                          className="text-destructive border-destructive"
                          size="sm"
                          disabled={l.status !== "pending"}
                          onClick={() => openModal("reject", "landlord", l.id)}
                        >
                          <X className="w-4 h-4 mr-1" /> Reject
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {tab === "listings" && (
        <div className="rounded-lg bg-white shadow p-4 md:p-6 animate-fade-in">
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2">
              <thead>
                <tr className="text-left text-sm text-muted-foreground border-b">
                  <th className="p-2 font-semibold flex items-center">
                    <Home className="w-4 h-4 mr-1" /> Listing Title + Location
                  </th>
                  <th className="p-2 font-semibold flex items-center">
                    <User className="w-4 h-4 mr-1" /> Owner
                  </th>
                  <th className="p-2 font-semibold flex items-center">
                    <Clock className="w-4 h-4 mr-1" /> Created At
                  </th>
                  <th className="p-2 font-semibold flex items-center">
                    <FileText className="w-4 h-4 mr-1" /> Docs
                  </th>
                  <th className="p-2 font-semibold">Status</th>
                  <th className="p-2 font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-muted-foreground">No verification requests.</td>
                  </tr>
                ) : (
                  listings.map(l => (
                    <tr key={l.id} className="bg-accent hover:shadow rounded">
                      <td className="p-2">
                        <div className="font-medium">{l.title}</div>
                        <div className="text-sm text-muted-foreground">{l.location}</div>
                      </td>
                      <td className="p-2">{l.owner}</td>
                      <td className="p-2">{l.createdAt}</td>
                      <td className="p-2">
                        {l.docs.length ? (
                          <ul>
                            {l.docs.map(doc => (
                              <li key={doc}>
                                <a className="text-primary underline" href="#" onClick={e => e.preventDefault()}>
                                  {doc}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <span className="text-xs text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="p-2">
                        <StatusBadge status={l.status} />
                      </td>
                      <td className="p-2 flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={l.status !== "pending"}
                          onClick={() => openModal("approve", "listing", l.id)}
                        >
                          <Check className="w-4 h-4 mr-1" /> Approve
                        </Button>
                        <Button
                          variant="outline"
                          className="text-destructive border-destructive"
                          size="sm"
                          disabled={l.status !== "pending"}
                          onClick={() => openModal("reject", "listing", l.id)}
                        >
                          <X className="w-4 h-4 mr-1" /> Reject
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <ConfirmationModal
        open={modal.open}
        onClose={closeModal}
        type={modal.type}
        onConfirm={confirmAction}
      />
    </div>
  );
}
