"use client";

import { PROJECTS } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink, ArrowLeft, Globe } from "lucide-react";
import { Github } from "@/components/icons/brands";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-24 px-4 md:px-6">
      <Link
        href="/#projects"
        className={buttonVariants({ variant: "ghost", className: "mb-8 gap-2" })}
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href={project.image} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl group cursor-zoom-in"
          >
            {project.image.endsWith('.mp4') ? (
              <video
                src={project.image}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white">Click to view</span>
            </div>
          </a>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {project.images?.map((img, i) => {
              // Skip the first one if it's identical to the main cover image
              if (img === project.image) return null;
              
              const isVideo = img.endsWith('.mp4');
              return (
                <a 
                  key={i} 
                  href={img} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative aspect-video overflow-hidden rounded-xl border border-white/10 group cursor-zoom-in"
                >
                  {isVideo ? (
                    <video
                      src={img}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white">Click to view</span>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div>
            <Badge variant="outline" className="mb-4">{project.category}</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              {project.title}
            </h1>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.longDescription || project.description}
            </p>
            {project.status && (
              <p className="mt-4 font-mono text-sm text-primary uppercase tracking-widest">
                Status: {project.status}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            {project.repo && project.repo !== "#" && project.repo !== "" && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg", className: "gap-2" })}
              >
                <Github size={20} /> View Source Code
              </a>
            )}
            {project.productPage && project.productPage !== "" && (
              <a
                href={project.productPage}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "secondary", size: "lg", className: "gap-2" })}
              >
                <Globe size={20} /> Visit Product Page
              </a>
            )}
            {project.link && project.link !== "#" && project.link !== "" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline", size: "lg", className: "gap-2" })}
              >
                <ExternalLink size={20} /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
