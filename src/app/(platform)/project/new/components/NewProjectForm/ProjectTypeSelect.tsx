import { NewProjectFormData } from "@/lib/types";
import { PROJECT_TYPE_OPTIONS } from "./newProjectOptions";

interface ProjectTypeOption {
  formData: NewProjectFormData;
  handleInputChange: (field: string, value: string) => void;
}

export default function ProjectTypeSelector({
  formData,
  handleInputChange,
}: ProjectTypeOption) {
  return (
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
            onClick={() => handleInputChange("projectType", option.value)}
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-medium text-white">{option.label}</h3>
              <span className="rounded bg-slate-600 px-2 py-1 text-xs text-slate-400">
                {option.timeframe}
              </span>
            </div>
            <p className="text-sm text-slate-400">{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
