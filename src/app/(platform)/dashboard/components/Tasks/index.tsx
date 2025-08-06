import { Project } from "@/contexts/ProjectContext";
import BoardHeader from "./BoardHeader";
import KanbanBoard from "./KanbanBoard";

interface BoardProps {
  currentProject: Project | null;
}

export default function Tasks({ currentProject }: BoardProps) {
  return (
    <div className="mb-8">
      <BoardHeader currentProject={currentProject} />
      <KanbanBoard />
    </div>
  );
}
