
import React from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import PremiumFiltersPanel from "./PremiumFiltersPanel";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
  filters: any;
  setFilters: (f: any) => void;
  onApply: () => void;
};

const MobileFiltersDrawer: React.FC<Props> = ({ open, setOpen, filters, setFilters, onApply }) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent
        aria-label="Filters"
        aria-modal="true"
        role="dialog"
        className="w-full max-w-full min-w-0 px-0"
        style={{ maxWidth: '100vw', minWidth: 0 }}
      >
        <DrawerHeader className="px-6 py-4 border-b border-gray-100">
          <DrawerTitle id="filters-title" className="text-sm font-medium text-gray-900 uppercase tracking-wide">
            Refine Selection
          </DrawerTitle>
        </DrawerHeader>
        <div className="px-6 pb-6">
          <PremiumFiltersPanel
            filters={filters}
            setFilters={setFilters}
            className="border-0 shadow-none"
          />
        </div>
        <DrawerFooter className="px-6 py-4 border-t border-gray-100 space-y-3">
          <Button 
            onClick={() => { onApply(); setOpen(false); }} 
            className="w-full h-11 bg-black hover:bg-gray-900 text-white text-xs uppercase tracking-wide font-medium rounded-lg transition-all duration-300"
          >
            Apply Filters
          </Button>
          <DrawerClose asChild>
            <Button 
              variant="ghost" 
              className="w-full h-11 text-gray-600 hover:text-gray-900 text-xs uppercase tracking-wide font-medium rounded-lg transition-all duration-300"
            >
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFiltersDrawer;
