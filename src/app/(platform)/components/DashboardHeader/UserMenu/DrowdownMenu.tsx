import { User } from "firebase/auth";

interface DropdownMenuProps {
  user: User | null;
  handleLogout: () => Promise<void>;
}

export default function DropdownMenu({
  user,
  handleLogout,
}: DropdownMenuProps) {
  return (
    <div className="absolute right-0 mt-2 w-48 rounded-lg border border-slate-700 bg-slate-800 shadow-lg">
      <div className="border-b border-slate-700 p-4">
        <p className="font-medium text-white">{user?.displayName}</p>
      </div>
      <div className="p-2">
        <button
          onClick={handleLogout}
          className="w-full rounded-md px-3 py-2 text-left text-sm text-slate-300 transition-colors hover:bg-slate-700"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
