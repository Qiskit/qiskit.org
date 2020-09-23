<template>
  <AppLink
    class="card-link"
    :url="to"
  >
    <article class="event-card">
      <img
        class="event-card__image"
        :src="image"
        alt=""
      >
      <div class="event-card__content">
        <header class="event-card__header">
          <h3 class="event-card__title">
            {{ title }}
          </h3>
          <cv-tag :label="type" kind="purple" />
        </header>

        <footer>
          <div class="event-card__info-detail">
            <Map20 class="event-card__icon" />
            <span class="event-card__location">{{ location }}</span>
          </div>
          <div class="event-card__date-and-arrow">
            <div class="event-card__info-detail">
              <Calendar20 class="event-card__icon" />
              <span class="event-card__date"><time>{{ date }}</time></span>
            </div>
            <ArrowRight20 v-if="hasWebsite" class="event-card__icon event-card__icon--purple" />
          </div>
        </footer>
      </div>
    </article>
  </AppLink>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'

@Component({
  components: { AppLink }
})
export default class extends Vue {
  @Prop(String) type
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

.card-link {
  text-decoration: none;
}

.event-card {
  height: 13rem;
  width: 100%;
  margin-bottom: 1rem;
  background-color: $ui-01;
  color: $text-01;
  display: flex;

  @include mq($until: medium) {
    height: 24rem;
    flex-direction: column;
  }

  &__image {
    width: 14rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    @include mq($from: medium, $until: large) {
      width: 13rem;
    }

    @include mq($until: medium) {
      height: 13rem;
      width: auto;
    }
  }

  &__content {
    flex: 1;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include mq($until: large) {
      flex-direction: column;
    }

    .bx--tag--purple {
      background-color: $purple-70;
      color: $white;
    }
  }

  &__title {
    @include type-style('productive-heading-03');
    margin-top: 0.31rem;
  }

  &__location, &__date {
    @include type-style('body-short-01');
  }

  &__location, &__date {
    padding-left: 0.31rem;
  }

  &__info-detail {
    margin-top: 0.63rem;
  }

  &__icon {
    fill: currentColor;
    position: relative;
    top: .3em;
    width: 1.25rem;
    height: 1.25rem;

    &--purple {
      color: $icon-01;
    }
  }

  &__date-and-arrow {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
}
</style>
