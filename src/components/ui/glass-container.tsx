import { cn } from "@/lib/utils";

interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "panel" | "card";
  as?: React.ElementType;
}

export function GlassContainer({
  children,
  className,
  variant = "panel",
  as: Component = "div",
  ...props
}: GlassContainerProps) {
  return (
    <Component
      className={cn(
        variant === "panel" ? "glass-panel" : "glass-card",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
