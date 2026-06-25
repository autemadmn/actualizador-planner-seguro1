import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/actualizador-planner-seguro-/" : "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "build.html",
      output: {
        entryFileNames: "assets/app.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: (assetInfo) => assetInfo.name?.endsWith(".css") ? "assets/app.css" : "assets/[name][extname]"
      }
    }
  }
}));
