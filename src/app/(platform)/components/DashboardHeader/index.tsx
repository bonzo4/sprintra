"use client";

import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import { useState, useEffect, useRef } from "react";
import UserMenu from "./UserMenu";

export default function DashboardHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <header className="relative z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-6">
          <Logo size="sm" />
          <div className="flex items-center space-x-4">
            <Button variant="primary" gradient="blue" size="sm">
              New Project
            </Button>
            <UserMenu
              isDropdownOpen={isDropdownOpen}
              setIsDropdownOpen={setIsDropdownOpen}
              dropdownRef={dropdownRef}
            />
          </div>
        </div>
      </header>
    </>
  );
}
