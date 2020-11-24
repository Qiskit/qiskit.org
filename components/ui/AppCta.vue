<template>
  <AppLink
    ref="link"
    class="app-cta copy__link"
    :class="`app-cta_${kind}`"
    v-bind="$attrs"
  >
    <div class="app-cta__content">
      <slot />
    </div>
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
  @Prop({ type: String, default: 'primary' }) kind!: 'primary'|'secondary'|'ghost';

  get iconPerLinkType (): string {
    if (AppLink.isExternal(this.$attrs.url)) {
      return 'launch-16'
    } else if (AppLink.isIdAnchor(this.$attrs.url)) {
      return 'arrow-down-16'
    } else {
      return 'arrow-right-16'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
@import '~carbon-components/scss/globals/scss/typography';

@mixin bicolor-background($colorLeft, $colorRight) {
    background-image: linear-gradient(90deg, $colorLeft 0%, $colorLeft 50%, $colorRight 50%, $colorRight 100%);
}

.app-cta {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: $layout-01;
  width: 4 * $column-size-large;

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
    Per kind styles
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
  }

  &_ghost {
    padding: $layout-01 0;
    justify-content: flex-start;

    background-image: none;
    color: $purple-70;

    &:hover,
    &:active {
      color: $purple-80;
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
