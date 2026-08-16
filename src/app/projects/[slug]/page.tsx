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
    return { title: "Project Not Found | Divyansh Singh" };
  }

  return {
    title: `${project.title} | Divyansh Singh`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Divyansh Singh`,
      description: project.description,
      type: "article",
      ...(project.image && { images: [{ url: project.image }] }),
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
