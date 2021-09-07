<template>
  <svg
    class="app-narrow-header-grid"
    width="1860"
    height="898"
    viewBox="0 0 1860 898"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">

    <!-- Horizontal lines -->
    <line x1="0" y1="0" x2="1860" y2="0" stroke="#DDE1E6" />
    <line x1="0" y1="64" x2="1860" y2="64" stroke="#DDE1E6" />
    <line x1="0" y1="128" x2="1860" y2="128" stroke="#DDE1E6" />
    <line x1="0" y1="192" x2="1860" y2="192" stroke="#DDE1E6" />
    <line x1="0" y1="256" x2="772" y2="256" stroke="#DDE1E6" />
    <line x1="900" y1="256" x2="1028" y2="256" stroke="#DDE1E6" />
    <line x1="1092" y1="256" x2="1220" y2="256" stroke="#DDE1E6" />
    <line x1="1284" y1="256" x2="1860" y2="256" stroke="#DDE1E6" />
    <line x1="0" y1="320" x2="580" y2="320" stroke="#DDE1E6" />
    <line x1="644" y1="320" x2="708" y2="320" stroke="#DDE1E6" />
    <line x1="772" y1="320" x2="836" y2="320" stroke="#DDE1E6" />
    <line x1="900" y1="320" x2="964" y2="320" stroke="#DDE1E6" />
    <line x1="1156" y1="320" x2="1220" y2="320" stroke="#DDE1E6" />
    <line x1="1348" y1="320" x2="1860" y2="320" stroke="#DDE1E6" />
    <line x1="452" y1="384" x2="580" y2="384" stroke="#DDE1E6" />
    <line x1="772" y1="384" x2="836" y2="384" stroke="#DDE1E6" />
    <line x1="516" y1="448" x2="580" y2="448" stroke="#DDE1E6" />

    <!-- Vertical lines -->
    <line x1="4" y1="0" x2="4" y2="320" stroke="#DDE1E6" />
    <line x1="68" y1="0" x2="68" y2="320" stroke="#DDE1E6" />
    <line x1="132" y1="0" x2="132" y2="320" stroke="#DDE1E6" />
    <line x1="196" y1="0" x2="196" y2="320" stroke="#DDE1E6" />
    <line x1="260" y1="0" x2="260" y2="320" stroke="#DDE1E6" />
    <line x1="324" y1="0" x2="324" y2="320" stroke="#DDE1E6" />
    <line x1="388" y1="0" x2="388" y2="192" stroke="#DDE1E6" />
    <line x1="388" y1="256" x2="388" y2="320" stroke="#DDE1E6" />
    <line x1="452" y1="0" x2="452" y2="384" stroke="#DDE1E6" />
    <line x1="516" y1="0" x2="516" y2="448" stroke="#DDE1E6" />
    <line x1="580" y1="0" x2="580" y2="320" stroke="#DDE1E6" />
    <line x1="580" y1="384" x2="580" y2="448" stroke="#DDE1E6" />
    <line x1="644" y1="0" x2="644" y2="320" stroke="#DDE1E6" />
    <line x1="708" y1="0" x2="708" y2="320" stroke="#DDE1E6" />
    <line x1="772" y1="0" x2="772" y2="256" stroke="#DDE1E6" />
    <line x1="772" y1="320" x2="772" y2="384" stroke="#DDE1E6" />
    <line x1="836" y1="0" x2="836" y2="192" stroke="#DDE1E6" />
    <line x1="836" y1="320" x2="836" y2="384" stroke="#DDE1E6" />
    <line x1="900" y1="0" x2="900" y2="320" stroke="#DDE1E6" />
    <line x1="964" y1="0" x2="964" y2="320" stroke="#DDE1E6" />
    <line x1="1028" y1="0" x2="1028" y2="256" stroke="#DDE1E6" />
    <line x1="1092" y1="0" x2="1092" y2="256" stroke="#DDE1E6" />
    <line x1="1156" y1="0" x2="1156" y2="320" stroke="#DDE1E6" />
    <line x1="1220" y1="0" x2="1220" y2="320" stroke="#DDE1E6" />
    <line x1="1284" y1="0" x2="1284" y2="256" stroke="#DDE1E6" />
    <line x1="1348" y1="0" x2="1348" y2="320" stroke="#DDE1E6" />
    <line x1="1412" y1="0" x2="1412" y2="320" stroke="#DDE1E6" />
    <line x1="1476" y1="0" x2="1476" y2="320" stroke="#DDE1E6" />
    <line x1="1540" y1="0" x2="1540" y2="320" stroke="#DDE1E6" />
    <line x1="1604" y1="0" x2="1604" y2="320" stroke="#DDE1E6" />
    <line x1="1668" y1="0" x2="1668" y2="320" stroke="#DDE1E6" />
    <line x1="1732" y1="0" x2="1732" y2="320" stroke="#DDE1E6" />
    <line x1="1796" y1="0" x2="1796" y2="320" stroke="#DDE1E6" />
    <line x1="1860" y1="0" x2="1860" y2="320" stroke="#DDE1E6" />
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
}
</style>
