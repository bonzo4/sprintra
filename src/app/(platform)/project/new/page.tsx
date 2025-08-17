"use client";

import { useState } from "react";
import NewProjectForm from "./components/NewProjectForm";
import NewProjectHeader from "./components/NewProjectHeader";
import NewProjectInfo from "./components/NewProjectInfo";
import { AIGeneratedProject } from "@/lib/types/Project";
import ProjectPreview from "./components/ProjectPreview";
import ProjectLoading from "./components/ProjectLoading";

export default function NewProjectPage() {
  const [generatedProject, setGeneratedProject] =
    useState<AIGeneratedProject | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-4xl flex-1 p-8">
        <ProjectLoading progress={loadingProgress} />
      </div>
    );
  }

  if (generatedProject) {
    return (
      <div className="mx-auto max-w-4xl flex-1 p-8">
        <ProjectPreview
          generatedProject={generatedProject}
          setGeneratedProject={setGeneratedProject}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl flex-1 p-8">
      <NewProjectHeader />
      <NewProjectForm
        setGeneratedProject={setGeneratedProject}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        loadingProgress={loadingProgress}
        setLoadingProgress={setLoadingProgress}
      />
      <NewProjectInfo />
    </div>
  );
}
