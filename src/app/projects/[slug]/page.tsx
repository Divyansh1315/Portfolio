import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProjectBySlug, getProjectSlugs, getAllProjects } from "@/sanity/lib/fetch";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectOverview } from "@/components/projects/ProjectOverview";
import { ProjectProblem } from "@/components/projects/ProjectProblem";
import { ProjectRole } from "@/components/projects/ProjectRole";
import { ProjectSolution } from "@/components/projects/ProjectSolution";
import { ProjectArchitecture } from "@/components/projects/ProjectArchitecture";
import { ProjectFeatures } from "@/components/projects/ProjectFeatures";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectTechStack } from "@/components/projects/ProjectTechStack";
import { ProjectValue } from "@/components/projects/ProjectValue";
import { ProjectChallenges } from "@/components/projects/ProjectChallenges";
import { ProjectLearnings } from "@/components/projects/ProjectLearnings";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const title = project.seoTitle || project.title;
  const description = project.seoDescription ||
    (project.description.length > 160
      ? project.description.slice(0, 157) + "..."
      : project.description);

  const ogImage = project.seoImage?.asset?.url ||
    project.coverImage?.asset?.url;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Divyansh Singh`,
      description,
      type: "article",
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: `${project.title} cover image` }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Divyansh Singh`,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const [project, allProjects] = await Promise.all([
    getProjectBySlug(slug),
    getAllProjects(),
  ]);

  if (!project) {
    notFound();
  }

  // Map to shapes expected by existing components
  const heroProject = {
    slug: project.slug.current,
    title: project.title,
    subtitle: project.subtitle,
    category: project.category,
    description: project.description,
    technologies: project.technologies,
    featured: project.featured,
    liveUrl: project.liveUrl,
    githubUrl: project.githubUrl,
  };

  const screenshots = (project.screenshots || []).map((ss) => ({
    src: ss.image?.asset?.url,
    title: ss.title,
    description: ss.description,
    alt: ss.alt,
  }));

  const architecture = (project.architecture || []).map((a) => ({
    title: a.title,
    description: a.description,
  }));

  const features = (project.features || []).map((f) => ({
    title: f.title,
    description: f.description,
    icon: f.icon,
  }));

  const techGroups = (project.techGroups || []).map((tg) => ({
    label: tg.label,
    items: tg.items,
  }));

  const challenges = (project.challenges || []).map((c) => ({
    challenge: c.challenge,
    decision: c.decision,
  }));

  // Navigation: map all projects for prev/next
  const projectSlugs = allProjects.map((p) => ({
    slug: p.slug.current,
    title: p.title,
  }));

  return (
    <div>
      <ProjectHero project={heroProject} />

      {project.overview && (
        <>
          <ProjectOverview caseStudy={{ overview: project.overview }} />
          {project.businessProblem && project.businessProblem.length > 0 && (
            <ProjectProblem problems={project.businessProblem} objective={project.objective || ""} />
          )}
          {project.roleDetails && project.roleDetails.length > 0 && (
            <ProjectRole role={project.roleDetails} />
          )}
          {project.solution && (
            <ProjectSolution solution={project.solution} />
          )}
          {architecture.length > 0 && (
            <ProjectArchitecture steps={architecture} />
          )}
          {features.length > 0 && (
            <ProjectFeatures features={features} />
          )}
          {screenshots.length > 0 && (
            <ProjectGallery
              screenshots={screenshots}
              confidentialityNote={project.confidentialityNote}
            />
          )}
          {techGroups.length > 0 && (
            <ProjectTechStack techGroups={techGroups} />
          )}
          {project.businessValue && project.businessValue.length > 0 && (
            <ProjectValue values={project.businessValue} />
          )}
          {challenges.length > 0 && (
            <ProjectChallenges challenges={challenges} />
          )}
          {project.learnings && project.learnings.length > 0 && (
            <ProjectLearnings learnings={project.learnings} />
          )}
        </>
      )}

      <ProjectNavigation currentSlug={project.slug.current} allProjects={projectSlugs} />
    </div>
  );
}
