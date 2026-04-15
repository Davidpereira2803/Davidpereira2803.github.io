import fs from "node:fs";
import path from "node:path";

const dataDir = path.resolve("data/projects");
const outputFile = path.resolve("src/data/project.ts");

const files = fs.existsSync(dataDir)
  ? fs.readdirSync(dataDir).filter((f) => f.endsWith(".json"))
  : [];

const projects = files
  .map((file) => {
    const fullPath = path.join(dataDir, file);
    return JSON.parse(fs.readFileSync(fullPath, "utf8"));
  })
  .sort((a, b) => {
    if (!!b.featured !== !!a.featured) return Number(b.featured) - Number(a.featured);
    return a.title.localeCompare(b.title);
  });

const content = `export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  link: string;
  repo: string;
  productPage?: string;
  image: string;
  images?: string[];
  category: "Web" | "Mobile" | "Robotics" | "Embedded" | "Infrastructure" | "AI/ML" | "Tools";
  featured?: boolean;
  status?: string;
}

export const PROJECTS: Project[] = ${JSON.stringify(projects, null, 2)} as const;
`;

fs.writeFileSync(outputFile, content);
console.log(`Generated ${outputFile} with ${projects.length} projects.`);