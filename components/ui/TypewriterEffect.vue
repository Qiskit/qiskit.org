<template>
  <div
    class="typewriter-effect"
    :class="{ 'typewriter-effect_cursor-visible': showCursor }"
  >
    <span class="typewriter-effect__content">{{ content }}</span>
  </div>
</template>

<script lang="ts">
// Implementation based on https://github.com/webnoobcodes/vuejs-typeeffect
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class TypewriterEffect extends Vue {
  @Prop({ type: Number, default: 0 }) startingIndex!: number
  @Prop({ type: Array, default: () => [] }) values!: string[]
  @Prop({ type: Number, default: 100 }) typingDelay!: number
  @Prop({ type: Number, default: 75 }) erasingDelay!: number
  @Prop({ type: Number, default: 2000 }) persistence!: number
  @Prop({ type: Number, default: 600 }) newValueDelay!: number

  content: string = ''
  currentValueIdx: number = 0
  showCursor: boolean = false

  get targetValue (): string {
    return this.values[this.currentValueIdx]
  }

  get contentLength (): number {
    return this.content.length
  }

  typeText () {
    const targetCompleted = this.contentLength === this.targetValue.length

    if (targetCompleted) {
      this.eraseCurrentValue()
    } else {
      this.content = this.targetValue.substring(0, this.contentLength + 1)
      this.typeNextCharacter()
    }
  }

  eraseText () {
    const noContent = this.contentLength === 0

    if (noContent) {
      this.typeNextValue()
    } else {
      this.content = this.content.substring(0, this.contentLength - 1)
      this.eraseNextCharacter()
    }
  }

  typeNextValue () {
    this.showCursor = true
    this.currentValueIdx = (this.currentValueIdx + 1) % this.values.length
    setTimeout(() => {
      this.showCursor = false
      this.typeText()
    }, this.newValueDelay)
  }

  typeNextCharacter () {
    setTimeout(this.typeText, this.typingDelay)
  }

  eraseCurrentValue () {
    setTimeout(this.eraseText, this.persistence)
  }

  eraseNextCharacter () {
    setTimeout(this.eraseText, this.erasingDelay)
  }

  created () {
    this.content = this.values[this.startingIndex] || ''
    this.currentValueIdx = this.startingIndex
    this.eraseCurrentValue()
  }
}

</script>

<style lang="scss" scoped>
.typewriter-effect {
  background-color: $purple-70;
  display: inline-block;

  &__content {
    font-style: italic;
    color: white;
    padding: $spacing-01 $spacing-03 $spacing-01 0;
    margin-left: $spacing-02;
  }

  &_cursor-visible {
    animation: 0.75s flash step-end infinite;

    .typewriter-effect__content {
      margin-left: 0;
    }
  }

  @keyframes flash {
    from,
    to {
      background-color: transparent;
    }
    50% {
      background-color: $purple-70;
    }
  }
}
</style>
