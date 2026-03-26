import { PROJECTS } from "@/data/projects";
import { notFound } from "next/navigation";
import { ProjectDetails } from "@/components/sections/project-details";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
