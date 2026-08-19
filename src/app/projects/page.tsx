import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { TechPill } from "@/components/ui/TechPill";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects, getProjectsByType } from "@/sanity/lib/fetch";
import { ProjectCategorySection } from "@/components/projects/ProjectCategorySection";

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
  const [featuredProjects, sqlProjects, powerBiProjects, excelProjects] =
    await Promise.all([
      getFeaturedProjects(),
      getProjectsByType("sql"),
      getProjectsByType("power-bi"),
      getProjectsByType("excel"),
    ]);

  return (
    <div className="pt-24">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Projects"
            heading="Projects &amp; Case Studies"
            description="Selected work across analytics, AI, automation, and business technology."
          />
        </Container>
      </Section>

      {/* ─── Featured Projects ────────────────────────────────────────────── */}
      {featuredProjects.length > 0 && (
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Featured"
              heading="Featured Projects"
              description="In-depth case studies showcasing end-to-end problem solving, architecture decisions, and measurable impact."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <Link
                  key={project._id}
                  href={`/projects/${project.slug.current}`}
                  className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:bg-card-hover hover:border-muted hover:-translate-y-1 transition-all duration-200"
                >
                  {/* Cover image */}
                  {project.coverImage?.asset?.url && (
                    <div className="relative h-44 overflow-hidden">
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
                      {project.technologies.slice(0, 5).map((tech) => (
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
      )}

      {/* ─── SQL Projects Carousel ────────────────────────────────────────── */}
      <ProjectCategorySection
        id="sql-projects"
        eyebrow="SQL Projects"
        heading="SQL Projects"
        description="Projects focused on querying, data exploration, transformation, joins, CTEs, window functions, and business analysis."
        projects={sqlProjects}
      />

      {/* ─── Power BI Projects Carousel ───────────────────────────────────── */}
      <ProjectCategorySection
        id="power-bi-projects"
        eyebrow="Power BI Projects"
        heading="Power BI Projects"
        description="Interactive dashboards, data modeling, DAX measures, KPI design, and management-focused decision support."
        projects={powerBiProjects}
      />

      {/* ─── Excel Projects Carousel ──────────────────────────────────────── */}
      <ProjectCategorySection
        id="excel-projects"
        eyebrow="Excel Projects"
        heading="Excel Projects"
        description="Excel-based solutions covering analysis, reporting, Power Query, Power Pivot, MIS, and practical business tools."
        projects={excelProjects}
      />
    </div>
  );
}
