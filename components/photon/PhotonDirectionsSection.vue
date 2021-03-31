<template>
  <section>
    <div class="photon__container">
      <h2 class="copy__title">
        Get it at Photon
      </h2>
      <div class="bx--row">
        <div class="bx--col-lg-6 bx--col-md-4 photon__section-mobile-spacing">
          <p class="copy__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            ut aliquet aliquam quis. Pellentesque pulvinar consectetur cras
            proin nulla. Sollicitudin ut felis, erat in lacus eleifend non
            faucibus enim. Vestibulum libero elementum amet, faucibus lorem
            convallis pellentesque diam. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Fermentum ut aliquet aliquam quis. Pellentesque
            pulvinar consectetur cras proin nulla. Sollicitudin ut felis, erat
            in lacus eleifend non faucibus enim. Vestibulum libero elementum
            amet, faucibus lorem convallis pellentesque diam.
          </p>
          <AppCta
            class="photon__cta photon__cta_light"
            label="Print directions to Photon"
            url="/"
          />
        </div>
        <div class="bx--col-lg-6 bx--col-md-4">
          <div
            v-if="userLocationLoading"
            class="photon-directions-section__loading-container"
          >
            <cv-loading v-if="userLocationLoading" />
            <div>Calculating directions...</div>
          </div>
          <iframe
            v-else
            class="photon-directions-section__map"
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
export default class PhotonDirectionsSection extends Vue {
  @Prop({ type: Number, required: true }) userLatitude!: number
  @Prop({ type: Number, required: true }) userLongitude!: number
  @Prop({ type: Boolean, required: true }) userLocationLoaded!: boolean
  @Prop({ type: Boolean, required: true }) userLocationLoading!: boolean

  get mapSrc () {
    const key = 'AIzaSyCECZXkg_kMH3Odkh9mWAvKaQ7gexzP3UU'
    const destination = encodeURIComponent('Blockbuster Bend Oregon')
    let origin = encodeURIComponent('My location')

    if (this.userLocationLoaded) {
      origin = encodeURIComponent(`${this.userLatitude},${this.userLongitude}`)
    }

    return `https://www.google.com/maps/embed/v1/directions?key=${key}&origin=${origin}&destination=${destination}`
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/blocks/copy.scss";

.photon-directions-section {
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
