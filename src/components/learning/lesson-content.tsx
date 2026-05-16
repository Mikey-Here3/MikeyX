import { MDXRemote } from "next-mdx-remote/rsc";
import { cn } from "@/lib/utils";

interface LessonContentProps {
  source: string;
}

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-semibold tracking-tight mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />,
  ul: (props: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
  ol: (props: any) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
  li: (props: any) => <li className="leading-7" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground" {...props} />
  ),
  a: (props: any) => (
    <a className="font-medium text-primary underline underline-offset-4 hover:text-primary/80" {...props} />
  ),
  code: (props: any) => {
    // If the code block is inline
    if (typeof props.children === 'string' && !props.children.includes('\n')) {
      return <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-primary" {...props} />;
    }
    // Block code (handled by pre usually, but just in case)
    return <code className="relative rounded font-mono text-sm" {...props} />;
  },
  pre: (props: any) => (
    <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 px-4 text-zinc-50 dark:bg-zinc-900" {...props} />
  ),
};

export const LessonContent = ({ source }: LessonContentProps) => {
  return (
    <div className={cn("max-w-none w-full text-foreground")}>
      <MDXRemote source={source} components={components} />
    </div>
  );
};
