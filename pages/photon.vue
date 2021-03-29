<template>
  <div>
    <header>Header</header>
    <section class="photon__section photon__section_light">
      <div class="photon__container">
        <h2 class="copy__title">
          Lorem ipsum
        </h2>
        <div class="bx--row">
          <div class="bx--col-lg-6 section-mobile-spacing">
            <img class="photon__img-responsive" src="http://via.placeholder.com/480x270">
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
              class="photon__cta photon__cta_dark"
              label="Get movie"
              url="#get-movie"
            />
            <AppLink class="photon__request-recommendation-link" url="/">
              Request new recommendation
            </AppLink>
          </div>
        </div>
      </div>
    </section>
    <section class="photon__section photon__section_dark" id="get-movie">
      <div class="photon__container">
        <h2 class="copy__title">
          Lorem ipsum
        </h2>
        <div class="bx--row">
          <div class="bx--col-lg-6 section-mobile-spacing">
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
              class="photon__cta photon__cta_light"
              label="Get a recommendation"
              url="/"
            />
          </div>
          <div class="bx--col-lg-6">
            <img class="photon__img-responsive" src="http://via.placeholder.com/480x270">
          </div>
        </div>
      </div>
    </section>
    <section class="photon__section photon__section_light">
      <div class="photon__container">
        <div class="bx--row">
          <div class="bx--col-lg-6">
            <h2 class="copy__title">
              Pulling back the curtain
            </h2>
            <h3 class="copy__subtitle">
              Project summary
            </h3>
            <p class="copy__paragraph">
              This project is a joke. Hopefully that was obvious, but just in
              case I’ll say it again. This project is a joke. However, it does
              use a real quantum computer to give you real movie recommendations
              for the real last remaining Blockbuster. But that doesn’t mean
              it’s a “good” or useful use of a quantum computer. The goal of
              this project is to shed light on the hype and misunderstandings
              associated with quantum computer.
            </p>
            <h3 class="copy__subtitle">
              How it works
            </h3>
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
            <h3 class="copy__subtitle">
              FAQs
            </h3>
            <h4 class="copy__subtitle">
              Are quantum computers real?
            </h4>
            <p class="copy__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              ut aliquet aliquam quis.
            </p>
            <h4 class="copy__subtitle">
              Is Photon real?
            </h4>
            <p class="copy__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              ut aliquet aliquam quis.
            </p>
            <h4 class="copy__subtitle">
              Am I even real?
            </h4>
            <p class="copy__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              ut aliquet aliquam quis.
            </p>
            <h4 class="copy__subtitle">
              Are quantum computers being used today?
            </h4>
            <p class="copy__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              ut aliquet aliquam quis.
            </p>
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

  &__img-responsive {
    max-width: 100%;
  }

  &__request-recommendation-link {
    color: $carbon--blue-70 !important;
    display: inline-block;
    margin-top: $spacing-06;
  }

  &__section {
    padding-bottom: $spacing-09;
    padding-top: $spacing-09;

    &_dark {
      background: $carbon--blue-70;

      .copy__paragraph,
      .copy__title {
        color: $text-04;
      }
    }

    &_light {
      background: $carbon--cool-gray-10;
    }
  }
}

.section-mobile-spacing {
  @include mq($until: large) {
    margin-bottom: $spacing-09;
  }
}
</style>
