import { Project } from "@/lib/types/Project";

interface ProjectCardProps {
  currentProject: Project | null;
  project: Project;
  setCurrentProject: (project: Project) => void;
}

export default function ProjectCard({
  currentProject,
  project,
  setCurrentProject,
}: ProjectCardProps) {
  const getProjectColorClasses = (color: string, isActive: boolean) => {
    const baseClasses =
      "flex w-full items-center space-x-3 rounded-lg p-3 text-left transition-colors";

    if (isActive) {
      switch (color) {
        case "orange":
          return `${baseClasses} bg-sprintra-orange-600/20 text-sprintra-orange-400`;
        case "blue":
          return `${baseClasses} bg-sprintra-blue-600/20 text-sprintra-blue-400`;
        case "green":
          return `${baseClasses} bg-green-600/20 text-green-400`;
        case "purple":
          return `${baseClasses} bg-purple-600/20 text-purple-400`;
        default:
          return `${baseClasses} bg-slate-600/20 text-slate-400`;
      }
    }

    return `${baseClasses} text-slate-300 hover:bg-slate-700/50`;
  };

  const getProjectDotColor = (color: string) => {
    switch (color) {
      case "orange":
        return "bg-sprintra-orange-500";
      case "blue":
        return "bg-sprintra-blue-500";
      case "green":
        return "bg-green-500";
      case "purple":
        return "bg-purple-500";
      default:
        return "bg-slate-500";
    }
  };

  return (
    <button
      key={project.id}
      onClick={() => setCurrentProject(project)}
      className={getProjectColorClasses("", currentProject?.id === project.id)}
    >
      <div className={`h-2 w-2 rounded-full ${getProjectDotColor("")}`}></div>
      <div className="flex-1 text-left">
        <span className="text-sm font-medium">{project.name}</span>
        <div className="flex items-center space-x-2 text-xs opacity-75">
          <span>
            {project.completedTasks}/{project.totalTasks} tasks
          </span>
          <span>•</span>
          {/* <span
            className={` ${
              project.status === "active"
                ? "text-green-400"
                : project.status === "completed"
                  ? "text-blue-400"
                  : "text-yellow-400"
            } `}
          >
            {project.status}
          </span> */}
        </div>
      </div>
    </button>
  );
}
