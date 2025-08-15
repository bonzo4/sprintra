export type Ticket = {
  id: string;
  type: "Task" | "Epic" | "Feature" | "Bug" | "Story";
  title: string;
  description?: string;
  timeEstimate?: string | number;
  tags: Array<Tag>;
  priority?: "low" | "medium" | "high" | "critical";
  progress?: number;
  isActive?: boolean;
  isCompleted?: boolean;
  resources?: Resource[];
  dependencies?: string[];
};

export type Resource = {
  type: "doc" | "code" | "template" | "api";
  content: string;
};

export type Tag = {
  label: string;
  color: "blue" | "orange" | "green" | "purple" | "red" | "yellow";
};

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
  tasks: Ticket[];
};

export type NewProjectFormData = {
  name: string;
  concept: string;
  deadline: string;
  projectType: ProjectType;
  techStackPreference: string;
};

export type AIGeneratedProject = {
  project_name: string;
  tasks: AIGeneratedTask[];
  critical_path: string[];
  total_estimated_time: number;
};

export type AIGeneratedTask = {
  title: string;
  description: string;
  estimated_time: number;
  priority: "low" | "medium" | "high" | "critical";
  resources: Resource[];
  dependencies: string[];
};
