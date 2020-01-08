<template>
  <div>
    <h2 class="footer-column__title">
      {{ title }}
    </h2>
    <component
      :is="listType"
      :elements="elements"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import NuxtLinkList from '~/components/footers/NuxtLinkList.vue'
import ATagLinkList from '~/components/footers/ATagLinkList.vue'

@Component({
  components: {
    NuxtLinkList,
    ATagLinkList
  }
})
export default class extends Vue {
  @Prop(String) title
  @Prop(Array) elements
  @Prop(String) listType
}
</script>

<style lang="scss" scoped>
.footer-column {
  &__title {
    margin-top: 2rem;
    font-size: inherit;
    font-weight: normal;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--primary-color-lightmost);
  }
}
</style>
