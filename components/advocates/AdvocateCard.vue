<template>
  <AppCard
    class="advocate-card"
    :image="image"
    :title="name"
    :tags="formattedRegion"
  >
    <p v-if="location" class="advocate-card__location">
      <Map20 class="advocate-card__icon" />
      {{ location }}
    </p>
    <p class="advocate-card__contact">
      <LogoSlack20 class="advocate-card__icon" />
      <AppLink class="copy__link" :url="`https://qiskit.slack.com/team/${slackId}`">
        @{{ slackUsername }}
      </AppLink>
    </p>
  </AppCard>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class AdvocateCard extends Vue {
  @Prop(String) name!: string
  @Prop(String) image!: string
  @Prop(String) city!: string
  @Prop(String) country!: string
  @Prop(String) region!: string
  @Prop(String) slackId!: string
  @Prop(String) slackUsername!: string

  // Tags on AppCard is an Array
  formattedRegion = this.region ? [this.region] : []

  location = [this.city, this.country].filter(e => !!e).join(', ')
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.advocate-card {
  margin-bottom: $layout-02;

  @include mq($until: large) {
    margin-bottom: $layout-01;
  }

  &__location, &__contact {
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
