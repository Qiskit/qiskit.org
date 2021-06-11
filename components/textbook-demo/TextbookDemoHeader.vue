<template>
  <header class="textbook-demo-header">
    <div class="textbook-demo-header__container-wrapper">
      <div class="textbook-demo-header__container">
        <div>
          <h1 class="textbook-demo-header__headline">
            Qiskit Textbook (beta)
          </h1>
          <AppMegaDropdownMenu
            :id="appMegaDropdownMenuId"
            class="textbook-demo-header__dropdown"
            kind="secondary"
            :content="dropdownMenuContent"
          />
        </div>
        <AppCta v-bind="startLearningCTA" class="textbook-demo-header__cta" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'
import { Component } from 'vue-property-decorator'
import { TEXTBOOK_DEMO_START_LEARNING } from '~/constants/appLinks'
import { TEXTBOOK_DEMO_MEGA_MENU } from '~/constants/megaMenuLinks'

interface VueComponent extends Vue {
  $el: HTMLElement
  _uid: number
}

@Component
export default class TextbookDemoHeader extends (Vue as VueConstructor<VueComponent>) {
  startLearningCTA = TEXTBOOK_DEMO_START_LEARNING
  dropdownMenuContent = TEXTBOOK_DEMO_MEGA_MENU
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

  private connectAppMegaDropdownMenuObserver () {
    const appMegaDropdownMenuElement = this.$el.querySelector(`#${this.appMegaDropdownMenuId}`)

    if (appMegaDropdownMenuElement) {
      this.appMegaDropdownMenuObserver = new IntersectionObserver(this.updateAppMegaDropdownMenuLayout)
      this.appMegaDropdownMenuObserver.observe(appMegaDropdownMenuElement)
    }
  }

  private disconnectAppMegaDropdownMenuObserver () {
    if (this.appMegaDropdownMenuObserver) {
      this.appMegaDropdownMenuObserver.disconnect()
    }
  }

  updateAppMegaDropdownMenuLayout (entries: Array<IntersectionObserverEntry>) {
    entries.forEach(({ isIntersecting }) => {
      this.appMegaDropdownMenuIsVisible = isIntersecting
    })
  }
}
</script>

<style lang="scss" scoped>
.textbook-demo-header {
  background: linear-gradient(315deg, $cool-gray-10 0%, $blue-40 25%, $purple-70 100%);
  height: 37.5rem;

  &__headline {
    color: $text-color-white;
  }

  &__container {
    @include contained();

    max-width: $max-size;
    background-image: url("/images/textbook-demo/qiskit-logo-header.png");
    background-position: right center;
    background-repeat: no-repeat;
    background-size: 50% auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-top: $spacing-09;

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

  &__dropdown {
    margin-top: $layout-03;
  }

  &__cta {
    align-self: flex-end;
  }
}
</style>
