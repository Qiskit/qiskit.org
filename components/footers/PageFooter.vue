<template>
  <footer>
    <div class="page-footer-container">
      <div class="page-footer page-footer--framed">
        <section class="footer-column">
          <FooterSubsection
            title="Qiskit Elements"
            :elements="qiskitElements"
            list-type="NuxtLinkList"
          />
        </section>
        <section class="footer-column">
          <FooterSubsection
            title="Qiskit for Educators"
            :elements="qiskitEducationList"
            list-type="ATagLinkList"
          />
          <FooterSubsection
            title="Qiskit Advocates"
            :elements="qiskitAdvocatesList"
            list-type="NuxtLinkList"
          />
          <FooterSubsection
            title="Qiskit Experiments"
            :elements="qiskitExperimentsList"
            list-type="NuxtLinkList"
          />
        </section>
        <section class="footer-column">
          <FooterSubsection
            title="Social Media"
            :elements="socialMediaList"
            list-type="ATagLinkList"
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
  ORDERED_QISKIT_ELEMENTS,
  ORDERED_SOCIAL_MEDIA,
  ORDERED_QISKIT_EDUCATION,
  ORDERED_QISKIT_ADVOCATES,
  ORDERED_QISKIT_EXPERIMENTS,
  NavLink
} from '~/constants/menuLinks'

@Component({
  components: {
    NuxtLinkList,
    ATagLinkList,
    FooterSubsection
  }
})
export default class extends Vue {
  qiskitElements: Array<NavLink> = ORDERED_QISKIT_ELEMENTS
  socialMediaList: Array<NavLink> = ORDERED_SOCIAL_MEDIA
  qiskitEducationList: Array<NavLink> = ORDERED_QISKIT_EDUCATION
  qiskitAdvocatesList: Array<NavLink> = ORDERED_QISKIT_ADVOCATES
  qiskitExperimentsList: Array<NavLink> = ORDERED_QISKIT_EXPERIMENTS
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
