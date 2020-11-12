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
    <p v-if="slackId" class="advocate-card__contact">
      <LogoSlack20 class="advocate-card__icon" />
      <AppLink :url="`https://qiskit.slack.com/team/${slackId}`">
        Contact on Slack
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
  @Prop(String) location!: string
  @Prop(String) region!: string
  @Prop(String) slackId!: string

  // Tags on AppCard is an Array
  formattedRegion = this.region ? [this.region] : []
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
