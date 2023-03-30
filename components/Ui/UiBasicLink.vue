<template>
  <component
    :is="isNuxtLink ? 'NuxtLink' : 'a'"
    :href="isAnchor && url"
    :to="isNuxtLink && url"
    :style="hasLink && 'cursor:pointer'"
    :rel="isExternal && 'noopener'"
    :target="isExternal ? '_blank' : undefined"
    @click="handleClick"
    @mouseenter="$emit('mouseenter')"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { CtaClickedEventProp } from "~/types/segment";

interface Props {
  isStatic?: boolean;
  segment?: CtaClickedEventProp | undefined;
  url?: string;
}

const props = withDefaults(defineProps<Props>(), {
  isStatic: false,
  segment: undefined,
  url: "",
});

const emit = defineEmits(["click", "mouseenter"]);

const { trackClickEvent } = useSegment();

function handleClick() {
  emit("click");
  props.segment && trackClickEvent(props.segment.cta, props.segment.location);
}

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
    isExternal.value ||
    isMail.value ||
    isIdAnchor.value ||
    isInternal.value ||
    props.isStatic
  );
});

const isNuxtLink = computed(() => !isAnchor.value);
</script>
