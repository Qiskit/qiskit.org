<template>
  <AppCard
    class="event-card"
    :image="image"
    :title="title"
    :tags="types"
    :to="to"
    :cta-label="ctaLabel"
    :segment="segment"
    :vertical-layout="verticalLayout"
  >
    <div class="event-card__description">
      <slot v-if="$slots.default" />
    </div>
    <div>
      <div v-if="location" class="event-card__detail">
        <Map20 class="event-card__icon" />
        {{ location }}
      </div>
      <div v-if="date" class="event-card__detail">
        <Calendar20 class="event-card__icon" />
        <time>{{ date }}</time>
      </div>
      <div v-if="time" class="event-card__detail">
        <Time20 class="event-card__icon" />
        <time>{{ time }}</time>
      </div>
      <div v-if="institution" class="event-card__detail">
        <Education20 class="event-card__icon" />
        {{ institution }}
      </div>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import { CtaClickedEventProp } from '~/constants/segment'

interface Props {
  types?: string[]
  title: string
  image: string
  institution?: string
  location: string
  date: string
  time: string
  to: string
  ctaLabel?: string
  segment?: CtaClickedEventProp | undefined
  verticalLayout?: boolean
}

withDefaults(defineProps<Props>(), {
  types: () => [],
  institution: '',
  ctaLabel: 'Join the event',
  segment: undefined,
  verticalLayout: false
})
</script>

<style lang="scss" scoped>
.event-card {
  &__description {
    margin-bottom: $spacing-06;
  }

  &__detail {
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
