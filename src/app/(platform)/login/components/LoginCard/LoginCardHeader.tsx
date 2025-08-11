import LogoIcon from "@/components/icons/LogoIcon";

export default function LoginCardHeader() {
  return (
    <div className="mb-8 text-center">
      <div className="mb-4 flex justify-center">
        <div className="text-blue-400">
          <LogoIcon size="xl" />
        </div>
      </div>
      <h1 className="mb-2 text-2xl font-bold text-white">
        Welcome to Sprintra
      </h1>
      <p className="text-slate-400">Sign in to access the dashboard</p>
    </div>
  );
}
