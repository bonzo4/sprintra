import ClockIcon from "@/components/icons/ClockIcon";
import { AIGeneratedProject } from "@/lib/types/Project";

interface ProjectSummary {
  projectData: AIGeneratedProject;
}

export default function ProjectSummary({ projectData }: ProjectSummary) {
  const formatTime = (hours: number) => {
    if (hours < 24) {
      return `${hours} hours`;
    }
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    return remainingHours > 0
      ? `${days} days ${remainingHours} hours`
      : `${days} days`;
  };

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="mb-2 text-2xl font-bold text-white">
            {projectData.name}
          </h2>
          <div className="flex items-center space-x-4 text-sm text-slate-400">
            <div className="flex items-center space-x-1">
              <ClockIcon size={4} />
              <span>
                Total time: {formatTime(projectData.totalEstimatedTime)}
              </span>
            </div>
            <span>•</span>
            <span>{projectData.tasks.length} tasks</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="rounded-full border border-green-500/20 bg-green-900/20 px-3 py-1">
            <span className="text-sm font-medium text-green-400">
              AI Generated
            </span>
          </div>
        </div>
      </div>
      {projectData.criticalPaths.length > 0 && (
        <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
          <h3 className="mb-2 font-medium text-white">Critical Path</h3>
          <p className="mb-2 text-sm text-slate-400">
            These tasks are essential and should be prioritized:
          </p>
          <div className="flex flex-wrap gap-2">
            {projectData.criticalPaths.map((taskTitle, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-900/20 px-3 py-1 text-xs font-medium text-orange-400"
              >
                {taskTitle}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
