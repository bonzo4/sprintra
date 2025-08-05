import Button from "@/components/ui/Button";

export default function NavLinks() {
  return (
    <div className="hidden items-center space-x-8 md:flex">
      <a
        href="#features"
        className="text-slate-300 transition-colors hover:text-white"
      >
        Features
      </a>
      <a
        href="#pricing"
        className="text-slate-300 transition-colors hover:text-white"
      >
        Pricing
      </a>
      <a
        href="#docs"
        className="text-slate-300 transition-colors hover:text-white"
      >
        Docs
      </a>
      <Button variant="primary" gradient="blue" size="sm">
        Get Started
      </Button>
    </div>
  );
}
