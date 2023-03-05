# unplugin-vue-prop

[![NPM version](https://img.shields.io/npm/v/unplugin-vue-prop?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-vue-prop)

> Add import define props type support for Vue3 script-setup and lang is typescript

## TODO

- [ ] Support WebPack
- [ ] Support Rollup
- [ ] Support EsBuild

## Usage

### Basic Example

**app.vue**

```vue
<script setup lang="ts">
import { Demo } from './props'
defineProps<Demo>()
</script>
```

**props.ts**

```typescript
export interface Demo {
  name: string
}
```

## Installation

```bash
npm i unplugin-vue-prop -D
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Props from 'unplugin-vue-prop/vite'
import Vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [
    Vue(),
    Props()
  ],
})
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.ts
export default {
  buildModules: [
    'unplugin-vue-prop/nuxt',
  ]
}
```

<br></details>

## Known limitations

- Namespace imports like `import * as Foo from 'foo'` are not supported.
- [These types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html) are not supported.
- The plugin currently only scans the content of `<script setup>`. Types defined in `<script>` will be ignored.

## Notes

- `Enum` types will be converted to Union Types (e.g. `type [name] = number | string`) , since Vue can't handle them right now.
- The plugin may be slow because it needs to read files and traverse the AST (using @babel/parser).

## Caveats

- **Do not reference the types themselves implicitly, it will cause infinite loop**.
Vue will also get wrong type definition even if you disable this plugin.

Illegal code:

```ts
export type Bar = Foo
export interface Foo {
  foo: Bar
}
```

Alternatively, you can reference the types themselves in their own definitions

Acceptable code:

```ts
export type Bar = string
export interface Foo {
  foo: Foo
  bar: Foo | Bar
}
```

- Ending the type name with something like `_1` and `_2` is not recommended, because it may **conflict** with the plugin's transformation result

These types may cause conflicts:

```ts
type Foo_1 = string
type Bar_2 = number
```

## Credits

Thanks to:

- [@wheatjs/vite-plugin-vue-type-imports](https://github.com/wheatjs/vite-plugin-vue-type-imports)
- [@sxzz/unplugin-vue-macros](https://github.com/sxzz/unplugin-vue-macros)
- [@liulinboyi/unplugin-vue-import-props](https://github.com/liulinboyi/unplugin-vue-import-props)

## License

[MIT](./LICENSE) License © 2023-Present [Elone Hoo](https://github.com/elonehoo)
