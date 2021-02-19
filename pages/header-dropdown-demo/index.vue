<template>
  <div class="mega-dropdown">
    <button class="mega-dropdown__button" @click="isOpen">
      Browse content
      <svg class="mega-dropdown__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs /><path d="M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z" /><path fill="none" d="M0 0h32v32H0z" /></svg>
    </button>
    <section
      class="mega-dropdown__content"
      :class="{ 'mega-dropdown__content_active': showContent }"
    >
      <div v-for="group in megaMenuLinks" :key="group.title">
        <div v-for="linkGroup in group" :key="linkGroup.title" class="mega-dropdown__group">
          <div class="mega-dropdown__menu">
            <h4 class="copy__subtitle">
              {{ linkGroup.title }}
            </h4>
            <ul class="mega-dropdown__menu-list">
              <li v-for="link in linkGroup.links" :key="link.label" class="mega-dropdown__menu-list-item">
                {{ link.label }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import { MEGA_MENU_LINKS_COLUMNS } from '~/constants/megaMenuLinks'

@Component
export default class HeaderDropDown extends Vue {
  megaMenuLinks = MEGA_MENU_LINKS_COLUMNS
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
    align-items: center;
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
    width: 48rem;
    background-color: $white;
    box-shadow: -4px 4px 4px rgba(0, 0, 0,.25);
    height: 32rem;
    overflow: scroll;

    &_active {
      display: flex;

      @include mq($until: medium) {
        flex-direction: column;
      }
    }

    @include mq($until: large) {
      left: 0;
      right: 0;
      padding: 2rem;
      height: initial;
      width: 100%;
    }
  }

  &__group {
    padding-right: $spacing-09;

    @include mq($until: medium) {
      max-width: initial;
      width: 100%;
    }
  }

  &__menu {
    padding-bottom: $spacing-05;

    &-list-item {
      padding-bottom: $spacing-05;
    }
  }
}
</style>
