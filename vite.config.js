import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Ensures React Router works with history mode
  },
  build: {
    outDir: 'dist', // Output directory for production build, should match amplify.yml
    sourcemap: true, // Optional: enable source maps for debugging production code
  },
  base: '/', // Ensure this matches the root path of your application or adjust if using a subdirectory
});
