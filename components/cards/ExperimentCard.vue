<template>
  <article class="experiment-card">
    <nuxt-link
      :to="to"
      class="card-link"
    >
      <div
        class="experiment-card__picture"
        :style="`background-image: ${decorate(image)};`"
      />
      <div class="experiment-card__copy">
        <h3>
          {{ title }}
        </h3>
        <p class="experiment-card__author">
          {{ author }}
        </p>
        <p class="experiment-card__summary">
          {{ summary }}
        </p>
      </div>
    </nuxt-link>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) title
  @Prop(String) image
  @Prop(String) author
  @Prop(String) summary
  @Prop(Boolean) horizontal
  @Prop(String) to

  decorate(image) {
    const bgEffects = [
      `url(${image})`
    ]
    return bgEffects.join(', ')
  }
}
</script>

<style lang="scss" scoped>
.card-link {
  display: block;
  text-decoration: none;
  color: unset;
  height: 100%;
}

.experiment-card {
  font-size: 0.9rem;
  color: var(--body-color-light);
  background-color: var(--primary-color);

  &--horizontal {
    display: flex;
    flex-direction: row;
  }

  &__picture {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover, cover, cover;
    background-position: top center;

    /* Keep it square */
    &::before {
      content: "";
      display: block;
      padding-bottom: 100%;
    }

    &--horizontal {
      flex: 2;

      &::before {
        padding-bottom: 50%;
      }
    }
  }

  &__copy {
    margin: 0.5rem 1rem 1em;

    &--horizontal {
      flex: 1;
    }
  }

  h3 {
    margin-top: 1.5rem;
  }

  &__author {
    color: var(--secondary-color-lightmost);
    margin-top: 0.5rem;

    &:before {
      content: "by ";
      color: var(--primary-color-lightmost);
    }
  }
}
</style>
