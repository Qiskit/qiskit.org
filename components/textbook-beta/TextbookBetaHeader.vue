<template>
  <header class="textbook-beta-header">
    <div class="textbook-beta-header__container-wrapper">
      <div class="textbook-beta-header__container">
        <div class="textbook-beta-header__logo-container">
          <DynamicBackgroundLogo class="textbook-beta-header__logo" />
        </div>
        <div>
          <h1 class="textbook-beta-header__headline">
            Qiskit Textbook (beta)
          </h1>
          <QiskitMegaMenuDropdown
            :id="appMegaDropdownMenuId"
            class="textbook-beta-header__dropdown"
            input-field-classes="bx--col-md-4 bx--col-lg-4"
            kind="secondary"
            :content="dropdownMenuContent"
            segment-component-name="Textbook mega menu"
            :track-performed-search="trackPerformedSearch"
          />
        </div>
        <AppCta v-bind="startLearningCTA" class="textbook-beta-header__cta" />
      </div>
    </div>
    <transition name="scroll-in">
      <TextbookBetaContentMenuSection
        v-if="!appMegaDropdownMenuIsVisible"
        class="textbook-beta-header__dropdown-fixed"
      />
    </transition>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VueConstructor } from 'vue'
import { Component } from 'vue-property-decorator'
import QiskitMegaMenuDropdown from '@qiskit-community/qiskit-vue/src/components/MegaMenuDropdown/index.vue'
import { TEXTBOOK_BETA_START_LEARNING } from '~/constants/appLinks'
import { TEXTBOOK_BETA_MEGA_MENU } from '~/constants/megaMenuLinks'

interface VueComponent extends Vue {
  $el: HTMLElement
  _uid: number
}

@Component({
  components: { QiskitMegaMenuDropdown }
})
export default class TextbookBetaHeader extends (Vue as VueConstructor<VueComponent>) {
  startLearningCTA = TEXTBOOK_BETA_START_LEARNING
  dropdownMenuContent = TEXTBOOK_BETA_MEGA_MENU
  appMegaDropdownMenuIsVisible = true
  appMegaDropdownMenuObserver: IntersectionObserver | undefined

  get appMegaDropdownMenuId () {
    return `app-mega-dropdown-menu-${this._uid}`
  }

  mounted () {
    this.connectAppMegaDropdownMenuObserver()
  }

  beforeDestroy () {
    this.disconnectAppMegaDropdownMenuObserver()
  }

  connectAppMegaDropdownMenuObserver () {
    const appMegaDropdownMenuElement = this.$el.querySelector(`#${this.appMegaDropdownMenuId}`)

    if (appMegaDropdownMenuElement) {
      this.appMegaDropdownMenuObserver = new IntersectionObserver(this.updateAppMegaDropdownMenuLayout)
      this.appMegaDropdownMenuObserver.observe(appMegaDropdownMenuElement)
    }
  }

  disconnectAppMegaDropdownMenuObserver () {
    if (this.appMegaDropdownMenuObserver) {
      this.appMegaDropdownMenuObserver.disconnect()
    }
  }

  updateAppMegaDropdownMenuLayout (entries: Array<IntersectionObserverEntry>) {
    entries.forEach(({ isIntersecting }) => {
      this.appMegaDropdownMenuIsVisible = isIntersecting
    })
  }

  trackPerformedSearch (uiElement: string, field: string) {
    this.$trackPerformedSearch(uiElement, field)
  }
}
</script>

<style lang="scss" scoped>
.textbook-beta-header {
  background: linear-gradient(315deg, $cool-gray-10 0%, $blue-40 25%, $purple-70 100%);
  height: 37.5rem;

  &__headline {
    color: $text-color-white;
  }

  &__container {
    @include contained();

    max-width: $max-size;
    //background-image: url("/images/textbook-beta/qiskit-logo-header.png");
    background-position: right center;
    background-repeat: no-repeat;
    background-size: 50% auto;
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-top: $spacing-09;
    overflow: hidden;

    @include mq($from:medium, $until: large) {
      padding-top: $layout-06;
      background-position: calc(100% + 5rem) calc(100% + 5rem);
      background-size: 60%;
    }

    @include mq($until: medium) {
      background-position: calc(100% + 5rem) calc(100% + 2rem);
      background-size: 90%;
    }
    &-wrapper {
      @include responsive-grid-bg-strip("/images/grid/grid-hero-textbook.svg", auto, 95%);

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

    @include mq($until: large) {
      width: calc(100% + 5rem);
      padding-top: calc(100% + 5rem);
    }

    &-container {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 40%;
      height: 100%;

      @include mq($from:medium, $until: large) {
        width: 50%;
      }
      @include mq($until: medium) {
        width: 80%;
        height: 80%;
      }
    }
  }

  &__dropdown {
    margin-top: $layout-03;
  }

  &__dropdown-fixed {
    position: fixed;
    top: 0;
    transition: .3s ease-in-out;
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
