<template>
  <section class="the-metal-grid">
    <header class="the-metal-grid__underlayer">
      <div class="the-metal-grid__copy">
        <p class="the-metal-grid__intro">
          Introducing
        </p>
        <p class="the-metal-grid__title">
          <span
            class="the-metal-grid__metal-word-letter_letter-M"
          >M</span><span
            class="the-metal-grid__metal-word-letter_letter-e"
          >e</span><span
            class="the-metal-grid__metal-word-letter_letter-t"
          >t</span><span
            class="the-metal-grid__metal-word-letter_letter-a"
          >a</span><span
            class="the-metal-grid__metal-word-letter_letter-l"
          >l</span>
        </p>
      </div>
    </header>
    <div
      class="the-metal-grid__container"
    >
      <div
        v-for="pos in positions"
        :key="posId(pos)"
        :style="{
          left: `${pos.c * width - pos.c}px`,
          top: `${pos.r * height - pos.r}px`,
          width: `${width}px`,
          height: `${height}px`
        }"
        class="the-metal-grid__cell"
        :class="{
          'the-metal-grid__cell_trigger': isTrigger(pos),
          'the-metal-grid__cell_hidden': isHidden(pos)
        }"
        @click="triggerAnimation(pos)"
      />
    </div>
    <div
      ref="slot-container"
      class="the-metal-grid__slot-container"
      :class="{
        'the-metal-grid__slot-container_hidden': slotContainerIsHidden
      }"
    >
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {
  width: number = 64

  height: number = 64

  decoherence = {
    11: 0.5,
    12: 0.7,
    13: 0.8
  }

  hiddenCells: string[] = []

  slotContainerIsHidden: boolean = false

  positions = Array.from((() => {
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
  })())

  visibleCells = Array.from((() => {
    const self = this
    function* gen () {
      for (let r = 1; r < 6; r++) {
        for (let c = 4; c < 16; c++) {
          yield self.posId({ c, r })
        }
      }
    }
    return gen()
  })())

  isHidden (pos) {
    return this.hiddenCells.includes(this.posId(pos))
  }

  isTrigger (pos) {
    return pos.c === 6 && pos.r === 1
  }

  triggerAnimation (pos) {
    if (!this.isTrigger(pos)) { return }
    this.slotContainerIsHidden = true
    this.removeCell()
  }

  removeCell () {
    const length = this.visibleCells.length
    if (!length) {
      setTimeout(() => {
        this.$router.push({ path: '/metal' })
      }, 1000)
      return
    }
    const index = Math.floor(Math.random() * length)
    const posId = this.visibleCells.splice(index, 1)[0]
    this.hiddenCells.splice(0, 0, posId)
    setTimeout(this.removeCell, 30)
  }

  posId (pos) {
    return `cell-${pos.c}-${pos.r}`
  }
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.the-metal-grid {
  position: relative;
  width: 100%;
  min-height: 28rem;

  @include mq($until: large) {
    min-height: 28rem * 40 / 64;
  }

  &__underlayer {
    background-color: $cool-gray-100;
    min-height: 28rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__intro {
    @include type-style('display-04');
    font-size: 2.5rem;
    color: white;
  }

  &__title {
    @include type-style('display-04');
    line-height: 12rem;
    font-size: 15rem;
    color: white;
    position: relative;
    left: -0.075em;
  }

  &__container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    //filter: drop-shadow(5px 5px 10px black);
  }

  &__cell {
    position: absolute;

    &::before {
      content: "";
      border: 1px solid #E1E1E2;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: white;
      transition: transform 500ms ease-in, opacity 800ms;
    }

    &_hidden::before {
      transform: translateY(150%);
      opacity: 0;
    }

    &_trigger::before {
      border: none;
      background-color: transparent;
      z-index: 200;
    }
  }

  &__metal-word-letter {
    &_letter-M {
      color: white;
    }

    &_letter-e {
      color: $cool-gray-10;
    }

    &_letter-t {
      color: $cool-gray-20;
    }

    &_letter-a {
      color: $cool-gray-30;
    }

    &_letter-l {
      color: $cool-gray-40;
    }
  }

  &__slot-container {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity 500ms ease-out;

    * {
      pointer-events: auto;
    }

    &_hidden {
      opacity: 0;
    }
  }
}
</style>
