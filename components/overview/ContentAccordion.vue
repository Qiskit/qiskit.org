<template>
  <cv-accordion class="content-accordion" @change="actionChange">
    <cv-accordion-item
      v-for="(element, index) in elements"
      :key="element.title"
      :open="index === expandedItem"
    >
      <template slot="title">
        {{ element.title }}
      </template>
      <template slot="content">
        <SubsectionDescription v-if="element.content.image" v-bind="element.content" />
        <p v-else>{{ element.content }}</p>
      </template>
    </cv-accordion-item>
  </cv-accordion>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import SubsectionDescription from '~/components/overview/SubsectionDescription.vue'

@Component({
  components: { SubsectionDescription }
})
export default class extends Vue {
  @Prop(Array) elements

  expandedItem = 0

  actionChange (ev: any) : void {
    this.expandedItem = ev.changedIndex
  }
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.content-accordion {
  & .bx--accordion__item {
    @include type-style('body-long-01');
    border-bottom: none;
    border-top-color: $gray-20;
  }

  & .bx--accordion__heading {
    height: 2.5rem;
    background-color: $cool-gray-20;

    &:hover::before {
      // To match default light theme UI hover, which is not among the Carbon
      // palette. 🤦
      background-color: #e5e5e5;
    }
  }

  & .bx--accordion__title {
    color: $gray-80;
    padding-left: $spacing-07;
    margin: 0;
  }

  & .bx--accordion__arrow {
    fill: $gray-80;
  }

  & button[aria-expanded="true"]{
    color: $white;
    background-color: $purple-70;

    &:hover::before {
      background-color: $purple-70;
    }
  }

  & button[aria-expanded="true"] > .bx--accordion__title{
    color: $white;
  }

  & button[aria-expanded="true"] > .bx--accordion__arrow{
    fill: $white;
  }

  & .bx--accordion__content {
    height: 30.5rem;
    padding: $spacing-06 $spacing-07;
    background-color: $cool-gray-10;
    color: $gray-80;
  }
}
</style>
