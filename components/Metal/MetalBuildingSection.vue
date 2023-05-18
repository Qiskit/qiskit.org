<template>
  <section class="building-section">
    <div class="building-section__container">
      <h2>Building together</h2>
      <p class="building-section__text">
        Whether you are learning, teaching, or performing scientific research,
        we hope Metal will get you there faster.
      </p>
      <div class="building-section__content">
        <div class="building-section__copy">
          <h3 class="building-section__subtitle">
            Call for community participation
          </h3>
          <p class="building-section__text">
            This may just be the beginning, but we think Qiskit Metal has
            immense potential. We hope to form this software into something that
            is usable by superconducting quantum hardware designers across
            industry and academia, and perhaps even for other qubit
            architectures. Over time, we hope this project will become the
            gateway for conventional microchip designers to get their feet wet
            designing quantum processors. And we hope that soon, quantum
            hardware experts will be able to write their own quantum analysis
            plugins and run them as their own Qiskit Metal backends.
          </p>
          <h3 class="building-section__subtitle">Open source</h3>
          <p class="building-section__text">
            Qiskit Metal is a visionary work in progress in its early
            development stages. We're working toward a vision—a quantum design
            and analysis platform built from the ground up specifically for
            quantum hardware. It is crucial that we keep this project open
            source in order to grow Qiskit Metal into the software that will be
            most useful for quantum hardware engineers around the world and for
            the innovation in and growth of the field as a whole. If Qiskit
            Metal doesn't have what you want, then you extend Metal to build it!
          </p>
          <h3 class="building-section__subtitle">Education</h3>
          <!-- Disabling linter to keep the quotations and phrasing content together. -->
          <!-- eslint-disable vue/multiline-html-element-content-newline -->
          <p class="building-section__text">
            Learn more about the physics behind Qiskit Metal and qubit design
            from the
            <UiLink
              url="/learn/summer-school/introduction-to-quantum-computing-and-quantum-hardware-2020"
              >Introduction to Quantum Computing and Quantum Hardware</UiLink
            >
            summer school lectures series by Zlatko Minev on superconducting
            qubits. Also, check out the open source
            <UiLink
              url="https://learn.qiskit.org/course/quantum-hardware-pulses/introduction-to-transmon-physics"
              >Qiskit textbook</UiLink
            >
            chapters on quantum devices and their control.
          </p>
          <UiCta
            :label="stayInTouchLink.label"
            :url="stayInTouchLink.url"
            theme="dark"
          />
          <!-- eslint-enable -->
        </div>
        <div class="building-section__media">
          <img
            class="building-section__media-img"
            src="/images/metal/whiteboard-dark.png"
            alt="Sketched illustration of a group standing in front of a whiteboard."
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stayInTouchLink = {
  url: "http://qisk.it/metal",
  label: "Join tutorials",
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.building-section {
  @include qiskit.responsive-grid-bg("/images/grid/grid-right-dark.svg", 36rem);

  background-position: right -1rem bottom -2px;
  background-repeat: no-repeat;
  padding-bottom: carbon.$spacing-10;

  @include carbon.breakpoint-down(lg) {
    background-position: right -0.5rem bottom -2px;
  }

  @include carbon.breakpoint-down(md) {
    padding-bottom: carbon.$spacing-07;
  }

  &__container {
    @include qiskit.contained;

    padding-top: carbon.$spacing-10;
  }

  &__subtitle {
    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-06;
    }
  }

  &__text {
    max-width: 7.5 * qiskit.$column-size-large;
    margin-bottom: carbon.$spacing-09;

    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-09;
    }

    @include carbon.breakpoint-between(md, lg) {
      max-width: 6 * qiskit.$column-size-medium;
    }

    @include carbon.breakpoint-down(md) {
      width: 100%;
      max-width: initial;
      margin-bottom: carbon.$spacing-06;
    }
  }

  &__content {
    display: flex;
  }

  &__copy {
    flex: 0 0 28rem;

    @include carbon.breakpoint-down(md) {
      flex: 1;
    }
  }

  &__media-img {
    @include carbon.breakpoint-down(lg) {
      display: none;
    }
  }
}
</style>
