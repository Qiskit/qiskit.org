<template>
  <footer class="page-footer">
    <section
      class="page-footer__primary"
      :class="`page-footer__primary_theme_${theme}`"
    >
      <div
        :class="oldContainer ? 'page-footer__primary-container' : 'cds--grid'"
      >
        <div class="cds--row">
          <div class="cds--col-lg-4 cds--col-md">
            <UiLogo
              class="page-footer__logo"
              :class="`page-footer__logo_theme_${theme}`"
            />
          </div>
          <FooterSection
            v-for="sectionElements in footerElements"
            :key="sectionElements.title"
            class="cds--col-lg-3 cds--col-sm"
            v-bind="sectionElements"
            :theme="theme"
          />
          <FooterSection
            class="cds--col-lg-3 cds--col-md page-footer__stay-connected"
            v-bind="stayConnectedElements"
            icons-only
            :theme="theme"
          />
        </div>
      </div>
    </section>
    <section
      class="page-footer__secondary"
      :class="`page-footer__secondary_theme_${theme}`"
    >
      <div
        class="page-footer__secondary-container"
        :class="{ 'cds--grid': !oldContainer }"
      >
        <div class="caption" :class="`page-footer__copyright_theme_${theme}`">
          ©Qiskit | All Rights Reserved
        </div>
        <div class="page-footer__secondary-links">
          <UiBasicLink
            v-for="link in secondaryFooterLinks"
            :key="link.label"
            class="caption page-footer__secondary-link"
            :class="`page-footer__secondary-link_theme_${theme}`"
            v-bind="link"
          >
            {{ link.label }}
          </UiBasicLink>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import {
  FOOTER_ELEMENTS,
  SECONDARY_FOOTER_LINKS,
  STAY_CONNECTED_LINKS,
} from "~/constants/menuLinks";

interface Props {
  oldContainer?: boolean;
  theme?: "light" | "dark";
}

withDefaults(defineProps<Props>(), {
  oldContainer: false,
  theme: "light",
});

const footerElements = FOOTER_ELEMENTS;
const stayConnectedElements = STAY_CONNECTED_LINKS;
const secondaryFooterLinks = SECONDARY_FOOTER_LINKS;
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.page-footer {
  .page-footer__primary {
    padding: carbon.$spacing-07 0;

    &_theme_light {
      background-color: qiskit.$background-color-lighter;
    }

    &_theme_dark {
      background-color: qiskit.$background-color-darker;
    }
  }

  .page-footer__secondary {
    padding: carbon.$spacing-07 0;
    padding-bottom: carbon.$spacing-07 + 2.5rem; // make room for the "cookies preferences" button

    &_theme_light {
      background-color: qiskit.$background-color-white;
    }

    &_theme_dark {
      background-color: qiskit.$background-color-black;
    }
  }

  &__primary-container {
    @include qiskit.contained;
  }

  &__logo {
    height: 32px;

    @include carbon.breakpoint-down(md) {
      margin-bottom: carbon.$spacing-07;
    }

    &_theme_light {
      color: qiskit.$text-color-lighter;
    }

    &_theme_dark {
      color: qiskit.$text-color-white;
    }
  }

  &__secondary-link {
    margin-left: carbon.$spacing-07;
    text-decoration: none;

    @include carbon.breakpoint-down(md) {
      margin-bottom: carbon.$spacing-05;
    }

    &:hover {
      text-decoration: underline;
    }

    &_theme_light {
      color: qiskit.$text-color-lighter;
    }

    &_theme_dark {
      color: qiskit.$text-color-white;
    }
  }

  &__secondary-container {
    display: flex;
    justify-content: space-between;

    &:not(.cds--grid) {
      @include qiskit.contained;
    }
  }

  &__secondary-links {
    display: flex;
    justify-content: space-between;

    @include carbon.breakpoint-down(md) {
      flex-direction: column;
    }
  }

  &__stay-connected {
    @include carbon.breakpoint-down(md) {
      margin-top: carbon.$spacing-07;
    }
  }
}
</style>
