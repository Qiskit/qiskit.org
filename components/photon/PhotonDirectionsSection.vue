<template>
  <section>
    <div class="photon__container">
      <h2 class="copy__title">
        Lorem ipsum
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
          <iframe
            class="photon-directions-section__map"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?q=Blockbuster,%20211%20NE%20Revere%20Ave,%20Bend,%20OR%2097701,%20United%20States&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class PhotonDirectionsSection extends Vue {}
</script>

<style lang="scss">
@import "~/assets/scss/blocks/copy.scss";

.photon-directions-section {
  &__map {
    height: 18rem;
    width: 100%;

    @include mq($until: medium) {
      height: 25rem;
    }
  }
}
</style>
