import type { ObjectDirective } from "vue";

import type { CtaClickedEventProp } from "@/types/segment";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("track-click", <
    ObjectDirective<HTMLElement, CtaClickedEventProp>
  >{
    mounted(el, binding) {
      const { trackClickEvent } = useSegment();

      el.addEventListener(
        "click",
        () =>
          binding.value &&
          trackClickEvent(binding.value.cta, binding.value.location),
      );
    },
  });
});
