import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    emptyOutDir: true,
    reportCompressedSize: false,
    outDir: '../dist/nui',
    minify: true,
    target: 'chrome103',
    sourcemap: false,

    //Doing this because fxserver's cicd doesn't wipe the dist folder
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: '[name].[ext]',
      }
    },
  },
  base: '/nui/',
  clearScreen: false,
})
