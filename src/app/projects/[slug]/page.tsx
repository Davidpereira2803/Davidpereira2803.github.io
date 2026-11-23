import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { CLIENT_PROJECTS } from "@/data/clients";
import { notFound } from "next/navigation";
import { ProjectDetails } from "@/components/sections/project-details";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = [...PROJECTS, ...CLIENT_PROJECTS].find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: { title: project.title, description: project.description, url: `/projects/${project.slug}/` },
  };
}

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

  return <ProjectDetails project={project} />;
}
