import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      input: '/JS/main.js',
    },
  },
})