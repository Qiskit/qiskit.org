<template>
  <AppLink
    ref="link"
    class="app-cta"
    :class="[
      `app-cta_${kind}`,
      `app-cta_${kind}_theme_${theme}`
    ]"
    v-bind="$attrs"
  >
    <span class="app-cta__content">
      {{ label }}
    </span>
    <component
      :is="iconPerLinkType"
      class="app-cta__icon"
      :class="`app-cta__icon_${iconPerLinkType}`"
    />
  </AppLink>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'

@Component
export default class AppCta extends Vue {
  @Prop({ type: String, default: 'primary' }) kind!: 'primary'|'secondary'|'ghost'
  @Prop({ type: String, default: 'light' }) theme!: 'light'|'dark'
  @Prop({ type: String }) label!: string

  get iconPerLinkType (): string {
    const url = this.$attrs.url
    if (AppLink.isExternal(url)) {
      return 'launch-16'
    } else if (AppLink.isIdAnchor(url)) {
      return 'arrow-down-16'
    } else {
      return 'arrow-right-16'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

@mixin bicolor-background($colorLeft, $colorRight) {
    background-image: linear-gradient(90deg, $colorLeft 0%, $colorLeft 50%, $colorRight 50%, $colorRight 100%);
}

.app-cta {
  @include type-style('body-long-01');
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;

  padding: $spacing-05;
  width: 4 * $column-size-large;
  max-width: 100%;

  @include mq($from: medium, $until: large) {
    width: 3 * $column-size-medium;
  }
  @include mq($until: medium) {
    width: 4 * $column-size-small;
  }

  background-size: 200% 100%;
  background-position-x: 100%;
  transition: background-position-x 0.3s ease-out, color 0.3s ease-out;

  &:hover,
  &:active {
    background-position-x: 0;
  }

  /*
    Per kind and theming styles
  */
  &,
  &_primary {
    @include bicolor-background($purple-80, $purple-70);
    color: white;
  }

  &_secondary {
    @include bicolor-background($purple-70, $gray-10);
    color: $purple-70;

    &:hover,
    &:active {
      color: white;
    }

    &_theme_dark {
      @include bicolor-background($purple-70, $cool-gray-90);
    }
  }

  &_ghost {
    padding-right: 0;
    padding-left: 0;
    justify-content: flex-start;

    background-image: none;
    color: $purple-70;

    &:hover,
    &:active {
      color: $purple-80;
    }

    &_theme_dark {
      &:hover,
      &:active {
        color: $purple-40;
      }
    }
  }

  /*
    Icons Styles
  */
  $arrow-right_path: "_arrow-right-16 path:nth-child(1)";
  $arrow-down_path: "_arrow-down-16 path:nth-child(1)";
  $launch_path: "_launch-16 path:nth-child(2)";

  &__icon {
    fill: currentColor;
    margin-left: $layout-01;
    overflow: visible;

    &#{$arrow-right_path},
    &#{$arrow-down_path},
    &#{$launch_path} {
      transform: translate(0, 0);
      transition: transform 0.2s ease-in-out;
    }
  }

  &:hover &__icon,
  &:active &__icon {
    &#{$arrow-right_path} {
      transform: translate(4px, 0px);
    }
    &#{$arrow-down_path} {
      transform: translate(0px, 4px);
    }
    &#{$launch_path} {
      transform: translate(2px, -2px);
    }
  }
}
</style>
