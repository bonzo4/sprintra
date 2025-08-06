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
