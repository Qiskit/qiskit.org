<template>
  <article class="hero-moment">
    <LandingHeroMomentGrid>
      <div class="cds--grid hero-moment__container">
        <div class="cds--row">
          <h1
            class="cds--col-md-4 cds--col-lg-5 cds--col-xlg-5 cds--col-max-7 hero-moment__title"
          >
            <img
              src="/images/qiskit-logo.png"
              class="hero-moment__title__logo"
            />
            Qiskit
          </h1>
        </div>
        <div class="cds--row">
          <div
            class="cds--col-sm cds--col-md-4 cds--col-lg-5 cds--col-xlg-5 hero-moment__description"
          >
            <h3 class="hero-moment__description__title">
              <strong>{{ qiskitPronunciation }}</strong> <em>noun, software</em>
            </h3>
            <hr class="hero-moment__description__divider" />
            <h3>
              <ol class="hero-moment__description__content">
                <li>open-source toolkit for useful quantum computing</li>
                <li>production-ready circuit compiler.</li>
                <li>de-facto quantum framework</li>
              </ol>
            </h3>
          </div>
        </div>
        <UiCta
          class="hero-moment__cta"
          :label="getStartedLink.label"
          :segment="getStartedLink.segment"
          :url="getStartedLink.url"
        />
        <LandingHeroMomentVersionInfo
          class="hero-moment__version-info"
          :version="version"
        />
        <img
          class="hero-moment__container__image"
          src="/images/landing-page/new-hero-illustration.png"
          alt="A visual composition of a sketched a quantum computer backdrop, a progress bar indicating a running job, and a laptop screen displaying the text 'running job...'"
        />
        <nuxt-img
          class="hero-moment__container__image"
          format="webp"
          src="/images/landing-page/cryo.png"
          alt="A visual composition of a sketched a quantum computer"
        />
        <div class="hero-moment__container__laptop">
          <nuxt-img
            class="hero-moment__container__laptop__frame"
            format="webp"
            src="/images/landing-page/laptop.png"
            :alt="`A laptop with the following code sample: ${heroCodeSnippet}`"
          />
          <code class="hero-moment__container__laptop__code">
            <pre
              v-for="(line, index) in heroCodeSnippet.split('\n')"
              :key="index"
              :class="{
                'hero-moment__container__laptop__code__comment':
                  line.startsWith('#'),
              }"
              v-text="line"
            />
          </code>
        </div>
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
const heroCodeSnippet = `# Build a circuit
from qiskit import QuantumCircuit
circuit = QuantumCircuit(2, 2)
circuit.h(0)
circuit.cx(0,1)
circuit.measure([0,1], [0,1])
 
# Connect to your quantum provider
from <quantum provider> import Sampler
sampler = Sampler()
 
# Run the circuit and get the result
job = sampler.run(circuit)
quasi_dist = job.result().quasi_dists[0]
print(quasi_dist)`;
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
      padding-top: carbon.$spacing-05;
    }

    &__image {
      height: auto;
      width: 60%;
      position: absolute;
      right: 9%;
      top: 0;
      z-index: -1;

      @include carbon.breakpoint-down(lg) {
        display: none;
      }
    }

    &__laptop {
      width: 55%;
      position: absolute;
      right: 3%;
      top: 0;
      z-index: -1;
      padding-top: carbon.$spacing-10;

      @include carbon.breakpoint-down(lg) {
        display: none;
      }

      &__frame {
        height: 100%;
        width: 100%;
      }

      &__code {
        position: absolute;
        left: 16%;
        top: 23%;

        @include carbon.breakpoint-up(xlg) {
          left: 16%;
          top: 21%;
        }

        &__comment {
          color: qiskit.$text-active-color;
        }
      }
    }
  }

  &__version-info {
    margin-bottom: carbon.$spacing-05;

    @include carbon.breakpoint-up(md) {
      margin-bottom: carbon.$spacing-07;
    }

    @include carbon.breakpoint-up(lg) {
      margin-bottom: carbon.$spacing-11;
    }
  }

  &__title {
    margin-bottom: carbon.$spacing-06;
    font-weight: 500;
    font-size: 7rem;
    display: flex;
    align-items: center;

    // TODO: Force pointer events to allow the user to select text. Remove
    // when decomissioning the Metal page.
    pointer-events: auto;

    @include carbon.breakpoint-up(md) {
      margin-bottom: carbon.$spacing-07;
    }

    @include carbon.breakpoint-up(lg) {
      margin-bottom: carbon.$spacing-08;
    }

    &__logo {
      width: 130px;
      margin-right: carbon.$spacing-05;

      @include carbon.breakpoint-down(md) {
        display: none;
      }
    }
  }

  &__description {
    margin-bottom: carbon.$spacing-06;

    // TODO: Force pointer events to allow the user to select text. Remove
    // when decomissioning the Metal page.
    pointer-events: auto;

    &__title {
      color: carbon.$gray-80;
    }

    &__divider {
      border: 1px solid carbon.$gray-80;
      border-width: 1px 0 0;
      margin: 0 0 carbon.$spacing-05 0;
    }

    &__content {
      list-style: decimal;
      margin-left: carbon.$spacing-06;
    }

    @include carbon.breakpoint-up(md) {
      margin-bottom: carbon.$spacing-04;
    }

    @include carbon.breakpoint-up(lg) {
      margin-bottom: carbon.$spacing-08;
    }
  }

  &__cta {
    // TODO: Force pointer events to allow the user to select text. Remove
    // when decomissioning the Metal page.
    pointer-events: auto;
    margin-bottom: carbon.$spacing-06;
  }
}
</style>
