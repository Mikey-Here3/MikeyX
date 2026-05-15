import { PageHeader } from "@/components/common/page-header";

export default function TopicPage({ params }: { params: Promise<{ moduleId: string; topicId: string }> }) {
  return (
    <div>
      <PageHeader title="Topic Lesson" description="Deep dive into this topic." />
      <p className="text-muted-foreground">Lesson viewer will be implemented in Phase 6-7.</p>
    </div>
  );
}
