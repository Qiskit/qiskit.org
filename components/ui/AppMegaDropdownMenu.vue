<template>
  <article class="app-mega-dropdown">
    <button class="app-mega-dropdown__button" @click="toggleOpen">
      <span>{{ placeholder }}</span>
      <svg class="app-mega-dropdown__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z" /></svg>
    </button>
    <div
      class="app-mega-dropdown__content-container"
      :class="{ 'app-mega-dropdown__content-container_active': showContent }"
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
  @Prop({ type: String, default: 'Browse content' }) placeholder!: string
  @Prop(Object) content!: MegaDropdownMenu

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

  &__content-container {
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
    }

    @include mq($until: large) {
      left: 0;
      right: 0;
      height: initial;
      width: 100%;
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
