import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copy } from 'vite-plugin-copy'; // Importe a função 'copy'

export default defineConfig({
  plugins: [
    react(),
    copy({
      patterns: [
        { from: 'public', to: 'dist' }, // Configuração de cópia
      ],
    }),
  ],
  base: "./",
  build: {
    rollupOptions: {
      output: {
        // ...
      },
    },
  },
});
