<template>
  <header class="learn-header">
    <div class="learn-header__container-wrapper">
      <div class="learn-header__container">
        <div class="learn-header__logo-container">
          <DynamicBackgroundLogo class="learn-header__logo" />
        </div>
        <div>
          <h1 class="learn-header__headline">
            Qiskit Textbook (beta)
          </h1>
          <qiskit-mega-menu-dropdown
            :id="appMegaDropdownMenuId"
            class="learn-header__dropdown bx--col-md-4 bx--col-lg-4 bx--no-gutter"
            :content.prop="dropdownMenuContent"
            segment-component-name="Textbook mega menu"
            :track-performed-search="trackPerformedSearch"
          />
        </div>
        <AppCta v-bind="startLearningCTA" class="learn-header__cta" />
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
import { LEARN_START_LEARNING } from '~/constants/appLinks'
import { LEARN_MEGA_MENU } from '~/constants/megaMenuLinks'

const startLearningCTA = LEARN_START_LEARNING
const dropdownMenuContent = LEARN_MEGA_MENU

const appMegaDropdownMenuIsVisible = ref(true)
let appMegaDropdownMenuObserver: IntersectionObserver | undefined

const appMegaDropdownMenuId = computed(() => `app-mega-dropdown-menu-${this._uid}`)

onMounted(() => {
  connectAppMegaDropdownMenuObserver()
})

onBeforeUnmount(() => {
  disconnectAppMegaDropdownMenuObserver()
})

function connectAppMegaDropdownMenuObserver () {
  const appMegaDropdownMenuElement = this.$el.querySelector(`#${appMegaDropdownMenuId}`)

  if (appMegaDropdownMenuElement) {
    appMegaDropdownMenuObserver = new IntersectionObserver(updateAppMegaDropdownMenuLayout)
    appMegaDropdownMenuObserver.observe(appMegaDropdownMenuElement)
  }
}

function disconnectAppMegaDropdownMenuObserver () {
  if (appMegaDropdownMenuObserver) {
    appMegaDropdownMenuObserver.disconnect()
  }
}

function updateAppMegaDropdownMenuLayout (entries: Array<IntersectionObserverEntry>) {
  entries.forEach(({ isIntersecting }) => {
    appMegaDropdownMenuIsVisible.value = isIntersecting
  })
}

function trackPerformedSearch (uiElement: string, field: string) {
  // TODO: Refactor tracking
  this.$trackPerformedSearch(uiElement, field)
}
</script>

<style lang="scss" scoped>
.learn-header {
  background: linear-gradient(315deg, $cool-gray-10 0%, $blue-40 25%, $purple-70 100%);
  height: 37.5rem;

  &__headline {
    color: $text-color-white;
    margin-bottom: $spacing-07;
  }

  &__container {
    @include contained();

    max-width: $max-size;
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-top: $spacing-09;

    @include mq($from:medium, $until: large) {
      padding-top: $spacing-12;
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

    &-container {
      // the #{_______} is added to force scss to compile $spacing-11 value.
      --additional-width: #{$spacing-11};

      position: absolute;
      right: 0;
      bottom: 0;
      width: 40%;
      height: 100%;
      overflow: hidden;

      @include mq($from:medium, $until: large) {
        width: calc(50% + var(--additional-width));
      }
      @include mq($until: medium) {
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
