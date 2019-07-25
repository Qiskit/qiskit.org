<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Button from '~/components/Button.vue'

@Component({ components: { Button } })
export default class extends Vue {
  @Prop(String) renderFn
  @Prop(String) staticRenderFns

  render(createElement) {
    return this.$data.templateRender ? this.$data.templateRender()
      : createElement('div', 'Rendering...')
  }

  created() {
    /* eslint no-new-func: "off" */
    this.$data.templateRender =
      (new Function(this.$props.renderFn)()).bind(this)
    this.$options.staticRenderFns = new Function(this.$props.staticRenderFns)()
  }
}
</script>
