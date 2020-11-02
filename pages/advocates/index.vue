<template>
  <div class="advocates-page">
    <ThePageHeader>
      Connect with the
      <TypewriterEffect
        :values="[
          'enthusiasts',
        ]"
      /><br>
      from within the Qiskit community
    </ThePageHeader>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import ThePageHeader from '~/components/ui/ThePageHeader.vue'
import TypewriterEffect from '~/components/ui/TypewriterEffect.vue'

@Component({
  components: {
    ThePageHeader,
    TypewriterEffect
  },

  head () {
    return {
      title: 'Qiskit Advocates'
    }
  }
})

export default class extends QiskitPage {
  routeName = 'advocates'
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';

.advocates-page {
  background-color: white;

  &__content-container {
    @include contained();
    display: flex;
    align-items: flex-start;
    overflow: visible;
    margin-bottom: $layout-05;

    @include mq($until: medium) {
      margin-bottom: 0;
    }
  }
}
</style>
