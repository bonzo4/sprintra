"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

import Ticket from "@/components/Ticket";

export default function Dashboard() {
  const [activeProject, setActiveProject] = useState("travel-app");

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="from-sprintra-blue-500 to-sprintra-blue-600 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br">
                <svg
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="bg-sprintra-orange-500 absolute -top-1 -right-1 h-3 w-3 animate-pulse rounded-full opacity-80"></div>
            </div>
            <span className="from-sprintra-blue-400 to-sprintra-orange-400 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent">
              Sprintra
            </span>
          </div>

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

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-800 bg-slate-800/50 p-6">
          <nav className="space-y-6">
            {/* Quick Actions */}
            <div>
              <h3 className="mb-3 text-sm font-medium text-slate-400">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Button
                  variant="nav"
                  size="sm"
                  fullWidth
                  leftIcon={
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  }
                  className="justify-start"
                >
                  Dashboard
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  fullWidth
                  leftIcon={
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  }
                  className="justify-start"
                >
                  My Sprints
                </Button>
                <button className="flex w-full items-center space-x-3 rounded-lg p-3 text-left text-slate-300 transition-colors hover:bg-slate-700/50">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Time Tracker</span>
                </button>
                <button className="flex w-full items-center space-x-3 rounded-lg p-3 text-left text-slate-300 transition-colors hover:bg-slate-700/50">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <span className="text-sm font-medium">Cheat Codes</span>
                </button>
              </div>
            </div>

            {/* Recent Projects */}
            <div>
              <h3 className="mb-3 text-sm font-medium text-slate-400">
                Recent Projects
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveProject("travel-app")}
                  className={`flex w-full items-center space-x-3 rounded-lg p-3 text-left transition-colors ${
                    activeProject === "travel-app"
                      ? "bg-sprintra-orange-600/20 text-sprintra-orange-400"
                      : "text-slate-300 hover:bg-slate-700/50"
                  }`}
                >
                  <div className="bg-sprintra-orange-500 h-2 w-2 rounded-full"></div>
                  <span className="text-sm">Travel App MVP</span>
                </button>
                <button
                  onClick={() => setActiveProject("saas-starter")}
                  className={`flex w-full items-center space-x-3 rounded-lg p-3 text-left transition-colors ${
                    activeProject === "saas-starter"
                      ? "bg-sprintra-blue-600/20 text-sprintra-blue-400"
                      : "text-slate-300 hover:bg-slate-700/50"
                  }`}
                >
                  <div className="bg-sprintra-blue-500 h-2 w-2 rounded-full"></div>
                  <span className="text-sm">SaaS Starter Kit</span>
                </button>
                <button
                  onClick={() => setActiveProject("crypto-tracker")}
                  className={`flex w-full items-center space-x-3 rounded-lg p-3 text-left transition-colors ${
                    activeProject === "crypto-tracker"
                      ? "bg-green-600/20 text-green-400"
                      : "text-slate-300 hover:bg-slate-700/50"
                  }`}
                >
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Crypto Tracker</span>
                </button>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="from-sprintra-blue-900/30 to-sprintra-orange-900/30 rounded-lg bg-gradient-to-br p-4">
              <div className="mb-2 flex items-center space-x-2">
                <div className="bg-sprintra-orange-500 h-2 w-2 animate-pulse rounded-full"></div>
                <span className="text-sm font-medium text-white">
                  AI Assistant
                </span>
              </div>
              <p className="mb-3 text-xs text-slate-300">
                Need help? Ask me anything about your sprint!
              </p>
              <Button variant="primary" gradient="orange" size="xs" fullWidth>
                Chat with AI
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Stats Cards */}
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-slate-800/50 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Active Sprints</p>
                  <p className="text-2xl font-bold text-white">3</p>
                </div>
                <div className="bg-sprintra-blue-600/20 rounded-lg p-3">
                  <svg
                    className="text-sprintra-blue-400 h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-2">
                <span className="text-xs text-green-400">+12%</span>
                <span className="text-xs text-slate-400">from last week</span>
              </div>
            </div>

            <div className="rounded-xl bg-slate-800/50 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Tasks Completed</p>
                  <p className="text-2xl font-bold text-white">47</p>
                </div>
                <div className="bg-sprintra-orange-600/20 rounded-lg p-3">
                  <svg
                    className="text-sprintra-orange-400 h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-2">
                <span className="text-xs text-green-400">+24%</span>
                <span className="text-xs text-slate-400">from last week</span>
              </div>
            </div>

            <div className="rounded-xl bg-slate-800/50 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Time Saved</p>
                  <p className="text-2xl font-bold text-white">18h</p>
                </div>
                <div className="rounded-lg bg-green-600/20 p-3">
                  <svg
                    className="h-6 w-6 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-2">
                <span className="text-xs text-green-400">+8%</span>
                <span className="text-xs text-slate-400">
                  vs manual planning
                </span>
              </div>
            </div>

            <div className="rounded-xl bg-slate-800/50 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Boost Score</p>
                  <p className="text-2xl font-bold text-white">94%</p>
                </div>
                <div className="rounded-lg bg-purple-600/20 p-3">
                  <svg
                    className="h-6 w-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-2">
                <span className="text-xs text-green-400">Excellent</span>
                <span className="text-xs text-slate-400">AI optimization</span>
              </div>
            </div>
          </div>

          {/* Current Sprint Board */}
          <div className="mb-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                Travel App MVP - Sprint Board
              </h2>
              <div className="flex items-center space-x-4">
                <button className="from-sprintra-orange-500 to-sprintra-orange-600 hover:from-sprintra-orange-600 hover:to-sprintra-orange-700 rounded-lg bg-gradient-to-r px-4 py-2 text-sm font-medium text-white transition-all">
                  <span className="flex items-center space-x-2">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span>Sprintra Boost</span>
                  </span>
                </button>
                <button className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white">
                  Settings
                </button>
              </div>
            </div>

            {/* Kanban Board */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
              {/* Backlog */}
              <div className="rounded-xl bg-slate-800/50 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-300">
                    <span className="mr-2 inline-block h-3 w-3 rounded-full bg-slate-500"></span>
                    Backlog
                  </h3>
                  <span className="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-400">
                    8
                  </span>
                </div>
                <div className="space-y-3">
                  <Ticket
                    type="Epic"
                    title="User Authentication System"
                    timeEstimate="8hr"
                    tags={[{ label: "Backend", color: "blue" }]}
                  />
                  <Ticket
                    type="Feature"
                    title="Search & Filter Hotels"
                    timeEstimate="4hr"
                    tags={[{ label: "Frontend", color: "orange" }]}
                  />
                </div>
              </div>

              {/* To Do */}
              <div className="rounded-xl bg-slate-800/50 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-300">
                    <span className="mr-2 inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                    To Do
                  </h3>
                  <span className="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-400">
                    4
                  </span>
                </div>
                <div className="space-y-3">
                  <Ticket
                    title="Set up Next.js + Tailwind"
                    timeEstimate="2hr"
                    priority="critical"
                    tags={[{ label: "Setup", color: "green" }]}
                  />
                  <Ticket
                    type="Task"
                    title="Design homepage wireframe"
                    timeEstimate="1hr"
                    tags={[{ label: "Design", color: "purple" }]}
                  />
                </div>
              </div>

              {/* In Progress */}
              <div className="rounded-xl bg-slate-800/50 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-300">
                    <span className="bg-sprintra-blue-500 mr-2 inline-block h-3 w-3 animate-pulse rounded-full"></span>
                    In Progress
                  </h3>
                  <span className="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-400">
                    2
                  </span>
                </div>
                <div className="space-y-3">
                  <Ticket
                    title="Integrate RapidAPI for flights"
                    timeEstimate="45min"
                    isActive={true}
                    progress={75}
                    tags={[{ label: "API", color: "blue" }]}
                  />
                </div>
              </div>

              {/* Done */}
              <div className="rounded-xl bg-slate-800/50 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-300">
                    <span className="mr-2 inline-block h-3 w-3 rounded-full bg-green-500"></span>
                    Done
                  </h3>
                  <span className="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-400">
                    6
                  </span>
                </div>
                <div className="space-y-3">
                  <Ticket
                    title="Project initialization"
                    timeEstimate="30min"
                    isCompleted={true}
                    tags={[{ label: "Setup", color: "green" }]}
                  />
                  <Ticket
                    title="Database schema design"
                    timeEstimate="1hr"
                    isCompleted={true}
                    tags={[{ label: "Backend", color: "blue" }]}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* AI Suggestions & Timeline */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* AI Suggestions */}
            <div className="rounded-xl bg-slate-800/50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                <span className="mr-2">🤖</span>
                AI Suggestions
              </h3>
              <div className="space-y-4">
                <div className="border-sprintra-orange-500/30 from-sprintra-orange-500/10 rounded-lg border bg-gradient-to-r to-transparent p-4">
                  <div className="mb-2 flex items-center space-x-2">
                    <svg
                      className="text-sprintra-orange-400 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sprintra-orange-400 text-sm font-medium">
                      Optimization Alert
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">
                    Consider using mock data for hotel search to save 2 hours.
                    You can integrate real APIs in the next sprint.
                  </p>
                  <button className="text-sprintra-orange-400 hover:text-sprintra-orange-300 mt-2 text-xs">
                    Apply suggestion →
                  </button>
                </div>
                <div className="border-sprintra-blue-500/30 from-sprintra-blue-500/10 rounded-lg border bg-gradient-to-r to-transparent p-4">
                  <div className="mb-2 flex items-center space-x-2">
                    <svg
                      className="text-sprintra-blue-400 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span className="text-sprintra-blue-400 text-sm font-medium">
                      Speed Boost
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">
                    Use our Next.js + Firebase template to skip authentication
                    setup. Available in Cheat Codes.
                  </p>
                  <button className="text-sprintra-blue-400 hover:text-sprintra-blue-300 mt-2 text-xs">
                    Use template →
                  </button>
                </div>
              </div>
            </div>

            {/* Sprint Timeline */}
            <div className="rounded-xl bg-slate-800/50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                <span className="mr-2">⏱️</span>
                Sprint Timeline
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">
                      Day 1: Setup & Foundation
                    </p>
                    <p className="text-xs text-green-400">
                      Completed • 8 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-sprintra-blue-600 flex h-8 w-8 items-center justify-center rounded-full">
                    <svg
                      className="h-4 w-4 animate-spin text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">
                      Day 2: API Integration
                    </p>
                    <p className="text-sprintra-blue-400 text-xs">
                      In Progress • 6/8 hours
                    </p>
                    <div className="mt-1 h-1 rounded-full bg-slate-700">
                      <div className="bg-sprintra-blue-500 h-1 w-3/4 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-600">
                    <span className="text-sm font-medium text-white">3</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-400">
                      Day 3: UI Polish & Demo
                    </p>
                    <p className="text-xs text-slate-500">Pending • 6 hours</p>
                  </div>
                </div>
              </div>
              <div className="from-sprintra-blue-900/30 to-sprintra-orange-900/30 mt-6 rounded-lg bg-gradient-to-r p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">
                    Sprint Progress
                  </span>
                  <span className="text-sprintra-blue-400 text-sm">67%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-700">
                  <div className="from-sprintra-blue-500 to-sprintra-orange-500 h-2 w-2/3 rounded-full bg-gradient-to-r"></div>
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  On track to finish by tomorrow evening
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
