<template>
  <ul>
    <li v-for="el in elements" :key="el.label">
      <nuxt-link
        v-if="el.linkType==='nuxtLink'"
        class="footer-link"
        :to="el.url"
      >
        {{ el.label }}
      </nuxt-link>
      <a
        v-else
        class="footer-link"
        :href="el.url"
        :target="el.target || '_self'"
        :rel="el.rel || ''"
      >
        {{ el.label }}
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(Array) elements
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

ul {
  list-style: none;
  margin-top: 1.5rem;
}

li {
  margin-top: 0.5rem;
  display: inline-block;
  width: 100%;
}

.footer-link {
  @include type-style('productive-heading-02');
  color: inherit;
  text-decoration: none;
  display: inline-block;
  width: 100%;

  &:hover {
    color: $text-01;
  }
}
</style>
