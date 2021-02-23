<template>
  <div class="app-mega-dropdown">
    <button class="app-mega-dropdown__button" @click="toggleOpen">
      <span>Browse content</span>
      <svg class="app-mega-dropdown__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z" /></svg>
    </button>
    <section
      class="app-mega-dropdown__content"
      :class="{ 'app-mega-dropdown__content_active': showContent }"
    >
      <div v-for="(column, columnIndex) in megaMenuLinks" :key="`${columnIndex}`" class="app-mega-dropdown__column">
        <div v-for="(group, groupIndex) in column" :key="`${groupIndex}`" class="app-mega-dropdown__group">
          <div class="app-mega-dropdown__menu">
            <ul class="app-mega-dropdown__menu-list">
              <li v-for="link in group" :key="link.label" class="app-mega-dropdown__menu-list-item">
                <BasicLink class="app-mega-dropdown__menu-link" :url="link.url">
                  {{ link.label }}
                </BasicLink>
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

import { MEGA } from '~/constants/megaMenuLinks'

@Component
export default class TheMegaDropdownMenu extends Vue {
  megaMenuLinks = MEGA
  showContent = false;

  toggleOpen () : void {
    this.showContent = !this.showContent
  }
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.app-mega-dropdown {
  @include type-style('body-short-01');
  color: $cool-gray-80;
  position: relative;

  &__button {
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid $cool-gray-80;
    width: 18rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $spacing-03;

    .app-mega-dropdown__icon > path {
      transform: translate(0, 0);
      transition: transform 0.2s ease-in-out;
    }

    &:hover {
      cursor: pointer;

      .app-mega-dropdown__icon > path {
        transform: translate(0, 4px);
        transition: transform 0.2s ease-in-out;
      }
    }
  }

  &__icon {
    width: 1rem;
  }

  &__content {
    display: none;
    position: absolute;
    top: 2.2rem;
    padding: $spacing-07 $spacing-05;
    width: 12 * $column-size-large;
    background-color: $white;
    box-shadow: -4px 4px 12px rgba(0, 0, 0, .1);
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
    padding-bottom: $spacing-07;

    &-list-item {
      padding-bottom: $spacing-05;
      &:first-child {
        font-weight: 600;
      }
    }

    &-link {
      color: $cool-gray-80;
      text-decoration: none;
    }
  }
}
</style>
