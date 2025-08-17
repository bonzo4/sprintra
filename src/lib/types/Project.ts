import { AIGeneratedTask, Task } from "./Task";

export type ProjectType = "hackathon" | "mvp" | "prototype" | "full-project";

export type ProjectStatus =
  | "planning"
  | "active"
  | "completed"
  | "paused"
  | "on-hold";

export type Project = {
  id: string;
  name: string;
  concept?: string;
  deadline?: string;
  projectType?: ProjectType;
  techStackPreference?: string;
  createdAt: string;
  updatedAt: string;
  status: ProjectStatus;
  color: "orange" | "blue" | "green" | "purple";
  progress: number;
  sprintCount: number;
  completedTasks: number;
  totalTasks: number;
  lastActivity: string;
  tasks: Task[];
};

export type NewProjectFormData = {
  name: string;
  concept: string;
  deadline?: string;
  projectType: ProjectType;
  techStackPreference: string;
};

export type AIGeneratedProject = {
  project_name: string;
  tasks: AIGeneratedTask[];
  critical_path: string[];
  total_estimated_time: number;
};
