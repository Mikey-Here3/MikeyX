import { Metadata } from "next";
import { ModuleCard } from "@/components/learning/module-card";
import { getModules } from "@/server/actions/learning-actions";

export const metadata: Metadata = {
  title: "Modules | MikeyX",
  description: "Explore learning modules",
};

export default async function ModulesPage() {
  const modules = await getModules();

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Learning Modules</h1>
        <p className="text-muted-foreground mt-2">
          Explore our curriculum and start learning new skills today.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, index) => (
          <ModuleCard key={module.id} module={module as any} index={index} />
        ))}
      </div>
    </div>
  );
}
