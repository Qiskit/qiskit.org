<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import SegmentMixin from '~/mixins/segment-analytics'

@Component
export default class extends Mixins(SegmentMixin) { }
</script>
