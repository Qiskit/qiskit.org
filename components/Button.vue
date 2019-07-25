<template>
  <a
    :href="href"
    :target="isPointingOutside ? '_blank' : '_self'"
    class="button"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) href

  get isPointingOutside() {
    return this.$props.href.startsWith('http')
  }
}
</script>

<style scoped>
a {
  border: 1px solid black;
  padding: 0.5rem 1rem;
  display: inline-block;
  background-color: white;
  text-align: center;
  color: black;
}

a[call-to-action] {
  background-color: var(--ibm-blue);
  color: white;
}

@media (max-width: 800px) {
  a {
    display: block;
  }
}
</style>
