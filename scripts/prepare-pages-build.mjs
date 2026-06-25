import fs from "fs";
import path from "path";
const distPath = path.resolve("dist");
const buildFile = path.join(distPath, "build.html");
const indexFile = path.join(distPath, "index.html");
if (fs.existsSync(buildFile)) fs.copyFileSync(buildFile, indexFile);
