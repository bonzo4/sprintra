import Button from "@/components/ui/Button";
import { Dispatch, SetStateAction, useState } from "react";
import { handleGithubLogin } from "../../handlers/handleGithubLogin";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Features from "./Features";
import Divider from "./Divider";
import ErrorMessage from "./ErrorMessage";
import LoginCardHeader from "./LoginCardHeader";

interface LoginCardProps {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  router: AppRouterInstance;
}

export default function LoginCard({
  isLoading,
  setIsLoading,
  router,
}: LoginCardProps) {
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 shadow-2xl backdrop-blur-xl">
      <LoginCardHeader />
      {error && <ErrorMessage error={error} />}
      <Button
        onClick={() => handleGithubLogin({ setIsLoading, setError, router })}
        disabled={isLoading}
        fullWidth
        variant="outline"
        size="lg"
        className="border-slate-600 bg-slate-900/50 text-white transition-all duration-200 hover:bg-slate-900/70 hover:text-white"
        leftIcon={!isLoading && <GitHubIcon size={20} />}
      >
        {isLoading ? "Signing in..." : "Continue with GitHub"}
      </Button>
      <Divider />
      <Features />
    </div>
  );
}
