import AnimatedSpinner from "./AnimatedSpinner";
import LoadingBar from "./LoadingBar";
import LoadingText from "./LoadingText";
import ProgressSteps from "./ProgressSteps";

interface ProjectLoadingProps {
  progress: number;
}

export default function ProjectLoading({ progress }: ProjectLoadingProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-8">
      <div className="flex flex-col items-center justify-center space-y-6 py-12">
        <AnimatedSpinner />
        <LoadingText />
        <ProgressSteps progress={progress} />
        <LoadingBar progress={progress} />
        <p className="text-center text-xs text-slate-500">
          This usually takes 15-30 seconds
        </p>
      </div>
    </div>
  );
}
