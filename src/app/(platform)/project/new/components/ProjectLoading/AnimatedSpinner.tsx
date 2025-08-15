export default function AnimatedSpinner() {
  return (
    <div className="relative">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-600 border-t-blue-500" />
      <div className="absolute inset-0 h-16 w-16 animate-pulse rounded-full bg-gradient-to-r from-blue-500/20 to-orange-500/20" />
    </div>
  );
}
