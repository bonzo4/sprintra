"use client";

import DashboardHeader from "./components/DashboardHeader";
import DashboardSidebar from "./components/DashboardSidebar";
import { ProjectProvider } from "@/contexts/ProjectContext";
import AuthWrapper from "@/components/AuthWrapper";
import { useAuth } from "@/hooks/useAuth";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, loading } = useAuth();
  const pathname = usePathname();

  // Show login page without header/sidebar
  if (pathname === "/login" || !user) {
    return (
      <AuthWrapper>
        <div className="min-h-screen bg-slate-900">
          {children}
        </div>
      </AuthWrapper>
    );
  }

  // Show full dashboard layout for authenticated users
  return (
    <AuthWrapper>
      <ProjectProvider>
        <div className="min-h-screen bg-slate-900">
          <DashboardHeader />
          <div className="flex">
            <DashboardSidebar />
            {children}
          </div>
        </div>
      </ProjectProvider>
    </AuthWrapper>
  );
}
