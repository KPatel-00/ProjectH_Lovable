
import React, { useEffect, useState } from "react";
import ListingCard from "@/components/ListingCard";

type Props = {
  listing: any;
};

const mockRecommended = [
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
    title: "Modern Loft in Prenzlauer Berg",
    rent: "€1,050",
    city: "Berlin",
    verified: false,
    bookmarked: false,
    status: "active"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&q=80",
    title: "Sunny Studio in Kreuzberg",
    rent: "€900",
    city: "Berlin",
    verified: true,
    bookmarked: false,
    status: "active"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
    title: "Cozy Flat Near Tiergarten",
    rent: "€1,150",
    city: "Berlin",
    verified: true,
    bookmarked: false,
    status: "active"
  }
];

const RecommendedListings: React.FC<Props> = ({ listing }) => {
  const [recs, setRecs] = useState<any[]>([]);

  useEffect(() => {
    // For demo, return mock similar based on city/type
    setRecs(mockRecommended.filter(l => l.city === listing.city && l.title !== listing.title));
  }, [listing]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">You might also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {recs.map(card => (
          <ListingCard key={card.id} {...card} onClick={() => window.location.href = `/listing/${card.id}`} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedListings;
