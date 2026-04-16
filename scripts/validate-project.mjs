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

const requiredStrings = ["slug", "title", "description", "link", "repo", "image", "category"];

for (const key of requiredStrings) {
  if (typeof data[key] !== "string" || !data[key].trim()) {
    throw new Error(`Invalid or missing string: ${key}`);
  }
}

if (!Array.isArray(data.tags)) {
  throw new Error("tags must be an array");
}

if (!allowedCategories.has(data.category)) {
  throw new Error(`Invalid category: ${data.category}`);
}

console.log("project metadata valid");