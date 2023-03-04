import unplugin from '.'

export default function (_inlineOptions: any, nuxt: any) {
  // install vite plugin
  nuxt.hook('vite:extendConfig', async (config: any) => {
    config.plugins = config.plugins || []
    config.plugins.push(unplugin.vite())
  })
}
