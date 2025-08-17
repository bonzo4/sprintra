import ClockIcon from "@/components/icons/ClockIcon";
import { AIGeneratedTask } from "@/lib/types/Task";

export default function TaskCard({
  task,
  index,
}: {
  task: AIGeneratedTask;
  index: number;
}) {
  const priorityColors = {
    low: "bg-slate-600 text-slate-300",
    medium: "bg-yellow-600 text-yellow-100",
    high: "bg-orange-600 text-orange-100",
    critical: "bg-red-600 text-red-100",
  };

  const typeColors = {
    low: "border-slate-500",
    medium: "border-yellow-500",
    high: "border-orange-500",
    critical: "border-red-500",
  };

  return (
    <div
      className={`rounded-lg border ${typeColors[task.priority]} hover:bg-slate-750 bg-slate-800 p-4 transition-all`}
    >
      <div className="mb-1 flex items-start justify-between space-x-2">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-medium text-slate-400">
            #{index + 1}
          </span>
          <h4 className="font-medium text-white">{task.title}</h4>
        </div>
        <div className="flex items-center">
          <span
            className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${priorityColors[task.priority]}`}
          >
            {task.priority}
          </span>
        </div>
      </div>

      <p className="mb-3 line-clamp-2 text-sm text-slate-400">
        {task.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1 text-slate-500">
          <ClockIcon size={4} />
          <span className="text-xs">{task.estimated_time}h</span>
        </div>

        {task.dependencies.length > 0 && (
          <div className="flex items-center space-x-1">
            <span className="text-xs text-slate-500">Depends on:</span>
            <span className="text-xs text-blue-400">
              {task.dependencies.length} task(s)
            </span>
          </div>
        )}
      </div>

      {task.resources.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {task.resources.slice(0, 3).map((resource, idx) => (
            <span
              key={idx}
              className="inline-flex items-center rounded bg-slate-700 px-2 py-1 text-xs text-slate-300"
            >
              {resource.type}
            </span>
          ))}
          {task.resources.length > 3 && (
            <span className="text-xs text-slate-500">
              +{task.resources.length - 3} more
            </span>
          )}
        </div>
      )}
    </div>
  );
}
