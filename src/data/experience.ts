export interface Experience {
  company: string;
  role: string;
  date: string;
  description: string;
  technologies: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    company: "University of Luxembourg",
    role: "Master in Information and Computer Science",
    date: "2025 - Present",
    description: "Deepening knowledge in AI, Robotics, and Advanced Software Engineering. Focusing on intelligent systems and autonomous robotics.",
    technologies: ["AI", "Robotics", "Master's Thesis"],
  },
  {
    company: "University of Luxembourg",
    role: "Bachelor in Computer Science",
    date: "2022 - 2025",
    description: "Graduated with a strong foundation in computer science principles. Worked on high-impact projects like TEMO and RPI2-FreeRTOS.",
    technologies: ["Software Engineering", "Algorithms", "Databases"],
  },
];
