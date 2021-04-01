<template>
  <section>
    <div class="blockbuster__container">
      <h2 class="copy__title">
        Get it at Blockbuster
      </h2>
      <div class="bx--row">
        <div class="bx--col-lg-6 bx--col-md-4 blockbuster__section-mobile-spacing">
          <p class="copy__paragraph">
            You're only a short drive away from watching a movie, grabbing some
            candy, popcorn, and enjoying a relaxing night with your perfectly
            selected movie. If you need directions, click below for step-by-step
            instructions for how to get to the last Blockbuster in Bend, Oregon.
          </p>
          <cv-loading v-if="userLocationLoading" />
          <AppCta
            v-else
            class="blockbuster__cta blockbuster__cta_light"
            label="Get directions to Blockbuster"
            :url="directionsUrl"
          />
        </div>
        <div class="bx--col-lg-6 bx--col-md-4">
          <div
            v-if="userLocationLoading"
            class="blockbuster-directions-section__loading-container"
          >
            <cv-loading />
            <div>Calculating directions...</div>
          </div>
          <iframe
            v-else
            class="blockbuster-directions-section__map"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            :src="mapSrc"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class BlockbusterDirectionsSection extends Vue {
  @Prop({ type: Number, required: true }) userLatitude!: number
  @Prop({ type: Number, required: true }) userLongitude!: number
  @Prop({ type: Boolean, required: true }) userLocationLoaded!: boolean
  @Prop({ type: Boolean, required: true }) userLocationLoading!: boolean

  destination = encodeURIComponent('Blockbuster Bend Oregon')

  get origin () {
    if (this.userLocationLoaded) {
      return encodeURIComponent(`${this.userLatitude},${this.userLongitude}`)
    }
    return encodeURIComponent('My location')
  }

  get mapSrc () {
    const key = 'AIzaSyCECZXkg_kMH3Odkh9mWAvKaQ7gexzP3UU'
    return `https://www.google.com/maps/embed/v1/directions?key=${key}&origin=${this.origin}&destination=${this.destination}`
  }

  get directionsUrl () {
    return `https://www.google.com/maps/dir/${this.origin}/${this.destination}`
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/blocks/copy.scss";

.blockbuster-directions-section {
  &__loading-container {
    align-items: center;
    color: $text-01;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  &__map {
    height: 18rem;
    width: 100%;

    @include mq($until: medium) {
      height: 25rem;
    }
  }
}
</style>
