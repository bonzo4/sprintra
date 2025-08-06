"use client";

import { useProject } from "@/contexts/ProjectContext";
import Stats from "./components/Stats";
import Tasks from "./components/Tasks";
import Suggestions from "./components/Suggestions";
import Timeline from "./components/Timeline";

export default function Dashboard() {
  const { currentProject } = useProject();

  return (
    <main className="flex-1 p-6">
      <Stats currentProject={currentProject} />
      <Tasks currentProject={currentProject} />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Suggestions />
        <Timeline project={currentProject} />
      </div>
    </main>
  );
}
