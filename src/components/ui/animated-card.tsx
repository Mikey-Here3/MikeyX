"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  hoverEffect?: boolean;
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
  hoverEffect = true,
  ...props
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={
        hoverEffect
          ? { y: -5, transition: { duration: 0.2 }, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }
          : undefined
      }
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
