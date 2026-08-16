"use client";

import { Badge } from "@/components/ui/Badge";
import { TechPill } from "@/components/ui/TechPill";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Project } from "@/types/portfolio";
import { ExternalLink, Github } from "lucide-react";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <Container>
        <AnimatedSection>
          {/* Category badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.category.map((cat) => (
              <Badge key={cat} variant="primary">
                {cat}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-[length:var(--font-size-display)] font-bold text-foreground leading-tight">
            {project.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-[length:var(--font-size-h3)] text-muted-foreground font-light">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="mt-6 text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground max-w-3xl">
            {project.description}
          </p>

          {/* CTAs */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  external
                  variant="primary"
                  size="lg"
                  icon={<ExternalLink className="h-4 w-4" />}
                >
                  Launch Prototype
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  external
                  variant="secondary"
                  size="lg"
                  icon={<Github className="h-4 w-4" />}
                >
                  GitHub
                </Button>
              )}
            </div>
          )}

          {/* Tech preview */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechPill key={tech} label={tech} />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
