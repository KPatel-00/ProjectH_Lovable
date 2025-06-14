
import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type Props = {
  filters: any;
  setFilters: (f: any) => void;
};

const amenities = [
  { label: "Furnished", key: "furnished" },
  { label: "Pet-Friendly", key: "petFriendly" },
  { label: "Parking", key: "parking" },
  { label: "Balcony", key: "balcony" }
];

const SearchSidebarFilters: React.FC<Props> = ({ filters, setFilters }) => {
  return (
    <aside className="hidden lg:block w-64 shrink-0 pr-6">
      <div className="sticky top-28 bg-background border border-border rounded-2xl shadow p-4 space-y-4">
        <div>
          <div className="font-semibold mb-2">Amenities</div>
          <div className="flex flex-col gap-3">
            {amenities.map(a => (
              <label key={a.key} className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  checked={!!filters[a.key]}
                  onCheckedChange={v => setFilters({ ...filters, [a.key]: v })}
                  id={a.key}
                />
                <Label htmlFor={a.key} className="cursor-pointer text-sm">{a.label}</Label>
              </label>
            ))}
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Only Show</div>
          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={!!filters.verifiedOnly}
              onCheckedChange={v => setFilters({ ...filters, verifiedOnly: v })}
              id="verified-only"
            />
            <Label htmlFor="verified-only" className="cursor-pointer text-sm">Verified Only</Label>
          </label>
        </div>
      </div>
    </aside>
  );
};

export default SearchSidebarFilters;
