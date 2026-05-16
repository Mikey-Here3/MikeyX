"use client";

import { useEffect } from "next";
import { Button } from "@/components/ui/button";
import { AlertCircle, Database } from "lucide-react";

export default function ModulesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Modules Page Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <div className="bg-destructive/10 p-4 rounded-full mb-6">
        <Database className="h-10 w-10 text-destructive" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight mb-2">Database Connection Failed</h2>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        We couldn't connect to the database. If you are using a serverless database like Neon, it might be sleeping. Please try again in a few seconds to wake it up.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={() => reset()} size="lg">
          Try Again
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-8 font-mono bg-muted p-2 rounded max-w-lg overflow-auto">
        {error.message}
      </p>
    </div>
  );
}
