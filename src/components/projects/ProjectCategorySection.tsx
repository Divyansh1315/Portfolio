import { Container } from "@/components/ui/Container";
import { ProjectCarousel } from "@/components/projects/ProjectCarousel";
import type { SanityProject } from "@/sanity/lib/types";

interface ProjectCategorySectionProps {
  id: string;
  eyebrow: string;
  heading: string;
  description: string;
  projects: SanityProject[];
}

/**
 * Server component that renders a categorized project section with carousel.
 * Hides itself entirely when projects array is empty.
 */
export function ProjectCategorySection({
  id,
  eyebrow,
  heading,
  description,
  projects,
}: ProjectCategorySectionProps) {
  if (projects.length === 0) return null;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="py-(--spacing-section-y-sm)"
    >
      <Container>
        {/* Section header with space for carousel arrows */}
        <div className="relative mb-12">
          <p className="mb-3 text-[length:var(--font-size-label)] font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
          <h2
            id={`${id}-heading`}
            className="text-[length:var(--font-size-h3)] font-bold leading-tight text-foreground"
          >
            {heading}
          </h2>
          <p className="mt-3 max-w-xl text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <ProjectCarousel projects={projects} />
      </Container>
    </section>
  );
}
