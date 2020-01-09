<template>
  <ul>
    <li v-for="el in elements" :key="el.label">
      <nuxt-link
        v-if="el.linkType==='nuxtLink'"
        class="footer-column__link"
        :to="el.url"
      >
        {{ el.label }}
      </nuxt-link>
      <a
        v-else
        class="footer-column__link"
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
ul {
  list-style: none;
  margin-top: 1.5rem;
}

li {
  margin-top: 0.5rem;
  display: inline-block;
  width: 100%;
}

.footer-column {
  &__link {
    color: inherit;
    text-decoration: none;
    display: inline-block;
    width: 100%;

    &:hover {
      color: var(--body-color-light);
    }
  }
}
</style>
