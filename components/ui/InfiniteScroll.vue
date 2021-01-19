<template>
  <div>
    <div
      v-for="(item, index) in items.slice(0, lastShown)"
      :id="index + '-' + keyGenerator(item)"
      :key="keyGenerator(item)"
      class="scrollable"
    >
      <slot v-bind="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator'
import ScrollSectionsMixin from '~/mixins/scrollBetweenSections'

@Component
export default class InfiniteScroll extends Mixins(ScrollSectionsMixin) {
  @Prop({ type: Array, default: () => [] }) items!: any[]
  @Prop({ type: Function, default: () => {} }) keyGenerator!: Function
  @Prop({ type: Number, default: 5 }) minItems!: number

  lastShown: number = Math.min(this.minItems, this.items.length)

  @Watch('items')
  onItemsChanged (newItems: Array<any>) : void {
    this.lastShown = Math.min(this.minItems, newItems.length)
    this.$nextTick(() => this.updateObserved())
  }

  /**
   * This methods gets called when the active section changes.
   * Inherited from ScrollSectionsMixin
   */
  activeSectionChanged () : void {
    const current: number = this.activeSection ? parseInt(this.activeSection.split('-', 2)[0]) : 0
    const oldLastShown = this.lastShown
    this.lastShown = Math.max(Math.min(current + this.minItems, this.items.length), this.lastShown)
    if (oldLastShown < this.lastShown) {
      this.updateObserved()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
