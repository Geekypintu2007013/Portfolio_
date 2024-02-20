import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    rollupOptions: {
      external: ["react-icons/Gi", "react-icons/Lu", "react-icons/Bi"],
    },
  },
});
