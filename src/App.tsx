import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OrderNow from "./pages/OrderNow";
import OrderConfirmation from "./pages/OrderConfirmation";
import LearnMore from "./pages/LearnMore";
import ScheduleTestDrive from "./pages/ScheduleTestDrive";
import Fleet from "./pages/Fleet";
import FleetSupport from "./pages/FleetSupport";
import NotFound from "./pages/NotFound";
import { initEmbeddables } from "@/utils/embeddablesInit";
import { useEffect } from "react";
import { EmbeddablesProvider, useEmbeddables } from "./EmbeddablesContext";
import * as React from "react";

const queryClient = new QueryClient();

// Component to handle initialization
const AppInitializer = () => {
  const { setIsInitialized } = useEmbeddables();

  useEffect(() => {
    const initialize = async () => {
      try {
        await initEmbeddables();
        console.log("[App] Embeddables initialized successfully");
        setIsInitialized(true); // Set the boolean to true after initialization
      } catch (error) {
        console.error("[App] Failed to initialize embeddables:", error);
      }
    };
    
    initialize();
  }, [setIsInitialized]);

  return null; // This component doesn't render anything
};

const App = () => {
  const basename = "/alectri-cars";
  console.log("starting app");

  return (
    <EmbeddablesProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppInitializer />
          <BrowserRouter basename={basename}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/order" element={<OrderNow />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/learn-more" element={<LearnMore />} />
              <Route path="/schedule-test-drive" element={<ScheduleTestDrive />} />
              <Route path="/fleet" element={<Fleet />} />
              <Route path="/fleet/support" element={<FleetSupport />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </EmbeddablesProvider>
  );
};

export default App;
