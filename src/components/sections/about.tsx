"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Cpu, Globe, Code2 } from "lucide-react";

const SKILLS = [
  "Python",
  "ROS2",
  "JavaScript",
  "React",
  "Java",
  "C",
  "Embedded Systems",
  "CAN BUS",
  "FreeRTOS",
  "MicroK8s",
  "Docker",
  "Linux",
];

const FEATURES = [
  {
    icon: Bot,
    title: "Robotics & AI",
    description:
      "Developing intelligent autonomous systems and drone control logic using ROS2 and Computer Vision.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description:
      "Designing low-level software for microcontrollers, CAN BUS communication, and real-time operating systems.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building modern, responsive web applications using React, Next.js, and cloud technologies.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Applying strong computer science fundamentals to write clean, efficient, and maintainable code.",
  },
];

export function About() {
  return (
    <section id="about" className="container mx-auto py-24 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center mb-16"
      >
        <Badge variant="outline" className="px-3 py-1">
          About Me
        </Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          More than just code
        </h2>
        <div className="max-w-[800px] text-muted-foreground md:text-lg flex flex-col gap-4">
          <p>
            I hold a Bachelor's degree in Computer Science from the University of Luxembourg and am currently 
            a first-year student in the Master in Information and Computer Science at the same university. 
            I am passionate about software development and technology, and I enjoy working on projects that 
            connect theory with practical applications.
          </p>
          <p>
            During my academic journey, I have gained experience across a wide range of programming languages 
            and technologies, from web development to embedded systems and robotics. My focus areas include 
            real-time operating systems, CAN bus communication, and drone control systems.
          </p>
        </div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <feature.icon size={24} />
                </div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 flex flex-col items-center gap-6"
      >
        <h3 className="text-2xl font-bold">Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
          {SKILLS.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="px-4 py-2 text-sm bg-zinc-800 hover:bg-zinc-700"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
