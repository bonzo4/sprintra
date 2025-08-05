import LinkedInIcon from "@/components/icons/LinkedInIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import Logo from "@/components/Logo";

export default function BrandSection() {
  return (
    <div className="space-y-4 lg:col-span-1">
      <Logo size="sm" />
      <p className="mb-4 text-sm leading-relaxed text-slate-400">
        From idea to demo—without the planning chaos. AI-powered sprint planning
        for builders who move fast.
      </p>
      <div className="flex space-x-4">
        <a
          href="#"
          className="hover:bg-sprintra-blue-600 rounded-lg bg-slate-800 p-2 text-slate-400 transition-colors hover:text-white"
        >
          <TwitterIcon size={5} />
        </a>
        <a
          href="#"
          className="hover:bg-sprintra-orange-600 rounded-lg bg-slate-800 p-2 text-slate-400 transition-colors hover:text-white"
        >
          <LinkedInIcon size={5} />
        </a>
      </div>
    </div>
  );
}
