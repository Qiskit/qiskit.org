<template>
  <UiLink
    ref="link"
    class="ui-cta"
    :class="[
      `ui-cta_${kind}`,
      `ui-cta_${kind}_theme_${theme}`,
      { cta_wider: isWider },
    ]"
    :segment="segment"
    v-bind="$attrs"
    :url="urlString"
    @click="$emit('click')"
  >
    <span class="ui-cta__content">
      {{ label }}
    </span>
    <component
      :is="iconPerLinkType"
      class="ui-cta__icon"
      :class="`ui-cta__icon_${iconPerLinkType}`"
    />
  </UiLink>
</template>

<script setup lang="ts">
import ArrowDown16 from "@carbon/icons-vue/lib/arrow--down/16";
import ArrowRight16 from "@carbon/icons-vue/lib/arrow--right/16";
import Launch16 from "@carbon/icons-vue/lib/launch/16";
import type { Link } from "~/types/links";
import type { CtaClickedEventProp } from "~/types/segment";

interface Props {
  isWider?: boolean;
  kind?: "primary" | "secondary" | "ghost" | "one-xp";
  label: string;
  segment?: CtaClickedEventProp;
  theme?: "light" | "dark";
  url: string | Link;
}

const props = withDefaults(defineProps<Props>(), {
  isWider: false,
  kind: "primary",
  segment: undefined,
  theme: "light",
});

defineEmits(["click"]);

const config = useRuntimeConfig();

const urlString = computed(() => {
  if (typeof props.url === "string") {
    return props.url;
  }

  return props.url.url;
});

// Resolving link type (Based on https://github.com/nuxt/nuxt/blob/v3.6.3/packages/nuxt/src/app/components/nuxt-link.ts#L179)
const isExternalLogically = computed<boolean>(() => {
  return urlString.value === "" || urlHasProtocol(urlString.value);
});

const isExternalVisually = computed<boolean>(() => {
  // Same domain
  if (urlString.value.startsWith(config.public.siteUrl)) {
    return false;
  }

  return isExternalLogically.value;
});

const isFragment = computed<boolean>(() => {
  return urlString.value.startsWith("#");
});

const iconPerLinkType = computed(() => {
  if (isExternalVisually.value) {
    return Launch16;
  }

  if (isFragment.value) {
    return ArrowDown16;
  }

  return ArrowRight16;
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

@mixin bicolor-background($colorLeft, $colorRight) {
  background-image: linear-gradient(
    90deg,
    $colorLeft 0%,
    $colorLeft 50%,
    $colorRight 50%,
    $colorRight 100%
  );
}

.ui-cta {
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  align-items: center;
  padding: carbon.$spacing-05;
  width: 4 * qiskit.$column-size-large;
  max-width: 100%;

  @include carbon.breakpoint-between(md, lg) {
    width: 3 * qiskit.$column-size-medium;
  }

  @include carbon.breakpoint-down(md) {
    width: 100%;
  }

  background-size: 200% 100%;
  background-position-x: 100%;
  transition:
    background-position-x 0.3s ease-out,
    color 0.3s ease-out;

  &_wider {
    width: 100%;
  }

  /*
    Per kind and theming styles
  */
  &,
  &_primary {
    @include bicolor-background(
      qiskit.$button-background-color-dark,
      qiskit.$button-background-color
    );

    color: qiskit.$button-text-color;
  }

  &:hover,
  &:focus,
  &:active {
    background-position-x: 0;
  }

  &_secondary {
    @include bicolor-background(
      qiskit.$button-background-color-secondary-dark,
      qiskit.$button-background-color-secondary
    );

    color: qiskit.$button-text-color-secondary;

    &:hover,
    &:focus,
    &:active {
      color: qiskit.$button-active-text-color-secondary;
    }

    &_theme_dark {
      @include bicolor-background(
        qiskit.$button-background-color-tertiary-dark,
        qiskit.$button-background-color-tertiary
      );

      color: qiskit.$button-text-color-tertiary;
    }
  }

  &_ghost {
    padding-right: 0;
    padding-left: 0;
    justify-content: flex-start;
    align-items: flex-start;
    background-image: none;
    color: qiskit.$link-color-tertiary;

    &:hover,
    &:focus,
    &:active {
      color: qiskit.$link-hover-color-tertiary;
    }

    &_theme_dark {
      color: qiskit.$link-color-quaternary;

      &:hover,
      &:focus,
      &:active {
        color: qiskit.$link-hover-color-quaternary;
      }
    }
  }

  &_one-xp {
    background-image: linear-gradient(
      90deg,
      carbon.$purple-70 50%,
      carbon.$blue-60 100%
    );
  }

  /*
    Icons Styles
  */
  $arrow-right-path: "_arrow-right-16 path:nth-child(1)";
  $arrow-down-path: "_arrow-down-16 path:nth-child(1)";
  $launch-path: "_launch-16 path:nth-child(2)";

  &__icon {
    fill: currentcolor;
    margin-left: carbon.$spacing-05;
    overflow: visible;

    &_arrow-right-16 {
      margin-right: carbon.$spacing-02;
    }

    &#{$arrow-right-path},
    &#{$arrow-down-path},
    &#{$launch-path} {
      transform: translate(0, 0);
      transition: transform 0.2s ease-in-out;
    }
  }

  &_ghost &__icon {
    margin-top: carbon.$spacing-01;
  }

  &:hover &__icon,
  &:focus &__icon,
  &:active &__icon {
    &#{$arrow-right-path} {
      transform: translate(4px, 0);
    }

    &#{$arrow-down-path} {
      transform: translate(0, 4px);
    }

    &#{$launch-path} {
      transform: translate(2px, -2px);
    }
  }

  &_is-id-anchor {
    $arrow-path: "path:nth-child(1)";

    #{$arrow-path} {
      transform: translate(0, 0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover,
    &:active {
      #{$arrow-path} {
        transform: translate(0, 2px);
      }
    }
  }

  &__content {
    @include carbon.type-style("body-short-01");
  }
}
</style>
