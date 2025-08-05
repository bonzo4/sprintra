export default function CTASocialProof() {
  return (
    <div className="border-t border-slate-800 pt-12">
      <p className="mb-8 text-lg text-slate-400">Trusted by builders from</p>
      <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
        <div className="hover:text-sprintra-orange-400 cursor-pointer text-3xl font-bold text-slate-300 transition-colors">
          Y Combinator
        </div>
        <div className="hover:text-sprintra-blue-400 cursor-pointer text-3xl font-bold text-slate-300 transition-colors">
          Techstars
        </div>
        <div className="hover:text-sprintra-orange-400 cursor-pointer text-3xl font-bold text-slate-300 transition-colors">
          Indie Hackers
        </div>
        <div className="hover:text-sprintra-blue-400 cursor-pointer text-3xl font-bold text-slate-300 transition-colors">
          Product Hunt
        </div>
      </div>
    </div>
  );
}
