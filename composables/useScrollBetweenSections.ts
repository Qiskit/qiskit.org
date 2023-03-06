// TODO: Fix this composable to work with Vue 3
import { ref, onMounted, onUpdated, onBeforeUnmount, nextTick } from "vue";
import { onBeforeRouteUpdate } from "vue-router";

export function useScrollBetweenSections() {
  const activeSection = ref("");
  const _observer = ref<IntersectionObserver | null>(null)
  const root = ref<HTMLElement | null>(null)


  onMounted(() => {
    root.value = document.getElementById('capabilities')

    const threshold = [...Array(25).keys()].map((x) => (4 * x) / 100);
    const windowTriggerMargins = "-16px 0px -80% 0px";
    _observer.value = new IntersectionObserver(_onSectionAppearing, {
      root: null, // the viewport
      rootMargin: windowTriggerMargins,
      threshold,
    });
    updateObserved();
  });
  

  onUpdated(() => {
    nextTick(() => updateObserved());
  });

  onBeforeUnmount(() => {
    _observer.value && _observer.value.disconnect();
  });

  // TODO: This is the original code. The onBeforeRouteEnter doesn't
  // exists on Vue 3, so we need to check if the code below works as expected
  // beforeRouteEnter (route: any, _: any, next: any) {
  //   next((page: any) => page._parseSectionFromUrl(route))
  // }

  // beforeRouteUpdate (route: any, _: any, next: any) {
  //   this._parseSectionFromUrl(route)
  //   next()
  // }

  onBeforeRouteUpdate((route: any, _: any, next: any) => {
    _parseSectionFromUrl(route);
    next();
  });

  function updateObserved() {
    if (root.value !== null) {
      (root!.value as HTMLElement)
        .querySelectorAll(".scrollable")
        .forEach((section) => {
          (_observer.value as IntersectionObserver).observe(section);
        });
    }
  }

  function _onSectionAppearing(entries: Array<IntersectionObserverEntry>) {
    let highestTopValue = Infinity;
    entries.forEach((entry) => {
      const { target, boundingClientRect, rootBounds } = entry;
      if (!rootBounds) {
        return;
      }
      const targetTop = boundingClientRect.top;
      const triggerWindowBottom = rootBounds.bottom;
      const onTop = targetTop >= 0 && targetTop <= triggerWindowBottom;
      if (onTop && targetTop < highestTopValue) {
        if (activeSection.value !== target.id) {
          activeSection.value = target.id;
          activeSectionChanged();
        }
        highestTopValue = targetTop;
      }
    });
  }

  /**
   * This methods gets called when the active section changes.
   */
  function activeSectionChanged() {}

  function _parseSectionFromUrl(route: any) {
    activeSection.value = route.hash.substr(1);
  }

  return { activeSection };
}
