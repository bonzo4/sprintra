import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";

export default function DashboardHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6">
        <Logo size="sm" />

        {/* Search & Actions */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="focus:ring-sprintra-blue-500 w-64 rounded-lg bg-slate-800 px-4 py-2 text-sm text-white placeholder-slate-400 focus:ring-2 focus:outline-none"
            />
            <svg
              className="absolute top-2.5 right-3 h-4 w-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <Button variant="primary" gradient="blue" size="sm">
            New Sprint
          </Button>
          <div className="from-sprintra-orange-400 to-sprintra-orange-500 h-8 w-8 rounded-full bg-gradient-to-br"></div>
        </div>
      </div>
    </header>
  );
}
