import { createUnplugin, Thenable } from 'unplugin'
import { transform } from './core'
import { PLUGIN_NAME } from './core/constants'

let resolvedConfig:any

export default createUnplugin(() =>({
  name:PLUGIN_NAME,
  enforce:'pre',
  // just like rollup transform
  async transform (code,id) {
    if (!/\.(vue)$/.test(id)){
      return
    }

    const aliases = resolvedConfig?.resolve.alias

    const transformResult = await transform(code, {
      id,
      aliases,
    })

    return transformResult as any
  },
  vite:{
    async configResolved(config) {
      resolvedConfig = config  
    },
  },
}))
