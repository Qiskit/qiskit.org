<template>
  <div class="mega-dropdown">
    <button class="mega-dropdown__button" @click="isOpen">
      browse content
      <svg class="mega-dropdown__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs/><path d="M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z"/><path fill="none" d="M0 0h32v32H0z"/></svg>
    </button>
    <section
      class="mega-dropdown__content"
      :class="{ 'mega-dropdown__content_active': showContent }"
    >
      <div>
        <p class="copy__subtitle">Heading 1</p>
        <ul>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
        </ul>
      </div>

      <div>
        <p class="copy__subtitle">Heading 1</p>
        <ul>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
        </ul>
      </div>
      <div>
        <p class="copy__subtitle">Heading 1</p>
        <ul>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
        </ul>
      </div>
      <div>
        <p class="copy__subtitle">Heading 1</p>
        <ul>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
          <li>Potential menu item</li>
        </ul>
      </div>
      <img src="https://placehold.it/800x300"/>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class HeaderDropDown extends Vue {
  showContent = false;

  isOpen () : void {
    this.showContent = !this.showContent
  }
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.mega-dropdown {
  @include contained();
  @include type-style('body-short-01');
  color: $cool-gray-80;
  position: relative;

  &__button {
    background-color: $white;
    outline: none;
    border: none;
    border-bottom: 1px solid $cool-gray-80;
    padding-right: 0;
    padding-left: 0;
    width: 12rem;
    display: flex;
    justify-content: space-between;
    padding: $spacing-03 $spacing-01;
  }

  &__icon {
    width: 1rem;
  }

  &__content {
    display: none;
    position: absolute;
    top: 2.2rem;
    padding: 2rem 1rem;
    width: 32rem;
    background-color: $white;
    box-shadow: -4px 4px 4px rgba(0, 0, 0,.25);
    height: 32rem;
    overflow: scroll;

    &_active {
      display: block;
    }
  }
}
</style>
