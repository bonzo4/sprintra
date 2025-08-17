import Checkmark from "@/components/icons/Checkmark";
import LightningBolt from "@/components/icons/LightningBolt";
import { Project } from "@/lib/types/Project";

interface TimelineProps {
  project: Project | null;
}

export default function Timeline({ project }: TimelineProps) {
  const completionPercentage = project
    ? Math.round((project.completedTasks / project.totalTasks) * 100)
    : 0;

  return (
    <div className="rounded-xl bg-slate-800/50 p-6">
      <h3 className="mb-4 text-lg font-semibold text-white">
        <span className="mr-2">⏱️</span>
        Sprint Timeline
      </h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
            <Checkmark size={5} />{" "}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">
              Day 1: Setup & Foundation
            </p>
            <p className="text-xs text-green-400">Completed • 8 hours</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-sprintra-blue-600 flex h-8 w-8 items-center justify-center rounded-full">
            <LightningBolt size={5} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">
              Day 2: API Integration
            </p>
            <p className="text-sprintra-blue-400 text-xs">
              In Progress • 6/8 hours
            </p>
            <div className="mt-1 h-1 rounded-full bg-slate-700">
              <div className="bg-sprintra-blue-500 h-1 w-3/4 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-600">
            <span className="text-sm font-medium text-white">3</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-400">
              Day 3: UI Polish & Demo
            </p>
            <p className="text-xs text-slate-500">Pending • 6 hours</p>
          </div>
        </div>
      </div>
      <div className="from-sprintra-blue-900/30 to-sprintra-orange-900/30 mt-6 rounded-lg bg-gradient-to-r p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-white">
            Sprint Progress
          </span>
          <span className="text-sprintra-blue-400 text-sm">
            {completionPercentage}%
          </span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-slate-700">
          <div
            className="from-sprintra-blue-500 to-sprintra-orange-500 h-2 rounded-full bg-gradient-to-r"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        <p className="mt-2 text-xs text-slate-400">
          On track to finish by tomorrow evening
        </p>
      </div>
    </div>
  );
}
