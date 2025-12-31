import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./pages/Home";
import DataManagement from "./pages/DataManagement";
import RFMAnalysis from "./pages/RFMAnalysis";
import ChurnPrediction from "./pages/ChurnPrediction";
import StrategyEngine from "./pages/StrategyEngine";
import Insights from "./pages/Insights";
import Documentation from "./pages/Documentation";

function Router() {
  return (
    <DashboardLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/data" component={DataManagement} />
        <Route path="/rfm" component={RFMAnalysis} />
        <Route path="/churn" component={ChurnPrediction} />
        <Route path="/strategy" component={StrategyEngine} />
        <Route path="/insights" component={Insights} />
        <Route path="/docs" component={Documentation} />
        <Route component={NotFound} />
      </Switch>
    </DashboardLayout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
