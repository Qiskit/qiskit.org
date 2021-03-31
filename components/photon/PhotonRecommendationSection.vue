<template>
  <section>
    <div
      v-if="recommendationIsLoading"
      class="photon__container photon-recommendation-section__loading-container"
    >
      <cv-loading />
      <div>Asking the quantum computer...</div>
    </div>
    <div v-else class="photon__container">
      <h2 class="copy__title" v-text="recommendation.title" />
      <div class="bx--row">
        <div class="bx--col-lg-6 bx--col-md-4 photon__section-mobile-spacing">
          <div class="photon-recommendation-section__video-wrapper">
            <iframe
              class="photon-recommendation-section__video"
              frameborder="0"
              height="443"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              :src="`https://www.youtube.com/embed/${recommendation.trailer}?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=1&start=0&end=0`"
              type="text/html"
              width="788.54"
            />
          </div>
        </div>
        <div class="bx--col-lg-6 bx--col-md-4">
          <p
            v-for="descriptionParagraph in recommendation.description"
            :key="descriptionParagraph"
            class="copy__paragraph"
            v-text="descriptionParagraph"
          />
          <AppCta
            class="photon__cta photon__cta_dark"
            label="Get movie"
            :url="`#${directionsSectionId}`"
            @click="getUserLocation"
          />
          <a
            class="photon-recommendation-section__request-recommendation-link"
            href="#"
            @click.prevent="updateRecommendation"
          >
            Request new recommendation
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import movies from '~/content/photon/movies.json'
import quantumBinaryNumbers from '~/content/photon/quantum-binary-numbers.json'

interface Recommendation {
  description: String[];
  title: String;
  trailer: String;
}

const emptyRecommendation: Recommendation = {
  description: [],
  title: '',
  trailer: ''
}

@Component
export default class PhotonRecommendationSection extends Vue {
  @Prop({ type: String, required: true }) directionsSectionId!: String
  @Prop({ type: Function, required: true }) getUserLocation!: Function

  quantumBinaryNumbersIndex = 0
  recommendation: Recommendation = emptyRecommendation

  mounted () {
    this.quantumBinaryNumbersIndex = Math.floor(
      Math.random() * quantumBinaryNumbers.length
    )
    this.updateRecommendation()
  }

  updateRecommendation (): void {
    this.recommendation = emptyRecommendation

    setTimeout(() => {
      const quantumBinaryNumber =
        quantumBinaryNumbers[
          this.quantumBinaryNumbersIndex % quantumBinaryNumbers.length
        ]
      const quantumInteger = parseInt(quantumBinaryNumber, 2)
      this.recommendation = movies[quantumInteger % movies.length]
      this.quantumBinaryNumbersIndex++
    }, 500)
  }

  get recommendationIsLoading () {
    return !this.recommendation.title
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.photon-recommendation-section {
  &__loading-container {
    align-items: center;
    color: $text-03;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  &__request-recommendation-link {
    color: $carbon--blue-70 !important;
    display: inline-block;
    margin-top: $spacing-06;
    text-decoration: none;
  }

  &__video {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &__video-wrapper {
    height: 0;
    padding-bottom: 56.25%; // 16:9 aspect ratio
    position: relative;
  }
}
</style>
