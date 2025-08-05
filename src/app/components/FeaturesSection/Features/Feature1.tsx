import LightningBolt from "@/components/icons/LightningBolt";

export default function Feature1() {
  return (
    <div className="group hover:border-sprintra-blue-500/50 rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm transition-all">
      <div className="mb-6 flex items-center">
        <div className="from-sprintra-blue-500 to-sprintra-blue-600 mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br">
          <LightningBolt size={6} />
        </div>
        <h3 className="text-2xl font-bold text-white">Lightning Setup</h3>
      </div>
      <p className="mb-6 text-lg leading-relaxed text-slate-300">
        One sentence becomes a full sprint plan. Tech stack, timeline,
        templates—all in seconds.
      </p>
      <div className="rounded-lg border border-slate-600 bg-slate-900/50 p-4">
        <div className="text-sprintra-orange-400 mb-2 font-mono text-sm">
          Input:
        </div>
        <div className="font-mono text-white">
          &ldquo;Build a travel app MVP in 48 hours&rdquo;
        </div>
        <div className="text-sprintra-blue-400 mt-3 mb-2 font-mono text-sm">
          Output:
        </div>
        <div className="space-y-1 text-sm text-slate-300">
          <div>✓ Day 1: Auth + API setup</div>
          <div>✓ Day 2: UI + Demo prep</div>
          <div>✓ Tech: Next.js + Firebase + RapidAPI</div>
        </div>
      </div>
    </div>
  );
}
