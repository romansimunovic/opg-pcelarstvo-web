import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // <-- OVO MORA BITI TU za Tailwind v4!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- I OVO!
  ],
});