
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import PropertyImageGallery from "@/components/PropertyImageGallery";
import { Skeleton } from "@/components/ui/skeleton";

// Demo: mimic listings as in PropertyDetail.tsx
const demoListings: Record<string, any> = {
  "1": {
    id: "1",
    title: "Spacious 2BR Apartment in Berlin",
    city: "Berlin",
    neighborhood: "Mitte",
    rent: 1200,
    verified: true,
    type: "Apartment",
    listedAt: Date.now() - 1000 * 60 * 60 * 24 * 5,
    size: 73,
    rooms: 2,
    furnishing: "Furnished",
    images: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&q=70"
    ]
  },
  "2": {
    id: "2",
    title: "Cozy WG Room in Munich",
    city: "Munich",
    neighborhood: "Schwabing",
    rent: 650,
    verified: true,
    type: "WG Room",
    listedAt: Date.now() - 1000 * 60 * 60 * 24 * 1,
    size: 18,
    rooms: 1,
    furnishing: "Partly furnished",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=70"
    ]
  }
  // ...add more demo as needed
};

const mockProfile = {
  fullName: "Jane Doe",
  email: "jane.doe@email.com",
  userId: "mock-user-1",
  phone: ""
};

const RentalApplicationPage: React.FC = () => {
  const { listingId } = useParams<{ listingId: string }>();
  const navigate = useNavigate();
  const [listing, setListing] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [alreadyApplied, setAlreadyApplied] = useState(false);

  // Form state
  const [form, setForm] = useState({
    fullName: mockProfile.fullName,
    email: mockProfile.email,
    phone: "",
    moveInDate: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const found = demoListings[listingId || ""];
      if (!found) {
        toast({
          title: "Listing not found",
          description: "This listing does not exist or might have expired."
        });
        setLoading(false);
        setListing(null);
      } else {
        setListing(found);
        setLoading(false);

        // Simulate: check if user already applied (would be backend call)
        // E.g., setAlreadyApplied(true) if already applied
        setAlreadyApplied(false); // set to true to test applied state
      }
    }, 500);
  }, [listingId]);

  // Form change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  // Simulate upload handler (stubbed)
  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => { ... }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validation
    if (!form.fullName || !form.email || !form.moveInDate) {
      toast({
        title: "Missing required fields",
        description: "Please fill all required fields."
      });
      return;
    }
    setSubmitting(true);

    setTimeout(() => {
      // Here you would store in Firestore:
      // - applicantId, listingId, landlordId, status: "pending", timestamp, etc
      // - uploaded files in Firebase Storage
      // - send notification to landlord
      toast({
        title: "Application sent!",
        description: "Your application has been submitted to the landlord."
      });
      setSubmitting(false);
      navigate("/profile/applications?just-applied=1", { replace: true });
    }, 1200);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-background">
        <Skeleton className="w-80 h-10 mb-6" />
        <Skeleton className="w-full h-60 mb-7" />
        <Skeleton className="w-full h-32" />
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="border bg-card p-8 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold mb-2">Listing Not Found</h2>
          <p className="text-muted-foreground mb-6">Sorry, this property does not exist or is no longer available.</p>
          <Link
            className="text-primary underline font-semibold"
            to="/listings"
          >
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-2 sm:px-6 pt-10 pb-16 flex flex-col gap-8">
        <section className="border bg-card rounded-xl shadow p-6 flex gap-6 flex-col sm:flex-row items-center">
          <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-muted">
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-xl mb-1">{listing.title}</div>
            <div className="text-muted-foreground mb-2">
              {listing.city}, {listing.neighborhood}
            </div>
            <div className="text-lg font-bold text-primary mb-2">
              €{listing.rent}/month
            </div>
            <Link
              to={`/listing/${listing.id}`}
              className="text-primary underline text-sm font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Listing &rarr;
            </Link>
          </div>
        </section>

        <section className="bg-background rounded-xl p-6 border shadow max-w-2xl mx-auto w-full">
          {alreadyApplied ? (
            <div className="p-6 border-l-4 border-yellow-400 bg-yellow-50 rounded mb-4 text-yellow-900">
              <div className="font-semibold mb-2">Application Already Submitted</div>
              <div>
                You have already applied to this listing. Please allow time for the landlord to review.
              </div>
              {/* Optionally show status, date, etc */}
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-4">Rental Application</h2>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="fullName">Full Name <span className="text-destructive">*</span></label>
                  <Input
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">Email <span className="text-destructive">*</span></label>
                  <Input
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="moveInDate">Preferred Move-in Date <span className="text-destructive">*</span></label>
                  <Input
                    id="moveInDate"
                    name="moveInDate"
                    type="date"
                    required
                    value={form.moveInDate}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="message">Personal Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell the landlord a bit about yourself, your occupation, why you're interested..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                  />
                </div>
                {/* MVP+ Upload feature stub */}
                {/* <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="documents">Supporting Documents (optional)</label>
                  <Input id="documents" name="documents" type="file" multiple />
                </div> */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Application"}
                </Button>
              </form>
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default RentalApplicationPage;
