"use server";

import {
  AIGeneratedProject,
  NewProjectFormData,
  ProjectType,
} from "@/lib/types/Project";

interface GenerateProjectRequest {
  name: string;
  description: string;
  deadline?: number;
  techStack?: string;
  type: ProjectType;
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
    let deadline: number | undefined;
    if (formData.deadline) {
      deadline = new Date(formData.deadline).getTime();
    }

    const requestBody: GenerateProjectRequest = {
      name: formData.name,
      description: formData.description,
      deadline,
      techStack: formData.techStack ? formData.techStack : undefined,
      type: formData.type,
    };

    console.log(requestBody);

    const response = await fetch(process.env.GENERATE_PROJECT_ENDPOINT!, {
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
