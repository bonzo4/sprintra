import { useProject } from "@/contexts/ProjectContext";

export function useProjectActions() {
  const { addProject, updateProject, projects } = useProject();

  const createNewProject = (
    name: string,
    color: "orange" | "blue" | "green" | "purple" = "blue",
  ) => {
    const newProject = {
      id: name.toLowerCase().replace(/\s+/g, "-"),
      name,
      color,
      status: "active" as const,
      sprintCount: 0,
      completedTasks: 0,
      totalTasks: 0,
      lastActivity: "Just created",
    };

    addProject(newProject);
    return newProject;
  };

  const markTaskComplete = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId);
    if (project && project.completedTasks < project.totalTasks) {
      updateProject(projectId, {
        completedTasks: project.completedTasks + 1,
        lastActivity: "Just now",
      });
    }
  };

  const addTasksToProject = (projectId: string, taskCount: number) => {
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      updateProject(projectId, {
        totalTasks: project.totalTasks + taskCount,
        lastActivity: "Just now",
      });
    }
  };

  const updateProjectStatus = (
    projectId: string,
    status: "active" | "completed" | "paused",
  ) => {
    updateProject(projectId, {
      status,
      lastActivity: "Just now",
    });
  };

  return {
    createNewProject,
    markTaskComplete,
    addTasksToProject,
    updateProjectStatus,
  };
}
