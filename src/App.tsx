
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
import LandlordDashboard from "./pages/LandlordDashboard";
import { I18nProvider } from "./hooks/useI18n";
import AdminVerification from "./pages/AdminVerification"; // fixed import

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <I18nProvider>
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
            {/* Removed redundant /landlord/listings route */}
            {/* <Route path="/landlord/listings" element={<LandlordListings />} /> */}
            <Route path="/search" element={<Search />} />
            {/* Only use nested routing for dashboard */}
            <Route path="/landlord/dashboard/*" element={<LandlordDashboard />} />
            <Route path="/admin/verification" element={<AdminVerification />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </I18nProvider>
  </QueryClientProvider>
);

export default App;
