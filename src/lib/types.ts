export type Ticket = {
  id: string;
  type: "Task" | "Epic" | "Feature" | "Bug" | "Story";
  title: string;
  timeEstimate?: string;
  tags: Array<Tag>;
  priority?: "low" | "medium" | "high" | "critical";
  progress?: number;
  isActive?: boolean;
  isCompleted?: boolean;
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
