<template>
  <section class="accordion__section">
    <h2 class="copy__title" v-text="document.title" />
    <cv-accordion align="end">
      <nuxt-content :document="document" />
    </cv-accordion>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { IContentDocument } from '@nuxt/content/types/content'

@Component
export default class AccordionSection extends Vue {
  @Prop({ type: Object }) document!: IContentDocument

  @Watch('document', { immediate: true })
  onDocumentChange (val: IContentDocument) {
    val.body.children
      .filter((element:any) => element.tag === 'item')
      .forEach((element:any) => {
        element.tag = 'cv-accordion-item'
      })
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/layout/_copy.scss";

.accordion__section {
  ::v-deep {
    .bx--accordion__content {
      @extend .copy__paragraph;

      max-width: none;
      > p {
        margin-top: 1.43em;
      }
    }
  }
}
</style>
