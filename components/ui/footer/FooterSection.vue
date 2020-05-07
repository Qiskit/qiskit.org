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
import FooterSubsection from '~/components/ui/footer/FooterSubsection.vue'

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
  margin-right: $spacing-07;

  &:last-child {
    margin-right: 0;
  }

  @include mq($until: medium) {
    margin-top: $spacing-07;
    margin-right: 0;
  }
}
</style>
