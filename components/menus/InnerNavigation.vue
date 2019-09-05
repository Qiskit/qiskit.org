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
@import '~/assets/scss/mixins.scss';

.menu-container {
  background-color: #fffe;
}

.menu {
  height: 90px;
  display: flex;
  font-size: 0.80rem;

  & > * {
    height: 100%;
  }

  &--framed {
    @include framed();
  }
}

.navigation-group {
  display: flex;
  width: 100%;

  &__item {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--body-color-dark);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    border-right: 1px solid #3334;
    text-align: center;
    padding: 0.5rem;
    font-size: 0.8rem;

    &:last-child {
      border-right: none;
    }
  }
}

@media (max-width: 600px) {
  .menu {
    height: auto;
  }

  .navigation-group {
    flex-direction: column;

    &__item {
      border: none;
      border-bottom: 1px solid #3334;
      padding: 1rem;
      width: 100%;
    }
  }
}
</style>
