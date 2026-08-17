import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCards } from "./ProjectCards";
import type { SanityProject, SanityHomepageContent } from "@/sanity/lib/types";

interface FeaturedProjectsSectionProps {
  projects: SanityProject[];
  homepage: SanityHomepageContent | null;
}

export function FeaturedProjectsSection({ projects, homepage }: FeaturedProjectsSectionProps) {
  if (projects.length === 0) return null;

  // Map Sanity projects to the shape ProjectCards expects
  const mapped = projects.map((p) => ({
    slug: p.slug.current,
    title: p.title,
    subtitle: p.subtitle,
    category: p.category,
    description: p.description,
    technologies: p.technologies,
    featured: p.featured,
    image: p.coverImage?.asset?.url,
  }));

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          eyebrow={homepage?.projectsEyebrow || "FEATURED WORK"}
          heading={homepage?.projectsHeading || "Things I've Built"}
          description={homepage?.projectsDescription || "Real-world projects combining business context, data, automation, and artificial intelligence."}
        />
        <ProjectCards projects={mapped} />
      </Container>
    </Section>
  );
}
