import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const projectFile = process.argv[2];

if (!projectFile) {
  throw new Error("Usage: node scripts/upsert-project-in-ts.mjs <path-to-project-json>");
}

if (!fs.existsSync(projectFile)) {
  throw new Error(`Project metadata file not found: ${projectFile}`);
}

const tsFile = path.resolve("src/data/projects.ts");

if (!fs.existsSync(tsFile)) {
  throw new Error(`Target file not found: ${tsFile}`);
}

const incomingProject = JSON.parse(fs.readFileSync(projectFile, "utf8"));

if (Array.isArray(incomingProject.image)) {
  if (!Array.isArray(incomingProject.images)) {
    incomingProject.images = incomingProject.image;
  }
  incomingProject.image = incomingProject.image.find((img) => typeof img === "string" && !!img.trim()) || "";
}

if ((!incomingProject.image || !String(incomingProject.image).trim()) && Array.isArray(incomingProject.images)) {
  const fallbackImage = incomingProject.images.find((img) => typeof img === "string" && !!img.trim());
  if (fallbackImage) {
    incomingProject.image = fallbackImage;
  }
}

const source = fs.readFileSync(tsFile, "utf8");
const blockRegex = /export const PROJECTS: Project\[\] = ([\s\S]*?)( as const)?;/;
const match = source.match(blockRegex);

if (!match) {
  throw new Error("Could not find PROJECTS export block in src/data/projects.ts");
}

const currentProjects = vm.runInNewContext(`(${match[1]})`);

if (!Array.isArray(currentProjects)) {
  throw new Error("PROJECTS export is not an array");
}

const existingIndex = currentProjects.findIndex((project) => project?.slug === incomingProject.slug);
let operation = "added";

if (existingIndex >= 0) {
  currentProjects[existingIndex] = incomingProject;
  operation = "updated";
} else {
  currentProjects.push(incomingProject);
}

const asConstSuffix = match[2] || "";
const updatedBlock = `export const PROJECTS: Project[] = ${JSON.stringify(currentProjects, null, 2)}${asConstSuffix};`;
const updatedSource = source.replace(blockRegex, updatedBlock);

fs.writeFileSync(tsFile, updatedSource);
console.log(`${operation} project '${incomingProject.slug}' in ${tsFile}`);
