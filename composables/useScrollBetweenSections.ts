import { ref, onMounted, onUpdated, onBeforeUnmount } from "vue";

interface IntersectionObserverEntryWithId extends IntersectionObserverEntry {
  target: HTMLElement & { id: string };
}

interface UseScrollBetweenSections {
  activeSection: Ref<string>;
  activeSectionChanged: () => void;
  parseSectionFromUrl: (route: any) => void;
}

export function useScrollBetweenSections(): UseScrollBetweenSections {
  const activeSection = ref("");
  let observer: IntersectionObserver | null = null;

  function onSectionAppearing(
    entries:
      | Array<IntersectionObserverEntryWithId>
      | IntersectionObserverEntry[]
  ) {
    let highestTopValue = Infinity;
    (entries as Array<IntersectionObserverEntryWithId>).forEach((entry) => {
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

  function updateObserved(el: HTMLElement) {
    el.querySelectorAll(".scrollable").forEach((section) => {
      observer?.observe(section as HTMLElement & { id: string });
    });
  }

  function activeSectionChanged() {}

  function parseSectionFromUrl(route: any) {
    activeSection.value = route.hash.substr(1);
  }

  onMounted(() => {
    const threshold = [...Array(25).keys()].map((x) => (4 * x) / 100);
    const windowTriggerMargins = "-16px 0px -80% 0px";
    observer = new IntersectionObserver(onSectionAppearing, {
      root: null, // the viewport
      rootMargin: windowTriggerMargins,
      threshold,
    });
    updateObserved(document.body);
  });

  onUpdated(() => {
    updateObserved(document.body);
  });

  onBeforeUnmount(() => {
    observer && observer.disconnect();
  });

  return {
    activeSection,
    activeSectionChanged,
    parseSectionFromUrl,
  };
}
