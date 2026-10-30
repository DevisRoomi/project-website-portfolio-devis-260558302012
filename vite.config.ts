import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:
    process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true'
      ? '/project-website-portfolio-devis-260558302012/'
      : '/',
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react_core: ['react', 'react-dom'],
          animation_engine: ['gsap'],
          ui_icons: ['lucide-react'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
