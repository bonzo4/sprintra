export type Task = {
  id: string;
  projectId: string;
  title: string;
  description: string;
  timeEstimate: number;
  tags: Array<Tag>;
  priority: "low" | "medium" | "high" | "critical";
  status: "Backlog" | "To Do" | "In Progress" | "Completed";
  resources: Resource[];
  dependencies: string[];
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
  timeEstimate: number;
  priority: "low" | "medium" | "high" | "critical";
  resources: Resource[];
  dependencies: string[];
};
