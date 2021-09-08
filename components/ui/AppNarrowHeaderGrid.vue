<template>
  <svg
    class="app-narrow-header-grid"
    width="1860"
    height="898"
    viewBox="0 0 1860 898"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="app-narrow-header-grid__lines"
      stroke="#DDE1E6"
      d="M0 0h1860M0 64h1860M0 128h1860M0 192h1860M0 256h772M900 256h128M1092 256h128M1284 256h576M0
      320h580M644 320h64M772 320h64M900 320h64M1156 320h64M1348 320h512M452 384h128M772 384h64M516
      448h64M4 0v320M68 0v320M132 0v320M196 0v320M260 0v320M324 0v320M388 0v192M388 256v64M452
      0v384M516 0v448M580 0v320M580 384v64M644 0v320M708 0v320M772 0v256M772 320v64M836 0v192M836
      320v64M900 0v320M964 0v320M1028 0v256M1092 0v256M1156 0v320M1220 0v320M1284 0v256M1348 0v320M1412
      0v320M1476 0v320M1540 0v320M1604 0v320M1668 0v320M1732 0v320M1796 0v320M1860 0v320"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class AppNarrowHeaderGrid extends Vue {}
</script>

<style lang="scss" scoped>
.app-narrow-header-grid {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  z-index:-1;

  &__lines {
    stroke-dasharray: 2000;
    stroke-dashoffset: -2000;
    animation: draw-lines 3s;
    animation-fill-mode: forwards;
  }
}

@keyframes draw-lines{
  from {
    stroke-dashoffset: -2000;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
