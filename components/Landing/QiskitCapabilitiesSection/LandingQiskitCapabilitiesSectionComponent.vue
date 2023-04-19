<template>
  <article class="cds--grid page-section qiskit-capabilities-section">
    <h2>What Can Qiskit Do</h2>
    <div class="qiskit-capabilities-section__container">
      <div class="qiskit-capabilities-section__capabilities">
        <div class="qiskit-capabilities-section__content">
          <LandingQiskitCapabilityCard
            v-for="item in capabilities"
            :id="item.title"
            :key="item.title"
            class="qiskit-capabilities-section__card scrollable"
            :title="item.title"
            :description="item.description"
            :thumbnail-resource="item.thumbnailResource"
            :link="item.link"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/button/index.js";
import type { CtaClickedEventProp } from "~/types/segment";

interface QiskitCapability {
  title: string;
  description: string;
  thumbnailResource: string;
  link?: {
    url: string;
    label: string;
    segment: CtaClickedEventProp;
  };
  segment?: CtaClickedEventProp;
}

const { trackClickEvent } = useSegment();

const capabilities: QiskitCapability[] = [
  {
    title: "Circuit Library",
    description:
      "Qiskit includes a comprehensive set of quantum gates and a variety of pre-built circuits so users at all levels can use Qiskit for research and application development.",
    thumbnailResource: "/images/landing-page/feature-circuit.png",
    link: {
      url: "https://qiskit.org/documentation/apidoc/circuit_library.html",
      label: "Learn more",
      segment: { cta: "circuit-library", location: "homepage-capabilities" },
    },
  },
  {
    title: "Transpiler",
    description:
      "The transpiler translates Qiskit code into an optimized circuit using a backend’s native gate set, allowing users to program for any quantum processor or processor architecture with minimal inputs.",
    thumbnailResource: "/images/landing-page/transpiler.png",
    link: {
      url: "https://qiskit.org/documentation/apidoc/transpiler.html",
      label: "Learn more",
      segment: { cta: "transpiler", location: "homepage-capabilities" },
    },
  },
  {
    title: "Transpile to any hardware",
    description:
      "Qiskit helps users run and schedule quantum programs for a variety of local simulators and cloud-based quantum processors. It supports several quantum hardware designs, such as superconducting qubits and trapped ions.",
    thumbnailResource: "/images/library/chip-01.png",
    link: {
      url: "/providers",
      label: "Learn more",
      segment: { cta: "transpile-to-any-hardware", location: "homepage-capabilities" },
    },
  },
  {
    title: "Try it yourself",
    description:
      "Ready to explore Qiskit’s capabilities for yourself? Check out how to run Qiskit on the cloud or locally in your local Python environment.",
    thumbnailResource: "/images/landing-page/med_02_1.png",
    link: {
      url: "https://qiskit.org/documentation/getting_started.html",
      label: "Learn more",
      segment: { cta: "try-it-yourself", location: "homepage-capabilities" },
    },
  },
];
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

$cta-max-width: 14rem;

.qiskit-capabilities-section {
  padding-bottom: carbon.$spacing-09;

  &__container {
    padding-top: carbon.$spacing-05;
    padding-bottom: carbon.$spacing-09;

    @include carbon.breakpoint-down(md) {
      padding-bottom: carbon.$spacing-05;
    }
  }

  &__capabilities {
    display: flex;
    align-items: flex-start;

    @include carbon.breakpoint-down(md) {
      flex-direction: column;
    }
  }

  &__card {
    margin-bottom: carbon.$spacing-07;

    &:last-child {
      margin-bottom: carbon.$spacing-13;

      @include carbon.breakpoint-down(md) {
        margin-bottom: carbon.$spacing-07;
      }
    }
  }
}
</style>
