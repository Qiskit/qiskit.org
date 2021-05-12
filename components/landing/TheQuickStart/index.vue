<template>
  <article
    class="page-section quick-start"
    :class="oldContainer ? 'quick-start_old-container' : 'bx--grid'"
  >
    <h2>Quick Start</h2>
    <div class="bx--row quick-start__introduction">
      <div
        class="bx--col-md-5 bx--col-lg-8 bx--col-xl-7"
        :class="{ 'bx--col-max-6': !oldContainer }"
      >
        <p class="quick-start__description">
          When you are looking to start Qiskit, you have two options. You can
          start Qiskit locally, which is much more secure and private, or you
          get started with hosted Jupyter Notebooks in IBM Quantum Lab.
        </p>
      </div>
    </div>
    <div class="bx--row">
      <StartLocally
        class="bx--col-md-5 bx--col-lg-10 bx--col-xlg-11"
        :class="{ 'bx--col-max-12': !oldContainer }"
      />
      <StartOnTheCloud
        class="bx--col-md-3 bx--col-lg-6 bx--col-xlg-5"
        :class="{ 'bx--col-max-4': !oldContainer }"
      />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class TheQuickStart extends Vue {
  @Prop({ type: Boolean, default: false, required: false }) oldContainer!: boolean;
}
</script>

<style lang="scss" scoped>
.quick-start {
  &__description {
    margin-bottom: 0;
  }

  &__introduction {
    margin-bottom: $spacing-06;
  }

  &_old-container {
    @include contained();
  }
}
</style>
