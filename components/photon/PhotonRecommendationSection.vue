<template>
  <section>
    <div class="photon__container">
      <h2 class="copy__title" v-text="title" />
      <div class="bx--row">
        <div class="bx--col-lg-6 bx--col-md-4 photon__section-mobile-spacing">
          <img
            class="photon__img-responsive"
            src="http://via.placeholder.com/480x270"
          />
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
          <AppLink
            class="photon-recommendation-section__request-recommendation-link"
            url="/"
          >
            Request new recommendation
          </AppLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class PhotonRecommendationSection extends Vue {
  @Prop({ type: Array, required: true }) description!: string[];
  @Prop({ type: String, required: true }) title!: string;
  @Prop({ type: String, required: true }) trailer!: string;
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.photon-recommendation-section {
  &__request-recommendation-link {
    color: $carbon--blue-70 !important;
    display: inline-block;
    margin-top: $spacing-06;
  }
}
</style>
