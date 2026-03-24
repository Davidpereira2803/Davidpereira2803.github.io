"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Experience() {
  return (
    <section id="experience" className="container mx-auto py-24 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center mb-16"
      >
        <Badge variant="outline">Career</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Experience
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          My professional journey and industry experience.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:-translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary transform md:-translate-x-1/2 ring-4 ring-background" />

              <div className="flex-1 ml-6 md:ml-0">
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="text-xl font-bold text-white">
                          {exp.role}
                        </CardTitle>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {exp.date}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-zinc-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Empty space for the other side of the timeline */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
