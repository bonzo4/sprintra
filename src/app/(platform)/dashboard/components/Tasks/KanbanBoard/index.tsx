import Backlog from "./Backlog";
import Todo from "./Todo";
import InProgress from "./InProgress";
import Done from "./Done";

export default function KanbanBoard() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      <Backlog />
      <Todo />
      <InProgress />
      <Done />
    </div>
  );
}
