<template>
  <section class="faq-section">
    <h2>
      Frequently asked questions
    </h2>
    <!-- TODO: get FAQ content from Events team -->
    <cv-accordion align="end">
      <cv-accordion-item>
        <template #title>
          This is an example of an FAQ question
        </template>
        <template #content>
          <p>
            This is an example of an FAQ response
            <AppLink v-bind="testLink">
              with a link
            </AppLink>
            that includes segment tracking.
          </p>
        </template>
      </cv-accordion-item>
    </cv-accordion>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { CtaClickedEventProp } from '~/constants/segment'

interface TrackedLink {
  url: string,
  segment: CtaClickedEventProp
}

@Component
export default class FallFestFaqSection extends Vue {
  testLink: TrackedLink = {
    url: 'https://test-link.example',
    segment: { cta: 'test-link', location: 'fall-fest-faq' }
  }
}
</script>

<style lang="scss" scoped>
.faq-section {
  ::v-deep {
    .bx--accordion__title {
      color: $text-color;
    }

    .bx--accordion__heading:hover,
    .bx--accordion__heading:hover::before {
      background-color: $background-color-lighter;
    }

    .bx--accordion__arrow {
      fill: $text-color;
    }
  }
}
</style>
