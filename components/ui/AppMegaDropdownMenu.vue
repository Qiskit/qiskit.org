<template>
  <article class="app-mega-dropdown">
    <button
      ref="button"
      class="app-mega-dropdown__button"
      :class="`app-mega-dropdown__button_${kind}`"
      @click="toggleOpen"
    >
      <span>{{ placeholder }}</span>
      <svg class="app-mega-dropdown__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z" /></svg>
    </button>
    <div
      v-if="showContent"
      ref="dropdown"
      class="app-mega-dropdown__content-container"
    >
      <nav class="app-mega-dropdown__content">
        <div v-for="(column, columnIndex) in content" :key="`${columnIndex}`" class="app-mega-dropdown__content-column">
          <div v-for="(group, groupIndex) in column" :key="`${groupIndex}`">
            <BasicLink
              class="app-mega-dropdown__content-link app-mega-dropdown__content-link_title"
              :url="group.title.url"
            >
              {{ group.title.label }}
            </BasicLink>
            <BasicLink
              v-for="chapter in group.content"
              :key="chapter.label"
              class="app-mega-dropdown__content-link"
              :url="chapter.url"
            >
              {{ chapter.label }}
            </BasicLink>
          </div>
        </div>
      </nav>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { MegaDropdownMenu } from '~/constants/megaMenuLinks'

@Component
export default class TheMegaDropdownMenu extends Vue {
  @Prop({ type: String, default: 'primary' }) kind!: 'primary'|'secondary'
  @Prop({ type: String, default: 'Browse content' }) placeholder!: string
  @Prop(Array) content!: MegaDropdownMenu

  showContent = false;

  mounted () {
    document.addEventListener('click', this.handleClick)
  }

  beforeDestroy () {
    document.removeEventListener('click', this.handleClick)
  }

  handleClick (e: MouseEvent) {
    const buttonElement = this.$refs.button as Element
    const dropdownElement = this.$refs.dropdown as Element|undefined

    if (dropdownElement) {
      const clickedOnDropdown = dropdownElement.contains(e.target as Node)
      const clickedOnButton = buttonElement.contains(e.target as Node)
      const shouldCloseDropdown = !clickedOnDropdown && !clickedOnButton

      if (shouldCloseDropdown) {
        this.showContent = false
      }
    }
  }

  toggleOpen () : void {
    this.showContent = !this.showContent
  }
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.app-mega-dropdown {
  @include type-style('body-short-01');

  color: $text-color-light;
  position: relative;

  &__button {
    &_primary {
      color: $text-color-light;
      fill: $text-color-light;
      border-bottom: 1px solid $cool-gray-80;
    }

    &_secondary {
      color: $button-text-color;
      fill: $button-text-color;
      border-bottom: 1px solid white;
    }

    &_primary,
    &_secondary {
      background-color: transparent;
      outline: none;
      border: none;
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
  }

  &__icon {
    width: 1rem;
  }

  &__content-container {
    position: absolute;
    top: 2.2rem;
    padding: $spacing-07 $spacing-05;
    width: 12 * $column-size-large;
    background-color: $background-color-white;
    box-shadow: -4px 4px 12px rgba(0, 0, 0, .1);
    height: 32rem;
    overflow: scroll;

    @include mq($until: large) {
      width: 100%;
    }

    @include mq($until: medium) {
      left: 0;
      right: 0;
      height: initial;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    gap: $spacing-09;

    @include mq($until: medium) {
      flex-direction: column;
    }

    &-column {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: $spacing-09;
    }

    &-link {
      display:block;
      padding-bottom: $spacing-05;
      color: $cool-gray-80;
      text-decoration: none;

      &_title {
        font-weight: 600;
      }
    }
  }
}
</style>
