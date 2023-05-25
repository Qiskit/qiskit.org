<template>
  <main class="advocates-page">
    <UiPageHeaderFixed>
      Connect with the<br />
      <UiTypewriterEffect
        :values="['enthusiasts', 'advocates', 'mentors', 'experts']"
      />
      from within<br />
      the Qiskit community
    </UiPageHeaderFixed>
    <AdvocatesJoinSection />
    <section class="cds--grid">
      <div class="advocates-page__tabs">
        <bx-tabs value="Advocates">
          <bx-tab id="tab-advocates" target="panel-advocates" value="Advocates">
            Advocates
          </bx-tab>
          <bx-tab id="tab-qamp" target="panel-qamp" value="QAMP"> QAMP </bx-tab>
        </bx-tabs>
      </div>
      <div
        id="panel-advocates"
        class="advocates-page__panel"
        aria-labelledby="Advocates"
        role="tabpanel"
        hidden
      >
        <AdvocatesMeetTheAdvocates />
      </div>
      <div
        id="panel-qamp"
        class="advocates-page__panel"
        aria-labelledby="QAMP"
        role="tabpanel"
        hidden
      >
        <AdvocatesQampProjects />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default-max",
  pageTitle: "Qiskit Advocates",
  routeName: "advocates",
});

useHead({
  title: "Qiskit Advocates",
  meta: [
    {
      name: "description",
      content:
        "The Qiskit advocate program is a global program that provides support to the individuals who actively contribute to the Qiskit Community.",
    },
  ],
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.advocates-page {
  padding-bottom: carbon.$spacing-07;

  &__panel {
    width: 100%;
  }

  &__tabs {
    margin-top: carbon.$spacing-10;
  }
}
</style>
