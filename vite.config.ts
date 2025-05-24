import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Add the base path here
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
