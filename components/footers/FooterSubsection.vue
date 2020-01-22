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
import LinkList from '~/components/footers/LinkList.vue'

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
.footer-title {
  margin-top: 2rem;
  font-size: inherit;
  font-weight: normal;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--primary-color-lightmost);
}
</style>
