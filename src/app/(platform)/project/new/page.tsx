"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { NewProjectFormData } from "@/lib/types";
import { useProjectActions } from "@/hooks/useProjectActions";
import { useProject } from "@/contexts/ProjectContext";

const PROJECT_TYPE_OPTIONS = [
  {
    value: "hackathon" as const,
    label: "Hackathon (24-48 hours)",
    description: "Ultra-fast development with time-boxed 2-hour blocks",
    timeframe: "24-48 hours",
  },
  {
    value: "mvp" as const,
    label: "MVP Sprint (1-4 weeks)",
    description: "Minimum viable product with weekly sprints",
    timeframe: "1-4 weeks",
  },
  {
    value: "prototype" as const,
    label: "Prototype (1-2 months)",
    description: "Feature-rich prototype with bi-weekly planning",
    timeframe: "1-2 months",
  },
  {
    value: "full-project" as const,
    label: "Full Project (3+ months)",
    description: "Complete project with monthly milestone planning",
    timeframe: "3+ months",
  },
];

export default function NewProjectPage() {
  const router = useRouter();
  const { createNewProject } = useProjectActions();
  const { setCurrentProject } = useProject();

  const [formData, setFormData] = useState<NewProjectFormData>({
    name: "",
    concept: "",
    deadline: "",
    projectType: "hackathon",
    techStackPreference: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
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

    if (!formData.deadline) {
      newErrors.deadline = "Deadline is required";
    } else {
      const selectedDate = new Date(formData.deadline);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate <= today) {
        newErrors.deadline = "Deadline must be in the future";
      }
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

    try {
      // Create the project using the hook
      const newProject = createNewProject(formData.name);

      // Update the project with additional form data
      // Note: In a real app, you'd probably want to extend createNewProject
      // to accept all the form data, or create a separate updateProject call
      console.log("Created project:", newProject);
      console.log("Form data:", formData);

      // Set as current project
      setCurrentProject(newProject);

      // TODO: In a real implementation, you would:
      // 1. Save the additional form fields (concept, deadline, etc.) to the database
      // 2. Call AI service to generate tasks and timeline based on the concept
      // 3. Create initial project structure

      // Simulate AI processing time
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Redirect to the new project dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Error creating project:", error);
      // Handle error (show toast, etc.)
    } finally {
      setIsLoading(false);
    }
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  return (
    <div className="flex-1 p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-white">
            Create New Project
          </h1>
          <p className="text-slate-400">
            Describe your project idea and let AI generate a complete
            development plan
          </p>
        </div>

        {/* Form */}
        <div className="rounded-xl border border-slate-700 bg-slate-800 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Project Name */}
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

            {/* Project Concept */}
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

            {/* Project Type */}
            <div>
              <label className="mb-4 block text-sm font-medium text-slate-300">
                Project Type
              </label>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {PROJECT_TYPE_OPTIONS.map((option) => (
                  <div
                    key={option.value}
                    className={`cursor-pointer rounded-lg border-2 p-4 transition-all ${
                      formData.projectType === option.value
                        ? "border-sprintra-blue-500 bg-sprintra-blue-500/10"
                        : "border-slate-600 bg-slate-700/50 hover:border-slate-500"
                    }`}
                    onClick={() =>
                      handleInputChange("projectType", option.value)
                    }
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium text-white">{option.label}</h3>
                      <span className="rounded bg-slate-600 px-2 py-1 text-xs text-slate-400">
                        {option.timeframe}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deadline */}
            <div>
              <Input
                type="date"
                label="Project Deadline"
                value={formData.deadline}
                onChange={(e) => handleInputChange("deadline", e.target.value)}
                error={errors.deadline}
                fullWidth
                size="lg"
                min={getMinDate()}
              />
            </div>

            {/* Tech Stack Preference (Optional) */}
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

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => router.back()}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                gradient="blue-orange"
                disabled={isLoading}
                className="flex-1"
              >
                {isLoading
                  ? "Creating Project..."
                  : "Create Project & Generate Plan"}
              </Button>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="bg-sprintra-blue-500/10 border-sprintra-blue-500/20 mt-6 rounded-lg border p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg
                className="text-sprintra-blue-400 mt-0.5 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-sprintra-blue-300 mb-1 text-sm font-medium">
                What happens next?
              </h4>
              <p className="text-sprintra-blue-200 text-sm">
                Our AI will analyze your project concept and generate a complete
                development plan with: time-boxed tasks, recommended tech stack,
                embedded resources, and real-time progress tracking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
