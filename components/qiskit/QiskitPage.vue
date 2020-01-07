<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import SegmentMixin from '~/mixins/segment-analytics'

@Component({
  mixins: [SegmentMixin]
})
export default class extends Vue { }
</script>
