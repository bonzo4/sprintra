export default function BottomBar() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-800 pt-8 md:flex-row">
      <div className="mb-4 flex items-center space-x-6 md:mb-0">
        <p className="text-sm text-slate-400">
          © {currentYear} Sprintra. All rights reserved.
        </p>
        <div className="flex items-center space-x-1">
          <span className="text-sm text-slate-400">Made with</span>
          <span className="text-red-500">❤️</span>
          <span className="text-sm text-slate-400">for builders</span>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
          <span className="text-sm text-slate-400">
            All systems operational
          </span>
        </div>
      </div>
    </div>
  );
}
