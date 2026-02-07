import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

function preloadCriticalChunks() {
  return {
    name: "preload-critical-chunks",
    apply: "build",
    writeBundle(options: { dir?: string }, bundle: Record<string, { type?: string }>) {
      const chunkNames = Object.keys(bundle).filter(
        (name) => name.endsWith(".js") && bundle[name].type === "chunk"
      );
      const homeChunk = chunkNames.find((n) => n.includes("HomePage"));
      const siteConfigChunk = chunkNames.find((n) => n.includes("siteConfig"));
      const toPreload = [homeChunk, siteConfigChunk].filter(Boolean) as string[];
      if (toPreload.length === 0) return;
      const outDir = options.dir ?? "dist";
      const indexPath = path.join(outDir, "index.html");
      if (!fs.existsSync(indexPath)) return;
      const preloads = toPreload
        .map((name) => `    <link rel="modulepreload" href="/${name.replace(/\\/g, "/")}">`)
        .join("\n");
      const html = fs.readFileSync(indexPath, "utf-8");
      const newHtml = html.replace("</head>", `${preloads}\n  </head>`);
      fs.writeFileSync(indexPath, newHtml);
    },
  };
}

export default defineConfig({
  plugins: [react(), preloadCriticalChunks()],
  server: {
    port: 5173
  }
});
