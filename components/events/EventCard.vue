<template>
  <AppCard
    class="event-card"
    :image="image"
    :title="title"
    :tags="types"
    :to="to"
    cta-label="Join the event"
    :vertical-layout="verticalLayout"
  >
    <div class="event-card__description">
      <slot v-if="this.$slots.default" />
    </div>
    <div>
      <p class="event-card__detail">
        <Map20 class="event-card__icon" />
        {{ location }}
      </p>
      <p class="event-card__detail">
        <Calendar20 class="event-card__icon" />
        <time>{{ date }}</time>
      </p>
      <p v-if="institution" class="event-card__detail">
        <Education20 class="event-card__icon" />
        {{ institution }}
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
  @Prop({ type: String, default: '' }) institution!: string
  @Prop(String) location!: string
  @Prop(String) date!: string
  @Prop(String) to!: string
  @Prop({ type: Boolean, default: false }) verticalLayout!: Boolean
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.event-card {
  margin-bottom: $layout-02;

  @include mq($until: large) {
    margin-bottom: $layout-01;
  }

  &__description {
    margin-bottom: $spacing-06;
  }

  &__detail {
    @include type-style('body-long-01');
    display: flex;
    align-items: center;
    margin-bottom: $spacing-03;

    &:last-child {
      margin-bottom: initial;
    }
  }

  &__icon {
    margin-right: $spacing-03;
    fill: currentColor;
  }
}
</style>
