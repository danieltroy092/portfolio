import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import svgrPlugin from "vite-plugin-svgr";

const __dirname = import.meta.dirname;

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@sections": path.resolve(__dirname, "./src/sections"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  plugins: [react(), tailwindcss(), svgrPlugin()],
});
