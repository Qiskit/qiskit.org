<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import SegmentMixin, { TrackedPage } from '~/mixins/segment-analytics'

@Component
export default abstract class extends Mixins(SegmentMixin) implements TrackedPage {
  abstract routeName: string;
}
</script>
