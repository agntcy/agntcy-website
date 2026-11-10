// Takes screenshots of key pages at a small and a large viewport.
//
// Usage: node .github/scripts/screenshots.mjs
//
// Environment:
//   BASE_URL        Site to screenshot (default: http://localhost:3000)
//   SCREENSHOT_DIR  Output directory (default: screenshots)
//
// Exits non-zero if a page fails to load or Playwright crashes.
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
const outDir = process.env.SCREENSHOT_DIR ?? "screenshots";
const settleMs = 2000;

const pages = [
  { name: "home", path: "/" },
  { name: "articles", path: "/articles" },
  { name: "sdks", path: "/sdks" },
  { name: "supporters", path: "/supporters" },
];

// The large viewport must be >= 1024px wide so Tailwind `lg:` rules apply.
const viewports = [
  { name: "small", width: 375, height: 812 },
  { name: "large", width: 1440, height: 900 },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });
    // Pre-decline cookies so the consent banner doesn't cover the page and
    // analytics never load.
    await context.addInitScript(() =>
      localStorage.setItem("cookie_consent", "false"),
    );
    for (const page of pages) {
      const tab = await context.newPage();
      const url = new URL(page.path, baseUrl).toString();
      // "load" rather than "networkidle": third-party scripts (analytics) can
      // keep the network busy and make networkidle flaky.
      const response = await tab.goto(url, { waitUntil: "load" });
      if (!response || !response.ok()) {
        throw new Error(
          `${url} responded with ${response ? response.status() : "no response"}`,
        );
      }
      await tab.evaluate(() => document.fonts.ready);
      // Let hydration and entrance animations finish; without this the page
      // is often captured while it is still blank.
      await tab.waitForTimeout(settleMs);
      const file = path.join(outDir, `${page.name}-${viewport.name}.png`);
      await tab.screenshot({ path: file });
      console.log(`${url} @ ${viewport.width}x${viewport.height} -> ${file}`);
      await tab.close();
    }
    await context.close();
  }
} finally {
  await browser.close();
}
