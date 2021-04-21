<template>
  <div>
    <BlockbusterHeader :recommendation-section-id="recommendationSectionId" />
    <BlockbusterRecommendationSection
      :id="recommendationSectionId"
      class="blockbuster__section blockbuster__section_light"
      :directions-section-id="directionsSectionId"
      :get-user-location="getUserLocation"
    />
    <BlockbusterDirectionsSection
      :id="directionsSectionId"
      class="blockbuster__section blockbuster__section_dark"
      :user-latitude="userLatitude"
      :user-longitude="userLongitude"
      :user-location-loaded="userLocationLoaded"
      :user-location-loading="userLocationLoading"
    />
    <BlockbusterExplanationSection class="blockbuster__section" />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  head () {
    return {
      title: 'Blockbuster'
    }
  }
})
export default class BlockbusterPage extends QiskitPage {
  routeName = 'blockbuster'

  directionsSectionId = 'directions'
  recommendationSectionId = 'recommendation'

  userLatitude = 0
  userLongitude = 0
  userLocationLoaded = false
  userLocationLoading = false

  getUserLocation () {
    this.userLocationLoaded = false
    this.userLocationLoading = true
    navigator.geolocation.getCurrentPosition(
      this.setUserLocation,
      this.getCurrentPositionError,
      { timeout: 7500 })
  }

  setUserLocation (position: GeolocationPosition) {
    const { latitude, longitude } = position.coords
    this.userLatitude = latitude
    this.userLongitude = longitude
    this.userLocationLoaded = true
    this.userLocationLoading = false
  }

  getCurrentPositionError () {
    this.userLocationLoaded = false
    this.userLocationLoading = false
  }
}
</script>

<style lang="scss">
.blockbuster {
  &__container {
    @include contained();
  }

  &__cta {
    margin-top: $spacing-07;

    &_dark {
      background: $carbon--blue-70;
      background-image: none !important;
    }

    &_light {
      background: $carbon--cool-gray-10;
      background-image: none !important;
      color: $carbon--blue-80 !important;
    }
  }

  &__section {
    padding-bottom: $spacing-09;
    padding-top: $spacing-09;

    &_dark {
      background: $carbon--blue-70;

      h2,
      p {
        color: $text-color-white;
      }
    }

    &_light {
      background: $carbon--cool-gray-10;
    }
  }

  &__section-mobile-spacing {
    @include mq($until: medium) {
      margin-bottom: $spacing-09;
    }
  }
}
</style>
