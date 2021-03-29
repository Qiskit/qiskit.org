<template>
  <div>
    <header>Header</header>
    <section class="photon__white-section">
      <h2 class="copy__title">Lorem ipsum</h2>
      <div class="bx--row">
        <div class="bx--col-lg-6">left</div>
        <div class="bx--col-lg-6">right</div>
      </div>
    </section>
    <section class="photon__blue-section">
      <div class="photon__container">
        <h2 class="copy__title">Lorem ipsum</h2>
        <div class="bx--row">
          <div class="bx--col-lg-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              ut aliquet aliquam quis. Pellentesque pulvinar consectetur cras
              proin nulla. Sollicitudin ut felis, erat in lacus eleifend non
              faucibus enim. Vestibulum libero elementum amet, faucibus lorem
              convallis pellentesque diam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Fermentum ut aliquet aliquam quis.
              Pellentesque pulvinar consectetur cras proin nulla. Sollicitudin
              ut felis, erat in lacus eleifend non faucibus enim. Vestibulum
              libero elementum amet, faucibus lorem convallis pellentesque diam.
            </p>
            <AppCta
              class="photon__blue-section__cta"
              label="Get a recommendation"
              url="/"
            />
          </div>
          <div class="bx--col-lg-6">
            <img src="http://via.placeholder.com/480x270" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import QiskitPage from "~/components/logic/QiskitPage.vue";

@Component({
  head() {
    return {
      title: "Photon",
    };
  },
})
export default class PhotonPage extends QiskitPage {
  routeName = "photon";
}
</script>

<style lang="scss" scoped>
.photon {
  &__container {
    @include contained();
  }

  &__blue-section {
    background: $carbon--blue-70;
    padding-bottom: $spacing-09;
    padding-top: $spacing-09;

    &__cta {
      background: $carbon--cool-gray-10;
      background-image: none !important;
      color: $carbon--blue-80 !important;
      margin-top: $spacing-07;
    }

    .copy__title {
      color: $text-04;
    }
  }
}
</style>
