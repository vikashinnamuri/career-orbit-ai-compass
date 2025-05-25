
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import ResumeTailoring from "./pages/ResumeTailoring";
import MockInterview from "./pages/MockInterview";
import JobTracker from "./pages/JobTracker";
import ProgressJournal from "./pages/ProgressJournal";
import ResumeGenerator from "./pages/ResumeGenerator";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resume-tailoring" element={<ResumeTailoring />} />
            <Route path="/mock-interview" element={<MockInterview />} />
            <Route path="/job-tracker" element={<JobTracker />} />
            <Route path="/progress-journal" element={<ProgressJournal />} />
            <Route path="/resume-generator" element={<ResumeGenerator />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
