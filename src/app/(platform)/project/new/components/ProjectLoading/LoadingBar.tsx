interface LoadingProjectProps {
  progress: number;
}

export default function LoadingBar({ progress }: LoadingProjectProps) {
  return (
    <div className="w-full max-w-md">
      <div className="h-1 overflow-hidden rounded-full bg-slate-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
