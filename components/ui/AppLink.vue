<template>
  <BasicLink
    class="app-link"
    :class="`app-link_${kind}`"
    v-bind="$attrs"
  >
    <slot />
  </BasicLink>
</template>

<script setup lang="ts">
interface Props {
  kind?: 'primary'|'secondary'
}

withDefaults(defineProps<Props>(), {
  kind: 'primary'
})
</script>

<style lang="scss" scoped>
.app-link {
  // &_none is intentionally not resolved

  &_primary,
  &_secondary {
    text-decoration: none;
  }

  &_primary {
    color: $link-color;

    &:hover,
    &:focus,
    &:active {
      color: $link-hover-color;
    }

    &:visited {
      color: $link-visited-color;
    }
  }

  &_secondary {
    color: $link-color-secondary;

    &:hover,
    &:focus,
    &:active {
      color: $link-hover-color-secondary;
      text-decoration: underline;
    }

    &:visited {
      color: $link-visited-color-secondary;
    }
  }

}

</style>
