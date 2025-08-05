import Logo from "@/components/Logo";
import NavLinks from "./NavLinks";

export default function LandingHeader() {
  return (
    <nav className="relative z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
