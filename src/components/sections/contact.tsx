"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin } from "@/components/icons/brands";

export function Contact() {
  return (
    <section id="contact" className="container mx-auto py-24 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center mb-16"
      >
        <Badge variant="outline">Get in Touch</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Let's Work Together
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Whether you have a question, want to collaborate on a project, or just want to say hi, 
          feel free to reach out through my professional profiles.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Professional Links</CardTitle>
              <CardDescription>
                Find me on these platforms for professional inquiries and collaboration.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row justify-center gap-8 py-8">
              <a 
                href="https://github.com/Davidpereira2803" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group transition-colors hover:text-primary"
              >
                <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Github size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">GitHub</h3>
                  <p className="text-sm text-muted-foreground">
                    @Davidpereira2803
                  </p>
                </div>
              </a>
              <div className="hidden sm:block w-px bg-zinc-800 h-16 self-center" />
              <a 
                href="https://www.linkedin.com/in/davidpereira2803/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group transition-colors hover:text-primary"
              >
                <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Linkedin size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with me
                  </p>
                </div>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
