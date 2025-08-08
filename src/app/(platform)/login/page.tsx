"use client";

import React, { useState } from "react";
import { signInWithPopup, User } from "firebase/auth";
import { auth, githubProvider } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LogoIcon from "@/components/icons/LogoIcon";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleGitHubLogin = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const result = await signInWithPopup(auth, githubProvider);
      const user: User = result.user;

      console.log("User signed in:", user);

      // Redirect to dashboard after successful login
      router.push("/dashboard");
    } catch (error: any) {
      console.error("Error signing in:", error);

      // Handle specific error cases
      if (error.code === "auth/popup-closed-by-user") {
        setError("Login was cancelled. Please try again.");
      } else if (error.code === "auth/network-request-failed") {
        setError("Network error. Please check your connection and try again.");
      } else {
        setError("Failed to sign in. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Login Card */}
        <div className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 shadow-2xl backdrop-blur-xl">
          {/* Logo and Title */}
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="text-blue-400">
                <LogoIcon size="xl" />
              </div>
            </div>
            <h1 className="mb-2 text-2xl font-bold text-white">
              Welcome to Sprintra
            </h1>
            <p className="text-slate-400">
              Sign in to access your project dashboard
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 p-4">
              <p className="text-center text-sm text-red-400">{error}</p>
            </div>
          )}

          {/* GitHub Login Button */}
          <div className="space-y-4">
            <Button
              onClick={handleGitHubLogin}
              disabled={isLoading}
              isLoading={isLoading}
              fullWidth
              variant="outline"
              size="lg"
              className="border-slate-600 bg-slate-900/50 text-white transition-all duration-200 hover:bg-slate-900/70 hover:text-white"
              leftIcon={!isLoading && <GitHubIcon size={20} />}
            >
              {isLoading ? "Signing in..." : "Continue with GitHub"}
            </Button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-slate-700"></div>
            <span className="px-4 text-sm text-slate-400">
              Secure authentication
            </span>
            <div className="flex-1 border-t border-slate-700"></div>
          </div>

          {/* Features */}
          <div className="space-y-2 text-center">
            <p className="text-xs text-slate-500">
              By signing in, you agree to our Terms of Service and Privacy
              Policy
            </p>

            <div className="mt-4 flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-1">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <span className="text-xs text-slate-400">Secure</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                <span className="text-xs text-slate-400">Fast</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="h-2 w-2 rounded-full bg-orange-400"></div>
                <span className="text-xs text-slate-400">Reliable</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">
            Need help?{" "}
            <a
              href="#"
              className="text-blue-400 transition-colors hover:text-blue-300"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
