import ClockIcon from "@/components/icons/ClockIcon";
import TaskCard from "@/components/TaskCard";

export default function Feature2() {
  return (
    <div className="group hover:border-sprintra-orange-500/50 rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm transition-all">
      <div className="mb-6 flex items-center">
        <div className="from-sprintra-orange-500 to-sprintra-orange-600 mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br">
          <ClockIcon size={6} />
        </div>
        <h3 className="text-2xl font-bold text-white">Time-Boxed Flow</h3>
      </div>
      <p className="mb-6 text-lg leading-relaxed text-slate-300">
        2-hour hackathon blocks or daily indie sprints. Never lose momentum
        again.
      </p>
      <div className="space-y-3">
        {/* <TaskCard
          task={{
            id: "1",
            title: "Set up authentication flow",
            timeEstimate: 2,
            priority: "high",
            tags: [{ label: "Critical Path", color: "red" }],
          }}
        />
        <TaskCard
          task={{
            id: "2",
            title: "Build API integration",
            timeEstimate: 1,
            priority: "medium",
            tags: [{ label: "API", color: "blue" }],
          }}
        /> */}
      </div>
    </div>
  );
}
