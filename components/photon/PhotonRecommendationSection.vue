<template>
  <section>
    <div class="photon__container">
      <h2 class="copy__title" v-text="title" />
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
              :src="`https://www.youtube.com/embed/${trailer}?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=1&start=0&end=0`"
              type="text/html"
              width="788.54"
            />
          </div>
        </div>
        <div class="bx--col-lg-6 bx--col-md-4">
          <p
            v-for="descriptionParagraph in description"
            :key="descriptionParagraph"
            class="copy__paragraph"
            v-text="descriptionParagraph"
          />
          <AppCta
            class="photon__cta photon__cta_dark"
            label="Get movie"
            url="#get-movie"
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

@Component
export default class PhotonRecommendationSection extends Vue {
  @Prop({ type: Array, required: true }) description!: String[];
  @Prop({ type: String, required: true }) title!: String;
  @Prop({ type: String, required: true }) trailer!: String;
  @Prop({ type: Function, required: true }) updateRecommendation!: Function;
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.photon-recommendation-section {
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
