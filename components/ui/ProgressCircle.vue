<template>
  <div class="progress-circle">
    <div class="progress-circle__circle" r="10" p="0">
      <svg
        v-if="progress === 1"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8 0.125C3.66875 0.125 0.125 3.66875 0.125 8C0.125 12.3313 3.66875 15.875 8 15.875C12.3313 15.875 15.875 12.3313 15.875 8C15.875 3.66875 12.3313 0.125 8 0.125ZM6.875 11.0938L4.0625 8.28125L4.96249 7.4375L6.875 9.29374L11.0375 5.1875L11.9375 6.08749L6.875 11.0938Z"
          fill="#8a3ffc"
        />
      </svg>
      <svg
        v-else-if="progress > 0"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8 2V8L2 10.5L5.5 15L12.5 13.5L15.5 7L12 2H8Z"
          fill="#8a3ffc"
        />
        <circle cx="8" cy="8" r="7" stroke="#8a3ffc" stroke-width="2" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class ProgressCircle extends Vue {
  @Prop({ type: Number, required: true }) progress!: Number
}
</script>

<style lang="scss" scoped>
.progress-circle {
  display: inline-block;
  height: 20px;
  position: absolute;
  top: 5px;
  width: 20px;

  &__circle {
    border: 2px black solid;
    border-radius: 100%;
    box-sizing: border-box;
    display: inline-block;
    height: 20px;
    width: 20px;
  }
}
</style>
