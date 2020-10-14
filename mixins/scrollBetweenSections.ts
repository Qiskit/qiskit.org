import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {
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
      .querySelectorAll('.scrollable')
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
