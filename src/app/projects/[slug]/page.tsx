import { PROJECTS } from "@/data/projects";
import { CLIENT_PROJECTS } from "@/data/clients";
import { notFound } from "next/navigation";
import { ProjectDetails } from "@/components/sections/project-details";

export async function generateStaticParams() {
  const allProjects = [...PROJECTS, ...CLIENT_PROJECTS];
  return allProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const allProjects = [...PROJECTS, ...CLIENT_PROJECTS];
  const project = allProjects.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  // Note: We need to cast to any or a common interface because Project and ClientProject are slightly different
  return <ProjectDetails project={project as any} />;
}
