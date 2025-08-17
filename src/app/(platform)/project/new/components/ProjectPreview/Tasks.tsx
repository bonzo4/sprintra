import { AIGeneratedTask } from "@/lib/types/Task";
import TaskCard from "./TaskCard";

interface TasksGridProps {
  tasks: AIGeneratedTask[];
}

export default function TasksGrid({ tasks }: TasksGridProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
      <h3 className="mb-4 text-lg font-semibold text-white">Project Tasks</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} index={index} />
        ))}
      </div>
    </div>
  );
}
