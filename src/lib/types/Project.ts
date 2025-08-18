import { AIGeneratedTask } from "./Task";

export type ProjectType = "hackathon" | "mvp" | "prototype" | "full-project";

export type Project = {
  id: string;
  name: string;
  description: string;
  deadline: number;
  timeUnit: "hours" | "days" | "weeks";
  techStack: string[];
  createdAt: string;
  updatedAt: string;
  progress: number;
  completedTasks: number;
  totalTasks: number;
};

export type NewProjectFormData = {
  name: string;
  description: string;
  deadline?: string;
  type: ProjectType;
  techStack?: string;
};

export type AIGeneratedProject = {
  name: string;
  description: string;
  tasks: AIGeneratedTask[];
  criticalPaths: string[];
  totalEstimatedTime: number;
  timeUnit: "hours" | "days" | "weeks";
};
