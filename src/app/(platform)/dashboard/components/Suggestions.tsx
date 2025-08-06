import WarningMessage from "@/components/WarningMessage";

export default function Suggestions() {
  return (
    <div className="rounded-xl bg-slate-800/50 p-6">
      <h3 className="mb-4 text-lg font-semibold text-white">
        <span className="mr-2">🤖</span>
        AI Suggestions
      </h3>
      <div className="space-y-4">
        <WarningMessage
          title={"Optimization Alert"}
          description={
            "Consider using mock data for hotel search to save 2 hours. You can integrate real APIs in the next sprint."
          }
        />
      </div>
    </div>
  );
}
