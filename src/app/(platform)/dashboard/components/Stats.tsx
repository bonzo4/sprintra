import Checkmark from "@/components/icons/Checkmark";
import ClockIcon from "@/components/icons/ClockIcon";
import LightBulb from "@/components/icons/LightBulb";
import LightningBolt from "@/components/icons/LightningBolt";
import { Project } from "@/lib/types/Project";

interface StatsProps {
  currentProject: Project | null;
}

export default function Stats({ currentProject }: StatsProps) {
  return (
    <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* <div className="rounded-xl bg-slate-800/50 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Active Sprints</p>
            <p className="text-2xl font-bold text-white">
              {currentProject?.sprintCount || 3}
            </p>
          </div>
          <div className="bg-sprintra-blue-600/20 rounded-lg p-3">
            <LightningBolt size={6} />
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <span className="text-xs text-green-400">+12%</span>
          <span className="text-xs text-slate-400">from last week</span>
        </div>
      </div> */}

      <div className="rounded-xl bg-slate-800/50 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Tasks Completed</p>
            <p className="text-2xl font-bold text-white">
              {currentProject?.completedTasks || 47}
            </p>
          </div>
          <div className="bg-sprintra-orange-600/20 rounded-lg p-3">
            <Checkmark size={6} />
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <span className="text-xs text-green-400">+24%</span>
          <span className="text-xs text-slate-400">from last week</span>
        </div>
      </div>

      <div className="rounded-xl bg-slate-800/50 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Time Saved</p>
            <p className="text-2xl font-bold text-white">18h</p>
          </div>
          <div className="rounded-lg bg-green-600/20 p-3">
            <ClockIcon size={6} />
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <span className="text-xs text-green-400">+8%</span>
          <span className="text-xs text-slate-400">vs manual planning</span>
        </div>
      </div>

      <div className="rounded-xl bg-slate-800/50 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Boost Score</p>
            <p className="text-2xl font-bold text-white">94%</p>
          </div>
          <div className="rounded-lg bg-purple-600/20 p-3">
            <LightBulb size={6} />
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <span className="text-xs text-green-400">Excellent</span>
          <span className="text-xs text-slate-400">AI optimization</span>
        </div>
      </div>
    </div>
  );
}
