<template>
  <main>
    <TheMegaDropdownMenu />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import TheMegaDropdownMenu from '~/components/ui/TheMegaDropdownMenu.vue'
@Component({
  head () {
    return {
      title: 'Qiskit Textbook'
    }
  },
  components: {
    TheMegaDropdownMenu
  }
})
export default class TextbookPage extends QiskitPage {
  routeName: string = 'textbook-demo'
}
</script>
