export default function Features() {
  return (
    <div className="space-y-2 text-center">
      <p className="text-xs text-slate-500">
        By signing in, you agree to our Terms of Service and Privacy Policy
      </p>

      <div className="mt-4 flex items-center justify-center space-x-4">
        <div className="flex items-center space-x-1">
          <div className="h-2 w-2 rounded-full bg-green-400"></div>
          <span className="text-xs text-slate-400">Secure</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="h-2 w-2 rounded-full bg-blue-400"></div>
          <span className="text-xs text-slate-400">Fast</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="h-2 w-2 rounded-full bg-orange-400"></div>
          <span className="text-xs text-slate-400">Reliable</span>
        </div>
      </div>
    </div>
  );
}
