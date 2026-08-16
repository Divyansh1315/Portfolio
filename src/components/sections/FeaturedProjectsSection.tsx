import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectCards } from "./ProjectCards";

export function FeaturedProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          eyebrow="FEATURED WORK"
          heading="Things I've Built"
          description="Real-world projects combining business context, data, automation, and artificial intelligence."
        />
        <ProjectCards projects={featuredProjects} />
      </Container>
    </Section>
  );
}
