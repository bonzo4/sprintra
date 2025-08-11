import { useAuth } from "@/contexts/AuthContext";
import { RefObject } from "react";
import DropdownMenu from "./DrowdownMenu";
import UserInfo from "./UserInfo";

interface UserMenuProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isOpen: boolean) => void;
  dropdownRef: RefObject<HTMLDivElement | null>;
}

export default function UserMenu({
  isDropdownOpen,
  setIsDropdownOpen,
  dropdownRef,
}: UserMenuProps) {
  const { user, handleLogout } = useAuth();

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <UserInfo
        user={user}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      {isDropdownOpen && (
        <DropdownMenu user={user} handleLogout={handleLogout} />
      )}
    </div>
  );
}
