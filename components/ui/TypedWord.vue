<template>
  <div class="typed-text__container" :class="{ 'typed-text__cursor': showCursor }">
    <span class="typed-text__content">{{typeValue}}</span>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: ["Qiskit", "Python", "Quantum"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 3000,
      eraseTextDelay: 5000,
      typeArrayIndex: 0,
      charIndex: 0,
      showCursor: true,
    };
  },
  methods: {
    typeText() {
      this.showCursor = false;

      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        if (!this.typeStatus) this.typeStatus = true;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.eraseTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.showCursor = true;
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style lang="scss" scoped>
.typed-text {
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

    & .typed-text__content {
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
