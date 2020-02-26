<template>
  <article>
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
            <p class="event-content__place">
              {{ place }}
            </p>
            <p class="event-content__date">
              {{ date }}
            </p>
          </div>
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
  width: 735px;
  height: 254px;
  display: flex;
  font-size: 0.9rem;
  color: var(--body-color-light);
  background-color: var(--primary-color);

  &__details {
    display: grid;
    justify-content: space-between;
  }

  &__picture {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}
</style>
