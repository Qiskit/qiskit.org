<template>
  <section id="capabilities" class="capabilities-section">
    <div class="capabilities-section__container">
      <h2>Our vision</h2>
      <div class="capabilities-section__capabilities">
        <div class="capabilities-section__content">
          <MetalCapabilityCard
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
              'capabilities-section__visual-resource-container_active':
                isActiveImage(item, index),
            }"
          >
            <video
              v-if="isVideo(item.visualResource)"
              class="capabilities-section__visual-resource capabilities-section__visual-resource_type_video"
              loop
              autoplay
              muted
              playsinline
            >
              <source :src="item.visualResource" type="video/mp4" />
              <source :src="item.visualResource" type="video/ogg" />
              Your browser does not support video.
            </video>
            <div
              v-else
              class="capabilities-section__visual-resource capabilities-section__visual-resource_type_image"
              :style="{ 'background-image': `url(${item.visualResource})` }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MetalCapability, METAL_CAPABILITIES } from "~/constants/metalContent";
import { useScrollBetweenSections } from "~/composables/useScrollBetweenSections";

const { activeSection } = useScrollBetweenSections();
const capabilities = METAL_CAPABILITIES;

const isActiveImage = (item: MetalCapability, index: number): boolean => {
  return (
    item.title === activeSection.value ||
    (activeSection.value === "" && index === 0)
  );
};

const isVideo = (url: string): boolean => {
  const extension = url.substring(url.length - 4);
  return extension === ".mp4";
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.capabilities-section {
  // multiple backgrounds in one section
  background-image: url("/images/grid/grid-right-dark.svg"),
    url("/images/grid/grid-left-dark.svg");
  background-size: 36rem auto, 36rem auto;
  background-position: right -1rem top, left 0 bottom 16rem;
  background-repeat: no-repeat, no-repeat;
  display: flex;

  @include carbon.breakpoint-down(lg) {
    background-size: 22.5rem auto;
    background-position: right -0.5rem top, left 0 bottom 16rem;
  }

  &__container {
    @include qiskit.contained;

    padding-top: carbon.$spacing-10;
    padding-bottom: carbon.$spacing-09;
  }

  &__capabilities {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }

  &__content {
    flex: 1;
  }

  &__card {
    margin-bottom: carbon.$spacing-12;

    @include carbon.breakpoint-down(md) {
      margin-bottom: carbon.$spacing-07;
    }
  }

  &__scrolling-ui {
    position: sticky;
    top: carbon.$spacing-06;
    flex: 0 0 32rem;
    min-height: 20rem;
    margin-bottom: carbon.$spacing-12;

    @include carbon.breakpoint-between(md, lg) {
      flex: 1.5;
    }

    @include carbon.breakpoint-down(md) {
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
