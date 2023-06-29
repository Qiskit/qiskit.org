<template>
  <article class="hero-moment">
    <LandingHeroMomentGrid>
      <div class="cds--grid hero-moment__container">
        <LandingHeroMomentVersionInfo
          class="hero-moment__version-info"
          :version="version"
        />
        <div class="cds--row">
          <h1
            class="cds--col-md-3 cds--col-lg-5 cds--col-xlg-6 cds--col-max-7 hero-moment__title"
          >
            Your open-source toolkit for useful quantum computing
          </h1>
        </div>
        <div class="cds--row">
          <p
            class="cds--col-sm cds--col-md-3 cds--col-lg-5 cds--col-xlg-4 hero-moment__description"
          >
            Qiskit {{ qiskitPronunciation }} is an open-source SDK for working
            with quantum computers at the level of pulses, circuits, and
            application modules.
          </p>
        </div>
        <UiCta
          class="hero-moment__cta"
          :label="getStartedLink.label"
          :segment="getStartedLink.segment"
          :url="getStartedLink.url"
        />
        <img
          class="hero-moment__container__image"
          src="/images/landing-page/new-hero-illustration.png"
          alt="A visual composition of a sketched a quantum computer backdrop, a progress bar indicating a running job, and a laptop screen displaying the text 'running job...'"
        />
      </div>
    </LandingHeroMomentGrid>
  </article>
</template>

<script setup lang="ts">
import { TextLink } from "~/types/links";

interface Props {
  version: string;
}

defineProps<Props>();

const config = useRuntimeConfig();

const getStartedLink: TextLink = {
  url: `${config.public.siteUrl}/documentation/getting_started.html`,
  label: "Get started",
  segment: { cta: "get-started", location: "hero-moment" },
};

// TODO: Fix hydration text content mismatch
const qiskitPronunciation = Math.random() < 0.5 ? "[kiss-kit]" : "[quiss-kit]";
</script>

<style lang="scss">
@use "sass:math";
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.hero-moment {
  height: calc(#{math.div(56rem * 40, 64)} + 2px);
  position: relative;
  overflow: hidden;

  @include carbon.breakpoint-up(lg) {
    // In Figma, the height is not enforced but the background is always
    // visible completely so we do it in the CSS. A small correction is needed
    // to be able of displaying the bottom lines of the grid.
    height: calc(56rem + 2px);
  }

  &__square-link {
    width: 4rem;
    height: 4rem;
    background-color: qiskit.$background-color-black;
    position: absolute;
    top: 21%;
    left: 43%;
  }

  &__container {
    height: 100%;
    overflow: hidden;
    padding-top: carbon.$spacing-10;
    pointer-events: none;
    position: relative;

    @include carbon.breakpoint-down(md) {
      background-image: none;
    }

    &__image {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;

      @include carbon.breakpoint-down(md) {
        display: none;
      }
    }
  }

  &__version-info {
    margin-bottom: carbon.$spacing-06;

    @include carbon.breakpoint-up(md) {
      margin-bottom: carbon.$spacing-07;
    }

    @include carbon.breakpoint-up(lg) {
      margin-bottom: carbon.$spacing-11;
    }
  }

  &__title {
    margin-bottom: carbon.$spacing-06;

    // TODO: Force pointer events to allow the user to select text. Remove
    // when decomissioning the Metal page.
    pointer-events: auto;

    @include carbon.breakpoint-up(md) {
      margin-bottom: carbon.$spacing-07;
    }

    @include carbon.breakpoint-up(lg) {
      margin-bottom: carbon.$spacing-11;
    }
  }

  &__description {
    margin-bottom: carbon.$spacing-06;

    // TODO: Force pointer events to allow the user to select text. Remove
    // when decomissioning the Metal page.
    pointer-events: auto;

    @include carbon.breakpoint-up(md) {
      margin-bottom: carbon.$spacing-07;
    }

    @include carbon.breakpoint-up(lg) {
      margin-bottom: carbon.$spacing-11;
    }
  }

  &__cta {
    // TODO: Force pointer events to allow the user to select text. Remove
    // when decomissioning the Metal page.
    pointer-events: auto;
  }
}
</style>
