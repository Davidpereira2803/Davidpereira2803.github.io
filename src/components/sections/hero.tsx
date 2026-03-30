"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-24 text-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] bg-purple-500/10 blur-[100px]" />
        <div className="absolute top-0 right-0 h-[300px] w-[300px] bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="z-10 flex max-w-4xl flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-primary backdrop-blur-sm">
            Available for new opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 pb-4"
        >
          David Pereira <br className="hidden sm:block" /> de Magalhães
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg text-muted-foreground sm:text-xl mt-4"
        >
          Master's student in Information and Computer Sciences at the University of Luxembourg. 
          Building innovative solutions at the intersection of AI, robotics, and embedded systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a href="#projects" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
            View Work <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
