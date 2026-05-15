/**
 * Auth Layout
 * 
 * Centered card layout for login/register pages.
 * Clean, focused design with no distractions.
 */
import { Logo } from "@/components/common/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20 px-4">
      <div className="mb-8">
        <Logo size="lg" />
      </div>
      <div className="w-full max-w-md">{children}</div>
      <p className="mt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} MikeyX. All rights reserved.
      </p>
    </div>
  );
}
