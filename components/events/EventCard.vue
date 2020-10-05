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
import AppCard from '~/components/ui/AppCard.vue'

@Component({
  components: { AppCard }
})
export default class extends Vue {
  @Prop(Array) types!: any
  @Prop(String) title!: any
  @Prop(String) image!: any
  @Prop(String) location!: any
  @Prop(String) date!: any
  @Prop(String) to!: any
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
