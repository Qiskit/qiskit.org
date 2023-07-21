<template>
  <article>
    <UiCard
      class="ecosystem-card"
      :title="member.name"
      :secondary-tags="member.labels"
      :primary-tag="member.tier"
      cta-label="Go to repo"
      :segment="{
        cta: `go-to-repo-${member.name}`,
        location: 'ecosystem-card',
      }"
      :to="member.url"
      :secondary-cta="websiteCta"
    >
      <div class="ecosystem-card__details">
        <span class="ecosystem-card__licence">
          {{ member.licence }}
        </span>
        <span class="ecosystem-card__stars">
          <StarFilled16 />
          <span v-if="member.stars > 0">{{ member.stars }}</span>
        </span>
      </div>
      <p class="ecosystem-card__description">
        {{ member.description }}
      </p>
    </UiCard>
    <bx-accordion v-if="hasTestsResults">
      <bx-accordion-item
        class="bx-accordion__item"
        :title-text="`Test Results (${formatTimestamp(member.updatedAt)})`"
      >
        <EcosystemCardTestResults :filtered-data="testRows" />
      </bx-accordion-item>
    </bx-accordion>
  </article>
</template>

<script setup lang="ts">
import StarFilled16 from "@carbon/icons-vue/lib/star--filled/16";
import { Member } from "~/types/ecosystem";

interface Props {
  member: Member;
}

const props = defineProps<Props>();

const websiteCta = computed(() =>
  props.member.website
    ? {
        label: "Website",
        url: props.member.website,
        segment: {
          cta: `go-to-website-${props.member.name}`,
          location: "ecosystem-card",
        },
      }
    : null
);

const hasTestsResults = computed(() => props.member.testsResults.length !== 0);

const testRows = computed(() => {
  if (props.member.testsResults) {
    return props.member.testsResults.map((res) => {
      // TODO: Format properties during data fetching instead for better performance.
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

.ecosystem-card {
  &__licence {
    font-size: 12px;
    margin-right: carbon.$spacing-05;

    @include carbon.breakpoint-down(md) {
      margin-right: initial;
      margin-bottom: carbon.$spacing-02;
    }
  }

  &__stars {
    display: flex;

    svg {
      margin-right: carbon.$spacing-01;
      fill: carbon.$cool-gray-60;
    }
  }

  &__description {
    margin-top: carbon.$spacing-05;
  }

  &__details {
    display: flex;
    align-items: center;

    @include carbon.breakpoint-down(md) {
      flex-direction: column;
      align-items: initial;
    }
  }
}

.bx-accordion__item {
  &::part(content) {
    margin: 0;
    padding: 0;
  }

  &::part(expando) {
    background-color: carbon.$cool-gray-20;
  }
}
</style>
