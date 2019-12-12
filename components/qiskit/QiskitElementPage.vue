<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {
  title: string = ''
  description: string = ''
}
</script>
