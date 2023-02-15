<template>
  <section class="external-recommended-readings">
    <div class="bx--grid bx--no-gutter">
      <div class="bx--row">
        <div class="bx--col-lg-12">
          <h2>External recommended readings</h2>
          <p v-if="preamble">
            {{ preamble }}
          </p>
          <ol class="external-recommended-readings__list">
            <li v-for="reference in references" :key="reference.label">
              <span class="external-recommended-readings__reference">
                {{ reference }}
              </span>
            </li>
            <li
              v-for="link in links"
              :key="link.label"
              class="external-recommended-readings__list__item"
            >
              <UiAppLink
                class="external-recommended-readings__link"
                :segment="link.segment"
                :url="link.url"
              >
                <span v-if="link.author">
                  {{ link.author }}
                </span>
                <span
                  :class="
                    link.author ? 'external-recommended-readings__title' : ''
                  "
                >
                  {{ link.label }}
                </span>
              </UiAppLink>
              <span v-if="link.description">- {{ link.description }}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GeneralLink } from "~/constants/appLinks";

export type RecommendedReading = GeneralLink & {
  description?: string;
  author?: string;
};

interface Props {
  links: RecommendedReading[];
  references?: GeneralLink[];
  preamble?: string;
}

withDefaults(defineProps<Props>(), {
  references: () => [],
  preamble: "",
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@import "~carbon-components/scss/globals/scss/typography";

.external-recommended-readings {
  &__list {
    list-style: decimal;
    margin-left: carbon.$spacing-05;

    &__item {
      margin-bottom: carbon.$spacing-02;
    }
  }

  &__link {
    width: fit-content;
  }

  &__title {
    font-style: italic;
  }

  &__reference {
    @include type-style("code-01");

    margin-bottom: carbon.$spacing-01;
  }
}
</style>
