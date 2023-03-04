const { defineConfig } = require('@vue/cli-service')
import Props from 'unplugin-vue-prop/webpack'

module.exports = defineConfig({
  transpileDependencies: true,
  plugins: [
    Props()
  ]
})
