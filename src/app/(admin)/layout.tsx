/**
 * Admin Layout
 * 
 * Admin panel layout with admin-specific sidebar.
 * Full implementation in Phase 12.
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Admin navbar + sidebar (Phase 12) */}
      <div className="flex">
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
