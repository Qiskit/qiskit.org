<template>
  <AppCard
    class="advocate-card"
    :image="image"
    :title="name"
    :tags="[region]"
  >
    <div>
      <p class="advocate-card__location">
        <Map20 class="advocate-card__icon" />
        {{ location }}
      </p>
      <p class="advocate-card__contact">
        <Calendar20 class="advocate-card__icon" />
        <time>{{ slackId }}</time>
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
  @Prop(String) name!: any
  @Prop(String) image!: any
  @Prop(String) location!: any
  @Prop(String) region!: any
  @Prop(String) slackId!: any
}
</script>

<style lang="scss" scoped>
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
