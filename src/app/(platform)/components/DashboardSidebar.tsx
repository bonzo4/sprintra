"use client";

import Button from "@/components/ui/Button";
import { useProject } from "@/contexts/ProjectContext";

export default function DashboardSidebar() {
  const { currentProject, projects, setCurrentProject } = useProject();

  const getProjectColorClasses = (color: string, isActive: boolean) => {
    const baseClasses =
      "flex w-full items-center space-x-3 rounded-lg p-3 text-left transition-colors";

    if (isActive) {
      switch (color) {
        case "orange":
          return `${baseClasses} bg-sprintra-orange-600/20 text-sprintra-orange-400`;
        case "blue":
          return `${baseClasses} bg-sprintra-blue-600/20 text-sprintra-blue-400`;
        case "green":
          return `${baseClasses} bg-green-600/20 text-green-400`;
        case "purple":
          return `${baseClasses} bg-purple-600/20 text-purple-400`;
        default:
          return `${baseClasses} bg-slate-600/20 text-slate-400`;
      }
    }

    return `${baseClasses} text-slate-300 hover:bg-slate-700/50`;
  };

  const getProjectDotColor = (color: string) => {
    switch (color) {
      case "orange":
        return "bg-sprintra-orange-500";
      case "blue":
        return "bg-sprintra-blue-500";
      case "green":
        return "bg-green-500";
      case "purple":
        return "bg-purple-500";
      default:
        return "bg-slate-500";
    }
  };
  return (
    <aside className="min-h-screen w-64 border-r border-slate-800 bg-slate-800/50 p-6">
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
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setCurrentProject(project)}
                className={getProjectColorClasses(
                  project.color,
                  currentProject?.id === project.id,
                )}
              >
                <div
                  className={`h-2 w-2 rounded-full ${getProjectDotColor(project.color)}`}
                ></div>
                <div className="flex-1 text-left">
                  <span className="text-sm font-medium">{project.name}</span>
                  <div className="flex items-center space-x-2 text-xs opacity-75">
                    <span>
                      {project.completedTasks}/{project.totalTasks} tasks
                    </span>
                    <span>•</span>
                    <span
                      className={` ${
                        project.status === "active"
                          ? "text-green-400"
                          : project.status === "completed"
                            ? "text-blue-400"
                            : "text-yellow-400"
                      } `}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* AI Assistant */}
        <div className="from-sprintra-blue-900/30 to-sprintra-orange-900/30 rounded-lg bg-gradient-to-br p-4">
          <div className="mb-2 flex items-center space-x-2">
            <div className="bg-sprintra-orange-500 h-2 w-2 animate-pulse rounded-full"></div>
            <span className="text-sm font-medium text-white">AI Assistant</span>
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
  );
}
