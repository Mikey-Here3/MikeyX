import { PageHeader } from "@/components/common/page-header";
import { getModuleWithTopics } from "@/server/actions/learning-actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlayCircle, CheckCircle2 } from "lucide-react";

export default async function ModuleDetailPage({ params }: { params: Promise<{ moduleId: string }> }) {
  const resolvedParams = await params;
  const moduleData = await getModuleWithTopics(resolvedParams.moduleId);

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
      <PageHeader 
        title={moduleData.title} 
        description={moduleData.description} 
      />

      <div className="flex flex-col gap-4 mt-4">
        {moduleData.topics.map((topic, index) => (
          <Link href={`/modules/${moduleData.slug}/${topic.slug}`} key={topic.id}>
            <div className="group border border-border/50 rounded-xl p-6 bg-card hover:border-primary/50 hover:shadow-md transition-all flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {topic.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-muted-foreground">
                  +{topic.xpReward} XP
                </div>
                <Button variant="ghost" size="icon" className="group-hover:bg-primary/10 group-hover:text-primary">
                  <PlayCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
