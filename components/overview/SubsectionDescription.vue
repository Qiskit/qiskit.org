<template>
  <article>
    <img :src="image">
    <p>{{ description }}</p>
    <AppCta :url="cta.url">
      {{ cta.label }}
    </AppCta>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AppCta from '~/components/ui/AppCta.vue'

@Component({
  components: { AppCta }
})
export default class extends Vue {
  @Prop(String) image
  @Prop(String) description
  @Prop(Object) cta
}
</script>

<style lang="scss">
</style>
