import { Ticket } from "@/lib/types";

interface TicketProps {
  ticket: Ticket;
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

export default function TicketCard({ ticket, className = "" }: TicketProps) {
  const baseClasses =
    "rounded-lg p-3 transition-colors cursor-pointer relative";

  let containerClasses = baseClasses;

  if (ticket.isCompleted) {
    containerClasses += " bg-green-900/20";
  } else if (ticket.isActive && ticket.priority === "critical") {
    containerClasses +=
      " border border-sprintra-orange-500/30 bg-gradient-to-r from-sprintra-orange-500/10 to-transparent";
  } else if (ticket.isActive) {
    containerClasses +=
      " border border-sprintra-blue-500/50 bg-sprintra-blue-900/20";
  } else if (ticket.priority && ticket.priority !== "low") {
    containerClasses += ` border bg-gradient-to-r to-transparent ${priorityStyles[ticket.priority]}`;
  } else {
    containerClasses += " bg-slate-700/50 hover:bg-slate-700";
  }

  if (className) {
    containerClasses += ` ${className}`;
  }

  const typeColor = ticket.isCompleted
    ? "text-green-400"
    : ticket.isActive
      ? ticket.priority === "critical"
        ? "text-sprintra-orange-400"
        : "text-sprintra-blue-400"
      : "text-slate-400";

  const typeLabel = ticket.isCompleted
    ? "✅ Complete"
    : ticket.isActive
      ? ticket.priority === "critical"
        ? priorityLabels.critical
        : "⚡ Active"
      : ticket.priority
        ? priorityLabels[ticket.priority]
        : ticket.type;

  return (
    <div className={containerClasses}>
      {ticket.isActive && (
        <div className="from-sprintra-blue-500/10 absolute inset-0 animate-pulse rounded-lg bg-gradient-to-r to-transparent"></div>
      )}
      <div className="relative text-left">
        <div className="mb-2 flex items-center justify-between">
          <span className={`text-xs font-medium ${typeColor}`}>
            {typeLabel}
          </span>
          {ticket.timeEstimate && (
            <span className="text-xs text-slate-400">
              {ticket.isActive && ticket.progress !== undefined
                ? `${ticket.timeEstimate} left`
                : ticket.timeEstimate}
            </span>
          )}
        </div>

        <p
          className={`text-sm text-white ${ticket.isCompleted ? "line-through opacity-75" : ""}`}
        >
          {ticket.title}
        </p>

        <div className="mt-2 flex items-center space-x-2">
          {ticket.tags.map((tag, index) => (
            <span
              key={index}
              className={`rounded px-2 py-1 text-xs ${tagColorClasses[tag.color]}`}
            >
              {tag.label}
            </span>
          ))}

          {ticket.isActive && ticket.progress !== undefined && (
            <>
              <div className="h-1 flex-1 rounded-full bg-slate-700">
                <div
                  className="bg-sprintra-blue-500 h-1 rounded-full transition-all duration-300"
                  style={{ width: `${ticket.progress}%` }}
                ></div>
              </div>
              <span className="text-xs text-slate-400">{ticket.progress}%</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
