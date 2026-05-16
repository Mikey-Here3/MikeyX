/**
 * Root Layout — MikeyX
 * 
 * This is the top-level layout wrapping every page.
 * 
 * Provider order matters:
 * 1. ThemeProvider (outermost) — theme must be available to all components
 * 2. AuthProvider — auth state needed by QueryProvider callbacks
 * 3. QueryProvider — data fetching, depends on auth
 * 4. TooltipProvider — Shadcn tooltips need this wrapper
 * 
 * Fonts: Inter (clean, modern, widely used in dev tools)
 * + JetBrains Mono for code
 */
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { AuthProvider } from "@/components/providers/auth-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MikeyX — Master Programming From Zero",
    template: "%s | MikeyX",
  },
  description:
    "The deepest learning ecosystem for absolute beginners. Go from zero knowledge to professional developer with visual explanations, interactive practice, and AI mentoring.",
  keywords: [
    "learn programming",
    "coding for beginners",
    "python course",
    "learn to code",
    "programming fundamentals",
    "computer science",
    "MikeyX",
  ],
  authors: [{ name: "MikeyX Team" }],
  openGraph: {
    title: "MikeyX — Master Programming From Zero",
    description:
      "The deepest learning ecosystem for absolute beginners.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <AuthProvider>
            <QueryProvider>
              <TooltipProvider delay={0}>
                {children}
              </TooltipProvider>
            </QueryProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
