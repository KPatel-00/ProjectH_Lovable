
export const mockUser = {
  firstName: "Anna",
  profileComplete: false,
};
export const mockQuickStats = { saved: 3, applications: 1, messages: 2 };

export const mockSavedListings = [
  {
    id: 101,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    title: "Charming Apartment in Mitte",
    location: "Berlin, Mitte",
    price: "€1,200 / month",
  },
  {
    id: 102,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    title: "Family Home in Prenzlauer Berg",
    location: "Berlin, Prenzlauer Berg",
    price: "€2,500 / month",
  },
  {
    id: 103,
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80",
    title: "Studio with City View in Kreuzberg",
    location: "Berlin, Kreuzberg",
    price: "€950 / month",
  },
];

export const mockRecommended = [
  {
    id: 201,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80",
    title: "Penthouse with Terrace in Schöneberg",
    location: "Berlin, Schöneberg",
    price: "€1,500 / month"
  },
  {
    id: 202,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
    title: "Spacious Loft in Friedrichshain",
    location: "Berlin, Friedrichshain",
    price: "€1,800 / month"
  },
  {
    id: 203,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=80",
    title: "Townhouse in Charlottenburg",
    location: "Berlin, Charlottenburg",
    price: "€3,200 / month"
  }
];

export const mockApplications = [
  {
    id: 301,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    title: "Apartment in Mitte",
    appliedDate: "15.07.2024",
    progress: 60,
    status: "Under Review",
  },
  {
    id: 302,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    title: "House in Prenzlauer Berg",
    appliedDate: "20.07.2024",
    progress: 20,
    status: "Documents Submitted",
  },
];

export const mockMessages = [
  {
    id: 1,
    landlordName: "Mr. Schneider",
    landlordAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Is next Tuesday ok for a viewing?",
    timestamp: "2h ago"
  },
  {
    id: 2,
    landlordName: "Mrs. Müller",
    landlordAvatar: "https://randomuser.me/api/portraits/women/42.jpg",
    text: "Please upload proof of income.",
    timestamp: "1d ago"
  }
];
export const mockCities = [
  {
    name: "Berlin",
    subtitle: "Apartments & WGs",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Hamburg",
    subtitle: "Waterfront Living",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Frankfurt",
    subtitle: "Finance Hub",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80"
  }
];

export const FAKE_API_FAIL_RATE_TENANT = 0.17;

export const fakeFetchTenantData = async () => {
  await new Promise(res => setTimeout(res, 900));
  if (Math.random() < FAKE_API_FAIL_RATE_TENANT) throw new Error("Failed to load tenant dashboard. Please try again.");
  return {
    mockUser,
    mockQuickStats,
    mockSavedListings,
    mockRecommended,
    mockApplications,
    mockMessages,
    mockCities,
  };
};
