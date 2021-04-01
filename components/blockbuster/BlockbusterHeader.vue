<template>
  <header class="blockbuster-header">
    <div class="blockbuster__container">
      <div class="bx--row">
        <div
          class="bx--col-lg-6 bx--col-md-4 blockbuster__section-mobile-spacing"
        >
          <div class="blockbuster-header__main">
            <div>
              <h1 class="blockbuster-header__headline copy__page-title">
                <span class="highlight">Blockbuster</span> + Qiskit
              </h1>
              <div class="blockbuster-header__description">
                <p class="copy__paragraph">
                  Qiskit and Blockbuster can give you movie recommendations.
                </p>
              </div>
            </div>
            <AppCta
              class="blockbuster__cta blockbuster__cta_light"
              label="Get a recommendation"
              :url="`#${recommendationSectionId}`"
            />
          </div>
        </div>
        <div class="bx--col-lg-6 bx--col-md-4">
          <img
            alt="Blockbuster"
            class="blockbuster-header__logo"
            src="/images/blockbuster/blockbuster-logo.png"
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class BlockbusterHeader extends Vue {
  @Prop({ type: String, required: true }) recommendationSectionId!: string;
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.blockbuster-header {
  @include responsive-grid-bg-strip(
    "/images/grid/grid-hero-light.svg",
    auto,
    28rem
  );
  background-color: $carbon--blue-70;
  padding-bottom: $spacing-07;
  padding-top: $spacing-07;

  &__main {
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content: space-between;
  }

  &__headline {
    color: $text-01;

    .highlight {
      color: $carbon--yellow-20;
    }
  }

  &__description {
    margin-top: $spacing-05;

    @include mq($until: x-large) {
      margin-top: $spacing-06;
    }

    @include mq($until: large) {
      margin-top: $spacing-09;
    }

    .copy__paragraph {
      color: $text-01;
    }
  }

  &__logo {
    max-width: 100%;
  }
}
</style>
