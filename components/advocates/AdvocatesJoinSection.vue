<template>
  <section class="bx--grid">
    <div class="bx--row">
      <article
        class="bx--col-lg-4 bx--col-md-4 join-section__feature join-section__intro"
      >
        <p>
          The Qiskit advocate program is a global program that provides support
          to the individuals who actively contribute to the Qiskit Community.
        </p>
        <UiAppCta
          v-bind="joinAction"
          is-wider
          :label="joinAction.label"
          :url="joinAction.url"
        />
      </article>
      <div
        v-for="benefit in advocateBenefits"
        :key="`benefit-${benefit.icon}`"
        class="bx--col-lg-4 bx--col-md-4 join-section__feature"
      >
        <CompactFeature v-bind="benefit" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CompactFeature from "~/components/ui/CompactFeature.vue";
import { GeneralLink } from "~/constants/appLinks";

type Benefit = Pick<CompactFeature, "icon" | "title" | "description">;

const advocateBenefits: Benefit[] = [
  {
    icon: "high-five.svg",
    title: "Network with experts and enthusiasts",
    description:
      "Advocates will be added to a group of quantum experts and will be a part of regular information sharing sessions.",
  },
  {
    icon: "global-network.svg",
    title: "Access to Qiskit core members and projects",
    description:
      "Advocates will receive special access to core members of the Qiskit team for questions and brainstorming ideas.",
  },
  {
    icon: "location.svg",
    title: "Invitation to events",
    description:
      "Active Qiskit Advocates will be invited to attend global events created for the quantum computing community.",
  },
];

const joinAction: GeneralLink = {
  url: "https://qisk.it/advocateapplication",
  label: "Join the program",
  segment: { cta: "join-the-program", location: "join-section" },
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@import "~carbon-components/scss/globals/scss/typography";

.join-section {
  &__feature {
    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-07;
    }

    @include carbon.breakpoint-up(md) {
      height: 14rem;
    }

    @include carbon.breakpoint-up(lg) {
      height: 16.5rem;
    }

    @include carbon.breakpoint-up(xlg) {
      height: 14rem;
    }
  }

  &__intro {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
