<template>
  <UiCard
    class="ecosystem-item-card"
    :title="name"
    :tags="labels"
    :tooltip-tags="[
      {
        label: tier,
        description: tierDescription,
      },
    ]"
    cta-label="Go to repo"
    :segment="{
      cta: `go-to-repo-${name}`,
      location: 'ecosystem-card',
    }"
    :to="url"
    :secondary-cta="websiteCta"
  >
    <div class="cds--row">
      <span class="ecosystem-item-card__licence">
        {{ licence }}
      </span>
      <div class="ecosystem-item-card__star">
        <StarFilled16 />
        <p class="ecosystem-item-card__star-val">
          {{ stars }}
        </p>
      </div>
    </div>
    <p>
      {{ description }}
    </p>
  </UiCard>
  <bx-accordion v-if="testsResults.length != 0">
    <bx-accordion-item
      class="bx-accordion__item"
      :title-text="`Test Results (${formatTimestamp(updatedAt)})`"
    >
      <EcosystemTestTable :filtered-data="testRows" />
    </bx-accordion-item>
  </bx-accordion>
</template>

<script setup lang="ts">
import StarFilled16 from "@carbon/icons-vue/lib/star--filled/16";
import { Member } from "~/types/ecosystem";

interface Props {
  name: Member["name"];
  labels: Member["labels"];
  tier: Member["tier"];
  tierDescription: string;
  url: Member["url"];
  website: Member["website"];
  licence: Member["licence"];
  stars: Member["stars"];
  description: Member["description"];
  testsResults: Member["testsResults"];
  updatedAt: Member["updatedAt"];
}

const props = withDefaults(defineProps<Props>(), {
  website: undefined,
});

const websiteCta = computed(() =>
  props.website
    ? {
        label: "Website",
        url: props.website,
        segment: {
          cta: `go-to-website-${props.name}`,
          location: "ecosystem-card",
        },
      }
    : null
);

const testRows = computed(() => {
  if (props.testsResults) {
    return props.testsResults.map((res) => {
      const timestamp = formatTimestamp(res.timestamp);
      // Convert package name to title case
      let packageName;
      if (res.package) {
        packageName = res.package
          .replaceAll("-", " ")
          .split(" ")
          .map((s: string) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ");
      }

      return {
        packageName,
        packageVersion: res.packageVersion,
        testType: res.testType,
        passed: res.passed,
        timestamp,
        logsLink: res.logsLink,
      };
    });
  }

  return [];
});

function formatTimestamp(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleString("en-UK", {
    timeZone: "UTC",
  });
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.ecosystem-item-card {
  &__licence {
    font-size: 12px;
    margin-right: carbon.$spacing-05;
    margin-left: carbon.$spacing-05;
    margin-top: calc(carbon.$spacing-01 / 2);
  }

  &__star {
    display: flex;
    flex-direction: row;

    svg {
      margin-top: calc(carbon.$spacing-01 / 2);
      margin-right: carbon.$spacing-01;
      fill: carbon.$cool-gray-60;
    }
  }

  :deep(.card__title) {
    font-size: 20px;
  }
}
</style>
