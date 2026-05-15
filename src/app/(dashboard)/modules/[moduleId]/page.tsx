import { PageHeader } from "@/components/common/page-header";

export default function ModuleDetailPage({ params }: { params: Promise<{ moduleId: string }> }) {
  return (
    <div>
      <PageHeader title="Module Detail" description="Topics in this module." />
      <p className="text-muted-foreground">Module detail will be implemented in Phase 6.</p>
    </div>
  );
}
