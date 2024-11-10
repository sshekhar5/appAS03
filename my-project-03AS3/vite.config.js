import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory for the build files
    assetsDir: '',   // Optional: Make sure assets are in the root folder
    sourcemap: false // Optionally, disable sourcemaps for production
  }
});
