import BackgroundEffects from "./BackgroundEffects";
import Preview from "./Preview";
import Taglines from "./Taglines";
import HeroCTA from "./HeroCTA";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <BackgroundEffects />
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Taglines />
          <HeroCTA />
          <Preview />
        </div>
      </div>
    </div>
  );
}
