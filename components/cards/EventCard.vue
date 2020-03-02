<template>
  <article class="event-card">
    <nuxt-link
      :to="to"
      class="card-link"
    >
      <div class="event-content">
        <div class="event-content__details">
          <div>
            <p>{{ type }}</p>
            <h3>{{ title }}</h3>
          </div>
          <div>
            <p><Map20 /> {{ place }}</p>
            <p><Calendar20 /> {{ date }}</p>
          </div>
          <ArrowRight20 class="event-content__arrow-right" />
        </div>
        <div
          class="event-content__picture"
          :style="`background-image: ${decorate(image)};`"
        />
      </div>
    </nuxt-link>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) type
  @Prop(String) title
  @Prop(String) image
  @Prop(String) place
  @Prop(String) date
  @Prop(String) to

  decorate (image) {
    const bgEffects = [
      `url(${image})`
    ]
    return bgEffects.join(', ')
  }
}
</script>

<style lang="scss" scoped>
.card-link {
  text-decoration: none;
}

.event-content {
  height: 15.875rem;
  width: 100%;
  display: flex;
  font-size: 0.9rem;
  color: var(--white);
  background-color: var(--gray-70);

  &__details {
    width: 50%;
    display: grid;
    justify-content: space-between;
    fill: var(--white);
  }

  &__details p {
    font-size: 0.875rem;
  }

  &__details h3 {
    font-size: 1.5rem;
  }

  &__arrow-right {
    position: relative;
    bottom: -1.25rem;
    right: -1.25rem;
    fill: var(--purple-60);
  }

  &__picture {
    width: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}
</style>
