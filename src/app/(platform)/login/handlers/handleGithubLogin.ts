import { auth, githubProvider } from "@/lib/firebase";
import { FirebaseError } from "firebase/app";
import { signInWithPopup, User } from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";

interface HandleGithubLoginOptions {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string | null>>;
  router: AppRouterInstance;
}

export async function handleGithubLogin({
  setIsLoading,
  setError,
  router,
}: HandleGithubLoginOptions): Promise<void> {
  try {
    setIsLoading(true);
    setError(null);

    const result = await signInWithPopup(auth, githubProvider);
    const user: User = result.user;

    console.log("User signed in:", user);

    router.push("/dashboard");
  } catch (error: unknown) {
    console.error("Error signing in:", error);

    if (error instanceof FirebaseError) {
      if (error.code === "auth/popup-closed-by-user") {
        setError("Login was cancelled. Please try again.");
      } else if (error.code === "auth/network-request-failed") {
        setError("Network error. Please check your connection and try again.");
      } else {
        setError("Failed to sign in. Please try again.");
      }
    }
  } finally {
    setIsLoading(false);
  }
}
