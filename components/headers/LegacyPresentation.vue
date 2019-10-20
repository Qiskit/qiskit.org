<template>
  <header class="legacy-presentation">
    <img
      class="legacy-presentation__image"
      :src="image"
      :alt="`${title} logo`"
    >
    <div>
      <h1 class="legacy-presentation__title">
        {{ title }}
      </h1>
      <p class="legacy-presentation__description">
        {{ description }}
      </p>
      <Cta :to="to">
        Get Started!
      </Cta>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Cta from '~/components/ctas/Cta.vue'

@Component({
  components: { Cta }
})
export default class extends Vue {
  @Prop(String) image
  @Prop(String) title
  @Prop(String) description
  @Prop(String) to
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixins.scss';

.legacy-presentation {
  @include framed();

  display: flex;
  justify-content: center;
  text-align: left;
  color: white;
  background-color: var(--legacy-presentation-color, rgb(36, 42, 46));
  min-height: 340px;
  align-items: center;

  &__title {
    font-size: 2rem;
    font-weight: 300;
    font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
  }

  &__description {
    font-size: 1.2rem;
    font-weight: 300;
    margin: 1.1rem 0;
  }

  &__image {
    width: 200px;
    height: 200px;
    margin-right: 3em;
  }
}
</style>
