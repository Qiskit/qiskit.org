<template>
  <footer>
    <div class="page-footer-container">
      <div class="page-footer page-footer--framed">
        <FooterSection
          v-for="(columnElements, index) in footerElements"
          :key="index"
          :elements="columnElements"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import FooterSection from '~/components/footers/FooterSection.vue'

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
.page-footer-container {
  margin-top: 4rem;
  padding-bottom: 4rem;
}

.page-footer {
  display: flex;
  flex-direction: row;
  font-size: 0.9rem;
  color: var(--primary-color-lightmost);

  &--framed {
    @include framed();
  }

  @include mq($until: medium) {
    display: block;
  }
}
</style>
