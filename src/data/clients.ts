export interface ClientProject {
  slug: string;
  title: string;
  clientName: string;
  serviceType: string;
  description: string;
  longDescription?: string;
  tags: string[];
  link?: string;
  repo?: string;
  image: string;
  category: "Web" | "Mobile" | "Robotics" | "Embedded" | "Infrastructure" | "AI/ML" | "Tools";
  status?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const CLIENT_PROJECTS: ClientProject[] = [

];


/*

  {
    slug: "swiftstream-logistics-dashboard",
    title: "Global Logistics Dashboard",
    clientName: "SwiftStream Logistics",
    serviceType: "Full-Stack Development",
    description: "A real-time fleet tracking and inventory management system designed for global logistics operations.",
    longDescription: "Developed a comprehensive dashboard that integrates with IoT sensors on delivery trucks to provide real-time location tracking, fuel efficiency metrics, and automated inventory alerts. The system scaled to handle over 10,000 active assets simultaneously.",
    tags: ["React", "Node.js", "PostgreSQL", "Google Maps API", "Socket.io"],
    link: "https://example.com/demo",
    image: "https://images.unsplash.com/photo-1586769852044-692d6e3703a0?q=80&w=2070&auto=format&fit=crop",
    category: "Web",
    status: "delivered",
    testimonial: {
      quote: "The dashboard transformed how we manage our global fleet. Real-time data is now at our fingertips.",
      author: "Sarah Jenkins",
      role: "Operations Director"
    }
  }

*/