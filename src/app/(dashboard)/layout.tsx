/**
 * Dashboard Layout
 * 
 * The main learning layout with:
 * - Top navbar
 * - Left sidebar
 * - Main content area
 * 
 * Full implementation in Phase 3.
 * This is the structural placeholder.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar will go here (Phase 3) */}
      <div className="flex">
        {/* Sidebar will go here (Phase 3) */}
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
