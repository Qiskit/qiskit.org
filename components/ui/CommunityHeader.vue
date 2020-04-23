<template>
  <div class="community-header">
    <div
      :class="{
        'header-container': true,
        'header-container_background_gradient': !noGradient
      }"
      :style="`background-color: ${backgroundColor}`"
    >
      <section class="intro-container">
        <article
          :class="{
            'intro': true,
            'intro--framed': true,
            'intro--reversed': extraPosition == 'start'
          }"
        >
          <section class="copy-container">
            <h1 class="main-title">
              {{ mainTitle }}
            </h1>
            <div class="description">
              <slot />
            </div>
          </section>
          <aside
            v-if="this.$slots.extra"
            class="extra-container importance--decoration"
          >
            <slot name="extra" />
          </aside>
        </article>
        <aside
          v-if="this.$slots.features"
          class="features features--framed"
        >
          <slot name="features" />
        </aside>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) mainTitle
  @Prop({ type: String, default: 'end' }) extraPosition
  @Prop({ type: Boolean, default: false }) noGradient!: boolean
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.header-container {
  position: relative;
  z-index: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: 100%;

  color: var(--legacy-presentation-text-color, white);
  background-color: var(--legacy-presentation-color, $ui-background);

  &_background_gradient {
    background-image: linear-gradient(150deg,
      $purple-60 15%,
      $purple-50 70%,
      $purple-30 94%);
  }
}

.main-title {
  @include productive-heading-09();
}

.description p {
  @include body-long-04();
}

.intro {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  color: currentColor;

  @include mq($until: medium) {
    flex-direction: column;
    text-align: center;
  }

  &--framed {
    @include framed()
  }

  &--reversed {
    flex-direction: row-reverse;

    @include mq($until: medium) {
      flex-direction: column-reverse;
    }
  }
}

.features {
  display: flex;
  flex-direction: row;
  color: $text-01;
  margin-top: 4rem;

  &--framed {
    @include framed()
  }
}

.copy-container {
  flex: 1;
}
</style>
