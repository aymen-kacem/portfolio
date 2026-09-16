import { defineConfig } from 'vite'
import react from '@vitejs/plugin-vue' // ou @vitejs/plugin-react selon votre projet
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  // Force l'utilisation de chemins absolus pour éviter le bug de la page blanche
  base: '/',

  plugins: [
    tanstackRouter(),
    react(),
    tsconfigPaths(),
  ],

  build: {
    // Évite les plantages sur les navigateurs si le bundle utilise du JavaScript trop récent
    target: 'es2022',
    // Assure que le dossier de sortie correspond bien à ce que Render attend si vous n'utilisez pas Nitro
    outDir: 'dist',
  }
})
