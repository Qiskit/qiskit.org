<template>
  <div>
    <qiskit-ui-shell variant="hide-account" @on-click="onClick" />
    <div class="error-page">
      <div class="cds--grid">
        <div class="cds--row">
          <div class="cds--col-lg-4">
            <h1 class="error-page__title">{{ error.statusCode }}</h1>
            <p>{{ error.message }}</p>
            <p class="error-page__message">
              <!-- eslint-disable-next-line vue/no-v-html -->
              Or as we like to say, <span v-html="randomMessage" />
            </p>
            <UiCta
              v-for="externalLink in externalLinks"
              :key="externalLink.label"
              kind="ghost"
              :label="externalLink.label"
              :segment="externalLink.segment"
              :url="externalLink.url"
            />
          </div>
          <div class="cds--col-lg-8">
            <img
              class="error-page__img"
              :src="errorImgSrc"
              alt="Playful illustration of a cat in a cardboard box"
            />
          </div>
        </div>
      </div>
    </div>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import { NuxtError } from "#app";

interface Props {
  error: NuxtError;
}

const props = defineProps<Props>();

const pageTitle = computed<string>(() => {
  return props.error.statusMessage ?? "Error";
});

useHead({
  title: pageTitle,
});

const externalLinks = [
  {
    url: "https://learning.quantum-computing.ibm.com/",
    label: "Learning",
    segment: {
      cta: "go-to-learning-platform",
      location: "error-page",
    },
  },
  {
    url: "https://docs.quantum-computing.ibm.com/",
    label: "Documentation",
    segment: {
      cta: "go-to-documentation",
      location: "error-page",
    },
  },
  {
    url: "https://qiskit.github.io/ecosystem/",
    label: "Ecosystem",
    segment: {
      cta: "go-to-ecosystem",
      location: "error-page",
    },
  },
];

const errorImgSrc = `/images/error-page/cat${getRandomInt(1, 9)}.png`;

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const messages = [
  "this isn’t exactly a <em><strong>superposition</strong></em> to be in.",
  "looks like something here is an <em><strong>entangled</strong></em> mess.",
  "we apologize for the <em><strong>interference</strong></em> you’re seeing on this page.",
  "you’ve reached the edge of the multi-verse.",
  "this page loads fine another dimension, but not this dimension.",
];

const randomMessage = computed<string>(() => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
});

const { trackClickEvent } = useSegment();

function onClick(e: CustomEvent) {
  trackClickEvent(`${e.detail?.label?.toLowerCase()}`, "menu");
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.error-page {
  padding: carbon.$spacing-10 0;

  &__title {
    margin-bottom: carbon.$spacing-05;
  }

  &__message {
    margin-bottom: carbon.$spacing-06;
  }

  &__img {
    display: block;
    max-width: 100%;
  }
}

qiskit-ui-shell {
  --header-content-max-width: 96rem;
}
</style>
