<template>
  <footer>
    <p>Copyright IBM Corp. 2018-{{ currentYear }}</p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

const today = new Date()

@Component
export default class EventFooter extends Vue {
  currentYear = today.getFullYear()
}
</script>

<style lang="scss" scoped>
footer {
  color: $text-01;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 10rem;
  text-align: center;
  margin-top: 4rem;
  background-color: $ui-background;
}
</style>
