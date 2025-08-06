"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface Project {
  id: string;
  name: string;
  color: "orange" | "blue" | "green" | "purple";
  status: "active" | "completed" | "paused";
  sprintCount: number;
  completedTasks: number;
  totalTasks: number;
  lastActivity: string;
}

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
    color: "orange",
    status: "active",
    sprintCount: 2,
    completedTasks: 47,
    totalTasks: 65,
    lastActivity: "2 hours ago",
  },
  {
    id: "saas-starter",
    name: "SaaS Starter Kit",
    color: "blue",
    status: "paused",
    sprintCount: 1,
    completedTasks: 23,
    totalTasks: 40,
    lastActivity: "1 week ago",
  },
  {
    id: "crypto-tracker",
    name: "Crypto Tracker",
    color: "green",
    status: "completed",
    sprintCount: 3,
    completedTasks: 89,
    totalTasks: 89,
    lastActivity: "3 days ago",
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
