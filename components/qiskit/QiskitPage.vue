<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { segmentMixin } from '~/mixins/segment-mixin'

@Component({
  mixins: [segmentMixin]
})
export default class extends Vue { }
</script>
