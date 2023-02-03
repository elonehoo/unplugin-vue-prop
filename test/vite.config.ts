/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Props from 'unplugin-vue-prop/vite'


// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
  },
  plugins: [
    vue(),
    Props({
      configPath: path.resolve(__dirname, './tsconfig.json')
    })
  ],
})

