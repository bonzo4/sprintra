import TicketCard from "@/components/TicketCard";
import { Ticket } from "@/lib/types";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

export default function Done() {
  const [parentRef, tickets, setValues, updateConfig] = useDragAndDrop<
    HTMLDivElement,
    Ticket
  >(
    [
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
    {
      group: "todoList",
    },
  );

  return (
    <div className="rounded-xl bg-slate-800/50 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-300">
          <span className="mr-2 inline-block h-3 w-3 rounded-full bg-green-500"></span>
          Done
        </h3>
        <span className="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-400">
          6
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
