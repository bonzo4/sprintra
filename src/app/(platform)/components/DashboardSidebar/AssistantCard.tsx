import Button from "@/components/ui/Button";

export default function AssistantCard() {
  return (
    <div className="from-sprintra-blue-900/30 to-sprintra-orange-900/30 rounded-lg bg-gradient-to-br p-4">
      <div className="mb-2 flex items-center space-x-2">
        <div className="bg-sprintra-orange-500 h-2 w-2 animate-pulse rounded-full"></div>
        <span className="text-sm font-medium text-white">AI Assistant</span>
      </div>
      <p className="mb-3 text-xs text-slate-300">
        Need help? Ask me anything about your sprint!
      </p>
      <Button variant="primary" gradient="orange" size="xs" fullWidth>
        Chat with AI
      </Button>
    </div>
  );
}
