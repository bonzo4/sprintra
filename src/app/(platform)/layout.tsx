"use client";

import DashboardHeader from "./components/DashboardHeader";
import DashboardSidebar from "./components/DashboardSidebar";
import { ProjectProvider } from "@/contexts/ProjectContext";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { usePathname } from "next/navigation";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const pathname = usePathname();

  if (pathname === "/login" || !user) {
    return <div className="min-h-screen bg-slate-900">{children}</div>;
  }

  return (
    <ProjectProvider>
      <div className="min-h-screen bg-slate-900">
        <DashboardHeader />
        <div className="flex">
          <DashboardSidebar />
          {children}
        </div>
      </div>
    </ProjectProvider>
  );
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <LayoutContent>{children}</LayoutContent>
    </AuthProvider>
  );
}
