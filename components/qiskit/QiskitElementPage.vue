<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/qiskit/QiskitPage.vue'

@Component
export default class extends QiskitPage {
  title: string = ''
  description: string = ''
}
</script>
