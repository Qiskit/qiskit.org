<template>
  <NuxtLink
    v-track-click="segment"
    :external="computedExternal"
    :target="computedTarget"
    :title="title"
    :to="url"
    @click="emit('click')"
    @mouseenter="$emit('mouseenter')"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { CtaClickedEventProp } from "~/types/segment";

type NuxtLinkTarget =
  | "_blank"
  | "_parent"
  | "_self"
  | "_top"
  | (string & {})
  | null;

interface Props {
  external?: boolean;
  segment?: CtaClickedEventProp;
  target?: NuxtLinkTarget;
  title?: string;
  url: string;
}

const props = defineProps<Props>();

const emit = defineEmits(["click", "mouseenter"]);

const config = useRuntimeConfig();

const isExternalFromSameDomain = computed<boolean>(() => {
  return props.url.startsWith(config.public.siteUrl);
});

// Resolving link type (Based on https://github.com/nuxt/nuxt/blob/v3.6.3/packages/nuxt/src/app/components/nuxt-link.ts#L179)
const isExternalFromDifferentDomain = computed<boolean>(() => {
  if (isExternalFromSameDomain.value) {
    return false;
  }

  // External prop is explicitly set
  if (props.external) {
    return true;
  }

  // When `target` prop is set, link is external
  if (props.target && props.target !== "_self") {
    return true;
  }

  return props.url === "" || urlHasProtocol(props.url);
});

const computedExternal = computed<boolean>(() => {
  return isExternalFromSameDomain.value || isExternalFromDifferentDomain.value;
});

const computedTarget = computed<NuxtLinkTarget | undefined>(() => {
  if (typeof props.target !== "undefined") {
    return props.target;
  } else if (isExternalFromSameDomain.value) {
    return "_self";
  } else if (isExternalFromDifferentDomain.value) {
    return "_blank";
  }

  return undefined;
});
</script>
