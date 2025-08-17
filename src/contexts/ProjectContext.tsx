"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Project } from "@/lib/types/Project";

interface ProjectContextType {
  currentProject: Project | null;
  projects: Project[];
  setCurrentProject: (project: Project) => void;
  addProject: (project: Project) => void;
  updateProject: (projectId: string, updates: Partial<Project>) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const defaultProjects: Project[] = [
  {
    id: "travel-app",
    name: "Travel App MVP",
    concept: "A travel planning app that helps users discover and plan trips",
    deadline: "2025-09-15",
    projectType: "mvp",
    color: "orange",
    status: "active",
    sprintCount: 2,
    completedTasks: 47,
    totalTasks: 65,
    progress: 72,
    lastActivity: "2 hours ago",
    createdAt: "2025-07-15T00:00:00Z",
    updatedAt: "2025-08-11T14:30:00Z",
    tasks: [],
  },
  {
    id: "saas-starter",
    name: "SaaS Starter Kit",
    concept: "A comprehensive starter kit for building SaaS applications",
    deadline: "2025-08-30",
    projectType: "prototype",
    color: "blue",
    status: "paused",
    sprintCount: 1,
    completedTasks: 23,
    totalTasks: 40,
    progress: 58,
    lastActivity: "1 week ago",
    createdAt: "2025-07-01T00:00:00Z",
    updatedAt: "2025-08-04T10:15:00Z",
    tasks: [],
  },
  {
    id: "crypto-tracker",
    name: "Crypto Tracker",
    concept: "Real-time cryptocurrency portfolio tracking application",
    deadline: "2025-07-31",
    projectType: "hackathon",
    color: "green",
    status: "completed",
    sprintCount: 3,
    completedTasks: 89,
    totalTasks: 89,
    progress: 100,
    lastActivity: "3 days ago",
    createdAt: "2025-07-28T00:00:00Z",
    updatedAt: "2025-07-31T23:59:00Z",
    tasks: [],
  },
];

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [currentProject, setCurrentProjectState] = useState<Project | null>(
    defaultProjects[0],
  );

  const setCurrentProject = (project: Project) => {
    setCurrentProjectState(project);
  };

  const addProject = (project: Project) => {
    setProjects((prev) => [...prev, project]);
  };

  const updateProject = (projectId: string, updates: Partial<Project>) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId ? { ...project, ...updates } : project,
      ),
    );

    // Update current project if it's the one being updated
    if (currentProject?.id === projectId) {
      setCurrentProjectState((prev) => (prev ? { ...prev, ...updates } : null));
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        currentProject,
        projects,
        setCurrentProject,
        addProject,
        updateProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
}
