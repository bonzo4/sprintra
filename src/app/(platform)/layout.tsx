import DashboardHeader from "./components/DashboardHeader";
import DashboardSidebar from "./components/DashboardSidebar";
import { ProjectProvider } from "@/contexts/ProjectContext";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
