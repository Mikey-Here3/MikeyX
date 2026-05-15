/**
 * Logo Component
 * 
 * MikeyX branding component with icon and text.
 * Used in Navbar, Sidebar, and Landing page.
 */
import { Code2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { icon: 20, text: "text-lg" },
  md: { icon: 24, text: "text-xl" },
  lg: { icon: 32, text: "text-3xl" },
};

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const { icon, text } = sizeMap[size];

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 font-bold", className)}
    >
      <div className="relative flex items-center justify-center rounded-lg bg-primary p-1.5">
        <Code2 size={icon} className="text-primary-foreground" />
        <div className="absolute inset-0 rounded-lg bg-primary/20 blur-md" />
      </div>
      {showText && (
        <span className={cn("font-bold tracking-tight", text)}>
          Mikey<span className="text-primary">X</span>
        </span>
      )}
    </Link>
  );
}
