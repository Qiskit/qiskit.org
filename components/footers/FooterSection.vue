<template>
  <section class="footer-column">
    <FooterSubsection
      v-for="el in elements"
      :key="el.title"
      :title="el.title"
      :elements="el.elements"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import FooterSubsection from '~/components/footers/FooterSubsection.vue'

@Component({
  components: {
    FooterSubsection
  }
})
export default class extends Vue {
  @Prop(Array) elements
}
</script>

<style lang="scss" scoped>
.footer-column {
  flex: 1;
  margin-right: 2rem;

  &:first-child {
    margin-top: 0;

    @include mq($until: medium) {
      margin-top: 0;
    }
  }

  &:last-child {
    margin-right: 0;
  }

  @include mq($until: medium) {
    margin-top: 2rem;
    margin-right: 0;
  }
}
</style>
