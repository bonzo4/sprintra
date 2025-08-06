import TicketCard from "@/components/TicketCard";
import { Ticket } from "@/lib/types";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

export default function InProgress() {
  const [parentRef, tickets, setValues, updateConfig] = useDragAndDrop<
    HTMLDivElement,
    Ticket
  >(
    [
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
    {
      group: "todoList",
    },
  );

  return (
    <div className="rounded-xl bg-slate-800/50 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-300">
          <span className="bg-sprintra-blue-500 mr-2 inline-block h-3 w-3 animate-pulse rounded-full"></span>
          In Progress
        </h3>
        <span className="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-400">
          2
        </span>
      </div>
      <div className="space-y-3" ref={parentRef}>
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} data-label={ticket.id} />
        ))}
      </div>
    </div>
  );
}
