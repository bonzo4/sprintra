import CTASection from "./components/CTASection";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import LandingFooter from "./components/LandingFooter";
import LandingHeader from "./components/LandingHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <LandingHeader />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <LandingFooter />
    </div>
  );
}
