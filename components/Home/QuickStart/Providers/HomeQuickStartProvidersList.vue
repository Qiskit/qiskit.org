<template>
  <section class="home-quick-start-providers-list">
    <ul class="home-quick-start-providers-list__list">
      <template v-for="(item, index) in providersList">
        <li
          v-if="item.docsCta && item.docsCta.url"
          :key="index"
          class="home-quick-start-providers-list__list-item"
          :class="
            activeIndex === index
              ? 'home-quick-start-providers-list__list-item_active'
              : 'home-quick-start-providers-list__list-item_inactive'
          "
          tabindex="0"
          @click="updateSelectedProvider(index)"
          @keydown.enter="updateSelectedProvider(index)"
        >
          {{ item.title }}
          <UiCta
            class="home-quick-start-providers-list__list__cta"
            label="Learn more"
            :url="item.docsCta.url"
            kind="ghost"
          />
        </li>
      </template>
    </ul>
    <UiCta
      class="home-quick-start-providers-list__btn"
      :url="providersPage.url"
      :label="providersPage.label"
      :segment="providersPage.segment"
    />
  </section>
</template>

<script setup lang="ts">
import { TextLink } from "~/types/links";
import { Provider } from "~/types/providers";

interface Props {
  providersList: Provider[];
}

const providersPage: TextLink = {
  url: "/providers",
  label: "See all providers",
  segment: {
    cta: "see-all-providers",
    location: "quick-start",
  },
};

defineProps<Props>();

const emit = defineEmits(["select-provider"]);

const activeIndex = ref(0);

function updateSelectedProvider(selectedProviderIndex: number) {
  activeIndex.value = selectedProviderIndex;
  emit("select-provider", selectedProviderIndex);
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.home-quick-start-providers-list {
  padding-top: carbon.$spacing-05;

  &__list {
    max-height: 31.25rem;
    overflow-y: scroll;
    margin-bottom: carbon.$spacing-07;
    border-bottom: 1px solid qiskit.$background-color-light;

    @include carbon.breakpoint-down(lg) {
      max-height: initial;
    }

    &__cta {
      opacity: 0;
      padding: carbon.$spacing-03;
      width: initial;

      &:focus {
        opacity: 1;
        outline: initial;
        border: 1px solid qiskit.$border-color-secondary;
        background-color: qiskit.$background-color-lighter;
      }
    }

    &-item {
      display: flex;
      justify-content: space-between;
      color: qiskit.$text-color;
      padding: carbon.$spacing-03 2px carbon.$spacing-03 carbon.$spacing-03;
      border-left: 2px solid transparent;
      margin-bottom: carbon.$spacing-04;
      max-height: 2.5rem;
      align-items: center;

      &_inactive {
        background-color: qiskit.$background-color-lighter;
      }

      &_active {
        background-color: qiskit.$background-color-light;
        border-left: 2px solid qiskit.$border-color-secondary;

        .home-quick-start-providers-list__list__cta {
          opacity: 1;
        }
      }

      &:hover,
      &:focus {
        border: 1px solid qiskit.$border-color-secondary;
        border-left: 2px solid qiskit.$border-color-secondary;
        outline: initial;
      }
    }
  }

  &__btn {
    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-07;
    }
  }
}
</style>
