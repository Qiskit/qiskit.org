<template>
  <header class="learn-header">
    <div class="learn-header__container-wrapper">
      <div class="learn-header__container">
        <div class="learn-header__logo-container">
          <LearnDynamicBackgroundLogo class="learn-header__logo" />
        </div>
        <div>
          <h1 class="learn-header__headline">Qiskit Textbook</h1>
          <qiskit-mega-menu-dropdown
            :id="appMegaDropdownMenuId"
            class="learn-header__dropdown cds--col-md-4 cds--col-lg-4 cds--no-gutter"
            :content.prop="dropdownMenuContent"
            segment-component-name="Textbook mega menu"
            :track-performed-search="trackPerformedSearch"
          />
        </div>
        <UiCta
          class="learn-header__cta"
          :label="startLearningCTA.label"
          :segment="startLearningCTA.segment"
          :url="startLearningCTA.url"
        />
      </div>
    </div>
    <transition name="scroll-in">
      <LearnContentMenuSection
        v-if="!appMegaDropdownMenuIsVisible"
        class="learn-header__dropdown-fixed"
      />
    </transition>
  </header>
</template>

<script setup lang="ts">
import { LEARN_START_LEARNING } from "~/constants/appLinks";
import { LEARN_MEGA_MENU } from "~/constants/megaMenuLinks";

const startLearningCTA = LEARN_START_LEARNING;
const dropdownMenuContent = LEARN_MEGA_MENU;

const appMegaDropdownMenuIsVisible = ref(true);

const appMegaDropdownMenuId = "learn-header__mega-dropdown-menu";

// TODO: Refactor tracking
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function trackPerformedSearch(uiElement: string, field: string) {
  // this.$trackPerformedSearch(uiElement, field);
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.learn-header {
  background: linear-gradient(
    315deg,
    carbon.$cool-gray-10 0%,
    carbon.$blue-40 25%,
    carbon.$purple-70 100%
  );
  height: 37.5rem;

  &__headline {
    color: qiskit.$text-color-white;
    margin-bottom: carbon.$spacing-07;
  }

  &__container {
    @include qiskit.contained;

    max-width: qiskit.$max-size;
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-top: carbon.$spacing-09;

    @include carbon.breakpoint-between(md, lg) {
      padding-top: carbon.$spacing-12;
    }

    &-wrapper {
      @include qiskit.responsive-grid-bg-strip(
        "/images/grid/grid-hero-textbook.svg",
        auto,
        95%
      );

      display: flex;
      height: 100%;
    }
  }

  &__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    padding-top: 100%;
    transform: translate(-50%, -50%);

    &-container {
      // the #{_______} is added to force scss to compile carbon.$spacing-11 value.
      --additional-width: #{carbon.$spacing-11};

      position: absolute;
      right: 0;
      bottom: 0;
      width: 40%;
      height: 100%;
      overflow: hidden;

      @include carbon.breakpoint-between(md, lg) {
        width: calc(50% + var(--additional-width));
      }

      @include carbon.breakpoint-down(md) {
        width: calc(80% + var(--additional-width));
        height: 80%;
      }
    }
  }

  &__dropdown {
    position: relative;
    z-index: 1;
  }

  &__dropdown-fixed {
    position: fixed;
    top: 0;
    transition: 0.3s ease-in-out;
    width: 100%;
    z-index: 100;
  }

  &__cta {
    align-self: flex-end;

    // this is necessary to respect z ordering with the absolute elements.
    position: relative;
  }
}

.scroll-in-enter,
.scroll-in-leave-to {
  margin-top: -40px;
}

.scroll-in-leave-to {
  opacity: 0;
}
</style>
