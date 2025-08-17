import Button from "@/components/ui/Button";
import TaskCard from "@/components/TaskCard";
import LightningBolt from "@/components/icons/LightningBolt";

export default function Preview() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8 shadow-2xl backdrop-blur-sm">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="flex items-center text-lg font-semibold text-slate-300">
              <div className="mr-2 h-3 w-3 rounded-full bg-slate-500"></div>
              To Do
            </h3>
            <TaskCard
              task={{
                id: "1",
                type: "Task",
                title: "Set up Next.js + Tailwind",
                timeEstimate: "2hr",
                priority: "critical",
                tags: [{ label: "Setup", color: "green" }],
              }}
              className="cursor-pointer border border-slate-600 hover:border-blue-500/50"
            />
          </div>
          <div className="space-y-4">
            <h3 className="flex items-center text-lg font-semibold text-slate-300">
              <div className="bg-sprintra-blue-500 mr-2 h-3 w-3 animate-pulse rounded-full"></div>
              In Progress
            </h3>
            <TaskCard
              task={{
                id: "2",
                type: "Task",
                title: "Integrate OpenAI API",
                timeEstimate: "1hr left",
                isActive: true,
                tags: [{ label: "API", color: "blue" }],
              }}
              className="relative overflow-hidden"
            />
          </div>
          <div className="space-y-4">
            <h3 className="flex items-center text-lg font-semibold text-slate-300">
              <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
              Done
            </h3>
            <TaskCard
              task={{
                id: "3",
                type: "Task",
                title: "Setup Firebase",
                timeEstimate: "30min",
                isCompleted: true,
                tags: [{ label: "Setup", color: "green" }],
              }}
              className="border border-green-500/30"
            />
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button
            variant="primary"
            gradient="orange"
            rounded="full"
            size="md"
            leftIcon={<LightningBolt size={5} pulse />}
          >
            Sprintra Boost
          </Button>
          <p className="mt-2 text-sm text-slate-400">
            AI auto-reprioritizes your tasks
          </p>
        </div>
      </div>
    </div>
  );
}
