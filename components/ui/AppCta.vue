<template>
  <AppLink
    ref="link"
    class="app-cta copy__link"
    :class="{
      'app-cta_is-external': isExternal,
      'app-cta_is-internal': !isExternal
    }"
    v-bind="$attrs"
  >
    <div class="app-cta__content">
      <slot />
    </div>
    <component
      :is="isExternal ? 'Launch16' : 'ArrowRight16'"
      class="app-cta__icon"
    />
  </AppLink>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'

@Component({
  components: { AppLink }
})
export default class extends Vue {
  get isExternal () {
    return AppLink.isExternal(this.$attrs.url)
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
@import '~carbon-components/scss/globals/scss/typography';

.app-cta {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  fill: currentColor;

  &__content {
    margin-right: $layout-02;
  }

  &__icon {
    overflow: visible;
  }

  &_is-external {
    $arrow-path: "path:nth-child(2)";

    #{$arrow-path} {
      transform: translate(0, 0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover,
    &:active {
      #{$arrow-path} {
        transform: translate(2px, -2px);
      }
    }
  }

  &_is-internal {
    $arrow-path: "path:nth-child(1)";

    #{$arrow-path} {
      transform: translate(0, 0);
      transition: transform 0.2s ease-in-out;
    }

    &:hover,
    &:active {
      #{$arrow-path} {
        transform: translate(4px, 0);
      }
    }
  }
}
</style>
