import { DirectiveBinding } from "nuxt/dist/app/compat/capi";

import type { CtaClickedEventProp } from "~/types/segment";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("track-click", {
    mounted(el: HTMLElement, binding: DirectiveBinding<CtaClickedEventProp>) {
      const { trackClickEvent } = useSegment();

      el.addEventListener("click", () =>
        trackClickEvent(binding.value.cta, binding.value.location)
      );
    },
  });
});
