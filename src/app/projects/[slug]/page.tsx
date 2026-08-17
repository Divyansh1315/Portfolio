import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCaseStudyView } from "@/components/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const description = project.description.length > 160
    ? project.description.slice(0, 157) + "..."
    : project.description;

  return {
    title: project.title,
    description,
    openGraph: {
      title: `${project.title} | Divyansh Singh`,
      description,
      type: "article",
      images: project.image
        ? [{ url: project.image, width: 1200, height: 630, alt: `${project.title} cover image` }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Divyansh Singh`,
      description,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudyView project={project} />;
}
