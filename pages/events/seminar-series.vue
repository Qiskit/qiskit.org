<template>
  <div>
    <!-- TODO: Add Seminar Series content -->
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import QiskitPage from "~/components/logic/QiskitPage.vue";

@Component({
  head() {
    return {
      title: "Qiskit Seminar Series",
    };
  },
})
export default class SeminarSeriesPage extends QiskitPage {
  routeName = "seminar-series";
}
</script>
