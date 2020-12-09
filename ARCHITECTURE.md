
# Qiskit.org architecture overview

Technical overview of how the code is structured and how it all comes together.

## Vue.js components

We write our components as [single file components](https://vuejs.org/v2/guide/single-file-components.html).

The **script section** is written in [class-style syntax](https://class-component.vuejs.org/) with TypeScript and uses decorators provided by [**vue-property-decorator**](https://github.com/kaorun343/vue-property-decorator).

The **style section** is written in SCSS.

Here is an example of a component called `GreetingMessage.vue`:

```vue
<template>
  <p class="message">{{ greeting }}, World!</p>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class GreetingMessage extends Vue {
  @Prop(String) greeting!: string
}
</script>

<style lang="scss" scoped>
.message {
  font-size: 2em;
}
</style>
```
