// REEMPLAZAR POR LOGO REAL.
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
mkdirSync("public", { recursive: true });
const png = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", "base64");
for (const f of ["public/power-electronics-transparente.webp", "public/excellogo.png"]) if (!existsSync(resolve(f))) writeFileSync(resolve(f), png);
