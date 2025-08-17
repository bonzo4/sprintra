export type Task = {
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

export type AIGeneratedTask = {
  title: string;
  description: string;
  estimated_time: number;
  priority: "low" | "medium" | "high" | "critical";
  resources: Resource[];
  dependencies: string[];
};
