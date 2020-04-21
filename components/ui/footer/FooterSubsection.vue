<template>
  <div>
    <h2 class="footer-title">
      {{ title }}
    </h2>
    <LinkList :elements="elements" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import LinkList from '~/components/ui/footer/LinkList.vue'

@Component({
  components: {
    LinkList
  }
})
export default class extends Vue {
  @Prop(String) title
  @Prop(Array) elements
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.footer-title {
  @include type-style('productive-heading-03');
  margin-top: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid $ui-03;
}
</style>
