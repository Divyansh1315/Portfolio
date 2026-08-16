import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { TechPill } from "@/components/ui/TechPill";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Projects"
            heading="Projects &amp; Case Studies"
            description="A selection of projects across analytics, AI, automation, and business problem-solving."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 hover:bg-card-hover hover:border-muted hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.category.map((cat) => (
                    <Badge key={cat} variant="primary">
                      {cat}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.subtitle}
                </p>
                <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <TechPill key={tech} label={tech} />
                  ))}
                </div>
                <div className="mt-auto pt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  View Case Study
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
