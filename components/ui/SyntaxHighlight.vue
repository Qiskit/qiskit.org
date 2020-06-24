<template>
  <div class="syntax-highlight">
    <cv-button
      size="small"
      title="Copy to clipboard"
      class="syntax-highlight__copy-button"
      :class="{ 'syntax-highlight__copy-button_legacy': legacy }"
      @click="copyToClipboard"
    >
      Copy
    </cv-button>
    <pre v-highlightjs="code"><code
    class="syntax-highlight__code"
    :class="[lang, { 'syntax-highlight__code_white-design': !legacy }]"
    /></pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String, default: 'python' }) lang!: string
  @Prop(String) label
  @Prop({ type: String, default: '' }) code!: string
  @Prop({ type: Boolean, default: false }) legacy

  copyToClipboard () {
    navigator.clipboard.writeText(this.code)
    this.$trackClickEvent({
      action: `${this.label}: Copy Code Sample`
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.syntax-highlight {
  position: relative;

  &__copy-button {
    position: absolute;
    right: 0;
    bottom: 0;
    border: none;
    text-transform: lowercase;
    background-color: $purple-70;
    padding: $spacing-03 $spacing-05;

    &_legacy {
      top: 0;
      bottom: auto;
      text-transform: uppercase;
    }

    &:hover {
      background-color: $interactive-01;
      color: white;
    }
  }

  &__code {
    @include type-style('code-02');
    padding: $spacing-07 $spacing-05 $spacing-05;

    &_white-design {
      background-color: $cool-gray-10;
      color: $gray-60;
      padding-top: $spacing-05;
      padding-left: $spacing-07;
      padding-bottom: $spacing-09 + $spacing-06;
    }
  }
}
</style>
