import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
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