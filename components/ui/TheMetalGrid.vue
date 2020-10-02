<template>
  <section class="the-metal-grid">
    <header class="the-metal-grid__underlayer">
      <p class="the-metal-grid__intro">
        Introducing
      </p>
      <p class="the-metal-grid__title">
        Metal
      </p>
    </header>
    <div class="the-metal-grid__container">
      <div
        v-for="pos in positions"
        :key="`cell-${pos.c}-${pos.r}`"
        :style="{
          left: `${pos.c * width - pos.c}px`,
          top: `${pos.r * height - pos.r}px`,
          width: `${width}px`,
          height: `${height}px`
        }"
        tabindex="-1"
        class="the-metal-grid__cell"
      />
    </div>
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {
  width = 64
  height = 64
  decoherence = {
    11: 0.5,
    12: 0.7,
    13: 0.8
  }

  get positions () {
    const { decoherence } = this
    const rowCount = 14
    const columnCount = 21

    function* gen () {
      for (let r = 0; r < rowCount; r++) {
        for (let c = 0; c < columnCount; c++) {
          if (r in decoherence && Math.random() < decoherence[r]) {
            continue
          }
          yield { c, r }
        }
      }
    }
    return gen()
  }
}
</script>

<style lang="scss">
.the-metal-grid {
  position: relative;
  width: 100%;
  min-height: 28rem;

  @include mq($until: large) {
    min-height: 28rem * 40 / 64;
  }

  &__underlayer {
    @include contained();
    background-color: #343a3f;

    &__intro {
      color: white;
    }

    &__title {
      color: white;
    }
  }

  &__container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    filter: drop-shadow(5px 5px 10px black);
  }

  &__cell {
    position: absolute;
    border: 1px solid #E1E1E2;
    background-color: white;
    transition: transform 500ms ease-in, opacity 800ms;

    &:focus {
      transform: translateY(150%);
      opacity: 0;
    }
  }
}
</style>
