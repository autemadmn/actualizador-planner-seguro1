import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  // Importante para GitHub Pages: rutas relativas para evitar pantalla blanca
  // si el nombre del repo no coincide exactamente con el base path.
  base: mode === "production" ? "./" : "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "build.html",
      output: {
        entryFileNames: "assets/app.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) return "assets/app.css";
          return "assets/[name][extname]";
        }
      }
    }
  }
}));
