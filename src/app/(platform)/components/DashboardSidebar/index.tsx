"use client";

import SidebarNav from "./SidebarNav";
import ProjectSwitcher from "./ProjectSwitcher";
import AssistantCard from "./AssistantCard";

export default function DashboardSidebar() {
  return (
    <aside className="min-h-screen w-64 space-y-6 border-r border-slate-800 bg-slate-800/50 p-6">
      <SidebarNav />
      <ProjectSwitcher />
      <AssistantCard />
    </aside>
  );
}
