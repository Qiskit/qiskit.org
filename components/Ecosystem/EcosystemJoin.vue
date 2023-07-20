<template>
  <section class="cds--grid">
    <div class="cds--row">
      <article
        class="cds--col-lg-4 cds--col-md-4 ecosystem-join__feature ecosystem-join__intro"
      >
        <p>
          The Ecosystem consists of projects, tools, utilities, libraries and
          tutorials from a broad community of developers and researchers. The
          goal of the Ecosystem is to celebrate, support and accelerate
          development of quantum technologies using Qiskit.
        </p>
        <UiCta
          is-wider
          :label="EcosystemJoinLink.label"
          :segment="EcosystemJoinLink.segment"
          :url="EcosystemJoinLink.url"
        />
      </article>
      <div
        v-for="tier in tiers"
        :key="tier.name"
        class="cds--col-lg-4 cds--col-md-4 ecosystem-join__feature"
      >
        <UiCompactFeature
          :description="tier.description"
          :icon="tier.icon"
          :title="tier.name"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { EcosystemJoinLink } from "~/constants/links";

const tiers = [
  {
    name: "Main",
    description: "The main Qiskit packages maintained by IBM Quantum.",
    icon: "quantum.svg",
  },
  {
    name: "Extensions",
    description: "IBM Quantum supported Qiskit extensions.",
    icon: "transform--02.svg",
  },
  {
    name: "Community",
    description:
      "Software packages supported by the Qiskit community, not maintained by IBM Quantum.",
    icon: "group.svg",
  },
];
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.ecosystem-join {
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
