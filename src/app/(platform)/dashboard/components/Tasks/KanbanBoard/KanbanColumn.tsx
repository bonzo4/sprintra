import TaskCard from "@/components/TaskCard";
import { Task } from "@/lib/types/Task";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

interface KanbanColumnProps {
  title: string;
  indicatorColor: string;
  count: number;
  initialTasks: Task[];
  animate?: boolean;
}

export default function KanbanColumn({
  title,
  indicatorColor,
  count,
  initialTasks,
  animate = false,
}: KanbanColumnProps) {
  const [parentRef, tasks, setValues, updateConfig] = useDragAndDrop<
    HTMLDivElement,
    Task
  >(initialTasks, {
    group: "todoList",
  });

  return (
    <div className="rounded-xl bg-slate-800/50 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-300">
          <span
            className={`mr-2 inline-block h-3 w-3 rounded-full ${indicatorColor} ${
              animate ? "animate-pulse" : ""
            }`}
          ></span>
          {title}
        </h3>
        <span className="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-400">
          {count}
        </span>
      </div>
      <div className="h-full flex-1 space-y-3" ref={parentRef}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} data-label={task.id} />
        ))}
      </div>
    </div>
  );
}
