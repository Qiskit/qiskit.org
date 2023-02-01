<template>
  <AppCard
    class="advocate-card"
    :image="image"
    :title="name"
    :tags="formattedRegion"
  >
    <div v-if="location" class="advocate-card__location">
      <Map20 class="advocate-card__icon" />
      {{ location }}
    </div>
    <div class="advocate-card__contact">
      <LogoSlack20 class="advocate-card__icon" />
      <AppLink :url="`https://qiskit.slack.com/team/${slackId}`">
        @{{ slackUsername }}
      </AppLink>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
interface Props {
  name: string,
  image: string,
  city?: string,
  country?: string,
  region?: string,
  slackId?: string,
  slackUsername?: string
}

const props = withDefaults(defineProps<Props>(), {
  city: '',
  country: '',
  region: '',
  slackId: '',
  slackUsername: ''
})

// Tags on AppCard is an Array
const formattedRegion = computed(() => props.region ? [props.region] : [])

const location = computed(() => [props.city, props.country].filter(e => !!e).join(', '))
</script>

<style lang="scss" scoped>
.advocate-card {
  margin-bottom: $spacing-06;

  @include mq($until: large) {
    margin-bottom: $spacing-05;
  }

  &__location, &__contact {
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

<style lang="scss">
.advocate-card {

  @include mq($until: medium) {
    .app-card__image {
      background-size: contain;
    }
  }
}
</style>
