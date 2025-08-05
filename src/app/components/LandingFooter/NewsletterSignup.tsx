import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function NewsletterSignup() {
  return (
    <div className="from-sprintra-blue-900/30 to-sprintra-orange-900/30 mt-12 rounded-2xl bg-gradient-to-br p-8 text-center">
      <h3 className="mb-2 text-xl font-bold text-white">
        Stay in the Sprint Loop
      </h3>
      <p className="mb-6 text-slate-300">
        Get weekly tips, new templates, and AI-powered insights delivered to
        your inbox.
      </p>
      <div className="mx-auto flex max-w-md flex-col justify-center gap-3 px-4 sm:flex-row">
        <Input
          type="email"
          placeholder="Enter your email"
          size="md"
          variant="default"
          fullWidth
        />
        <Button variant="primary" gradient="blue-orange" size="md">
          Subscribe
        </Button>
      </div>
      <p className="mt-3 text-xs text-slate-400">
        No spam, unsubscribe anytime. We respect your inbox like a
        well-organized sprint.
      </p>
    </div>
  );
}
