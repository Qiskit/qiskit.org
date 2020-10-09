<template>
  <article class="fake-ui">
    <div class="fake-ui__wrapper">
      <img src="images/metal/fake-ui.png" alt="fake software user interface" class="fake-ui__bg">
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
      width: 69.3%;
      top: 13.1%;
      left: 30.7%;
      height: 69%;
    }
  }
</style>
