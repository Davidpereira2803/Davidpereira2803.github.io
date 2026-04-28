import fs from "node:fs";

const allowedCategories = new Set([
  "Web",
  "Mobile",
  "Robotics",
  "Embedded",
  "Infrastructure",
  "AI/ML",
  "Tools"
]);

const file = process.argv[2];
if (!file) {
  throw new Error("Usage: node scripts/validate-project.mjs <path-to-project-json>");
}

if (!fs.existsSync(file)) {
  throw new Error(`Project metadata file not found: ${file}`);
}

const data = JSON.parse(fs.readFileSync(file, "utf8"));

const requiredStrings = ["slug", "title", "description", "link", "repo", "category"];

for (const key of requiredStrings) {
  if (typeof data[key] !== "string" || !data[key].trim()) {
    throw new Error(`Invalid or missing string: ${key}`);
  }
}

if (!Array.isArray(data.tags)) {
  throw new Error("tags must be an array");
}

const hasPrimaryImage = typeof data.image === "string" && !!data.image.trim();
const hasFallbackImage =
  Array.isArray(data.images) &&
  data.images.some((img) => typeof img === "string" && !!img.trim());

if (!hasPrimaryImage && !hasFallbackImage) {
  throw new Error("Invalid or missing media: provide image or at least one images[] entry");
}

if (!allowedCategories.has(data.category)) {
  throw new Error(`Invalid category: ${data.category}`);
}

console.log("project metadata valid");