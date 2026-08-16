"use client";

import Link from "next/link";
import { Project } from "@/types/portfolio";
import { TechPill } from "@/components/ui/TechPill";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

interface ProjectCardsProps {
  projects: Project[];
}

export function ProjectCards({ projects }: ProjectCardsProps) {
  return (
    <StaggerContainer
      className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
      staggerDelay={0.12}
    >
      {projects.map((project) => (
        <StaggerItem key={project.slug}>
          <Link
            href={`/projects/${project.slug}`}
            className="group relative flex flex-col h-full rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          >
            {/* Project Preview */}
            <ProjectPreview project={project} />

            {/* Card Content */}
            <div className="flex flex-col flex-1 p-6">
              {/* Category Badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.category.slice(0, 3).map((cat) => (
                  <Badge key={cat} variant="primary">
                    {cat}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-muted-foreground mb-3">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech) => (
                  <TechPill key={tech} label={tech} />
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                <span>View Case Study</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="relative h-48 bg-gradient-to-br from-surface-secondary to-surface flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      <div className="absolute top-4 right-4 w-20 h-20 border border-border/50 rounded-lg rotate-12 opacity-30" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border border-border/50 rounded-full opacity-20" />

      {/* Project Name Fallback */}
      <div className="relative text-center px-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground/60 mb-2">
          Project Preview
        </p>
        <p className="text-lg font-semibold text-foreground/80">
          {project.title}
        </p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
