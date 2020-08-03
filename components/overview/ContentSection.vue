<template>
  <article class="content-section">
    <div class="content-section__overview">
      <h2 class="copy__title">
        {{ title }}
      </h2>
      <p class="copy__paragraph content-section__description">
        {{ description }}
      </p>
      <AppLink class="copy__link" :url="link.url">
        {{ link.label }}
      </AppLink>
    </div>
    <div class="content-section__detail">
      <slot />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'

@Component({
  components: { AppLink }
})
export default class extends Vue {
  @Prop(String) title
  @Prop(String) description
  @Prop(Object) link
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';

.content-section {
  width: 100%;
  display: flex;
  margin-bottom: $layout-01 + $layout-05;

  @include mq($until: large) {
    flex-direction: column;
  }

  &__overview {
    width: 45%;
    padding-right: $spacing-07;
    margin-bottom: $layout-03;

    @include mq($until: large) {
      width: 100%;
    }
  }

  &__description {
    @include mq($from: large) {
      margin-bottom: $layout-05;
    }
  }

  &__detail {
    width: 55%;
    background-color: blueviolet;

    @include mq($until: large) {
      width: 100%;
    }
  }
}
</style>
