<template>
  <a :class="{ 'legacy-cta': true }" :href="to">
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) to

  isExternal(url: string): boolean {
    return url.startsWith('http')
  }

  created() {
    const targetUrl = this.$props.to
    if (targetUrl && this.isExternal(targetUrl)) {
      this.$attrs.target = '_blank'
      this.$attrs.rel = 'noopener'
    }
  }
}
</script>

<style lang="scss" scoped>
.legacy-cta {
  font-size: 0.7rem;
  display: inline-block;
  padding: 0.5rem 0.8rem;
  border: 2px black solid;
  color: black;
  text-decoration: none;
  font-weight: 800;
  transition: background-color linear 200ms,
              color linear 200ms,
              fill linear 200ms;

  &:hover {
    background-color: black;
    color: white;
    fill: white;
  }
}
</style>
