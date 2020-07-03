<template>
  <AppLink
    class="card-link"
    :url="to"
  >
    <article class="event-card">
      <div class="event-card__content">
        <header>
          <span class="event-card__subtitle">
            {{ type }}
          </span>
          <h3 class="event-card__title">
            {{ title }}
          </h3>
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

      <div
        class="event-card__media"
      >
        <img
          class="event-card__media-image"
          :src="image"
          alt=""
        >
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
    margin-top: 0.31rem;
  }

  &__subtitle {
    @include type-style('productive-heading-02');
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

  &__media {
    flex: 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    @include mq($until: medium) {

    }
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
}
</style>
