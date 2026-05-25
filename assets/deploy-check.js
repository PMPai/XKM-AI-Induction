const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const htmlFiles = fs.readdirSync(root).filter((file) => file.endsWith(".html"));
const requiredFiles = [
  ".nojekyll",
  "assets/styles.css",
  "assets/site.js",
  "assets/hero-dashboard.png",
];

const failures = [];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    failures.push(`Missing required file: ${file}`);
  }
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  if (!html.includes('<style id="xkm-inline-styles">')) {
    failures.push(`${file}: missing inline style fallback`);
  }
  if (!html.includes('<script id="xkm-inline-script">')) {
    failures.push(`${file}: missing inline animation script fallback`);
  }
  if (!html.includes("data:image/png;base64,")) {
    failures.push(`${file}: missing embedded hero image fallback`);
  }
  if (!html.includes('href="./assets/styles.css"')) {
    failures.push(`${file}: stylesheet should use ./assets/styles.css`);
  }
  if (!html.includes('src="./assets/site.js"')) {
    failures.push(`${file}: script should use ./assets/site.js`);
  }
  if (html.includes('href="assets/') || html.includes('src="assets/')) {
    failures.push(`${file}: contains non-explicit asset path`);
  }
}

const css = fs.readFileSync(path.join(root, "assets", "styles.css"), "utf8");
if (!css.includes('url("./hero-dashboard.png")')) {
  failures.push("styles.css: hero image should use ./hero-dashboard.png");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Deployment check passed for ${htmlFiles.length} standalone HTML pages.`);
