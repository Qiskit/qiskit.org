<template>
  <section class="external-recommended-readings">
    <h2>
      External recommended readings
    </h2>
    <ol class="external-recommended-readings__list">
      <li
        v-for="reference in references"
        :key="reference.label"
      >
        <span class="external-recommended-readings__reference">
          {{ reference }}
        </span>
      </li>
      <li
        v-for="link in links"
        :key="link.label"
      >
        <AppLink
          class="external-recommended-readings__link"
          :segment="link.segment"
          :url="link.url"
        >
          {{ link.label }}
        </AppLink>
      </li>
    </ol>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

@Component
export default class ExternalRecommendedReadings extends Vue {
  @Prop({ type: Array, required: true }) links!: GeneralLink[]
  @Prop({ type: Array, required: false }) references!: GeneralLink[]
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.external-recommended-readings {
  &__list {
    list-style: decimal;
    margin-left: $spacing-05;
  }

  &__link {
    display: block;
    margin-bottom: $spacing-01;
    width: fit-content;
  }

  &__reference {
    @include type-style('code-01');

    margin-bottom: $spacing-01;
  }
}
</style>
