
import React from "react";
import ListingCard from "@/components/ListingCard";
import { useNavigate } from "react-router-dom";

type Listing = {
  id: number;
  image: string;
  title: string;
  rent: number;
  city: string;
  verified: boolean;
  bookmarked: boolean;
  status: "active" | "pending" | "inactive";
};

type SearchListingsGridProps = {
  listings: Listing[];
  displayed: number;
  onBookmark: (id: number) => void;
  onLoadMore: () => void;
};

const SearchListingsGrid: React.FC<SearchListingsGridProps> = ({
  listings,
  displayed,
  onBookmark,
  onLoadMore,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5" aria-label="Search results">
        {listings.slice(0, displayed).map(l => (
          <li
            key={l.id}
            tabIndex={0}
            className={`group outline-none ring-offset-2 rounded-xl transition-all bg-background
              hover:scale-[1.02] hover:shadow-xl focus:scale-[1.01] focus:ring-2 focus:ring-primary/60
            `}
            onClick={() => navigate(`/listing/${l.id}`)}
            onKeyDown={e => {
              if (e.key === "Enter") navigate(`/listing/${l.id}`);
            }}
            aria-label={`${l.verified ? "Verified " : ""}${l.title} in ${l.city}, €${l.rent}/mo`}
            role="button"
          >
            <ListingCard
              image={l.image}
              title={l.title}
              rent={l.rent}
              city={l.city}
              verified={l.verified}
              status={l.status}
              bookmarked={l.bookmarked}
              onBookmark={() => onBookmark(l.id)}
            />
          </li>
        ))}
      </ul>
      {displayed < listings.length && (
        <div className="flex justify-center mt-8">
          <button onClick={onLoadMore} className="px-4 py-2 rounded bg-secondary">
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default SearchListingsGrid;

