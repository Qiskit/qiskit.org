
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

## Vuex store

We divide our store into [modules](https://vuex.vuejs.org/guide/modules.html).

To avoid unnecessary boilerplate, we commit _mutations_ directly from Vue.js components and only create _actions_ to dispatch if:

- we need to commit multiple mutations,
- we can reduce complexity by reusing mutations, or
- we need to perform asynchronous operations.

## Markdown content

We use Markdown files to add content and have two different approaches for this:

- content (old)
- new-content (new)

These approaches currently coexist but we aim to replace the former with the latter.

### content (old)

The old approach takes the Markdown files inside the `content` directory and generates a route for each one, as configured in `nuxt.config.ts` in the [**generate** property](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-generate/#routes).

For each route, the content gets extracted from the corresponding Markdown file and the page is generated using `pages/<path>/_slug.vue` as a template.

### new-content (new)

The new approach leverages the [**@nuxt/content** module](https://content.nuxtjs.org/), parsing the Markdown files inside the `new-content` directory and making their content fetchable via the `$content` instance.
