<template>
  <section class="capabilities-section">
    <div class="capabilities-section__container">
      <div class="capabilities-section__content">
        <CapabilityCard
          v-for="item in capabilities"
          :id="item.title"
          :key="item.title"
          class="capabilities-section__card scrollable"
          :title="item.title"
          :description="item.description"
          :image="item.image"
        />
      </div>
      <div class="capabilities-section__scrolling-ui">
        <div
          v-for="(item, index) in capabilities"
          :key="item.image"
          class="capabilities-section__image"
          :class="{
            'capabilities-section__active-image' : isActiveImage(item, index)
          }"
          :lazy-background="item.image"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import CapabilityCard from '~/components/metal/CapabilityCard.vue'
import { MetalCapability, METAL_CAPABILITIES } from '~/constants/metalContent'
import ScrollSectionsMixin from '~/mixins/scrollBetweenSections'

@Component({
  components: { CapabilityCard }
})
export default class extends Mixins(ScrollSectionsMixin) {
  capabilities = METAL_CAPABILITIES

  isActiveImage (item: MetalCapability, index: number): boolean {
    return item.title === this.activeSection || (this.activeSection === '' && index === 0)
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.capabilities-section {
  // multiple backgrounds in one section
  background-image: url('/images/grid/grid-right-dark.svg'), url('/images/grid/grid-left-dark.svg');
  background-size: 36rem auto, 36rem auto;
  background-position: right -1rem top, left 0 bottom 16rem;
  background-repeat: no-repeat, no-repeat;
  display: flex;

  @include mq($until: large) {
    background-size: 22.5rem auto;
    background-position: right -.5rem top, left 0 bottom 16rem;
  }

  &__container {
    @include contained();
    display: flex;
    align-items: flex-start;
    padding-top: 10rem;
    padding-bottom: $layout-06;
  }

  &__content {
    flex: 1;
  }

  &__card {
    margin-bottom: $layout-06;
  }

  &__scrolling-ui {
    position: sticky;
    top: $layout-02;
    flex: 0 0 32rem;
    min-height: 20rem;
    margin-bottom: $layout-06;

    @include mq($from: medium, $until: large) {
      flex: 1.5;
    }

    @include mq($until: medium) {
      display: none;
    }
  }

  &__image {
    position: absolute;
    top: 0;
    opacity: 0;
    transition: opacity 0.3s linear;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center top;
    background-repeat: no-repeat;
  }

  &__active-image {
    opacity: 1;
  }
}
</style>
