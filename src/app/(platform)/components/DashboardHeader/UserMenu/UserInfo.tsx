import Arrow from "@/components/icons/Arrow";
import { User } from "firebase/auth";

interface UserInfoProps {
  user: User | null;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isOpen: boolean) => void;
}

export default function UserInfo({
  user,
  isDropdownOpen,
  setIsDropdownOpen,
}: UserInfoProps) {
  return (
    <button
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      className="flex items-center space-x-2 rounded-lg p-2 transition-colors hover:bg-slate-800"
    >
      {user?.photoURL ? (
        <img
          src={user.photoURL}
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
      ) : (
        <div className="from-sprintra-orange-400 to-sprintra-orange-500 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br text-sm font-medium text-white">
          {user?.displayName?.charAt(0) || user?.email?.charAt(0) || "U"}
        </div>
      )}
      <span className="hidden text-sm text-white sm:block">
        {user?.displayName || user?.email}
      </span>
      {isDropdownOpen ? <Arrow dir="up" /> : <Arrow dir="down" />}
    </button>
  );
}
