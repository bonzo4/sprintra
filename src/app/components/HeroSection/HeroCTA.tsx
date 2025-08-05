import Button from "@/components/ui/Button";

export default function HeroCTA() {
  return (
    <div className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
      <Button variant="primary" gradient="blue" size="lg" rounded="xl">
        Start Building Now
      </Button>
      <Button variant="outline" size="lg" rounded="xl">
        Watch Demo
      </Button>
    </div>
  );
}
