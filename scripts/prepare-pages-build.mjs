import fs from "fs";
import path from "path";

const distPath = path.resolve("dist");
const buildFile = path.join(distPath, "build.html");
const indexFile = path.join(distPath, "index.html");
const notFoundFile = path.join(distPath, "404.html");

if (fs.existsSync(buildFile)) {
  fs.copyFileSync(buildFile, indexFile);
  fs.copyFileSync(buildFile, notFoundFile);
  console.log("build.html copiado a index.html y 404.html");
} else {
  console.warn("build.html no encontrado en dist");
}
