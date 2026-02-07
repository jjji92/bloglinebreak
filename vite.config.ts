import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

function preloadHomePageChunk() {
  return {
    name: "preload-homepage-chunk",
    apply: "build",
    writeBundle(options: { dir?: string }, bundle: Record<string, { type?: string }>) {
      const homeChunk = Object.keys(bundle).find(
        (name) => name.includes("HomePage") && name.endsWith(".js") && bundle[name].type === "chunk"
      );
      if (!homeChunk) return;
      const outDir = options.dir ?? "dist";
      const indexPath = path.join(outDir, "index.html");
      if (!fs.existsSync(indexPath)) return;
      const href = "/" + homeChunk.replace(/\\/g, "/");
      const preload = `    <link rel="modulepreload" href="${href}">`;
      const html = fs.readFileSync(indexPath, "utf-8");
      const newHtml = html.replace("</head>", `${preload}\n  </head>`);
      fs.writeFileSync(indexPath, newHtml);
    },
  };
}

export default defineConfig({
  plugins: [react(), preloadHomePageChunk()],
  server: {
    port: 5173
  }
});
