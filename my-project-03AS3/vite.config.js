import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure build output is in dist/
    assetsDir: '',   // Optional: Ensure all assets are placed at the root
  }
});
