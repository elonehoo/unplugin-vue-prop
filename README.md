# unplugin-vue-prop

[![NPM version](https://img.shields.io/npm/v/unplugin-vue-prop?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-vue-prop)

Starter template for [unplugin](https://github.com/unjs/unplugin).


> Add import define props type support for Vue3 script-setup and lang is typescript

## Usage

### Basic Example

**app.vue**

```vue
<script setup lang="ts">
import { Demo } from "./props";
defineProps<Demo>();
</script>
```

**props.ts**

```typescript
export interface Demo {
  name: string
}
```

<details>
<summary>Output</summary>

```vue
<script setup lang="ts">
import { } from "./props";
defineProps<{name:string;}>();
</script>
```

</details>

**app.vue**
```vue
<script setup lang="ts">
import { Foo as Demo } from "./props";
defineProps<Demo>();
</script>
```
**props.ts**
```typescript
export interface Foo {
  name: string
}
```

<details>
<summary>Output</summary>

```vue
<script setup lang="ts">
import { } from "./props";
defineProps<{name:string;}>();
</script>
```

</details>

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
  plugins: [Vue(), Props()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Props from 'unplugin-vue-prop/rollup'
export default {
  plugins: [Props()], // Must be before Vue plugin!
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
build({
  plugins: [
    require('unplugin-vue-prop/esbuild')(), // Must be before Vue plugin!
  ],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [require('unplugin-vue-prop/webpack')()],
}
```

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [require('unplugin-vue-prop/webpack')()],
  },
}
```

<br></details>

#### TypeScript Support

```jsonc
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["unplugin-vue-prop" /* ... */]
  }
}
``` 
