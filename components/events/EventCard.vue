<template>
  <article class="event-card">
    <img
      class="event-card__image"
      alt=""
      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      :lazy-background="image"
    >
    <div class="event-card__content">
      <header class="event-card__header">
        <h3 class="event-card__title">
          {{ title }}
        </h3>
        <div class="event-card__tags">
          <cv-tag
            v-for="type in types"
            :key="type"
            :label="type"
            kind="purple"
          />
        </div>
      </header>

      <div class="event-card__info-detail">
        <p class="event-card__location">
          <Map20 class="event-card__icon" />
          {{ location }}
        </p>
        <p class="event-card__date">
          <Calendar20 class="event-card__icon" />
          <time>{{ date }}</time>
        </p>
      </div>

      <footer class="event-card__link">
        <AppCta
          v-if="hasWebsite"
          :url="to"
        >
          Join the event
        </AppCta>
      </footer>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AppCta from '~/components/ui/AppCta.vue'

@Component({
  components: { AppCta }
})
export default class extends Vue {
  @Prop(Array) types
  @Prop(String) title
  @Prop(String) image
  @Prop(String) location
  @Prop(String) date
  @Prop(String) to

  hasWebsite: boolean = !!this.to
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.event-card {
  min-height: 13rem;
  width: 100%;
  margin-bottom: $layout-03;
  background-color: $cool-gray-10;
  color: $cool-gray-80;
  display: flex;

  @include mq($until: medium) {
    height: auto;
    flex-direction: column;
  }

  &__image {
    width: 30%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    @include mq($from: medium, $until: large) {
      width: 45%;
    }

    @include mq($until: medium) {
      height: 50%;
      width: auto;
    }
  }

  &__content {
    @include type-style('body-long-01');
    flex: 1;
    padding: $spacing-05 $spacing-05 $spacing-05 $spacing-07;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @include mq($until: large) {
      flex-direction: column;
    }
  }

  &__title {
    @include type-style('productive-heading-02');
    width: 100%;
  }

  &__tags {
    width: 20rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    @include mq($until: large) {
      justify-content: flex-start;
      margin-top: $spacing-03;
    }

    @include mq($until: medium) {
      width: 100%;
    }

    .bx--tag--purple {
      background-color: $purple-70;
      color: $white;
    }

    .bx--tag:first-child {
      margin-left: 0;
    }
  }

  &__info-detail {
    margin-top: $spacing-06;
  }

  &__location, &__date {
    @include type-style('body-long-01');
    margin-bottom: $spacing-03;
    display: flex;
    align-items: center;
  }

  &__icon {
    margin-right: $spacing-03;
    fill: currentColor;
  }

  &__link {
    margin-top: $layout-03;
    margin-bottom: $layout-01;
  }
}
</style>
