<template>
  <div>Content goes here</div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import QiskitPage from "~/components/logic/QiskitPage.vue";

@Component({
  head() {
    return {
      title: "Photon",
    };
  },
})
export default class PhotonPage extends QiskitPage {
  routeName = "photon";
}
</script>
