import { createUnplugin } from 'unplugin'
import { transform } from './core'
import { PLUGIN_NAME } from './core/constants'

let resolvedConfig:any

export default createUnplugin(() =>({
  name:PLUGIN_NAME,
  enforce:'pre',
  vite:{
    async configResolved(config) {
      resolvedConfig = config  
    },
    async transform(code, id) {
      if (!/\.(vue)$/.test(id)){
        return
      }
  
      const aliases = resolvedConfig?.resolve.alias
  
      const transformResult = await transform(code, {
        id,
        aliases,
      })
  
      return transformResult
    }
  },
}))
