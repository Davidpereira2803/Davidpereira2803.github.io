import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const url = process.env.PORTFOLIO_URL || "http://localhost:3000";
await mkdir("docs/images", { recursive: true });
const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1100 },
    reducedMotion: "reduce",
    deviceScaleFactor: 1,
  });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.getByRole("heading", { name: /Curiosity,/ }).waitFor();
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: "docs/images/portfolio-desktop.jpg", type: "jpeg", quality: 85 });
  await page.screenshot({ path: "docs/images/portfolio-full.jpg", type: "jpeg", quality: 85, fullPage: true });
  console.log("Saved desktop and full-page README screenshots from " + url);
} finally {
  await browser.close();
}
