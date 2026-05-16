"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  Target,
  Trophy,
  Settings,
  Code,
  BrainCircuit
} from "lucide-react";
import { useUIStore } from "@/stores/ui-store";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Modules",
    icon: BookOpen,
    href: "/modules",
    color: "text-violet-500",
  },
  {
    label: "Practice",
    icon: Code,
    href: "/practice",
    color: "text-pink-500",
  },
  {
    label: "Roadmaps",
    icon: Target,
    href: "/roadmaps",
    color: "text-orange-500",
  },
  {
    label: "AI Mentor",
    icon: BrainCircuit,
    href: "/ai-mentor",
    color: "text-emerald-500",
  },
  {
    label: "Leaderboard",
    icon: Trophy,
    href: "/leaderboard", // TODO: Build leaderboard later
    color: "text-yellow-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-gray-500",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const { sidebarOpen } = useUIStore();

  return (
    <div className={cn(
      "h-full border-r bg-background flex flex-col transition-all duration-300 ease-in-out",
      sidebarOpen ? "w-64" : "w-0 md:w-20 lg:w-64 overflow-hidden"
    )}>
      <div className="flex h-14 items-center border-b px-4 lg:px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl text-primary overflow-hidden">
          <BrainCircuit className="h-6 w-6 shrink-0" />
          <span className={cn("shrink-0", !sidebarOpen && "md:hidden lg:inline-block")}>MikeyX</span>
        </Link>
      </div>

      <div className="flex-1 overflow-auto py-4">
        <nav className="grid items-start px-2 text-sm font-medium">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all hover:bg-muted mb-1",
                pathname === route.href || pathname.startsWith(route.href + '/')
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground"
              )}
            >
              <route.icon className={cn("h-5 w-5 shrink-0", route.color)} />
              <span className={cn(
                "transition-opacity duration-200", 
                !sidebarOpen && "md:opacity-0 md:w-0 lg:opacity-100 lg:w-auto"
              )}>
                {route.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
