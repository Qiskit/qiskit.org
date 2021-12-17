<template>
  <article>
    <div class="qiskit-capability-card__container">
      <div class="qiskit-capability-card__thumbnail">
        <img class="qiskit-capability-card__thumbnail__media" :src="thumbnailResource">
      </div>
      <div class="qiskit-capability-card__copy">
        <h3 class="qiskit-capability-card__title">
          {{ title }}
        </h3>
        <img class="qiskit-capability-card__thumbnail__mobile" :src="thumbnailResource">
        <div class="qiskit-capability-card__description">
          <p v-text="description" />
          <AppCta
            v-if="link"
            v-bind="link"
            kind="ghost"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class QiskitCapabilityCard extends Vue {
  @Prop({ type: String, required: true }) thumbnailResource!: string
  @Prop({ type: String, required: true }) title!: string
  @Prop({ type: String, required: true }) description!: string
  @Prop({ type: Object, required: false }) link!: any
}
</script>

<style lang="scss" scoped>
$card-img-width: 10rem;

.qiskit-capability-card {
  display: flex;

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
    width: $card-img-width;
    margin-right: $spacing-07;

    @include mq($until: large) {
      margin-right: initial;
      margin-bottom: $spacing-05;
    }

    @include mq($until: large) {
      display: none;
    }

    &__media {
      display: block;
      width: 100%;
      min-width: $card-img-width;

    }

    &__mobile {
      display: none;
      @include mq($until: large) {
        display: block;
        width: 100%;
        max-width: $card-img-width;
        margin-bottom: $spacing-05;
      }
    }
  }

  &__title {
    padding-right: $spacing-07;

    @include mq($until: large) {
      padding-right: 0;
    }

    @include mq($until: medium) {
      padding-bottom: 0;
      margin-bottom: $spacing-05;
    }
  }

  &__description {
    padding-bottom: $spacing-05;
  }
}
</style>
