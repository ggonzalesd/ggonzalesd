import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const root = resolve(__dirname, 'src/pages');
const publicDir = resolve(__dirname, 'public');
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  base: '/app',
  root,
  publicDir,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
      },
    },
  },
  resolve: {
    alias: { '@': resolve(__dirname, './src') },
  },
});
