import Feature1 from "./Features/Feature1";
import Feature2 from "./Features/Feature2";
import Feature3 from "./Features/Feature3";
import Feature4 from "./Features/Feature4";
import FeaturesTaglines from "./FeaturesTaglines";

export default function FeaturesSection() {
  return (
    <div className="relative bg-slate-800/50 py-20">
      <div className="container mx-auto px-6">
        <FeaturesTaglines />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <Feature1 />
          <Feature2 />
          <Feature3 />
          <Feature4 />
        </div>
      </div>
    </div>
  );
}
