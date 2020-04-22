<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component
export default abstract class extends QiskitPage {
  abstract title: string
  abstract description: string
}
</script>
