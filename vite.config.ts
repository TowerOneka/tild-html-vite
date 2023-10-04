import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import autoprefixer from "autoprefixer";
import path from "path";

// "@typescript-eslint/parser": "^6.0.0",
// "eslint-plugin-canonical": "^4.12.0",

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths({ loose: true }), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },
  },
});
