"use server";

import { appConfig } from "@/lib/config";
import { AIGeneratedProject, NewProjectFormData } from "@/lib/types/Project";

interface GenerateProjectRequest {
  project_name: string;
  project_description: string;
  timeline_hours?: number;
  tech_stack?: string[];
  project_type: string;
}

interface GenerateProjectResponse {
  message: string;
  data: AIGeneratedProject;
}

export async function generateProject(formData: NewProjectFormData): Promise<{
  success: boolean;
  data?: AIGeneratedProject;
  error?: string;
}> {
  try {
    let timelineHours: number | undefined;
    if (formData.deadline) {
      const deadline = new Date(formData.deadline);
      const now = new Date();
      const timeDifferenceMs = deadline.getTime() - now.getTime();
      timelineHours = Math.max(
        1,
        Math.floor(timeDifferenceMs / (1000 * 60 * 60)),
      );
    }

    const techStack = formData.techStackPreference
      ? formData.techStackPreference
          .split(",")
          .map((tech) => tech.trim())
          .filter((tech) => tech.length > 0)
      : undefined;

    const requestBody: GenerateProjectRequest = {
      project_name: formData.name,
      project_description: formData.concept,
      timeline_hours: timelineHours,
      tech_stack: techStack,
      project_type: formData.projectType,
    };

    const response = await fetch(`${appConfig.apiEndpoint}/generate_project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed: ${response.status} ${errorText}`);
    }

    const result: GenerateProjectResponse = await response.json();

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    console.error("Error generating project:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}
