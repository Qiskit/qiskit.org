<template>
  <cv-accordion @change="actionChange" ref="acc" class="content-accordion">
    <cv-accordion-item :open="open[0]">
      <template slot="title">Section 1 title </template>
      <template slot="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </template>
    </cv-accordion-item>
    <cv-accordion-item :open="open[1]">
      <template slot="title">Section 2 title</template>
      <template slot="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </template>
    </cv-accordion-item>
    <cv-accordion-item :open="open[2]">
      <template slot="title">Section 3 title</template>
      <template slot="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </template>
    </cv-accordion-item>
    <cv-accordion-item :open="open[3]">
      <template slot="title">Section 4 title</template>
      <template slot="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </template>
    </cv-accordion-item>
  </cv-accordion>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {
  open = [true, false, false, false]

  actionChange () {

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
