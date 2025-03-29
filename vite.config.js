import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'index.js',
      name: 'Floorion',
      fileName: 'floorion',
    },
    rollupOptions: {
      external: ['konva'],
      output: {
        globals: {
          konva: 'Konva'
        }
      }
    }
  }
})