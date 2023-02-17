<template>
  <UiBasicLink
    ref="link"
    class="app-cta"
    :class="[
      `app-cta_${kind}`,
      `app-cta_${kind}_theme_${theme}`,
      { 'app-cta_wider': isWider },
    ]"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <span class="app-cta__content">
      {{ label }}
    </span>
    <component
      :is="iconPerLinkType"
      class="app-cta__icon"
      :class="`app-cta__icon_${iconPerLinkType}`"
    />
  </UiBasicLink>
</template>

<script setup lang="ts">
import type { GeneralLink } from "~~/constants/appLinks";

interface Props {
  isWider?: boolean;
  kind?: "primary" | "secondary" | "ghost";
  label: string;
  theme?: "light" | "dark";
  url: string | GeneralLink;
}

const props = withDefaults(defineProps<Props>(), {
  isWider: false,
  kind: "primary",
  theme: "light",
});

const iconPerLinkType = computed(() => {
  const url = props.url;

  if (props.label === "Under construction") {
    return "error-outline-16";
  }
  if (isExternal(url as string)) {
    return "launch-16";
  }
  if (isIdAnchor(url as string)) {
    return "arrow-down-16";
  }
  return "arrow-right-16";
});

function isExternal(url: string) {
  return !!url && url.startsWith("http");
}

function isIdAnchor(url: string) {
  return !!url && url.startsWith("#");
}
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

.app-cta {
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
  transition: background-position-x 0.3s ease-out, color 0.3s ease-out;

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

  /*
    Icons Styles
  */
  $arrow-right_path: "_arrow-right-16 path:nth-child(1)";
  $arrow-down_path: "_arrow-down-16 path:nth-child(1)";
  $launch_path: "_launch-16 path:nth-child(2)";

  &__icon {
    fill: currentcolor;
    margin-left: carbon.$spacing-05;
    overflow: visible;

    &_arrow-right-16 {
      margin-right: carbon.$spacing-02;
    }

    &#{$arrow-right_path},
    &#{$arrow-down_path},
    &#{$launch_path} {
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
    &#{$arrow-right_path} {
      transform: translate(4px, 0);
    }
    &#{$arrow-down_path} {
      transform: translate(0, 4px);
    }
    &#{$launch_path} {
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
}
</style>
