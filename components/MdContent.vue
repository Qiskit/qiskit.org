<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) renderFn
  @Prop(String) staticRenderFns

  templateRender: Function | null = null

  render (createElement) {
    return this.templateRender ? this.templateRender() : createElement('div', 'Rendering...')
  }

  created () {
    /* eslint no-eval: "off" */
    this.templateRender = eval(this.$props.renderFn).bind(this)
    this.$options.staticRenderFns = eval(this.$props.staticRenderFns)
  }
}
</script>
