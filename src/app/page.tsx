/**
 * MikeyX Landing Page (Phase 1 Placeholder)
 * 
 * Full landing page will be built in Phase 3.
 * This confirms the app is running correctly.
 */
import { Button, buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";
import { ArrowRight, Code2, BookOpen, Brain, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo size="md" />
          <div className="flex items-center gap-4">
            <Link href="/login" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              Sign In
            </Link>
            <Link href="/register" className={buttonVariants({ size: "sm" })}>
              Get Started <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Zap className="mr-2 h-3.5 w-3.5" />
              From Zero to Professional Developer
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Master Programming
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent">
                From Scratch
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              The deepest learning ecosystem for absolute beginners. Understand
              every concept visually — from what code is, to building
              real-world applications.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register" className={buttonVariants({ size: "lg", className: "text-base px-8 h-12" })}>
                Start Learning — It&apos;s Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/roadmaps" className={buttonVariants({ variant: "outline", size: "lg", className: "text-base px-8 h-12" })}>
                View Roadmap
              </Link>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Deep Understanding",
                desc: "Every concept explained with history, analogies, visuals, and real-world usage.",
              },
              {
                icon: Code2,
                title: "Interactive Practice",
                desc: "Write real code in a built-in editor. Quizzes, challenges, and debugging exercises.",
              },
              {
                icon: Brain,
                title: "Knowledge Retention",
                desc: "Spaced repetition, flashcards, knowledge graphs, and mistake tracking.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MikeyX. Built with ❤️ for learners.
        </div>
      </footer>
    </div>
  );
}
