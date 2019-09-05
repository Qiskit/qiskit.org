<template>
  <nuxt />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { MetaPropertyEquiv } from 'vue-meta'

@Component({
  head() {
    return {
      meta: [
        { hid: 'redirect', 'http-equiv': 'refresh', content: '0;URL=\'/education\'' } as unknown as MetaPropertyEquiv
      ]
    }
  }
})
export default class extends Vue { }
</script>
