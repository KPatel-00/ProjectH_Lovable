
import React from "react";
import { useNavigate } from "react-router-dom";
import { Bookmark } from "lucide-react";

type WishlistProperty = {
  id: number;
  image: string;
  title: string;
  rooms: number;
  area: number;
  price: string;
  city: string;
  status?: string;
  statusType?: "danger" | "success";
};

type Props = {
  properties: WishlistProperty[];
};

const statusColor = {
  danger: "bg-destructive text-destructive-foreground",
  success: "bg-emerald-100 text-emerald-700",
};

const TenantWishlist: React.FC<Props> = ({ properties }) => {
  const navigate = useNavigate();
  return (
    <section className="mb-2">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-foreground uppercase tracking-wide">Saved Properties</h2>
        <button
          className="btn-outline px-5 py-2 rounded-xl text-primary text-base font-bold transition-all duration-200"
          onClick={() => navigate("/profile/wishlist")}
        >
          View All
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {properties.map((p) => (
          <div
            key={p.id}
            className="min-w-[270px] max-w-xs card-refined relative flex-shrink-0 transition-transform hover:scale-[1.03] shadow-refined-lg"
            onClick={() => navigate(`/listing/${p.id}`)}
          >
            <div className="relative h-40 w-full">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover rounded-t-xl" />
              {p.status && (
                <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-xl ${statusColor[p.statusType ?? "danger"]}`}>
                  {p.status}
                </span>
              )}
              <button
                type="button"
                aria-label="Bookmark"
                className="absolute top-3 right-3 bg-secondary p-2 rounded-full shadow border border-secondary"
                tabIndex={-1}
                style={{ pointerEvents: "none" }}
              >
                <Bookmark className="w-5 h-5 text-primary fill-primary" />
              </button>
            </div>
            <div className="p-4">
              <div className="font-bold text-foreground text-base mb-1">{p.title}</div>
              <div className="text-sm text-primary">{`${p.rooms} ${p.rooms === 1 ? "room" : "rooms"} · ${p.area}m² · ${p.price}`}</div>
              <div className="text-sm flex items-center gap-1 text-muted-foreground mt-1">{p.city}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TenantWishlist;
