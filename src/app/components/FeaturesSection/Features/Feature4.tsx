import LightBulb from "@/components/icons/LightBulb";
import WarningMessage from "@/components/WarningMessage";

export default function Feature4() {
  return (
    <div className="group hover:border-sprintra-orange-500/50 rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm transition-all">
      <div className="mb-6 flex items-center">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600">
          <LightBulb size={6} />
        </div>
        <h3 className="text-2xl font-bold text-white">Smart Pivots</h3>
      </div>
      <p className="mb-6 text-lg leading-relaxed text-slate-300">
        Falling behind? AI suggests scope cuts and alternatives to keep you
        shipping.
      </p>
      <WarningMessage
        title="4 hours behind schedule"
        description="Suggested: Simplify search or use mock data"
      />
    </div>
  );
}
