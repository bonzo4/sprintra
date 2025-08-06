import TicketCard from "@/components/TicketCard";
import { Ticket } from "@/lib/types";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

export default function Todo() {
  const [parentRef, tickets, setValues, updateConfig] = useDragAndDrop<
    HTMLDivElement,
    Ticket
  >(
    [
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
    {
      group: "todoList",
    },
  );

  return (
    <div className="rounded-xl bg-slate-800/50 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-300">
          <span className="mr-2 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
          To Do
        </h3>
        <span className="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-400">
          4
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
