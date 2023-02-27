# unplugin-vue-prop

[![NPM version](https://img.shields.io/npm/v/unplugin-vue-prop?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-vue-prop)


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
import Props from 'unplugin-vue-prop'
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

