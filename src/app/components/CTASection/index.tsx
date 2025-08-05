import CTABackground from "./CTABackground";
import CTATaglines from "./CTATaglines";
import CTAButtons from "./CTAButtons";
import CTASocialProof from "./CTASocialProof";

export default function CTASection() {
  return (
    <div className="via-sprintra-blue-900/20 relative bg-gradient-to-br from-slate-900 to-slate-900 py-20">
      <CTABackground />

      <div className="relative container mx-auto px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <CTATaglines />
          <CTAButtons />
          <CTASocialProof />
        </div>
      </div>
    </div>
  );
}
