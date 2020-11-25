<template>
  <section class="capabilities-section">
    <div class="capabilities-section__container">
      <h2 class="capabilities-section__title">
        Our vision
      </h2>
      <div class="capabilities-section__capabilities">
        <div class="capabilities-section__content">
          <CapabilityCard
            v-for="item in capabilities"
            :id="item.title"
            :key="item.title"
            class="capabilities-section__card scrollable"
            :title="item.title"
            :description="item.description"
            :visual-resource="item.visualResource"
          />
        </div>
        <div class="capabilities-section__scrolling-ui">
          <div
            v-for="(item, index) in capabilities"
            :key="item.visualResource"
            class="capabilities-section__visual-resource-container"
            :class="{
              'capabilities-section__visual-resource-container_active' : isActiveImage(item, index)
            }"
          >
            <video
              v-if="isVideo(item.visualResource)"
              class="
                capabilities-section__visual-resource
                capabilities-section__visual-resource_type_video"
              loop
              autoplay
              muted
              playsinline
            >
              <source :src="item.visualResource" type="video/mp4">
              <source :src="item.visualResource" type="video/ogg">
              Your browser does not support video.
            </video>
            <div
              v-else
              class="
                capabilities-section__visual-resource
                capabilities-section__visual-resource_type_image
              "
              :lazy-background="item.visualResource"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { MetalCapability, METAL_CAPABILITIES } from '~/constants/metalContent'
import ScrollSectionsMixin from '~/mixins/scrollBetweenSections'

@Component
export default class CapabilitiesSection extends Mixins(ScrollSectionsMixin) {
  capabilities = METAL_CAPABILITIES

  isActiveImage (item: MetalCapability, index: number): boolean {
    return item.title === this.activeSection || (this.activeSection === '' && index === 0)
  }

  isVideo (url: string): boolean {
    const extension = url.substring(url.length - 4)
    return extension === '.mp4'
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
    padding-top: $layout-05;
    padding-bottom: $layout-04;
  }

  &__capabilities {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }

  &__title {
    @include type-style("expressive-heading-05");
    margin-bottom: $layout-03;
    font-weight: 300;

    @include mq($until: large) {
      @include type-style("expressive-heading-04");
    }
  }

  &__content {
    flex: 1;
  }

  &__card {
    margin-bottom: $layout-06;

    @include mq($until: medium) {
      margin-bottom: $layout-03;
    }
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

  &__visual-resource-container {
    position: absolute;
    top: 0;
    opacity: 0;
    transition: opacity 0.3s linear;
    width: 100%;
    height: 100%;

    &_active {
      opacity: 1;
    }
  }

  &__visual-resource {

    &_type {
      &_image {
        width: 100%;
        height: 100%;
        background-size: contain;
        background-position: center top;
        background-repeat: no-repeat;
      }

      &_video {
        width: 100%;
      }
    }
  }
}
</style>
