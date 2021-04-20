<template>
  <nav class="app-nav-back-link">
    <BasicLink
      class="app-nav-back-link__link"
      :class="`app-nav-back-link__link_${theme}`"
      :url="url"
    >
      <ArrowLeft16 class="app-nav-back-link__icon" /><span v-text="label" />
    </BasicLink>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class AppNavBackLink extends Vue {
  @Prop({ type: String, required: true }) label!: string;
  @Prop({ type: String, required: false, default: 'light' }) theme!: string;
  @Prop({ type: String, required: true }) url!: string;
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.app-nav-back-link {
  @include contained();
  padding-bottom: $spacing-06;
  padding-top: $spacing-06;

  &__link {
    @include type-style("body-short-01");
    align-items: center;
    display: flex;
    width: fit-content;

    &_dark {
      color: $text-color-white;
    }

    &_light {
      color: $link-color-tertiary;
    }
  }

  &__icon {
    margin-right: $spacing-05;
  }
}
</style>
