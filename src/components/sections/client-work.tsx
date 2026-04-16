"use client";

import { motion } from "framer-motion";
import { CLIENT_PROJECTS } from "@/data/clients";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function ClientWork() {
  // If no client projects, don't render the section
  if (CLIENT_PROJECTS.length === 0) return null;

  return (
    <section id="client-work" className="container mx-auto py-24 px-4 md:px-6 border-t border-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center mb-12"
      >
        <Badge variant="outline">Client Work</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Professional Engagements
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Tailored solutions and successful collaborations with various clients and companies.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {CLIENT_PROJECTS.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group relative overflow-hidden bg-zinc-950 border-zinc-900 h-full flex flex-col hover:border-primary/50 transition-all duration-500 shadow-2xl">
              <Link href={`/projects/${project.slug}`} className="cursor-pointer">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-80" />
                  
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-primary/90 text-white backdrop-blur-md border-none">
                      {project.clientName}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-black/50 backdrop-blur-md border border-white/10 text-xs text-white">
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
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-primary/80 font-medium">
                    {project.serviceType}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {project.testimonial && (
                    <div className="relative p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 italic text-sm text-muted-foreground">
                      <Quote size={16} className="absolute -top-2 -left-2 text-primary opacity-50" />
                      "{project.testimonial.quote}"
                    </div>
                  )}
                </CardContent>
              </Link>
              <CardFooter className="flex flex-wrap gap-2 pt-0">
                {project.link && project.link !== "#" && project.link !== "" && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={buttonVariants({ size: "sm", className: "w-full sm:w-auto" })}
                  >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Site
                  </a>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
