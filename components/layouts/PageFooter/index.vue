<template>
  <footer>
    <div class="page-footer-container">
      <div class="page-footer page-footer--framed">
        <FooterSection
          v-for="sectionElements in footerElements"
          :key="sectionElements.title"
          class="page-footer__section"
          :title="sectionElements.title"
          :elements="sectionElements.elements"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import FooterSection from './FooterSection.vue'

import { FOOTER_ELEMENTS } from '~/constants/menuLinks'

@Component({
  components: {
    FooterSection
  }
})
export default class extends Vue {
  footerElements = FOOTER_ELEMENTS
}
</script>

<style lang="scss" scoped>
.page-footer {
  display: flex;
  flex-direction: row;
  color: $text-02;
  padding-top: $spacing-09;
  padding-bottom: $spacing-09;

  &--framed {
    @include framed();
  }

  @include mq($until: medium) {
    display: block;
  }

  &__section {
    flex: 1;
    margin-right: $layout-03;

    &:last-child {
      margin-right: 0;
    }

    @include mq($until: medium) {
      margin-top: $layout-03;
      margin-right: 0;
    }
  }
}
</style>
