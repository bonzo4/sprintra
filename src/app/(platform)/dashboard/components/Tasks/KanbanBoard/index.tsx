import KanbanColumn from "./KanbanColumn";
import { kanbanColumns } from "./kanbanConfig";

export default function KanbanBoard() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      {kanbanColumns.map((column) => (
        <KanbanColumn
          key={column.id}
          title={column.title}
          indicatorColor={column.indicatorColor}
          count={column.count}
          initialTasks={column.initialTasks}
          animate={column.animate}
        />
      ))}
    </div>
  );
}
