import { Task } from "@/lib/types/Task";

export interface ColumnConfig {
  id: string;
  title: string;
  indicatorColor: string;
  count: number;
  initialTasks: Task[];
  animate?: boolean;
}

export const kanbanColumns: ColumnConfig[] = [
  {
    id: "backlog",
    title: "Backlog",
    indicatorColor: "bg-slate-500",
    count: 8,
    initialTasks: [
      {
        id: "TCK-001",
        type: "Bug",
        title: "Fix Login Page Error",
        timeEstimate: "2hr",
        tags: [{ label: "Frontend", color: "red" }],
      },
      {
        id: "TCK-002",
        type: "Feature",
        title: "Search & Filter Hotels",
        timeEstimate: "4hr",
        tags: [{ label: "Frontend", color: "orange" }],
      },
    ],
  },
  {
    id: "todo",
    title: "To Do",
    indicatorColor: "bg-blue-500",
    count: 4,
    initialTasks: [
      {
        id: "TCK-006",
        type: "Task",
        title: "Set up Next.js + Tailwind",
        timeEstimate: "2hr",
        priority: "critical",
        tags: [{ label: "Setup", color: "green" }],
      },
      {
        id: "TCK-007",
        type: "Task",
        title: "Design homepage wireframe",
        timeEstimate: "1hr",
        priority: "high",
        tags: [{ label: "Design", color: "purple" }],
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    indicatorColor: "bg-sprintra-blue-500",
    count: 2,
    animate: true,
    initialTasks: [
      {
        id: "TCK-005",
        type: "Task",
        title: "Design Landing Page",
        timeEstimate: "3hr",
        isActive: true,
        progress: 50,
        tags: [{ label: "Design", color: "purple" }],
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    indicatorColor: "bg-green-500",
    count: 6,
    initialTasks: [
      {
        id: "TCK-003",
        type: "Task",
        title: "Project initialization",
        timeEstimate: "30min",
        isCompleted: true,
        tags: [{ label: "Setup", color: "green" }],
      },
      {
        id: "TCK-004",
        type: "Task",
        title: "Database schema design",
        timeEstimate: "1hr",
        isCompleted: true,
        tags: [{ label: "Backend", color: "blue" }],
      },
    ],
  },
];
