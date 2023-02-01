<template>
  <nav class="app-nav-back-link">
    <BasicLink
      class="app-nav-back-link__link"
      :class="`app-nav-back-link__link_${theme}`"
      :url="url"
    >
      <ArrowLeft16 class="app-nav-back-link__icon" /><span v-text="label" />
    </BasicLink>
  </nav>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  theme?: 'light'|'dark';
  url: string;
}

withDefaults(defineProps<Props>(), {
  theme: 'light'
})
</script>

<style lang="scss" scoped>
.app-nav-back-link {
  @include contained();

  padding-bottom: $spacing-06;
  padding-top: $spacing-06;

  &__link {
    align-items: center;
    display: flex;
    width: fit-content;

    &_dark {
      color: $text-color-white;
    }

    &_light {
      color: $link-color-tertiary;
    }
  }

  &__icon {
    margin-right: $spacing-05;
  }
}
</style>
