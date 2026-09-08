import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 9173,
    strictPort: true,
  },
  preview: {
    port: 9173,
    strictPort: true,
  },
});
