const { defineConfig } = require('@vue/cli-service')
const Props = require('unplugin-vue-prop/webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  plugins: [
    Props()
  ]
})
