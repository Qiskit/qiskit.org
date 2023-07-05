<template>
  <article class="home-lead-space">
    <HomeLeadSpaceBackgroundGrid>
      <div class="cds--grid home-lead-space__container">
        <div class="cds--row">
          <div class="cds--col-md-4 cds--col-lg-5 cds--col-max-7">
            <h1 class="home-lead-space__title">
              <nuxt-img
                class="home-lead-space__title__logo"
                src="/images/landing-page/logo_wordmark.svg"
                alt="The Qiskit logo"
              />
            </h1>
          </div>
        </div>
        <div class="cds--row">
          <div
            class="cds--col-sm cds--col-md-4 cds--col-lg-5 home-lead-space__description"
          >
            <p class="home-lead-space__description__title">
              <strong>{{ qiskitPronunciation }}</strong> <em>noun, software</em>
            </p>
            <hr class="home-lead-space__description__divider" />
            <ol class="home-lead-space__description__content">
              <li>open-source toolkit for useful quantum computing.</li>
              <li>production-ready circuit compiler.</li>
            </ol>
          </div>
        </div>
        <UiCta
          class="home-lead-space__cta"
          :label="getStartedLink.label"
          :segment="getStartedLink.segment"
          :url="getStartedLink.url"
        />
        <HomeLeadSpaceVersion
          class="home-lead-space__version-info"
          :version="version"
        />
        <nuxt-img
          class="home-lead-space__container__image"
          format="webp"
          src="/images/landing-page/cryo.png"
          alt="A visual composition of a sketched a quantum computer"
        />
        <div class="home-lead-space__container__laptop">
          <nuxt-img
            class="home-lead-space__container__laptop__frame"
            format="webp"
            src="/images/landing-page/laptop.png"
            :alt="`A laptop with the following code sample: ${heroCodeSnippet}`"
          />
          <code class="home-lead-space__container__laptop__code">
            <pre
              v-for="(line, index) in heroCodeSnippetLines"
              :key="index"
              :class="{
                'home-lead-space__container__laptop__code__comment':
                  line.startsWith('#'),
              }"
              v-text="line"
            />
          </code>
        </div>
      </div>
    </HomeLeadSpaceBackgroundGrid>
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

const heroCodeSnippetLines = heroCodeSnippet.split("\n");
</script>

<style lang="scss">
@use "sass:math";
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.home-lead-space {
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

  &__version {
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
      width: 450px;
      margin-right: carbon.$spacing-05;

      @include carbon.breakpoint-down(md) {
        width: 270px;
      }
    }
  }

  &__description {
    margin-bottom: carbon.$spacing-06;

    // TODO: Force pointer events to allow the user to select text. Remove
    // when decomissioning the Metal page.
    pointer-events: auto;

    @include carbon.breakpoint-up(md) {
      margin-bottom: carbon.$spacing-04;
    }

    @include carbon.breakpoint-up(lg) {
      margin-bottom: carbon.$spacing-08;
    }

    &__title {
      color: carbon.$gray-80;
      font-size: carbon.type-scale(4);
    }

    &__divider {
      border: 0;
      border-top: 1px solid carbon.$gray-80;
      margin: 0 0 carbon.$spacing-05 0;
    }

    &__content {
      list-style: decimal;
      margin-left: carbon.$spacing-06;
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
