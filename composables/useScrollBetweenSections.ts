import { ref, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'

export function useScrollBetweenSections () {
  const activeSection = ref('')
  const _observer: IntersectionObserver | null = ref(null)

  onMounted (() => {
    const threshold = [...Array(25).keys()].map(x => 4 * x / 100)
    const windowTriggerMargins = '-16px 0px -80% 0px'
    this._observer = new IntersectionObserver(
      this._onSectionAppearing,
      {
        root: null, // the viewport
        rootMargin: windowTriggerMargins,
        threshold
      }
    )
    this.updateObserved()
  })

  onUpdated (() => {
    this.$nextTick(() => this.updateObserved())
  })

  onBeforeUnmount (() => {
    this._observer && this._observer.disconnect()
  })

  // TODO: This is the original code. The onBeforeRouteEnter doesn't
  // exists on Vue 3, so we need to check if the code below works as expected
  // beforeRouteEnter (route: any, _: any, next: any) {
  //   next((page: any) => page._parseSectionFromUrl(route))
  // }

  // beforeRouteUpdate (route: any, _: any, next: any) {
  //   this._parseSectionFromUrl(route)
  //   next()
  // }

  onBeforeRouteUpdate (route: any, _: any, next: any) {
    this._parseSectionFromUrl(route)
    next()
  }

  function updateObserved () {
    (this.$el as HTMLElement)
      .querySelectorAll('.scrollable')
      .forEach((section) => {
        (this._observer as IntersectionObserver).observe(section)
      })
  }

  function _onSectionAppearing (entries: Array<IntersectionObserverEntry>) {
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
        if (this.activeSection !== target.id) {
          this.activeSection = target.id
          this.activeSectionChanged()
        }
        highestTopValue = targetTop
      }
    })
  }

  /**
   * This methods gets called when the active section changes.
   */
  function activeSectionChanged () {}

 function  _parseSectionFromUrl (route: any) {
    this.activeSection = route.hash.substr(1)
  }

  return { activeSection }
}
