<template>
  <div class="typed-word__container" :class="{ 'typed-word__cursor': showCursor }">
    <span class="typed-word__content">{{ typeValue }}</span>
  </div>
</template>

<script>
// Implementation based on https://github.com/webnoobcodes/vuejs-typeeffect
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {}

export default {
  data: () => {
    return {
      typeValue: 'Qiskit',
      typeStatus: false,
      typeArray: ['Qiskit', 'Python', 'Quantum'],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 3000,
      eraseTextDelay: 3000,
      typeArrayIndex: 0,
      charIndex: 0,
      showCursor: false
    }
  },
  created () {
    setTimeout(this.eraseText, this.newTextDelay + 200)
  },
  methods: {
    typeText () {
      this.showCursor = false

      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
        this.charIndex += 1
        if (!this.typeStatus) {
          this.typeStatus = true
        }

        setTimeout(this.typeText, this.typingSpeed)
      } else {
        this.typeStatus = false
        setTimeout(this.eraseText, this.eraseTextDelay)
      }
    },
    eraseText () {
      if (this.charIndex > 0) {
        if (!this.typeStatus) {
          this.typeStatus = true
        }
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1)
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      } else {
        this.showCursor = true
        this.typeStatus = false
        this.typeArrayIndex += 1
        if (this.typeArrayIndex >= this.typeArray.length) {
          this.typeArrayIndex = 0
        }

        setTimeout(this.typeText, this.typingSpeed + 1000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.typed-word {
  &__content {
    font-style: italic;
    color: white;
    padding: $spacing-01 $spacing-03 $spacing-01 0;
    margin-left: $spacing-02;
  }
  &__container {
    background-color: $purple-70;
    display: inline-block;
  }

  &__cursor {
    animation: 0.75s flash step-end infinite;

    & .typed-word__content {
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
