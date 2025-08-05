import WarningIcon from "./icons/WarningIcon";

interface WarningMessageProps {
  title: string;
  description: string;
}

export default function WarningMessage({
  title,
  description,
}: WarningMessageProps) {
  return (
    <div className="rounded-lg border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-red-500/10 p-4">
      <div className="flex items-start space-x-3">
        <WarningIcon containerSize={6} iconSize={4} />
        <div>
          <div className="font-medium text-yellow-400">{title}</div>
          <div className="mt-1 text-sm text-slate-300">{description}</div>
        </div>
      </div>
    </div>
  );
}
