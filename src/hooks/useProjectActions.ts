import { useProject } from "@/contexts/ProjectContext";
import { Project, ProjectStatus } from "@/lib/types";

export function useProjectActions() {
  const { addProject, updateProject, projects } = useProject();

  const createNewProject = (
    name: string,
    color: "orange" | "blue" | "green" | "purple" = "blue",
  ): Project => {
    const now = new Date().toISOString();
    
    const newProject: Project = {
      id: name.toLowerCase().replace(/\s+/g, "-"),
      name,
      color,
      status: "active",
      sprintCount: 0,
      completedTasks: 0,
      totalTasks: 0,
      progress: 0,
      lastActivity: "Just created",
      createdAt: now,
      updatedAt: now,
      tasks: [],
      // Optional fields for new projects
      concept: undefined,
      deadline: undefined,
      projectType: undefined,
      techStackPreference: undefined,
    };

    addProject(newProject);
    return newProject;
  };

  const markTaskComplete = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId);
    if (project && project.completedTasks < project.totalTasks) {
      const newCompletedTasks = project.completedTasks + 1;
      const newProgress = Math.round((newCompletedTasks / project.totalTasks) * 100);
      
      updateProject(projectId, {
        completedTasks: newCompletedTasks,
        progress: newProgress,
        lastActivity: "Just now",
        updatedAt: new Date().toISOString(),
      });
    }
  };

  const addTasksToProject = (projectId: string, taskCount: number) => {
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      const newTotalTasks = project.totalTasks + taskCount;
      const newProgress = project.totalTasks > 0 
        ? Math.round((project.completedTasks / newTotalTasks) * 100)
        : 0;
      
      updateProject(projectId, {
        totalTasks: newTotalTasks,
        progress: newProgress,
        lastActivity: "Just now",
        updatedAt: new Date().toISOString(),
      });
    }
  };

  const updateProjectStatus = (
    projectId: string,
    status: ProjectStatus,
  ) => {
    updateProject(projectId, {
      status,
      lastActivity: "Just now",
      updatedAt: new Date().toISOString(),
    });
  };

  return {
    createNewProject,
    markTaskComplete,
    addTasksToProject,
    updateProjectStatus,
  };
}
