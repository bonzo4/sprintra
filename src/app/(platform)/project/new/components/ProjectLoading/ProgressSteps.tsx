interface ProgressSteps {
  progress: number;
}

export default function ProgressSteps({ progress }: ProgressSteps) {
  return (
    <div className="w-full max-w-md space-y-3">
      <div className="flex items-center space-x-3">
        <div
          className={`h-2 w-2 rounded-full transition-colors duration-500 ${
            progress >= 25 ? "bg-green-400" : "bg-slate-600"
          }`}
        />
        <span
          className={`text-sm transition-colors duration-500 ${
            progress >= 25 ? "text-slate-300" : "text-slate-500"
          }`}
        >
          Analyzing project requirements
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <div
          className={`h-2 w-2 rounded-full transition-colors duration-500 ${
            progress >= 50
              ? "bg-green-400"
              : progress >= 25
                ? "animate-pulse bg-blue-400"
                : "bg-slate-600"
          }`}
        />
        <span
          className={`text-sm transition-colors duration-500 ${
            progress >= 50
              ? "text-slate-300"
              : progress >= 25
                ? "text-slate-300"
                : "text-slate-500"
          }`}
        >
          Generating task breakdown
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <div
          className={`h-2 w-2 rounded-full transition-colors duration-500 ${
            progress >= 75
              ? "bg-green-400"
              : progress >= 50
                ? "animate-pulse bg-blue-400"
                : "bg-slate-600"
          }`}
        />
        <span
          className={`text-sm transition-colors duration-500 ${
            progress >= 75
              ? "text-slate-300"
              : progress >= 50
                ? "text-slate-300"
                : "text-slate-500"
          }`}
        >
          Creating timeline and dependencies
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <div
          className={`h-2 w-2 rounded-full transition-colors duration-500 ${
            progress >= 100
              ? "bg-green-400"
              : progress >= 75
                ? "animate-pulse bg-blue-400"
                : "bg-slate-600"
          }`}
        />
        <span
          className={`text-sm transition-colors duration-500 ${
            progress >= 100
              ? "text-slate-300"
              : progress >= 75
                ? "text-slate-300"
                : "text-slate-500"
          }`}
        >
          Finalizing project plan
        </span>
      </div>
    </div>
  );
}
