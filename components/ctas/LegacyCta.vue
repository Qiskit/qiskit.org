<template>
  <a
    :class="{ 'legacy-cta': true }"
    :href="to"
    v-on="$listeners"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) to

  isExternal (url: string): boolean {
    return url.startsWith('http')
  }

  created () {
    const targetUrl = this.$props.to
    if (targetUrl && this.isExternal(targetUrl)) {
      this.$attrs.target = '_blank'
      this.$attrs.rel = 'noopener'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.legacy-cta {
  @include type-style('productive-heading-01');
  display: inline-block;
  padding: 0.5rem 0.8rem;
  border: 2px black solid;
  color: black;
  text-decoration: none;
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
