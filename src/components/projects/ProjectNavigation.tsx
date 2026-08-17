import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

interface ProjectNavigationProps {
  currentSlug: string;
  allProjects: { slug: string; title: string }[];
}

export function ProjectNavigation({ currentSlug, allProjects }: ProjectNavigationProps) {
  const currentIndex = allProjects.findIndex((p) => p.slug === currentSlug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <section className="py-(--spacing-section-y) border-t border-border">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Previous */}
          <div className="flex justify-start">
            {prevProject && (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-muted transition-all"
              >
                <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Previous</p>
                  <p className="text-sm font-medium text-foreground truncate">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            )}
          </div>

          {/* All Projects */}
          <div className="flex justify-center">
            <Link
              href="/projects"
              className="group flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-muted transition-all"
            >
              <LayoutGrid className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium text-foreground">All Projects</span>
            </Link>
          </div>

          {/* Next */}
          <div className="flex justify-end">
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-muted transition-all"
              >
                <div className="min-w-0 text-right">
                  <p className="text-xs text-muted-foreground">Next</p>
                  <p className="text-sm font-medium text-foreground truncate">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
