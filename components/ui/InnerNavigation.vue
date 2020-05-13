<template>
  <section>
    <div class="menu-container">
      <div class="menu menu--framed">
        <nav class="navigation-group">
          <a
            v-for="(section, index) in sections"
            :key="index"
            class="navigation-group__item"
            :href="`#${section.anchor}`"
          >
            {{ section.label }}
          </a>
        </nav>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: Array, default: [] }) sections
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.menu-container {
  background-color: $inverse-02;
}

.menu {
  $submenu-height: 5rem;

  height: $submenu-height;
  display: flex;

  & > * {
    height: 100%;
  }

  &--framed {
    @include framed();
  }

  @include mq($until: medium) {
    height: auto;
  }
}

.navigation-group {
  display: flex;
  width: 100%;

  &__item {
    @include type-style('productive-heading-03');
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: $inverse-01;
    text-decoration: none;
    text-transform: uppercase;
    border-right: 1px solid $ui-02;
    text-align: center;
    padding: $spacing-03;

    &:last-child {
      border-right: none;
    }

    @include mq($until: medium) {
      border: none;
      border-bottom: 1px solid $ui-02;
      padding: $spacing-05;
      width: 100%;
    }
  }

  @include mq($until: medium) {
    flex-direction: column;
  }
}

@media (max-height: 600px) {
  .inner-navigation {
    position: static;
  }
}
</style>
