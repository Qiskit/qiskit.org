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

<script setup lang="ts">
import QiskitPage from '~/components/logic/QiskitPage.vue'

useHead({
  title: 'Blockbuster'
})

const directionsSectionId = 'directions'
const recommendationSectionId = 'recommendation'

const userLatitude = ref(0)
const userLongitude = ref(0)
const userLocationLoaded = ref(false)
const userLocationLoading = ref(false)

function getUserLocation () {
  userLocationLoaded.value = false
  userLocationLoading.value = true
  navigator.geolocation.getCurrentPosition(
    setUserLocation,
    getCurrentPositionError,
    { timeout: 7500 })
}

function setUserLocation (position: GeolocationPosition) {
  const { latitude, longitude } = position.coords
  userLatitude.value = latitude
  userLongitude.value = longitude
  userLocationLoaded.value = true
  userLocationLoading.value = false
}

function getCurrentPositionError () {
  userLocationLoaded.value = false
  userLocationLoading.value = false
}

// TODO: Refactor "logic" pages
// export default class BlockbusterPage extends QiskitPage {
//   routeName = 'blockbuster'
// }
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
