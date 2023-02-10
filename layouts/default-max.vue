<template>
  <div>
    <qiskit-ui-shell v-if="isALearningPage" @on-click="onClick" />
    <qiskit-ui-shell v-else variant="hide-account" @on-click="onClick" />
    <div class="main-container">
      <nuxt />
    </div>
    <PageFooter theme="light" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import '@qiskit/web-components/components/ui-shell'

@Component
export default class MaxLayout extends Vue {
  const { trackClickEvent } = useSegment()

  onClick (e: CustomEvent) {
    this.trackClickEvent(`${e.detail?.label?.toLowerCase()}`, 'menu')
  }

  isALearningPage: boolean = this.$route.path.includes('/learn')
}
</script>

<style lang="scss" scoped>
.main-container {
  margin-top: 3.25rem;
}

qiskit-ui-shell {
  --header-content-max-width: 96rem;
}
</style>
