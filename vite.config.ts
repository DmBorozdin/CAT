import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr(), react()],
  build: {
    chunkSizeWarningLimit: 1048576, // Максимальный размер чанка ~ 1MB
  },
});
