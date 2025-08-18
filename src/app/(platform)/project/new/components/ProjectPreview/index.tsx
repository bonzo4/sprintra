import Button from "@/components/ui/Button";
import { AIGeneratedProject } from "@/lib/types/Project";
import TasksGrid from "./Tasks";
import ProjectSummary from "./ProjectSummary";
import { useState } from "react";
import { saveProject } from "../../actions/saveProject";
import { useAuth } from "@/contexts/AuthContext";

interface ProjectPreviewProps {
  generatedProject: AIGeneratedProject;
  setGeneratedProject: (project: AIGeneratedProject | null) => void;
}

export default function ProjectPreview({
  generatedProject,
  setGeneratedProject,
}: ProjectPreviewProps) {
  const [isSaving, setIsSaving] = useState(false);
  const { user } = useAuth();

  const handleSaveProject = async () => {
    if (!generatedProject) return;

    setIsSaving(true);
    try {
      if (!user) {
        return;
      }
      await saveProject({
        aiGeneratedProject: generatedProject,
        userId: user.uid,
      });
      console.log("Project saved:", generatedProject);
    } catch (error) {
      console.error("Error saving project:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    setGeneratedProject(null);
  };

  return (
    <div className="space-y-6">
      <ProjectSummary projectData={generatedProject} />
      <TasksGrid tasks={generatedProject.tasks} />
      <div className="flex justify-center gap-4">
        <Button
          variant="secondary"
          size="lg"
          onClick={handleReset}
          disabled={isSaving}
          className="min-w-[150px]"
        >
          Generate Again
        </Button>
        <Button
          variant="primary"
          size="lg"
          gradient="blue-orange"
          onClick={handleSaveProject}
          disabled={isSaving}
          className="min-w-[150px]"
        >
          {isSaving ? "Saving..." : "Save Project"}
        </Button>
      </div>
    </div>
  );
}
