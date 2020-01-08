<template>
  <footer>
    <div class="page-footer-container">
      <div class="page-footer page-footer--framed">
        <section class="footer-column">
          <FooterSubsection
            v-for="el in firstColumnElements"
            :key="el.title"
            :title="el.title"
            :elements="el.elements"
            :list-type="el.listType"
          />
        </section>
        <section class="footer-column">
          <FooterSubsection
            v-for="el in secondColumnElements"
            :key="el.title"
            :title="el.title"
            :elements="el.elements"
            :list-type="el.listType"
          />
        </section>
        <section class="footer-column">
          <FooterSubsection
            v-for="el in thirdColumnElements"
            :key="el.title"
            :title="el.title"
            :elements="el.elements"
            :list-type="el.listType"
          />
        </section>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import NuxtLinkList from '~/components/footers/NuxtLinkList.vue'
import ATagLinkList from '~/components/footers/ATagLinkList.vue'
import FooterSubsection from '~/components/footers/FooterSubsection.vue'

import {
  FOOTER,
  FooterSubsections
} from '~/constants/menuLinks'

@Component({
  components: {
    NuxtLinkList,
    ATagLinkList,
    FooterSubsection
  }
})
export default class extends Vue {
  firstColumnElements: Array<FooterSubsections> = FOOTER.firstColumn
  secondColumnElements: Array<FooterSubsections> = FOOTER.secondColumn
  thirdColumnElements: Array<FooterSubsections> = FOOTER.thirdColumn
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

  @include mq($until: desktop) {
    display: block;
  }
}

.footer-column {
  flex: 1;
  margin-right: 2rem;

  &:first-child {
    margin-top: 0;

    @include mq($until: desktop) {
      margin-top: 0;
    }
  }

  &:last-child {
    margin-right: 0;
  }

  @include mq($until: desktop) {
    margin-top: 2rem;
    margin-right: 0;
  }
}
</style>
