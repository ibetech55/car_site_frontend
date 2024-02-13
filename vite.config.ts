import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path'

export default defineConfig({
  base: "http://localhost:3000",
  server: {
    port: 3000, // Use the same port for dev and serve
  },
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Set the limit to an appropriate value
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },

    },
  },
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif", "**/*.svg"],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/Theme/Scss/_variables.scss';`, // Import global variables
      },
    },
  },
  resolve: {
    alias: {
      process: "process/browser",
    },
  },
});
