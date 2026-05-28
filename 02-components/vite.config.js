import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite's default port is changed to 3000 as required by the exercise.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
