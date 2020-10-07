<template>
  <article class="fake-ui">
    <div class="fake-ui__wrapper">
      <img src="images/metal/fake-ui.svg" alt="fake software user interface" class="fake-ui__bg">
      <div class="fake-ui__content-container">
        <slot />
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>
  .fake-ui {
    &__wrapper {
      position: relative;
      width: 100%;
    }
    &__bg {
      position: relative;
      width: 100%;
    }
    &__content-container {
      position: absolute;
      width: 67.4%;
      top: 15.5%;
      left: 32.6%;
      height: 65.3%;
    }
  }
</style>
