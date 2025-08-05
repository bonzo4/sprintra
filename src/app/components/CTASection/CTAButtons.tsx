import Button from "@/components/ui/Button";

export default function CTAButtons() {
  return (
    <div className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
      <Button
        variant="primary"
        gradient="blue-orange"
        size="xl"
        rounded="xl"
        leftIcon={
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        }
      >
        Start Your Sprint
      </Button>
      <Button variant="link" size="lg">
        View live demo →
      </Button>
    </div>
  );
}
