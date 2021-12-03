<template>
  <article class="qiskit-capability-card">
    <div class="qiskit-capability-card__container">
      <div class="qiskit-capability-card__thumbnail">
        <img class="qiskit-capability-card__thumbnail__media" :src="thumbnailResource">
      </div>
      <div class="qiskit-capability-card__copy">
        <h3 class="qiskit-capability-card__title">
          {{ title }}
        </h3>
        <div class="qiskit-capability-card__description">
          <p v-text="description" />
          <AppCta v-if="link" v-bind="link" kind="ghost" />
        </div>
      </div>
    </div>
    <div
      class="qiskit-capability-card__visual-resource"
      :lazy-background="visualResource"
    />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class QiskitCapabilityCard extends Vue {
  @Prop(String) visualResource!: string
  @Prop(String) thumbnailResource!: string
  @Prop(String) title!: string
  @Prop(String) description!: string
  @Prop({ type: Object, required: false }) link!: any
}
</script>

<style lang="scss" scoped>
.qiskit-capability-card {
  display: flex;
  // min-height: 16rem;

  @include mq($until: medium) {
    flex-direction: column;
  }

  &__container {
    display: flex;

    @include mq($until: large) {
      flex-direction: column;
    }
  }

  &__copy {
    padding-right: $spacing-07;
  }

  &__thumbnail {
    width: 100%;
    max-width: 10rem;
    margin-right: $spacing-07;

    &__media {
      display: block;
      width: 100%;
    }
  }

  &__title {
    padding-right: $spacing-07;

    @include mq($until: large) {
      flex: 0 0 auto;
      padding-right: 0;
      padding-bottom: $spacing-07;
    }

    @include mq($until: medium) {
      padding-bottom: 0;
      margin-bottom: $spacing-05;
    }
  }

  &__description {
    flex: 1;

    @include mq($until: large) {
      padding-bottom: $spacing-05;
    }

    @include mq($until: medium) {
      padding-bottom: 0;
      margin-bottom: $spacing-05;
    }
  }

  &__visual-resource {
    flex: 0 0 46rem;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;

    @include mq($from: medium, $until: large) {
      flex: 1.5;
    }

    @include mq($from: medium) {
      display: none;
    }

    @include mq($until: medium) {
      flex: 0 0 16rem;
      margin: 0;
    }
  }
}
</style>
