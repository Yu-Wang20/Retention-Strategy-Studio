import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Database, 
  Users, 
  Activity, 
  Target, 
  Lightbulb, 
  FileText,
  Settings,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Database, label: "Data Management", href: "/data" },
  { icon: Users, label: "RFM Analysis", href: "/rfm" },
  { icon: Activity, label: "Churn Prediction", href: "/churn" },
  { icon: Target, label: "Strategy Engine", href: "/strategy" },
  { icon: Lightbulb, label: "Insights", href: "/insights" },
  { icon: FileText, label: "Documentation", href: "/docs" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-64 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
        <div className="p-6 flex items-center gap-2 border-b border-sidebar-border/50">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg tracking-tight">Lifecycle Engine</span>
        </div>
        
        <ScrollArea className="flex-1 py-4">
          <nav className="px-4 space-y-1">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer group",
                      isActive 
                        ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm" 
                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                    )}
                  >
                    <item.icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-sidebar-foreground/50 group-hover:text-sidebar-foreground")} />
                    {item.label}
                  </div>
                </Link>
              );
            })}
          </nav>
        </ScrollArea>

        <div className="p-4 border-t border-sidebar-border/50">
          <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-sidebar-accent/30">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
              AD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Admin User</p>
              <p className="text-xs text-sidebar-foreground/50 truncate">admin@olist.com</p>
            </div>
            <Settings className="w-4 h-4 text-sidebar-foreground/50 cursor-pointer hover:text-sidebar-foreground" />
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-sidebar border-b border-sidebar-border z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg text-sidebar-foreground">Lifecycle Engine</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40 p-4">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div 
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium",
                    location === item.href ? "bg-secondary/10 text-primary" : "text-foreground/70"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:h-screen overflow-y-auto bg-background pt-16 md:pt-0">
        <div className="container mx-auto p-6 md:p-8 max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}
