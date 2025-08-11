"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import PageLoading from "@/components/PageLoading";
import BackgroundEffects from "./components/BackgroundEffects";
import LoginCard from "./components/LoginCard";
import AdditionalInfo from "./components/AdditionalInfo";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <BackgroundEffects />
      <div className="relative w-full max-w-md">
        <LoginCard
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          router={router}
        />
        <AdditionalInfo />
      </div>
    </div>
  );
}
