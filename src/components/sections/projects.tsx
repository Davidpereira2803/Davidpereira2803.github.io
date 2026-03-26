"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Globe } from "lucide-react";
import { Github } from "@/components/icons/brands";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES = ["All", "Robotics", "Embedded", "Web", "Mobile", "Infrastructure"] as const;

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");

  const filteredProjects = PROJECTS.filter((project) => 
    activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="container mx-auto py-24 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center mb-12"
      >
        <Badge variant="outline">My Work</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Featured Projects
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          A selection of my work across robotics, web, and mobile development.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border",
              activeCategory === category
                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                : "bg-zinc-900 border-zinc-800 text-muted-foreground hover:border-zinc-700 hover:text-white"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const isVideo = project.image.endsWith('.mp4');
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group relative overflow-hidden bg-zinc-900 border-zinc-800 h-full flex flex-col hover:border-primary/50 transition-all duration-500">
                  <Link href={`/projects/${project.slug}.html`} className="cursor-pointer">
                    <div className="relative h-64 w-full overflow-hidden">
                      {isVideo ? (
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
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                      
                      <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-black/50 backdrop-blur-md border border-white/10 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* View Details Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-semibold flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform">
                          View Case Study <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      <CardDescription className="text-primary/80 font-medium">
                        {project.category}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </Link>
                  <CardFooter className="flex flex-wrap gap-2 pt-0">
                    {project.repo && project.repo !== "#" && project.repo !== "" && (
                      <a 
                        href={project.repo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: "outline", size: "sm" })}
                      >
                          <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    )}
                    {project.productPage && project.productPage !== "" && (
                      <a 
                        href={project.productPage} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: "secondary", size: "sm" })}
                      >
                          <Globe className="mr-2 h-4 w-4" /> Product
                      </a>
                    )}
                    {project.link && project.link !== "#" && project.link !== "" && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={buttonVariants({ size: "sm" })}
                      >
                          <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </a>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
