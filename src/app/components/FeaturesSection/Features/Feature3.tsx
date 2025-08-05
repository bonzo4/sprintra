import CodeIcon from "@/components/icons/CodeIcon";

export default function Feature3() {
  return (
    <div className="group hover:border-sprintra-blue-500/50 rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm transition-all">
      <div className="mb-6 flex items-center">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600">
          <CodeIcon size={6} />
        </div>
        <h3 className="text-2xl font-bold text-white">Cheat Codes Library</h3>
      </div>
      <p className="mb-6 text-lg leading-relaxed text-slate-300">
        One-click access to APIs, code snippets, and design assets. No more tab
        juggling.
      </p>
      <div className="grid grid-cols-2 gap-2">
        <div className="hover:bg-sprintra-blue-500/20 hover:text-sprintra-blue-400 cursor-pointer rounded bg-slate-700/50 p-2 text-center text-sm text-slate-300 transition-colors">
          API Docs
        </div>
        <div className="hover:bg-sprintra-orange-500/20 hover:text-sprintra-orange-400 cursor-pointer rounded bg-slate-700/50 p-2 text-center text-sm text-slate-300 transition-colors">
          Code Snippets
        </div>
        <div className="cursor-pointer rounded bg-slate-700/50 p-2 text-center text-sm text-slate-300 transition-colors hover:bg-purple-500/20 hover:text-purple-400">
          Figma Assets
        </div>
        <div className="cursor-pointer rounded bg-slate-700/50 p-2 text-center text-sm text-slate-300 transition-colors hover:bg-green-500/20 hover:text-green-400">
          Boilerplates
        </div>
      </div>
    </div>
  );
}
