
export const landlord = {
  firstName: "Alex",
  businessName: "Prime Rentals",
  verified: true,
  uid: "landlord-demo-1"
};

export const metrics = [
  { labelKey: "activeListings", value: 4 },
  { labelKey: "applicationsPending", value: 2 },
  { labelKey: "totalViews", value: 129 }
];

export const recentListings = [
  { id: 1, title: "Modern 2BR Apartment", status: "Active" as const, views: 73, lastUpdated: "2024-06-09" },
  { id: 2, title: "Cozy Studio Center", status: "Pending" as const, views: 36, lastUpdated: "2024-06-05" },
  { id: 3, title: "Family Home", status: "Inactive" as const, views: 20, lastUpdated: "2024-06-02" }
];

export const recentApplications = [
  { id: 1, applicantName: "Emma Becker", listingTitle: "Modern 2BR Apartment", date: "2024-06-10", status: "New" as const },
  { id: 2, applicantName: "Lucas Schulz", listingTitle: "Cozy Studio Center", date: "2024-06-08", status: "Under Review" as const },
  { id: 3, applicantName: "Nina Graf", listingTitle: "Family Home", date: "2024-06-06", status: "New" as const }
];

export const FAKE_API_FAIL_RATE = 0.22;

export const fakeFetchLandlordData = async () => {
  await new Promise(res => setTimeout(res, 1100));
  if (Math.random() < FAKE_API_FAIL_RATE) throw new Error("Failed to fetch landlord dashboard. Please try again.");
  return {
    landlord,
    metrics,
    recentListings,
    recentApplications
  };
};
