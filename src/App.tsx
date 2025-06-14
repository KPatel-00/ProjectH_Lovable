import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Listings from "./pages/Listings";
import ListProperty from "./pages/ListProperty";
import Contact from "./pages/Contact";
import PropertyDetail from "./pages/PropertyDetail";
import NotFound from "./pages/NotFound";
import TenantHome from "./pages/TenantHome";
import LandlordHome from "./pages/LandlordHome";
import Search from "./pages/Search";
import RentalApplicationPage from "./pages/RentalApplication";
import LandlordListings from "./pages/LandlordListings";
import LandlordApplications from "./pages/LandlordApplications";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/list-property" element={<ListProperty />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/listing/:id" element={<PropertyDetail />} />
          <Route path="/apply/:listingId" element={<RentalApplicationPage />} />
          <Route path="/tenant/home" element={<TenantHome />} />
          <Route path="/landlord/home" element={<LandlordHome />} />
          <Route path="/landlord/listings" element={<LandlordListings />} />
          <Route path="/search" element={<Search />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/landlord/applications" element={<LandlordApplications />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
