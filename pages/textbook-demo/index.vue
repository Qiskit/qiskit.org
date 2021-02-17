<template>
  <main>
    <!-- TODO: Add page content -->
  </main>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import QiskitPage from "~/components/logic/QiskitPage.vue";

@Component({
  head() {
    return {
      title: "Qiskit Textbook",
    };
  },
})
export default class TextbookPage extends QiskitPage {
  routeName: string = "textbook-demo";
}
</script>
