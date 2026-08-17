import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { TechPill } from "@/components/ui/TechPill";
import { ArrowRight } from "lucide-react";
import { getAllProjects } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies and projects by Divyansh Singh across data analytics, AI, automation, and business technology solutions.",
  openGraph: {
    title: "Projects | Divyansh Singh",
    description:
      "Case studies and projects by Divyansh Singh across data analytics, AI, automation, and business technology solutions.",
  },
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

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
                key={project._id}
                href={`/projects/${project.slug.current}`}
                className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:bg-card-hover hover:border-muted hover:-translate-y-1 transition-all duration-200"
              >
                {/* Cover image */}
                {project.coverImage?.asset?.url && (
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={project.coverImage.asset.url}
                      alt={project.coverImage.alt || `${project.title} cover`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}

                <div className="flex flex-col flex-1 p-6">
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
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
