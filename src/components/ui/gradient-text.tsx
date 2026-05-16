import { cn } from "@/lib/utils";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "accent";
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

export function GradientText({
  children,
  className,
  variant = "primary",
  as: Component = "span",
  ...props
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        variant === "primary" ? "text-gradient-primary" : "text-gradient-accent",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
