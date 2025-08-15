"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { NewProjectFormData, AIGeneratedProject } from "@/lib/types";
import { useState } from "react";
import ProjectTypeSelector from "./ProjectTypeSelect";
import { generateProject } from "../../actions/generateProject";

interface NewProjectFormProps {
  setGeneratedProject: (project: AIGeneratedProject | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  loadingProgress: number;
  setLoadingProgress: (progress: number) => void;
}

export default function NewProjectForm({
  setGeneratedProject,
  isLoading,
  setIsLoading,
  loadingProgress,
  setLoadingProgress,
}: NewProjectFormProps) {
  const [formData, setFormData] = useState<NewProjectFormData>({
    name: "",
    concept: "",
    deadline: "",
    projectType: "hackathon",
    techStackPreference: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Project name is required";
    }

    if (!formData.concept.trim()) {
      newErrors.concept = "Project concept is required";
    } else if (formData.concept.trim().length < 10) {
      newErrors.concept =
        "Please provide a more detailed concept (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setLoadingProgress(0);
    setSuccessMessage("");
    setErrors({});

    try {
      const apiPromise = generateProject(formData);

      const progressSteps = [
        { progress: 25, delay: 600 },
        { progress: 50, delay: 800 },
        { progress: 75, delay: 800 },
        { progress: 90, delay: 600 },
      ];

      for (const step of progressSteps) {
        await new Promise((resolve) => setTimeout(resolve, step.delay));
        setLoadingProgress(step.progress);
      }

      const result = await apiPromise;

      setLoadingProgress(100);
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (result.success && result.data) {
        setGeneratedProject(result.data);
        setSuccessMessage("Project generated successfully!");
      } else {
        setErrors({ general: result.error || "Failed to generate project" });
      }
    } catch (error) {
      console.error("Error creating project:", error);
      setErrors({ general: "An unexpected error occurred" });
    } finally {
      setIsLoading(false);
      setLoadingProgress(0);
    }
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  return (
    <div>
      <div className="rounded-xl border border-slate-700 bg-slate-800 p-8">
        {successMessage && (
          <div className="mb-6 rounded-lg border border-green-500/20 bg-green-900/20 p-4">
            <p className="text-green-400">{successMessage}</p>
          </div>
        )}

        {errors.general && (
          <div className="mb-6 rounded-lg border border-red-500/20 bg-red-900/20 p-4">
            <p className="text-red-400">{errors.general}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              label="Project Name"
              placeholder="e.g., TikTok for Cats, Travel Planner MVP"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              error={errors.name}
              fullWidth
              size="lg"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Project Concept
            </label>
            <textarea
              className="focus:border-sprintra-blue-500 focus:ring-sprintra-blue-500/20 w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-400 transition-colors focus:ring-2 focus:outline-none"
              rows={4}
              placeholder="Describe your project in detail. What problem does it solve? Who is the target audience? What are the key features?"
              value={formData.concept}
              onChange={(e) => handleInputChange("concept", e.target.value)}
            />
            {errors.concept && (
              <p className="mt-1 text-sm text-red-400">{errors.concept}</p>
            )}
            <p className="mt-2 text-xs text-slate-500">
              The more detailed your concept, the better AI can plan your
              project
            </p>
          </div>

          <ProjectTypeSelector
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <div>
            <Input
              type="date"
              label="Project Deadline (Optional)"
              value={formData.deadline}
              onChange={(e) => handleInputChange("deadline", e.target.value)}
              error={errors.deadline}
              fullWidth
              size="lg"
              min={getMinDate()}
            />
          </div>

          <div>
            <Input
              label="Tech Stack Preference (Optional)"
              placeholder="e.g., React, Next.js, Firebase, Python, etc."
              value={formData.techStackPreference}
              onChange={(e) =>
                handleInputChange("techStackPreference", e.target.value)
              }
              fullWidth
              size="lg"
              helper="Leave blank to let AI suggest the best tech stack for your project"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              gradient="blue-orange"
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? "Generating Plan..." : "Generate Plan"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
