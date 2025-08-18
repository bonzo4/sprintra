import { Task } from "@/lib/types/Task";

interface TaskProps {
  task: Task;
  className?: string;
}

const tagColorClasses = {
  blue: "bg-sprintra-blue-600/20 text-sprintra-blue-400",
  orange: "bg-sprintra-orange-600/20 text-sprintra-orange-400",
  green: "bg-green-600/20 text-green-400",
  purple: "bg-purple-600/20 text-purple-400",
  red: "bg-red-600/20 text-red-400",
  yellow: "bg-yellow-600/20 text-yellow-400",
};

const priorityStyles = {
  critical: "border-sprintra-orange-500/30 from-sprintra-orange-500/10",
  high: "border-red-500/30 from-red-500/10",
  medium: "border-yellow-500/30 from-yellow-500/10",
  low: "border-slate-500/30 from-slate-500/10",
};

const priorityLabels = {
  critical: "🔥 Critical",
  high: "⚠️ High",
  medium: "📋 Medium",
  low: "📝 Low",
};

export default function TaskCard({ task, className = "" }: TaskProps) {
  const baseClasses =
    "rounded-lg p-3 transition-colors cursor-pointer relative";

  let containerClasses = baseClasses;

  if (task.status === "Completed") {
    containerClasses += " bg-green-900/20";
  } else if (task.status === "In Progress" && task.priority === "critical") {
    containerClasses +=
      " border border-sprintra-orange-500/30 bg-gradient-to-r from-sprintra-orange-500/10 to-transparent";
  } else if (task.status === "In Progress") {
    containerClasses +=
      " border border-sprintra-blue-500/50 bg-sprintra-blue-900/20";
  } else if (task.priority && task.priority !== "low") {
    containerClasses += ` border bg-gradient-to-r to-transparent ${priorityStyles[task.priority]}`;
  } else {
    containerClasses += " bg-slate-700/50 hover:bg-slate-700";
  }

  if (className) {
    containerClasses += ` ${className}`;
  }

  const typeColor =
    task.status === "Completed"
      ? "text-green-400"
      : task.status === "In Progress"
        ? task.priority === "critical"
          ? "text-sprintra-orange-400"
          : "text-sprintra-blue-400"
        : "text-slate-400";

  const typeLabel =
    task.status === "Completed"
      ? "✅ Complete"
      : task.status === "In Progress"
        ? task.priority === "critical"
          ? priorityLabels.critical
          : "⚡ Active"
        : task.priority
          ? priorityLabels[task.priority]
          : "⚪️ Pending";

  return (
    <div className={containerClasses}>
      {task.status === "In Progress" && (
        <div className="from-sprintra-blue-500/10 absolute inset-0 animate-pulse rounded-lg bg-gradient-to-r to-transparent"></div>
      )}
      <div className="relative text-left">
        <div className="mb-2 flex items-center justify-between">
          <span className={`text-xs font-medium ${typeColor}`}>
            {typeLabel}
          </span>
          {/* {task.timeEstimate && (
            <span className="text-xs text-slate-400">
              {task.status === "In Progress" && task.progress !== undefined
                ? `${task.timeEstimate} left`
                : task.timeEstimate}
            </span>
          )} */}
        </div>

        <p
          className={`text-sm text-white ${task.status === "Completed" ? "line-through opacity-75" : ""}`}
        >
          {task.title}
        </p>

        <div className="mt-2 flex items-center space-x-2">
          {task.tags.map((tag, index) => (
            <span
              key={index}
              className={`rounded px-2 py-1 text-xs ${tagColorClasses[tag.color]}`}
            >
              {tag.label}
            </span>
          ))}

          {/* {task.status === "In Progress" && task.progress !== undefined && (
            <>
              <div className="h-1 flex-1 rounded-full bg-slate-700">
                <div
                  className="bg-sprintra-blue-500 h-1 rounded-full transition-all duration-300"
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
              <span className="text-xs text-slate-400">{task.progress}%</span>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
}
