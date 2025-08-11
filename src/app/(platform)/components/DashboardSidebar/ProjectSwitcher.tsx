import { useProject } from "@/contexts/ProjectContext";
import ProjectCard from "./ProjectCard";

export default function ProjectSwitcher() {
  const { currentProject, projects, setCurrentProject } = useProject();

  return (
    <div>
      <h3 className="mb-3 text-sm font-medium text-slate-400">
        Recent Projects
      </h3>
      <div className="space-y-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            currentProject={currentProject}
            project={project}
            setCurrentProject={setCurrentProject}
          />
        ))}
      </div>
    </div>
  );
}
