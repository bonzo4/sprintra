"use client";

import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function DashboardHeader() {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    setIsDropdownOpen(false);
  };

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

          {/* User Menu */}
          <div className="relative">
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
                  {user?.displayName?.charAt(0) ||
                    user?.email?.charAt(0) ||
                    "U"}
                </div>
              )}
              <span className="hidden text-sm text-white sm:block">
                {user?.displayName || user?.email}
              </span>
              <svg
                className={`h-4 w-4 text-slate-400 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 z-50 mt-2 w-48 rounded-lg border border-slate-700 bg-slate-800 shadow-lg">
                <div className="border-b border-slate-700 p-4">
                  <p className="font-medium text-white">{user?.displayName}</p>
                  <p className="text-sm text-slate-400">{user?.email}</p>
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
            )}
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </header>
  );
}
