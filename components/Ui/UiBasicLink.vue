<template>
  <component
    :is="isNuxtLink ? 'NuxtLink' : 'a'"
    v-track-click="segment"
    :href="isAnchor && url"
    :to="isNuxtLink && url"
    :style="hasLink && 'cursor:pointer'"
    :rel="isExternal && 'noopener'"
    :target="isExternal ? '_blank' : undefined"
    :title="title"
    @click="emit('click')"
    @mouseenter="$emit('mouseenter')"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { CtaClickedEventProp } from "~/types/segment";

interface Props {
  segment?: CtaClickedEventProp | undefined;
  title?: string;
  url?: string;
}

const props = withDefaults(defineProps<Props>(), {
  segment: undefined,
  title: undefined,
  url: "",
});

const emit = defineEmits(["click", "mouseenter"]);

const isExternal = computed(() => {
  return !!props.url && props.url.startsWith("http");
});

const isInternal = computed(() => {
  return !!props.url && props.url.startsWith("/");
});

const isMail = computed(() => {
  return !!props.url && props.url.startsWith("mailto");
});

const isIdAnchor = computed(() => {
  return !!props.url && props.url.startsWith("#");
});

const hasLink = computed(() => !!props.url);

const isAnchor = computed(() => {
  return (
    isExternal.value || isMail.value || isIdAnchor.value || isInternal.value
  );
});

const isNuxtLink = computed(() => !isAnchor.value);
</script>
