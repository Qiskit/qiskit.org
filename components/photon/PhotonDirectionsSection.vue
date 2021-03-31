<template>
  <section id="get-movie">
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
          <img
            class="photon__img-responsive"
            src="http://via.placeholder.com/480x270"
          >
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
</style>
