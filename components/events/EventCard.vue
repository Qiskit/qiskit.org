<template>
  <AppCard
    class="event-card"
    :image="image"
    :title="title"
    :tags="types"
    :to="to"
    cta-label="Join the event"
  >
    <div>
      <p class="event-card__location">
        <Map20 class="event-card__icon" />
        {{ location }}
      </p>
      <p class="event-card__date">
        <Calendar20 class="event-card__icon" />
        <time>{{ date }}</time>
      </p>
    </div>
  </AppCard>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class EventCard extends Vue {
  @Prop(Array) types!: string[]
  @Prop(String) title!: string
  @Prop(String) image!: string
  @Prop(String) location!: string
  @Prop(String) date!: string
  @Prop(String) to!: string
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.event-card {
  margin-bottom: $layout-02;

  @include mq($until: large) {
    margin-bottom: $layout-01;
  }

  &__location, &__date {
    @include type-style('body-long-01');
    display: flex;
    align-items: center;
  }

  &__location {
    margin-bottom: $spacing-03;
  }

  &__icon {
    margin-right: $spacing-03;
    fill: currentColor;
  }
}
</style>
