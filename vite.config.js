import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Split heavy modules into their own chunks so the main app loads first.
    // priceList alone is ~400KB; isolating it means the app shell + KLK Farms
    // job view load instantly and the parts catalogue only downloads when a
    // worker opens the hose builder.
    rollupOptions: {
      output: {
        manualChunks: {
          priceList: ['./src/priceList.js'],
          firebase:  ['firebase/app', 'firebase/firestore', 'firebase/storage', 'firebase/auth'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
