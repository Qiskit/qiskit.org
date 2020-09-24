<template>
  <article class="empty-card">
    <div class="empty-card__content">
      <header>
        <h3 class="empty-card__title">
          {{ title }}
        </h3>
        <p class="copy__paragraph">
          {{ description }}
        </p>
      </header>
    </div>

    <div
      class="empty-card__media"
    >
      <img
        class="empty-card__media-image"
        :src="placeholder"
        alt=""
      >
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({})

export default class extends Vue {
  @Prop(String) title
  @Prop(String) image
  @Prop(String) description

  placeholder: string = '/images/events/no-events.jpg'
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.card-link {
  text-decoration: none;
}

.empty-card {
  height: 15.88rem;
  width: 100%;
  margin-bottom: 1rem;
  background-color: $ui-01;
  color: $text-01;
  border-top: 1px solid $ui-03;
  display: flex;

  @include mq($until: medium) {
    height: auto;
    flex-direction: column-reverse;
  }

  &__content {
    flex: 1;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    @include type-style('productive-heading-03');
    margin-top: 1.65rem;
  }

  &__media {
    flex: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__media-image {
    width: auto;
    height: 100%;
    /*
    Safari ignores width: auto when height is 100%.
    TODO: Find a better/more standard solution.
    */
    height: -webkit-fill-available;

    @include mq($until: medium) {
      width: 100%;
      height: auto;
    }
  }

  .copy__paragraph {
    color: $text-01;
  }
}
</style>
