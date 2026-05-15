/**
 * Loading Spinner Component
 * 
 * Reusable loading indicator.
 * Uses CSS animations for smooth performance.
 */
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  className?: string;
  size?: number;
  text?: string;
}

export function LoadingSpinner({
  className,
  size = 24,
  text,
}: LoadingSpinnerProps) {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <Loader2 size={size} className="animate-spin text-primary" />
      {text && <span className="text-sm text-muted-foreground">{text}</span>}
    </div>
  );
}

/**
 * Full Page Loading — used for route transitions
 */
export function PageLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 size={40} className="animate-spin text-primary" />
        <p className="text-sm text-muted-foreground animate-pulse">
          Loading MikeyX...
        </p>
      </div>
    </div>
  );
}
