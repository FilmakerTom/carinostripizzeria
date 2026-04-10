import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import CookieButton from "@/components/CookieButton";
import CookiePreferences from "@/components/CookiePreferences";
import Index from "./pages/Index.tsx";
import MenuPage from "./pages/MenuPage.tsx";
import ComingSoon from "./pages/ComingSoon.tsx";
import ChiSiamo from "./pages/ChiSiamo.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import CookiePolicy from "./pages/CookiePolicy.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CookieConsentProvider>
          <ScrollToTop />
          <Navbar />
          <BackToTop />
          <CookieBanner />
          <CookieButton />
          <CookiePreferences />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/la-nostra-storia" element={<ComingSoon />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CookieConsentProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
