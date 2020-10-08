<template>
  <section class="capabilities-section">
    <div class="capabilities-section__container">
      <CapabilityCard
        v-for="item in capabilities"
        :key="item.title"
        class="capabilities-section__card"
        :title="item.title"
        :description="item.description"
        :image="item.image"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import CapabilityCard from '~/components/metal/CapabilityCard.vue'
import { METAL_CAPABILITIES } from '~/constants/metalContent'

@Component({
  components: { CapabilityCard }
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
      .querySelectorAll('.overview-page__content-section')
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

  &__container {
    @include contained();
    padding-top: $layout-05;
    padding-bottom: $layout-06;
  }

  &__card {
    margin-top: $layout-04;
  }
}
</style>
