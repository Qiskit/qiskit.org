<template>
  <div>
    <header>Header</header>
    <section class="photon__section">
      <div class="photon__container">
        <h2 class="copy__title">
          Lorem ipsum
        </h2>
        <div class="bx--row">
          <div class="bx--col-lg-6">
            <img src="http://via.placeholder.com/480x270">
          </div>
          <div class="bx--col-lg-6">
            <p class="copy__paragraph">
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
              class="photon__cta photon__cta_blue"
              label="Get movie"
              url="/"
            />
            <AppLink class="photon__request-recommendation-link" url="/">
              Request new recommendation
            </AppLink>
          </div>
        </div>
      </div>
    </section>
    <section class="photon__section photon__section_blue">
      <div class="photon__container">
        <h2 class="copy__title">
          Lorem ipsum
        </h2>
        <div class="bx--row">
          <div class="bx--col-lg-6">
            <p class="copy__paragraph">
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
              class="photon__cta photon__cta_white"
              label="Get a recommendation"
              url="/"
            />
          </div>
          <div class="bx--col-lg-6">
            <img src="http://via.placeholder.com/480x270">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  head () {
    return {
      title: 'Photon'
    }
  }
})
export default class PhotonPage extends QiskitPage {
  routeName = 'photon';
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.photon {
  &__container {
    @include contained();
  }

  &__cta {
    margin-top: $spacing-07;

    &_blue {
      background: $carbon--blue-70;
      background-image: none !important;
    }

    &_white {
      background: $carbon--cool-gray-10;
      background-image: none !important;
      color: $carbon--blue-80 !important;
    }
  }

  &__request-recommendation-link {
    color: $carbon--blue-70 !important;
    display: inline-block;
    margin-top: $spacing-06;
  }

  &__section {
    padding-bottom: $spacing-09;
    padding-top: $spacing-09;

    &_blue {
      background: $carbon--blue-70;

      .copy__paragraph,
      .copy__title {
        color: $text-04;
      }
    }
  }
}
</style>
