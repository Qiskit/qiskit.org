<template>
  <article class="syllabus-card">
    <div class="syllabus-card__body">
      <h4>{{ title }}</h4>
      <slot />
    </div>
    <div class="syllabus-card__footer">
      <AppCta
        class="syllabus-card__footer__cta"
        label="View syllabus"
        :segment="segment"
        :url="url"
      />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { CtaClickedEventProp } from '~/constants/segment'

@Component
export default class SyllabusCard extends Vue {
  @Prop({ type: String, default: '' }) title!: string
  @Prop({ type: String, default: '' }) url!: string
  @Prop({ type: Object, required: false }) segment: CtaClickedEventProp | undefined
}
</script>

<style lang="scss" scoped>
.syllabus-card {
  width: 100%;
  background-color: $background-color-lighter;
  display: flex;
  flex-direction: column;

  &__body {
    padding: $spacing-05 $spacing-05 $spacing-07 $spacing-05;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>

<style lang="scss" scoped>
  .syllabus-card {
    .app-cta {
      width: 100%;
      max-width: 50%;
    }
  }
  </style>
