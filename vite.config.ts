import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Set the limit to an appropriate value
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/Theme/Scss/_variables.scss';`, // Import global variables
      },
    },
  }
})
