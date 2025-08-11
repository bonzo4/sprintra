export default function PageLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-blue-400"></div>
        <p className="text-slate-400">Loading...</p>
      </div>
    </div>
  );
}
