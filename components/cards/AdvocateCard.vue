<template>
  <article class="advocate-card">
    <div
      class="advocate-card__picture"
      :style="`background-image: ${decorate(image)};`"
    />
    <div class="advocate-card__copy">
      <h3>
        {{ name }}
      </h3>
      <p>
        {{ location }}
      </p>
      <h3>
        Focus areas
      </h3>
      <p>
        {{ areas }}
      </p>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) name
  @Prop(String) image
  @Prop(String) location
  @Prop(String) areas

  decorate (image) {
    const bgEffects = [
      'linear-gradient(170deg, #0000 0%, #0000 90%, var(--primary-color) 90.3%)',
      'linear-gradient(-170deg, #0000 0%, #0000 90%, var(--primary-color) 90.3%)',
      `url(${image})`
    ]
    return bgEffects.join(', ')
  }
}
</script>

<style lang="scss" scoped>
.advocate-card {
  font-size: 0.9rem;
  text-align: center;
  background-color: var(--primary-color);

  p {
    margin-top: 0;
  }

  h3 {
    margin-top: 1.5rem;

    &:first-child {
      margin-top: 0;
    }
  }

  &__picture {
    height: 350px;
    background-repeat: no-repeat;
    background-size: cover, cover, cover;
    background-position: top center;
  }

  &__copy {
    margin: 0.5rem 2rem 1em;
  }
}
</style>
