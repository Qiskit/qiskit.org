<template>
  <div>
    <qiskit-ui-shell variant="hide-account" @on-click="onClick" />
    <div class="error-page">
      <div class="cds--grid">
        <div class="cds--row">
          <div class="cds--col-lg-4">
            <h1 class="error-page__title">404</h1>
            <!-- eslint-disable vue/no-v-html -->
            <p class="error-page__message" v-html="randomMessage" />
            <!-- eslint-enable -->
            <UiCta
              :label="BackToHomeCTA.label"
              :segment="BackToHomeCTA.segment"
              :url="BackToHomeCTA.url"
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
    <FooterComponent old-container theme="light" />
  </div>
</template>

<script setup lang="ts">
import { GeneralLink } from "./constants/appLinks";

const BackToHomeCTA: GeneralLink = {
  url: "/",
  label: "Back to Qiskit.org home",
  segment: {
    cta: "back-to-home",
    location: "error-page",
  },
};

const errorImgSrc = `/images/error-page/cat${getRandomInt(1, 9)}.png`;

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const messages = [
  "Well, this isn’t exactly a <em><strong>superposition</strong></em> to be in.",
  "Looks like that URL is an <em><strong>entangled</strong></em> mess.",
  "We apologies for the <em><strong>interference</strong></em>, but this page doesn’t exist.",
  "You’ve reached the edge of the multi-verse.",
  "There is content on this page in another dimension, but not this dimension.",
];

const randomMessage = computed(() => {
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

  &__img {
    display: block;
    max-width: 100%;
  }
}

qiskit-ui-shell {
  --header-content-max-width: 96rem;
}
</style>
