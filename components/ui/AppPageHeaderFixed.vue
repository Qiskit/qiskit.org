<template>
  <header class="app-page-header-fixed">
    <div
      class="app-page-header-fixed__container"
      :class="
        oldContainer ? 'app-page-header-fixed__old-container' : 'bx--grid'
      "
    >
      <div class="bx--row">
        <h1
          class="bx--col-md-6 bx--col-lg-10"
          :class="
            oldContainer
              ? 'app-page-header-fixed__headline'
              : 'bx--col-sm bx--col-max-8'
          "
        >
          <slot />
        </h1>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class AppPageHeaderFixed extends Vue {
  @Prop({ type: Boolean, default: false, required: false }) oldContainer!: boolean;
}
</script>

<style lang="scss" scoped>
.app-page-header-fixed {
  @include responsive-grid-bg-strip("/images/grid/grid-hero-learn.svg", auto, 28rem);

  align-items: center;
  display: flex;
  height: 28rem;

  @include mq($until: large) {
    height: 17.5rem;
  }

  &__old-container {
    @include contained();
  }

  &__container {
    width: 100%;
  }

  &__headline {
    padding-left: 0;
  }
}
</style>
