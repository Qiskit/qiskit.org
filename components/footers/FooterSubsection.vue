<template>
  <div>
    <h2 class="footer-title">
      {{ title }}
    </h2>
    <LinksList :elements="elements" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import LinksList from '~/components/footers/LinksList.vue'

@Component({
  components: {
    LinksList
  }
})
export default class extends Vue {
  @Prop(String) title
  @Prop(Array) elements
  @Prop(String) listType
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
