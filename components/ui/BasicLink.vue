<template>
  <component
    :is="isNuxtLink ? 'nuxt-link' : 'a'"
    :href="isAnchor && url"
    :to="isNuxtLink && url"
    :style="hasLink && 'cursor:pointer'"
    :rel="isExternal && 'noopener'"
    :target="isExternal && '_blank'"
    @click="handleClick"
    @mouseenter="$emit('mouseenter')"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { CtaClickedEventProp } from '~/types/segment'

interface Props {
  isStatic?: boolean
  segment?: CtaClickedEventProp | undefined
  url?: string
}

const props = withDefaults(defineProps<Props>(), {
  isStatic: false,
  segment: undefined,
  url: ''
})

const { trackClickEvent } = useSegment()

function handleClick () {
  emit('click')
  props.segment && trackClickEvent(props.segment.cta, props.segment.location)
}

function isExternal (url: string): boolean {
  return !!url && url.startsWith('http')
}

function isInternal (url: string): boolean {
  return !!url && url.startsWith('/')
}

function isMail (url: string): boolean {
  return !!url && url.startsWith('mailto')
}

function isIdAnchor (url: string): boolean {
  return !!url && url.startsWith('#')
}

const hasLink = computed(() => !!props.url)

const isAnchor = computed(() => {
  return isExternal(props.url) ||
    isMail(props.url) ||
    isIdAnchor(props.url) ||
    isInternal(props.url) ||
    props.isStatic
})

const isExternal = computed(() => isExternal(props.url))

const isNuxtLink = computed(() => !isAnchor.value)
</script>
