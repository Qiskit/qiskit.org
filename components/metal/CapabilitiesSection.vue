<template>
  <section class="capabilities-section">
    <div class="capabilities-section__container">
      <div class="capabilities-section__content-wrapper">
        <CapabilityCard
          v-for="item in capabilities"
          :id="item.title"
          :key="item.title"
          class="capabilities-section__card"
          :title="item.title"
          :description="item.description"
          :image="item.image"
        />
      </div>
      <div class="capabilities-section__scrolling-ui">
        <FakeUI class="capabilities-section__scrolling-ui-element">
          <div
            v-for="item in capabilities"
            :key="item.image"
            class="capabilities-section__image"
            :class="{
              'capabilities-section__active-image' : item.title === activeSection
            }"
            :lazy-background="item.image"
          />
        </FakeUI>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import CapabilityCard from '~/components/metal/CapabilityCard.vue'
import FakeUI from '~/components/metal/FakeUI.vue'
import { METAL_CAPABILITIES } from '~/constants/metalContent'

@Component({
  components: { CapabilityCard, FakeUI }
})
export default class extends Vue {
  capabilities = METAL_CAPABILITIES

  activeSection = ''

  _observer: IntersectionObserver | null = null

  mounted () {
    const threshold = [...Array(25).keys()].map(x => 4 * x / 100)
    const windowTriggerMargins = '-16px 0px -66% 0px'
    this._observer = new IntersectionObserver(
      this._onSectionAppearing,
      {
        root: null, // the viewport
        rootMargin: windowTriggerMargins,
        threshold
      }
    );
    (this.$el as HTMLElement)
      .querySelectorAll('.capabilities-section__card')
      .forEach((section) => {
        (this._observer as IntersectionObserver).observe(section)
      })
  }

  beforeDestroy () {
    this._observer && this._observer.disconnect()
  }

  beforeRouteEnter (route, _, next) {
    next(overviewPage => overviewPage._parseSectionFromUrl(route))
  }

  beforeRouteUpdate (route, _, next) {
    this._parseSectionFromUrl(route)
    next()
  }

  _onSectionAppearing (entries: Array<IntersectionObserverEntry>) {
    let highestTopValue = Infinity
    entries.forEach((entry) => {
      const {
        target,
        boundingClientRect,
        rootBounds
      } = entry
      if (!rootBounds) { return }
      const targetTop = boundingClientRect.top
      const triggerWindowBottom = rootBounds.bottom
      const onTop = targetTop >= 0 && targetTop <= triggerWindowBottom
      if (onTop && targetTop < highestTopValue) {
        this.activeSection = target.id
        highestTopValue = targetTop
      }
    })
  }

  _parseSectionFromUrl (route) {
    this.activeSection = route.hash.substr(1)
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.capabilities-section {
  display: flex;

  &__container {
    @include contained();
    display: flex;
    align-items: flex-start;
    padding-top: $layout-05;
    padding-bottom: $layout-06;
  }

  &__content-wrapper {
    flex: 1;
  }

  &__card ~ &__card{
    margin-top: $layout-04;
  }

  &__scrolling-ui {
    position: sticky;
    top: $layout-02;
    flex: 0 0 32rem;

    @include mq($from: medium, $until: large) {
      flex: 1.5;
    }

    @include mq($until: medium) {
      display: none;
    }
  }

  &__image {
    position: absolute;
    top: 0;
    opacity: 0;
    transition: opacity 0.2s linear;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &__active-image {
    opacity: 1;
  }
}
</style>
