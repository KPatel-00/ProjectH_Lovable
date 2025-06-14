
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Edit, Eye, Trash2 } from "lucide-react";

const MOCK_LISTINGS = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Downtown Loft",
    city: "San Francisco",
    rent: 3200,
    status: "active",
    views: 105,
    applications: 4,
    verified: true,
    createdAt: new Date("2023-10-17"),
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Cozy Cottage",
    city: "Portland",
    rent: 2100,
    status: "inactive",
    views: 57,
    applications: 1,
    verified: false,
    createdAt: new Date("2023-12-02"),
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    title: "Family Home",
    city: "Seattle",
    rent: 2850,
    status: "pending",
    views: 32,
    applications: 2,
    verified: false,
    createdAt: new Date("2024-02-20"),
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=400&q=80",
    title: "Luxury Villa",
    city: "Los Angeles",
    rent: 7700,
    status: "rejected",
    views: 3,
    applications: 0,
    verified: false,
    createdAt: new Date("2024-03-15"),
  },
];

const STATUS_MAP = {
  all: "All",
  active: "Active",
  inactive: "Inactive",
  pending: "Pending",
  rejected: "Rejected",
};

const STATUS_COLOR = {
  active: "bg-green-500 text-white",
  inactive: "bg-gray-400 text-white",
  pending: "bg-yellow-500 text-white",
  rejected: "bg-destructive text-white",
};

const SORT_OPTIONS = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "mostApplications", label: "Most Applications" },
];

type Listing = typeof MOCK_LISTINGS[number];

function getBadge(status: string) {
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${STATUS_COLOR[status] || "bg-gray-200 text-foreground"}`}
    >
      {STATUS_MAP[status] || status}
    </span>
  );
}

const LandlordListings: React.FC = () => {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState<keyof typeof STATUS_MAP>("all");
  const [sort, setSort] = useState(SORT_OPTIONS[0].value);
  const [listings, setListings] = useState<Listing[]>(MOCK_LISTINGS);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // Filter + sort
  let filtered = statusFilter === "all"
    ? listings
    : listings.filter(l => l.status === statusFilter);
  filtered = [...filtered].sort((a, b) => {
    if (sort === "newest") return b.createdAt.getTime() - a.createdAt.getTime();
    if (sort === "oldest") return a.createdAt.getTime() - b.createdAt.getTime();
    if (sort === "mostApplications") return b.applications - a.applications;
    return 0;
  });

  const handleDelete = (id: string) => {
    setListings(listings => listings.filter(l => l.id !== id));
    setDeleteId(null);
  };

  const toggleStatus = (id: string) => {
    setListings(listings =>
      listings.map(l =>
        l.id === id
          ? {
              ...l,
              status: l.status === "active" ? "inactive" : "active",
            }
          : l
      )
    );
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Page Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-1">Your Listings</h1>
        </div>
        <Button size="lg" onClick={() => navigate('/list-property')}>
          + Add New Listing
        </Button>
      </div>

      {/* Filtering + sort */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <Tabs defaultValue="all" value={statusFilter} onValueChange={(v) => setStatusFilter(v as keyof typeof STATUS_MAP)}>
          <TabsList>
            {Object.entries(STATUS_MAP).map(([key, label]) => (
              <TabsTrigger value={key} key={key}>{label}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="font-medium text-muted-foreground">Sort by</label>
          <select
            id="sort"
            className="bg-background border px-3 py-2 rounded-md text-sm"
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            {SORT_OPTIONS.map(opt => (
              <option value={opt.value} key={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            {/* Empty State */}
            <h3 className="text-xl font-bold mb-2">You haven’t added any properties yet.</h3>
            <p className="mb-6 text-muted-foreground text-center">Get started by adding your first property listing.</p>
            <Button size="lg" onClick={() => navigate('/list-property')}>
              + Create First Listing
            </Button>
          </div>
        ) : (
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead />
                  <TableHead>Title</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Rent</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Metrics</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map(listing => (
                  <TableRow key={listing.id}>
                    <TableCell>
                      <div className="w-16 h-14 bg-muted rounded-md overflow-hidden border flex items-center justify-center">
                        <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      {listing.verified && (
                        <Badge className="absolute -mt-8 ml-4 bg-green-600 text-white">Verified</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{listing.title}</span>
                    </TableCell>
                    <TableCell>{listing.city}</TableCell>
                    <TableCell>
                      <span className="font-semibold text-foreground">${listing.rent.toLocaleString()}/mo</span>
                    </TableCell>
                    <TableCell>
                      {getBadge(listing.status)}
                    </TableCell>
                    <TableCell>
                      <div className="text-xs text-muted-foreground flex flex-col gap-1">
                        <span>Views: <span className="font-semibold text-foreground">{listing.views}</span></span>
                        <span>Apps: <span className="font-semibold text-foreground">{listing.applications}</span></span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="icon" variant="outline" onClick={() => navigate(`/edit-listing/${listing.id}`)} title="Edit">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="outline" onClick={() => navigate(`/listing/${listing.id}`)} title="View">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => toggleStatus(listing.id)}
                        >
                          {listing.status === "active" ? "Deactivate" : "Activate"}
                        </Button>
                        <Button
                          size="icon"
                          variant="destructive"
                          onClick={() => setDeleteId(listing.id)}
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
      {/* Delete confirmation dialog */}
      <Dialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Listing?</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this listing? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => handleDelete(deleteId!)}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LandlordListings;
