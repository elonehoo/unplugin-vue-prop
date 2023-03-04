import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import Props from 'unplugin-vue-prop/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Props(),
  ],
})
