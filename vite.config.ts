import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: [
      '@babel/generator',
      '@babel/parser',
      '@vue/compiler-sfc',
      '@vue/compiler-core',
      '@vue/compiler-dom',
      '@rollup/pluginutils',
      'magic-string',
      'unplugin',
      'typescript',
    ],
  },
})
