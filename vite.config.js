import routify from "@roxi/routify/vite-plugin";
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: './library/client',
  plugins: [svelte(), routify({})],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@use \"src/variables.scss\" as *;"
      }
    }
  }
})