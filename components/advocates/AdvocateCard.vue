<template>
  <AppCard
    class="advocate-card"
    :image="image"
    :title="name"
    :tags="[region]"
  >
    <div class="advocate-card__content">
      <p class="advocate-card__location">
        <Map20 class="advocate-card__icon" />
        {{ location }}
      </p>
      <p class="advocate-card__contact">
        <LogoSlack20 class="advocate-card__icon" />
        {{ slackId }}
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
@import '~carbon-components/scss/globals/scss/typography';

.advocate-card {
  margin-bottom: $layout-02;
  position: relative;

  @include mq($until: large) {
    margin-bottom: $layout-01;
  }

  &__content {
    position: absolute;
    margin-top: $layout-02;
    bottom: $layout-02;

    @include mq($until: medium) {
      position: relative;
      margin-bottom: 0;
    }
  }

  &__location, &__contact {
    @include type-style('body-long-01');
    display: flex;
    align-items: center;
    width: max-content;
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
