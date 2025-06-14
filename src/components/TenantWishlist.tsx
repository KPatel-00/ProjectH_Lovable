
import React from "react";
import { Badge } from "@/components/ui/badge";
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
        <h2 className="text-xl font-semibold">Saved Properties</h2>
        <button
          className="text-primary text-sm font-medium hover:underline"
          onClick={() => navigate("/profile/wishlist")}
        >
          View All
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {properties.map((p) => (
          <div
            key={p.id}
            className="min-w-[270px] max-w-xs rounded-xl bg-white border border-border shadow relative flex-shrink-0 cursor-pointer transition-transform hover:scale-[1.03]"
            onClick={() => navigate(`/listing/${p.id}`)}
          >
            <div className="relative h-40 w-full">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover rounded-t-xl" />
              {p.status && (
                <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-xl ${statusColor[p.statusType ?? "danger"]}`}>
                  {p.status}
                </span>
              )}
              <button
                type="button"
                aria-label="Bookmark"
                className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-full shadow border border-border"
                tabIndex={-1}
              >
                <Bookmark className="w-5 h-5 text-primary fill-primary" />
              </button>
            </div>
            <div className="p-4">
              <div className="font-semibold text-foreground">{p.title}</div>
              <div className="text-sm text-muted-foreground">{`${p.rooms} ${p.rooms === 1 ? "room" : "rooms"} · ${p.area}m² · ${p.price}`}</div>
              <div className="text-sm flex items-center gap-1 text-muted-foreground mt-1">{p.city}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TenantWishlist;
