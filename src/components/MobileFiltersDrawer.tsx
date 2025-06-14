
import React from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
  filters: any;
  setFilters: (f: any) => void;
  onApply: () => void;
};

const amenities = [
  { label: "Furnished", key: "furnished" },
  { label: "Pet-Friendly", key: "petFriendly" },
  { label: "Parking", key: "parking" },
  { label: "Balcony", key: "balcony" }
];

const MobileFiltersDrawer: React.FC<Props> = ({ open, setOpen, filters, setFilters, onApply }) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-4 px-4 pb-4">
          <div>
            <div className="font-semibold mb-2">Amenities</div>
            <div className="flex flex-col gap-2">
              {amenities.map(a => (
                <label key={a.key} className="flex items-center gap-2">
                  <Checkbox
                    checked={!!filters[a.key]}
                    onCheckedChange={v => setFilters({ ...filters, [a.key]: v })}
                    id={a.key + "mobile"}
                  />
                  <Label htmlFor={a.key + "mobile"} className="cursor-pointer text-sm">{a.label}</Label>
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
                id="verified-only-m"
              />
              <Label htmlFor="verified-only-m" className="cursor-pointer text-sm">Verified Only</Label>
            </label>
          </div>
        </div>
        <DrawerFooter>
          <Button onClick={() => { onApply(); setOpen(false); }} className="w-full">Apply Filters</Button>
          <DrawerClose asChild>
            <Button variant="secondary" className="w-full">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFiltersDrawer;
