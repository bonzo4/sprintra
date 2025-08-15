export default function NewProjectInfo() {
  return (
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
  );
}
