"use server";

import { AIGeneratedProject, Project } from "@/lib/types/Project";

interface SaveProjectResponse {
  success: boolean;
  data?: {
    projectId: string;
    project: Project;
    tasksCreated: number;
  };
  error?: string;
  message?: string;
}

interface SaveProjectOptions {
  aiGeneratedProject: AIGeneratedProject;
  userId: string;
}

export async function saveProject({
  aiGeneratedProject,
  userId,
}: SaveProjectOptions): Promise<SaveProjectResponse> {
  try {
    const payload = {
      aiGeneratedProject,
      userId,
    };

    const response = await fetch(process.env.SAVE_PROJECT_ENDPOINT!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed: ${response.status} ${errorText}`);
    }

    const result = await response.json();

    return {
      success: true,
      data: result.data,
      message: result.message,
    };
  } catch (error) {
    console.error("Error saving project:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}
